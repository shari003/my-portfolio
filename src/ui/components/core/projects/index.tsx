'use client';
import React, { useState } from 'react'
import {Signika} from 'next/font/google'
import {motion} from "framer-motion";
import { Github, Globe } from 'lucide-react';
import ProjectCard from './project-card';

const signika = Signika({
    weight: '400',
    subsets: ['latin']
})

export default function Projects() {

    const projects = [
        {
            id: 'project-1',
            title: "Project 1",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.",
            image: "https://cdn.builtin.com/cdn-cgi/image/f=auto,fit=cover,w=1200,h=635,q=80/https://builtin.com/sites/www.builtin.com/files/2022-11/data-science-projects.jpg",
            skills: [
                "React",
                "Tailwind CSS",
                "Next.js"
            ],
            externals: [
                {
                    name: "Source",
                    url: "https://github.com",
                    icon: <Github size={14} />
                },
                {
                    name: "Website",
                    url: "https://github.com",
                    icon: <Globe size={14} />
                }
            ]
        },
        {
            id: 'project-2',
            title: "Project 2",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.",
            image: "https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg",
            skills: [
                "React",
                "Tailwind CSS",
                "Next.js"
            ],
            externals: [
                {
                    name: "Source",
                    url: "https://github.com",
                    icon: <Github size={14} />
                },
                {
                    name: "Website",
                    url: "https://github.com",
                    icon: <Globe size={14} />
                }
            ]
        },
        {
            id: 'project-3',
            title: "Project 3",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.",
            image: "https://plus.unsplash.com/premium_photo-1661290256778-3b821d52c514?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D",
            skills: [
                "React",
                "Tailwind CSS",
                "Next.js"
            ],
            externals: [
                {
                    name: "Source",
                    url: "https://github.com",
                    icon: <Github size={14} />
                },
                {
                    name: "Website",
                    url: "https://github.com",
                    icon: <Globe size={14} />
                }
            ]
        }
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;

    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const currentProjects = projects.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      );
    
      // Handle page navigation
      const handleNext = () => {
        if (currentPage < totalPages) {
          setCurrentPage((prev) => prev + 1);
        }
    };
    
      const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <section className='min-h-screen bg-black text-primary' id='projects'>
            <main className='pt-28 min-h-full max-w-7xl mx-auto px-12'>
                <div className='flex items-center justify-between gap-56'>
                    <p className={`${signika.className} text-2xl`}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non porro rerum enim placeat laborum, explicabo cum tempore ipsum magni soluta. Tempore ex minus, dolore necessitatibus ab debitis cupiditate quibusdam expedita quasi.
                    </p>
                    <button type='button' className='border-2 border-slate-500 px-9 py-10 rounded-full'>
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
                    <div className={`mt-4 w-full grid grid-cols-3 gap-4 ${signika.className}`}>
                        {currentProjects.map(project => (
                            <ProjectCard key={project.id} {...project} />
                        ))}
                    </div>
                </div>
            </main>
        </section>
    )
}
