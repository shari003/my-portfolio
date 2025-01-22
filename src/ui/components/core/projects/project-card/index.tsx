import { Github, Globe } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

type Props = {
    id: string;
    title: string;
    description: string[];
    image: string;
    skills: string[];
    externals: {
        name: string;
        url: string;
    }[];
}

export default function ProjectCard(project: Props) {
    
    return (
        <div key={project.id} className='rounded-lg'>
            <div className='overflow-hidden rounded-t-lg'>
                <Image src={project.image} alt={project.title} width={300} height={200} className='object-cover rounded-t-lg shadow-md h-[180px] w-full scale-100 hover:scale-105 transition-transform duration-300 ' />
            </div>
            <div className='px-3 pt-1 pb-3 text-white bg-black rounded-b-lg border-x border-b border-primary/20'>
                <h2 className='font-medium text-lg 2xl:text-xl'>{project.title}</h2>

                <ul className='text-sm text-primary/80 leading-3 overflow-hidden'>
                    {project.description.slice(0, 3).map((desc, index) => (
                        <li key={index} className='whitespace-nowrap overflow-auto scrollbar-hide text-sm 2xl:text-base text-primary/80 leading-4'>
                            {desc}
                        </li>
                    ))}
                </ul>
                <div className='mt-2 flex items-center gap-2'>
                    {project.skills.map(skill => (
                        <span key={skill} className='text-xs 2xl:text-sm bg-gray-800 text-white px-1 py-0.5 rounded-sm'>
                            {skill}   
                        </span>   
                    ))}
                </div>
                <div className='mt-2 flex items-center gap-2'>
                    {project.externals.map(external => (
                        <a key={external.name} href={external.url} className='text-xs 2xl:text-sm flex items-center gap-1 bg-black hover:bg-primary text-primary hover:text-black border border-primary/50 px-1 py-0.5 rounded-sm transition-colors duration-150' target="_blank" rel="noreferrer">
                            {external.name === "Source" ? (
                                <Globe size={16} />
                            ) : (
                                <Github size={16} />
                            )}
                            {external.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
