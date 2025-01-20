import sendEmail from '@/backend/utils/sendEmail';
import { Send, X } from 'lucide-react';
import { useState, FormEvent, useEffect } from 'react';

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
        <>
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-primary">
                    Contact
                </h3>
                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={onFormClose}>
                    <X size={20} />
                    <span className="sr-only">Close modal</span>
                </button>
            </div>

            <div className="p-4 md:p-5 space-y-4">
                <div className='grid grid-cols-2 gap-4'>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary">Name*</label>
                        <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300" value={fields.from_name} onChange={e => handleSetFields(e.target.value, 'FROM_NAME')} placeholder="What should I call you?" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary">Email*</label>
                        <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300" value={fields.from_email} onChange={e => handleSetFields(e.target.value, 'FROM_EMAIL')} placeholder="Where can I reach you?" required />
                    </div>
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary">Message*</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-gray-800 dark:border-gray-600 dark:text-gray-300" value={fields.message} onChange={e => handleSetFields(e.target.value, 'MESSAGE')} placeholder=". . . . ." required></textarea>
                </div>

                {error && (
                    <div>
                        <p className="text-red-500 text-sm">{error}</p>
                    </div>
                )}

                {success && (
                    <div>
                        <p className="text-green-500 text-sm">Email sent successfully!</p>
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <div>
                    <button type='button' onClick={handleMailRedirect} className='flex items-center gap-2 py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border border-primary/80 hover:bg-primary hover:text-black transition-colors duration-150'>
                        Mail me
                        <Send size={18} />
                    </button>
                </div>
                <div className='flex items-center gap-4'>
                    <button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 text-sm font-medium focus:outline-none rounded-lg border border-red-500 text-red-500 hover:bg-red-500 hover:text-primary transition-colors duration-150" onClick={onFormClose}>Cancel</button>
                    <button data-modal-hide="default-modal" type="button" onClick={handleFormSubmit} className="focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-primary bg-primary text-black hover:bg-transparent hover:text-primary transition-colors duration-150 disabled:cursor-not-allowed disabled:opacity-50" disabled={fields.from_name === "" || fields.from_email === "" || fields.message === ""}>
                        {isLoading ? 'Sending...' : 'Submit'}
                    </button>
                </div>
            </div>
        </>
    )
}
