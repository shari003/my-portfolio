import Image from 'next/image';
import React from 'react'

type Props = {
    id: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
    externals: {
        name: string;
        url: string;
        icon: React.ReactNode;
    }[];
}

export default function ProjectCard(project: Props) {

    
    return (
        <div key={project.id} className='rounded-lg'>
            <div>
                <Image src={project.image} alt={project.title} width={300} height={200} className='object-cover rounded-t-lg shadow-md h-[180px] w-full' />
            </div>
            <div className='px-3 pt-1 pb-3 text-white bg-black rounded-b-lg border-x border-b border-primary/20'>
                <h2 className='font-medium text-lg'>{project.title}</h2>
                <p className='line-clamp-3 text-sm text-primary/80 leading-4'>
                    {project.description}
                </p>
                <div className='mt-2 flex items-center gap-2'>
                    {project.skills.map(skill => (
                        <span key={skill} className='text-xs bg-gray-600 text-white px-1 py-0.5 rounded-sm'>
                            {skill}   
                        </span>   
                    ))}
                </div>
                <div className='mt-2 flex items-center gap-2'>
                    {project.externals.map(external => (
                        <a key={external.name} href={external.url} className='text-xs flex items-center gap-1 bg-white text-black px-1 py-0.5 rounded-sm'>
                            {external.icon}
                            {external.name}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
