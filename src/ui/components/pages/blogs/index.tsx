import Image from 'next/image'
import React from 'react'
import { Signika } from 'next/font/google'
import Link from 'next/link';

const blogs = [
    {
        id: 'blog-1',
        blog_meta: {
            title: "The ChatGPT Hype Is Over — Now Watch How Google Will Kill ChatGPT.",
            description: "It never happens instantly. The business game is longer than you know.",
            createdAt: "2022-01-01T00:00:00.000Z",
            updatedAt: "2022-01-01T00:00:00.000Z",
            author: {
                name: "Shri Hari",
                email: "shri.harii@hotmail.com"
            },
        },
        blog_content: {
            thumbnail: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*3FtLa-nHJB8KOb-Wu9bqbg.png",
            title: "The ChatGPT Hype Is Over — Now Watch How Google Will Kill ChatGPT.",
            description: "It never happens instantly. The business game is longer than you know.",
            content: `
                It’s happening. OpenAI’s losing the AI race.
                Remember those days when ChatGPT was everyone’s topic of conversation? Yes, you do.
                Remember those days when BeReal was everywhere? Yes, you do.
                Remember those days when Vine was the most trending app? Uh, maybe?
                What about when YikYak was everyone’s app? Yik-what?
                Go back to high school. There’s always that popular girl in school for a few years. Ten years later, you’ll probably say, “Gosh, I haven’t heard that name in years.”
            `
        },
        slug: "the-chatgpt-hype-is-over-now-watch-how-google-will-kill-chatgpt"
    },
];

const signika = Signika({
    weight: '400',
    subsets: ['latin']
})

export default function Blogs() {

    return (
        <main className='pt-24 min-h-screen'>
            <div className='grid grid-cols-3 items-stretch'>
                {[...blogs, ...blogs, ...blogs].map((blog, index) => (
                    <Link href={`/blog/${blog.slug}`} key={blog.id + index} className={`p-4 m-4 ${signika.className} shadow-md`}>
                        <div className='overflow-hidden rounded-t-lg'>
                            <Image src={blog.blog_content.thumbnail} alt={blog.blog_meta.title} width={300} height={200} className='object-cover rounded-t-lg shadow-md h-[180px] w-full scale-100 hover:scale-105 transition-transform duration-300 ' />
                        </div>
                        <div className='p-4 border-x border-b border-primary/20 rounded-b-md'>
                            <div>
                                <h3 className={`text-lg`}>{blog.blog_meta.title || blog.blog_content.title}</h3>
                                <p className='line-clamp-3 opacity-70'>{blog.blog_meta.description || blog.blog_content.description}</p>
                            </div>
                            <div className='mt-4 flex justify-end'>
                                <p className='text-xs'>
                                    {new Intl.DateTimeFormat('en-IN', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric'
                                    }).format(new Date(blog.blog_meta.createdAt))}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </main> 
    )
}
