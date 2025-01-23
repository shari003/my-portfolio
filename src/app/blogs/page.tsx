import getNavItems, { PageType } from '@/backend/actions/getNavItems';
import Navbar from '@/ui/components/core/navbar'
import Blogs from '@/ui/components/pages/blogs';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_HOST_URI ?? ""),
    title: "Blogs by Shri Hari",
    description: "Explore the blogs of K. Shri Hari, a passionate Software Engineer skilled in MERN stack, backend systems, and intuitive web applications. Discover projects, experience, and contact information.",
    keywords: ["K. Shri Hari", "Shri Hari", "Software Engineer", "Tutort", "Tutort Academy", "Software Developer", "MERN stack", "Next.js", "portfolio", "web developer", "projects", "backend systems", "frontend developer"],
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: "Blogs by Shri Hari",
        description: "Explore the blogs of K. Shri Hari, a passionate Software Engineer skilled in MERN stack, backend systems, and intuitive web applications. Discover projects, experience, and contact information.",
        type: "website",
        url: process.env.NEXT_PUBLIC_HOST_URI ?? "",
        images: {
            url: "/assets/og/og_image.png",
            width: 1200,
            height: 630,
            alt: "Blogs by Shri Hari",
        }
    },
    twitter: {
        title: "Blogs by Shri Hari",
        description: "Explore the blogs of K. Shri Hari, a passionate Software Engineer skilled in MERN stack, backend systems, and intuitive web applications. Discover projects, experience, and contact information.",
    },
    icons: {
        icon: "/favicon.ico",
        apple: "/favicon.ico",
        shortcut: "/favicon.ico",
    }
};

export default function Blog() {

    const tabs = getNavItems(PageType.BLOG);

    return (
        <section className='min-h-screen max-w-7xl mx-auto bg-black text-primary'>
            <Navbar show tabs={tabs} />
            <Blogs />
        </section>
    )
}
