import { ArrowUpRight, Github, Instagram, Linkedin } from 'lucide-react'
import React from 'react'
import { Teko } from 'next/font/google'
import Image from 'next/image'
import {motion} from 'framer-motion'

const teko = Teko({
    weight: '400',
    subsets: ['latin']
})

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
            icon: <Image src={'/assets/socials/x_logo.svg'} alt='x-corp-logo' height={20} width={20} />,
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
        <section className='min-h-screen bg-primary text-black' id='contact'>
            <main className='pt-28 min-h-full max-w-7xl mx-auto px-12'>
                <motion.div 
                    className='flex justify-between items-start border-b-2 border-black/50'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <div className='flex items-center'>
                        <ArrowUpRight size={250} />
                        <h3 className='uppercase text-6xl font-semibold'>
                            Let&apos;s Work 
                            <br />
                            Together
                        </h3>
                    </div>
                    <button type="button" className='mt-14 rounded-md text-lg border-2 border-black hover:bg-black hover:text-primary px-5 py-2 transition-colors duration-150 ease-out'>
                        SEND ME A MESSAGE
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <h2 className={`${teko.className} font-bold text-[12rem] text-center select-none`}>
                        SHRI HARI
                    </h2>
                </motion.div>

                <motion.div 
                    id='socials' 
                    className='flex justify-between items-center'
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false }}
                >
                    <p className='uppercase text-xs'>
                        Designed by <a href="https://dribbble.com/madebyaseif" target='_blank' className='underline underline-offset-2 font-semibold'>Muhammad Aseif</a> | Customized and Developed by <span className='font-semibold'>Shri Hari</span>.
                    </p>
                    <menu className='flex items-center gap-8'>
                        {socials.map((social, index) => (
                            <a key={index} href={social.url} target='_blank' className={`uppercase text-xs font-semibold border border-transparent p-1 rounded-md`}>
                                {social.icon}
                            </a>
                        ))}
                    </menu>
                </motion.div>
            </main>
        </section>
    )
}