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
                                <span className="md:text-[18em] text-7xl font-medium mb-2 inline-block">/</span>
                                <span className={`md:text-[18em] text-7xl tracking-tight font-bold inline-block ${teko.className}`}>ABOUT</span>
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
                            <p className='text-7xl'>ABOUT</p>
                            <p className='text-7xl -mt-8 opacity-80'>ABOUT</p>
                            <p className='text-7xl -mt-8 opacity-60'>ABOUT</p>
                            <p className='text-7xl -mt-8 opacity-40'>ABOUT</p>
                            <p className='text-7xl -mt-8 opacity-20'>ABOUT</p>
                            <p className='text-7xl -mt-8 opacity-10'>ABOUT</p>
                        </div>
                        <div className='col-span-4 flex flex-col gap-6'>
                            <p className={`${signika.className} text-left`}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo molestias explicabo vero similique hic. Nam accusamus temporibus rerum praesentium officiis incidunt libero nesciunt alias itaque corrupti provident aliquid eveniet a molestiae aut debitis illo maxime rem soluta, ducimus impedit magni. Porro provident doloremque, mollitia quidem deleniti, earum ad debitis perferendis soluta, saepe modi corrupti necessitatibus nihil explicabo! Eaque mollitia nesciunt voluptatem nemo numquam nulla consequatur accusantium facilis optio, molestiae at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque itaque officia qui autem molestias quo sint nostrum necessitatibus, dignissimos nam est repudiandae aut minus saepe accusamus nesciunt hic cumque similique blanditiis in consequatur aperiam facilis adipisci. Suscipit, alias a?
                            </p>
                            <p className={`text-sm uppercase`}>Currently working with <br className='md:hidden block' /><a href={"https://www.tutort.net?utm_source=shri+hari&utm_medium=shrihari.dev"} target='_blank' className='underline underline-offset-2 font-semibold'>Tutort Academy LLP</a> as a Software Developer</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
