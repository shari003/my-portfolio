import React from 'react';
import Image from 'next/image';

import { Github, Globe } from 'lucide-react';

type Props = {
    id: number;
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
        <div className="group flex flex-col h-full bg-[#0a0a0a] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#34d399]/30 hover:shadow-[0_8px_30px_rgba(52,211,153,0.15)] relative">
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden bg-white/5">
                {project.image ? (
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={300} height={200}
                        className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div className="w-full h-full bg-white/5 transform transition-transform duration-700 group-hover:scale-105" />
                )}
                {/* Gradient overlay to seamlessly blend image into the dark card background */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10" />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 pt-2 relative z-20">
                <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-[#34d399] transition-colors duration-300">
                    {project.title}
                </h3>

                <ul className="text-sm text-gray-400 mb-6 space-y-1.5 flex-grow">
                    {project.description.slice(0, 3).map((desc, index) => (
                        <li key={index} className="line-clamp-2 leading-relaxed">
                            {desc}
                        </li>
                    ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map(skill => (
                        <span key={skill} className="px-2.5 py-1 text-xs font-medium bg-white/[0.03] text-gray-300 border border-white/10 rounded-full">
                            {skill}
                        </span>
                    ))}
                </div>

                {/* Footer Links */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-4">
                    {project.externals.map(external => (
                        <a
                            key={external.name}
                            href={external.url}
                            className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-[#34d399] transition-colors duration-200"
                            target="_blank"
                            rel="noreferrer"
                        >
                            {external.name === "Source" || external.name === "Website" ? (
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

    return (
        <div key={project.id} className='rounded-lg group'>
            <div className='overflow-hidden rounded-t-lg'>
                {project.image ? (
                    <Image src={project.image} alt={project.title} width={300} height={200} className='object-cover rounded-t-lg shadow-md h-[180px] w-full scale-100 group-hover:scale-105 transition-transform duration-300' />
                ) : (
                    <div className='object-cover rounded-t-lg shadow-md h-[180px] w-full scale-100 hover:scale-105 transition-transform duration-300 bg-white/10' />
                )}
            </div>
            <div className='px-3 pt-1 pb-3 text-primary bg-black rounded-b-lg border-x border-b border-primary/20'>
                <h2 className='font-medium text-lg 2xl:text-xl'>{project.title}</h2>

                <ul className='text-sm text-primary/80 leading-3 overflow-hidden'>
                    {project.description.slice(0, 3).map((desc, index) => (
                        <li key={index} className='whitespace-nowrap overflow-auto scrollbar-hide text-sm 2xl:text-base text-primary/80 leading-4'>
                            {desc}
                        </li>
                    ))}
                </ul>
                <div className='mt-2 flex flex-wrap items-center gap-2'>
                    {project.skills.map(skill => (
                        <span key={skill} className='text-xs 2xl:text-sm bg-gray-800 text-primary px-1 py-0.5 rounded-sm'>
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
