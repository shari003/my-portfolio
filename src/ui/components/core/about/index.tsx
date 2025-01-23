import React from 'react'
import {Teko, Rubik_Glitch, Signika} from 'next/font/google'
import {motion} from "framer-motion";

const teko = Teko({
    weight: '400',
    subsets: ['latin']
})

const rubikGlitch = Rubik_Glitch({
    weight: '400',
    subsets: ['latin']
})

const signika = Signika({
    weight: '400',
    subsets: ['latin']
})

export default function About() {
    return (
        <section className='min-h-screen bg-black text-white' id='about'>
            <div className='md:pt-24 pt-32 min-h-full max-w-7xl mx-auto px-12'>
                <div className='flex flex-col'>
                    <motion.div 
                        className="md:flex justify-between items-center"
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >   
                        <div>
                            <h2 className="uppercase m-0 p-0">
                                <span className="text-7xl md:text-[18em] 2xl:text-[22em] font-medium mb-2 inline-block">/</span>
                                <span className={`md:text-[18em] text-7xl 2xl:text-[22em] tracking-tight font-bold inline-block ${teko.className}`}>ABOUT</span>
                            </h2>
                        </div>
                    </motion.div>
                    <motion.div 
                        className='md:grid grid-cols-6'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        <div className={`md:block hidden col-span-2 ${rubikGlitch.className}`}>
                            <p className='text-7xl 2xl:text-[5.5em]'>ABOUT</p>
                            <p className='text-7xl 2xl:text-[5.5em] -mt-8 opacity-80'>ABOUT</p>
                            <p className='text-7xl 2xl:text-[5.5em] -mt-8 opacity-60'>ABOUT</p>
                            <p className='text-7xl 2xl:text-[5.5em] -mt-8 opacity-40'>ABOUT</p>
                            <p className='text-7xl 2xl:text-[5.5em] -mt-8 opacity-20'>ABOUT</p>
                            <p className='text-7xl 2xl:text-[5.5em] -mt-8 opacity-10'>ABOUT</p>
                        </div>
                        <div className='col-span-4 flex flex-col gap-6 2xl:text-2xl'>
                            <p className={`${signika.className} text-left`}>
                                Hi,
                                <br />
                                I am K. Shri Hari, a passionate Software Engineer skilled in crafting intuitive web applications and scalable backend systems. With expertise in the MERN stack, TypeScript, and AWS, I thrive on building impactful solutions that drive user engagement and streamline processes.
                                <br />
                                In my current role, I’ve led the development of Tutort’s website and admin portal, integrated advanced features like a coding engine and contest modules, and created personalized mentor session tools to enhance user experiences. My prior experience includes building CRM systems with comprehensive functionality, showcasing my ability to manage both frontend and backend development seamlessly.
                                <br />
                                I’m always eager to explore emerging technologies and deliver solutions that align with strategic goals. Let’s connect and create something extraordinary!
                            </p>
                            <p className={`text-sm 2xl:text-xl uppercase`}>Currently working with <br className='md:hidden block' /><a href={`https://www.tutort.net?utm_source=shri+hari+portfolio&utm_medium=shri.is-a.dev`} target='_blank' className='underline underline-offset-2 font-semibold'>Tutort Academy LLP</a> as a Software Developer</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
