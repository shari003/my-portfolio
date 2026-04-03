import { useState, FormEvent, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { AlertCircle, CheckCircle2, Loader2, Send, X } from 'lucide-react';

import sendEmail from '@/backend/utils/sendEmail';

type Props = {
    onFormClose: () => void;
}

export default function ContactForm({ onFormClose }: Props) {

    const initialFields = {
        from_name: "",
        message: "",
        from_email: ""
    };

    const [fields, setFields] = useState(initialFields);

    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    function handleSetFields(value: string, field_for: 'FROM_NAME' | 'MESSAGE' | 'FROM_EMAIL') {
        switch(field_for) {
            case 'FROM_NAME':
                setFields(prev => ({...prev, from_name: value}));
                break;
                
            case 'MESSAGE':
                setFields(prev => ({...prev, message: value}));
                break;
                
            case 'FROM_EMAIL':
                setFields(prev => ({...prev, from_email: value}));
                break;

            default:
                break;
        }
    }
 
    function handleMailRedirect() {
        window.open("mailto:shri.harii@hotmail.com", "_blank");
        onFormClose();
    }

    async function handleFormSubmit(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault();

        console.log("Contact form submitted");

        try {

            if(!fields.from_name || !fields.from_email || !fields.message) {
                throw new Error('Please fill all the required fields.');
            } else {
                setError(null);
            }

            setIsLoading(true);
            const postSentMail = await sendEmail(fields);

            if (postSentMail) {
                console.log('Email sent successfully');
                console.log("postSentMail: ", postSentMail);

                setFields(initialFields);
                setSuccess(true);
                setError(null);

            } else {
                console.log("postSentMail: ", postSentMail);
                throw new Error('Failed to send email');
            }
            
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            setError(error?.message || 'Failed to send email');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        if(success) {
            const timer = setTimeout(() => {
                setSuccess(false);
                onFormClose();
            }, 2000);

            return () => clearTimeout(timer);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [success]);

    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col relative"
        >
            {/* Header */}
            <div className="flex items-center justify-between p-5 md:p-6 border-b border-white/10 bg-white/[0.02]">
                <h3 className="text-xl font-bold text-gray-100 tracking-wide">
                    Let&apos;s Connect
                </h3>
                <button 
                    type="button" 
                    onClick={onFormClose}
                    className="text-gray-500 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200 focus:outline-none"
                    aria-label="Close modal"
                >
                    <X size={20} />
                </button>
            </div>

            {/* Form Body */}
            <div className="p-5 md:p-6 space-y-6 relative">
                
                {/* Status Messages overlay */}
                <AnimatePresence>
                    {(success || error) && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginBottom: 24 }}
                            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                            className="overflow-hidden"
                        >
                            <div className={`flex items-center gap-3 p-4 rounded-xl border ${success ? 'bg-[#34d399]/10 border-[#34d399]/30 text-[#34d399]' : 'bg-red-500/10 border-red-500/30 text-red-400'}`}>
                                {success ? <CheckCircle2 size={20} className="shrink-0" /> : <AlertCircle size={20} className="shrink-0" />}
                                <p className="text-sm font-medium">
                                    {success ? "Message sent successfully! I'll get back to you soon." : error}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-gray-400">Name <span className="text-[#34d399]">*</span></label>
                        <input 
                            type="text" 
                            id="name" 
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#34d399]/50 focus:bg-white/[0.02] transition-all duration-300" 
                            style={{ boxShadow: 'focus:0 0 0 1px rgba(52,211,153,0.3)' }}
                            value={fields.from_name} 
                            onChange={e => handleSetFields(e.target.value, 'FROM_NAME')} 
                            placeholder="What should I call you?" 
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-gray-400">Email <span className="text-[#34d399]">*</span></label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#34d399]/50 focus:bg-white/[0.02] transition-all duration-300" 
                            value={fields.from_email} 
                            onChange={e => handleSetFields(e.target.value, 'FROM_EMAIL')} 
                            placeholder="Where can I reach you?" 
                            required 
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-gray-400">Message <span className="text-[#34d399]">*</span></label>
                    <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3.5 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-[#34d399]/50 focus:bg-white/[0.02] transition-all duration-300 resize-none" 
                        value={fields.message} 
                        onChange={e => handleSetFields(e.target.value, 'MESSAGE')} 
                        placeholder="Tell me about your project..." 
                        required
                    />
                </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-4 p-5 md:p-6 border-t border-white/10 bg-white/[0.01]">
                <button 
                    type="button" 
                    onClick={handleMailRedirect} 
                    className="w-full sm:w-auto flex justify-center items-center gap-2 py-2.5 px-5 text-sm font-semibold tracking-wider text-gray-400 bg-white/[0.03] border border-white/10 hover:border-[#34d399]/30 hover:bg-[#34d399]/10 hover:text-white rounded-full transition-all duration-300"
                >
                    <Send size={16} className="text-gray-500 group-hover:text-[#34d399]" />
                    MAIL ME INSTEAD
                </button>
                
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button 
                        type="button" 
                        onClick={onFormClose}
                        className="py-2.5 px-5 text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-200"
                    >
                        Cancel
                    </button>
                    <button 
                        type="button" 
                        onClick={handleFormSubmit} 
                        disabled={!fields.from_name || !fields.from_email || !fields.message || isLoading}
                        className="relative flex justify-center items-center gap-2 font-bold tracking-widest rounded-full text-sm px-8 py-3 bg-[#34d399]/10 text-[#34d399] border border-[#34d399]/30 hover:bg-[#34d399]/20 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                    >
                        {isLoading ? (
                            <>
                                <Loader2 size={18} className="animate-spin" />
                                SENDING...
                            </>
                        ) : 'SUBMIT'}
                    </button>
                </div>
            </div>
        </motion.div>
    )
}
