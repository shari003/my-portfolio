import React from 'react'
import {Teko} from 'next/font/google'
import Link from 'next/link'

const teko = Teko({
    weight: '400',
    subsets: ['latin']
})

export default function About() {
    return (
        <section className='min-h-screen bg-slate-900 text-white' id='about'>
            <div className='pt-24 min-h-screen max-w-7xl mx-auto px-12'>
                <div className='flex flex-col'>
                    <div className="-mt-12">
                        <h2 className="uppercase m-0 p-0">
                            <span className="text-[18em] font-medium mb-2 inline-block">/</span>
                            <span className={`text-[18em] tracking-tight font-bold inline-block ${teko.className}`}>ABOUT</span>
                        </h2>
                    </div>
                    <div className='-mt-20 grid grid-cols-6'>
                        <div className='col-span-2'>

                        </div>
                        <div className='col-span-4 flex flex-col gap-6'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium nemo molestias explicabo vero similique hic. Nam accusamus temporibus rerum praesentium officiis incidunt libero nesciunt alias itaque corrupti provident aliquid eveniet a molestiae aut debitis illo maxime rem soluta, ducimus impedit magni. Porro provident doloremque, mollitia quidem deleniti, earum ad debitis perferendis soluta, saepe modi corrupti necessitatibus nihil explicabo! Eaque mollitia nesciunt voluptatem nemo numquam nulla consequatur accusantium facilis optio, molestiae at. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores doloremque itaque officia qui autem molestias quo sint nostrum necessitatibus, dignissimos nam est repudiandae aut minus saepe accusamus nesciunt hic cumque similique blanditiis in consequatur aperiam facilis adipisci. Suscipit, alias a?
                            </p>
                            <p className='text-xs uppercase'>Currently working with <Link href={"https://www.tutort.net?utm_source=shri+hari&utm_medium=shrihari.dev"} target='_blank' className='underline underline-offset-2 font-semibold'>Tutort Academy LLP</Link> as a Software Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
