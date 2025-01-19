import React from 'react';
import {Signika} from 'next/font/google';
import ProjectCard from './project-card';
import getProjects from '@/backend/actions/getProjects';

const signika = Signika({
    weight: '400',
    subsets: ['latin']
})

export default function Projects() {

    const projects = getProjects();

    return (
        <section className='min-h-screen bg-black text-primary' id='projects'>
            <main className='pt-28 min-h-full max-w-7xl mx-auto md:px-12 px-8'>
                <div className='flex items-center justify-between gap-56'>
                    <p className={`${signika.className} md:text-2xl`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.
                    </p>
                    <button type='button' className='hidden md:block border-2 border-slate-500 px-9 py-10 rounded-full'>
                        <span className='font-semibold'>
                            GET IN TOUCH
                        </span>
                    </button>
                </div>
                <div className='mt-8'>
                    <div className='flex justify-between items-center'>
                        <p className={`${signika.className} uppercase text-primary`}>
                            My Projects
                        </p>
                        
                    </div>
                    <div className={`mt-4 pb-8 md:pb-0 w-full flex flex-col md:grid grid-cols-3 gap-4 ${signika.className}`}>
                        {projects.map(project => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </main>
        </section>
    )
}
