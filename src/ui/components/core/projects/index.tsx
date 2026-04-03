import React from 'react';
import { Signika } from 'next/font/google';
import { motion, Variants } from "motion/react";

import getProjects from '@/backend/actions/getProjects';

import ProjectCard from '@/ui/components/core/projects/project-card';
import FormTrigger from '@/ui/components/shared/form-trigger';

const signika = Signika({
    weight: '400',
    subsets: ['latin']
})

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function Projects() {

    const projects = getProjects();

    return (
        <section 
            className="relative min-h-screen bg-black text-primary overflow-hidden" 
            id="projects"
        >
            {/* Ambient Background Glow using the specific allowed color */}
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none -z-10"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(52,211,153,0.15) 0%, transparent 70%)',
                    filter: 'blur(60px)'
                }}
            />

            <main className="relative pt-32 pb-24 min-h-full max-w-7xl mx-auto md:px-12 px-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 lg:gap-40">
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className={`${signika.className} text-gray-300 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl`}
                    >
                        I love transforming ideas into impactful projects, combining creativity with technology to deliver exceptional solutions. 
                        Whether it&apos;s building intuitive web applications, solving real-world problems, or experimenting with cutting-edge tools, 
                        I&apos;m always up for a <span className="text-white font-semibold">challenge.</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:block shrink-0"
                    >
                        <FormTrigger 
                            triggerTemplate={
                                <button 
                                    type="button" 
                                    className="group relative flex items-center justify-center w-36 h-36 border border-slate-700 rounded-full bg-black/50 backdrop-blur-sm transition-all duration-300 ease-out hover:border-[#34d399] hover:bg-[#34d399]/5"
                                    style={{
                                        // Adds the requested color as a subtle shadow on hover (handled via group-hover in Tailwind)
                                    }}
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" 
                                         style={{ boxShadow: '0 0 30px rgba(52,211,153,0.3) inset' }} 
                                    />
                                    <span className={`${signika.className} text-sm tracking-widest font-semibold text-gray-300 group-hover:text-white transition-colors`}>
                                        GET IN<br/>TOUCH
                                    </span>
                                </button>
                            }
                        />
                    </motion.div>
                </div>

                {/* Projects Grid Section */}
                <div className="mt-24 md:mt-32">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex justify-between items-center mb-10 border-b border-slate-800 pb-4"
                    >
                        <h2 className={`${signika.className} tracking-widest uppercase text-gray-400 text-sm md:text-base font-semibold`}>
                            Selected Projects
                        </h2>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className={`w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ${signika.className}`}
                    >
                        {projects.map(project => (
                            <motion.div 
                                key={project.id} 
                                variants={itemVariants}
                                className="group h-full"
                            >
                                {/* Wrapper to handle potential hover effects on cards without altering the ProjectCard internals heavily */}
                                <div className="h-full rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(52,211,153,0.1)] border border-transparent hover:border-[#34d399]/20">
                                    <ProjectCard {...project} />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </main>
        </section>
    )

    return (
        <section className='min-h-screen bg-black text-primary' id='projects'>
            <main className='pt-28 min-h-full max-w-7xl mx-auto md:px-12 px-8'>
                <div className='flex items-center justify-between gap-56'>
                    <p className={`${signika.className} md:text-2xl 2xl:text-3xl`}>
                        I love transforming ideas into impactful projects, combining creativity with technology to deliver exceptional solutions. Whether it&apos;s building intuitive web applications, solving real-world problems, or experimenting with cutting-edge tools, I&apos;m always up for a challenge.
                    </p>
                    <FormTrigger 
                        triggerTemplate={
                            <button type='button' className='hidden md:block border-2 border-slate-500 hover:bg-primary hover:text-black transition-colors duration-150 ease-in-out px-9 py-10 rounded-full'>
                                <span className='font-semibold'>
                                    GET IN TOUCH
                                </span>
                            </button>
                        }
                        additionalClasses='hidden md:block'
                    />
                </div>
                <div className='mt-8'>
                    <div className='flex justify-between items-center'>
                        <p className={`${signika.className} uppercase text-primary 2xl:text-xl`}>
                            My Projects
                        </p>
                        
                    </div>
                    <div className={`mt-4 pb-8 md:pb-0 2xl:pb-8 w-full flex flex-col md:grid grid-cols-3 2xl:grid-cols-2 gap-4 ${signika.className}`}>
                        {projects.map(project => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </main>
        </section>
    )
}
