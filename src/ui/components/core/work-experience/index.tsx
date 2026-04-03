import React from 'react'
import { Signika } from "next/font/google"
import { ExternalLink } from 'lucide-react'
import { motion, Variants } from 'motion/react'

import getWorkExperience from '@/backend/actions/getWorkExperience'

const signika = Signika({
    weight: "400",
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function WorkExperience() {

    const experience = getWorkExperience();

    return (
        <section className="relative min-h-screen bg-black text-gray-300 overflow-hidden" id="work-experience">
            
            {/* Ambient Background Glow matching the Projects section */}
            <div 
                className="absolute top-1/4 right-0 translate-x-1/4 w-[600px] h-[600px] pointer-events-none -z-10"
                style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(52,211,153,0.08) 0%, transparent 70%)',
                    filter: 'blur(80px)'
                }}
            />

            <main className="relative pt-28 pb-16 min-h-full max-w-5xl mx-auto md:px-12 px-8">

                {/* Header Section */}
                <div className="mb-16 flex flex-col md:flex-row md:justify-between md:items-end gap-6 border-b border-white/5 pb-6">
                    <motion.h2 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`${signika.className} flex items-center gap-3 uppercase tracking-widest text-xl md:text-2xl text-gray-200 font-semibold`}
                    >
                        <span>Professional Experience</span>
                        <span className="text-[#34d399]/40 font-light">{"///"}</span>
                    </motion.h2>
                    
                    <motion.a 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        href={process.env.NEXT_PUBLIC_MY_RESUME ?? ""} 
                        target="_blank" 
                        rel="noreferrer" 
                        className={`group flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.02] hover:border-[#34d399]/30 hover:bg-[#34d399]/5 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)] transition-all duration-300 w-fit`}
                    >
                        <span className={`${signika.className} text-xs font-bold tracking-widest text-gray-400 group-hover:text-white transition-colors`}>
                            MY RESUME
                        </span>
                        <ExternalLink size={16} className="text-gray-500 group-hover:text-[#34d399] transition-colors" />
                    </motion.a>
                </div>

                {/* Timeline Section */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative border-l border-white/10 ml-3 md:ml-4"
                >
                    {experience.map((exp) => (
                        <motion.div 
                            variants={itemVariants}
                            className="mb-16 ml-8 md:ml-12 relative group" 
                            key={exp.id}
                        >
                            {/* Custom Animated Timeline Dot */}
                            <span className="absolute -left-[39.5px] md:-left-[55.5px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-black border-2 border-white/20 group-hover:border-[#34d399] transition-colors duration-500">
                                <span className="h-1.5 w-1.5 rounded-full bg-transparent group-hover:bg-[#34d399] transition-colors duration-500" />
                            </span>

                            {/* Experience Metadata */}
                            <div className="flex flex-col gap-1.5 mb-4">
                                <time className="text-xs font-bold tracking-widest uppercase text-gray-500 mb-1">
                                    {exp.duration}
                                </time>
                                <h3 className="text-xl md:text-2xl font-bold text-gray-100 group-hover:text-[#34d399] transition-colors duration-300">
                                    {exp.title}
                                </h3>
                                
                                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400 mt-1">
                                    <a href={exp.company.url} className="text-gray-300 font-medium hover:text-white transition-colors underline-offset-4 hover:underline" target="_blank" rel="noreferrer">
                                        {exp.company.title}
                                    </a>
                                    <span className="text-white/20">•</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>

                            {/* Products / Projects Linked */}
                            {exp.product && exp.product.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-5">
                                    {exp.product.map((product) => (
                                        <a 
                                            key={product.name + "_" + product.id} 
                                            href={product.url} 
                                            className="px-3 py-1 text-xs font-medium bg-white/[0.03] text-gray-400 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-colors" 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            {product.name}
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Description List */}
                            <ul className="space-y-3 text-sm md:text-base text-gray-400 leading-relaxed">
                                {exp.description?.map((desc, index) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-[#34d399]/50 mt-1.5 text-[10px]">♦</span>
                                        <span>{desc}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </main>
        </section>
    )

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
                            <p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                                {exp.product.map((product) => (
                                    <a key={product.name + "_" + product.id} href={product.url} className='hover:underline underline-offset-2' target="_blank" rel="noreferrer">{product.name}</a>
                                ))}
                            </p>
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
