import getWorkExperience from '@/backend/actions/getWorkExperience'
import React from 'react'
import {Signika} from "next/font/google"
import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

const signika = Signika({
    weight: "400",
    subsets: ['latin']
})

export default function WorkExperience() {

    const experience = getWorkExperience();

    return (
        <section className='min-h-screen bg-black text-primary' id='work-experience'>
            <main className='pt-28 pb-16 min-h-full max-w-7xl mx-auto md:px-12 px-8'>

                <div className='mb-6 flex md:justify-between md:flex-row flex-col md:items-center md:gap-0 gap-2'>
                    <h2 className={`${signika.className} flex gap-2 uppercase`}>
                        <span className='opacity-80'>Professional Experience</span>
                        <span className='opacity-95'>{"///"}</span>
                    </h2>
                    <a href={process.env.NEXT_PUBLIC_MY_RESUME ?? ""} target="_blank" rel="noreferrer" className={`${signika.className} text-xs flex items-center gap-2 border p-2 rounded hover:bg-primary hover:text-black transition-colors duration-300 w-fit`}>
                        <span className='font-semibold tracking-widest'>
                            MY RESUME
                        </span>
                        <ExternalLink size={16} />
                    </a>
                </div>

                <ol className="relative border-s border-gray-200 dark:border-gray-700">

                    {experience.map((exp) => (
                        <li 
                            className="mb-10 ms-4" 
                            key={exp.id}
                        >
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-primary">{exp.duration}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                            <h4>
                                <a href={exp.company.url} className='hover:underline underline-offset-2' target="_blank" rel="noreferrer">{exp.company.title}</a>, {exp.location}
                            </h4>
                            <motion.ul 
                                className='pt-2 mb-4 text-base font-normal text-gray-500 dark:text-gray-400'
                                initial={{ opacity: 0, y: 5 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: false }}
                            >
                                {exp.description?.map((desc, index) => (
                                    <li key={index} className='list-disc ml-4'>
                                        {desc}
                                    </li>
                                ))}
                            </motion.ul>
                        </li>
                    ))}
                </ol>
            </main>
        </section>
    )
}
