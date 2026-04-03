import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import { Teko } from 'next/font/google'
import Image from 'next/image'
import { motion, Variants } from 'motion/react'

import FormTrigger from '@/ui/components/shared/form-trigger'

const teko = Teko({
    weight: '400',
    subsets: ['latin']
})

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 }, // Changed from x: -20 to y: 30 for vertical upward flow
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export default function ContactMe() {

    const socials = [
        {
            name: 'Github',
            url: 'https://github.com/shari003',
            icon: <Github size={20} />,
            hoverClasses: 'hover:border-black hover:bg-black hover:text-white hover:fill-white'
        },
        {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/shari003/',
            icon: <Linkedin size={20} />,
            hoverClasses: 'hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:fill-white'
        },
        {
            name: 'X',
            url: 'https://x.com/nolimitshri',
            icon: <Image id='x_handle' src={'/assets/socials/x_logo.svg'} alt='x-corp-logo' height={20} width={20} />,
            hoverClasses: 'hover:border-black hover:text-white hover:fill-white'
        },
        {
            name: 'Instagram',
            url: 'https://www.instagram.com/shari.003/',
            icon: <Instagram size={20} />,
            hoverClasses: 'hover:bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]'
        }
    ]

    return (
        <section className="relative min-h-screen bg-black text-gray-200 overflow-hidden flex flex-col" id="contact">
            
            {/* Ambient Background Glow matching previous sections, positioned at the bottom */}
            <div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none -z-10"
                style={{
                    background: 'radial-gradient(ellipse at bottom, rgba(52,211,153,0.3) 0%, transparent 70%)',
                    filter: 'blur(90px)'
                }}
            />

            <main className="relative pt-32 pb-8 flex-grow flex flex-col max-w-7xl mx-auto px-8 md:px-12 w-full">
                
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex-grow flex flex-col"
                >
                    {/* Top Header Section */}
                    <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:justify-between md:items-center gap-12 border-b border-white/10 pb-12">
                        <div className="flex items-center justify-center md:justify-normal gap-6">
                            <ArrowUpRight size={80} className="hidden md:block text-[#34d399]/40 stroke-[1]" />
                            <h3 className="uppercase text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1.1]">
                                Let&apos;s Work<br />
                                <span className="text-[#34d399]">Together.</span>
                            </h3>
                        </div>

                        <FormTrigger 
                            triggerTemplate={
                                <button 
                                    type="button" 
                                    className="group relative flex items-center justify-center px-8 py-4 bg-white/[0.05] border border-white/20 rounded-full transition-all duration-300 ease-out hover:border-[#34d399]/60 hover:bg-[#34d399]/20"
                                >
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                                         style={{ boxShadow: '0 0 30px rgba(52,211,153,0.3) inset' }} 
                                    />
                                    <span className="text-sm font-bold tracking-widest text-white transition-colors relative z-10">
                                        SEND ME A MESSAGE
                                    </span>
                                </button>
                            }

                            additionalClasses='flex items-center justify-center'
                        />
                    </motion.div>

                    {/* Massive Background Name Section */}
                    <motion.div variants={itemVariants} className="flex-grow flex justify-center items-center py-20 relative">
                        <h2 
                            className={`${teko.className} font-bold text-7xl md:text-[12rem] lg:text-[16rem] text-center select-none leading-none`}
                            style={{ 
                                color: 'transparent', 
                                WebkitTextStroke: '2px rgba(255,255,255,0.15)',
                                textShadow: '0 0 60px rgba(52,211,153,0.15)'
                            }}
                        >
                            SHRI <br className="md:hidden block" />HARI
                        </h2>
                    </motion.div>

                    {/* Footer / Socials Section */}
                    <motion.div variants={itemVariants} id="socials" className="flex flex-col md:flex-row justify-between items-center gap-6 pt-6 border-t border-white/10">
                        <p className="text-xs text-gray-400 uppercase tracking-wider text-center md:text-left leading-relaxed">
                            Designed & Developed by <span className="text-gray-200 font-semibold">Shri Hari</span>
                        </p>

                        <menu className="flex items-center gap-6">
                            {socials.map((social, index) => (
                                <a 
                                    key={index} 
                                    href={social.url} 
                                    title={social.name} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="p-2.5 rounded-full bg-white/[0.05] border border-white/10 text-gray-300 hover:text-white hover:bg-[#34d399]/20 hover:border-[#34d399]/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)] transition-all duration-300 hover:-translate-y-1"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </menu>
                    </motion.div>

                </motion.div>
            </main>
        </section>
    )
}