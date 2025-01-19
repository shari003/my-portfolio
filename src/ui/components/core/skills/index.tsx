import React from 'react'
import {Signika} from "next/font/google"
import getSkills from '@/backend/actions/getSkills'
import Image from 'next/image';

const signika = Signika({
    weight: "400",
    subsets: ['latin']
})

export default function Skills() {

    const skills = getSkills();

    return (
        <section className='min-h-screen bg-black text-primary' id='skills'>
            <main className='pt-40 max-w-7xl mx-auto px-12'>
                <div>
                    <h2 className={`${signika.className} flex gap-2 uppercase`}>
                        <span className='opacity-80'>Professional</span>
                        <span className='opacity-95'>{"///"}</span>
                        {/* <span className='opacity-90'>MY KNOWLEDGE LEVEL IN SOFTWARE</span> */}
                    </h2>
                </div>

                <div className='overflow-hidden flex'>
                    <ul className='w-[200%] py-4 flex gap-10 place-items-center select-none animate-infinite-scroll'>
                        {[...skills, ...skills].map((skill) => (
                            <li key={skill.id} className='p-2'>
                                <Image title={skill.name} src={skill.iconPath} alt={skill.name} height={50} width={50} className={`${skill.additionalClasses ? "invert" : ""} max-w-none`} />
                            </li>
                        ))}
                    </ul>
                </div>
                
            </main>
        </section>
    )
}
