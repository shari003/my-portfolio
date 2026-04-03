"use client";

import React, { useState, useEffect } from 'react'

import getNavItems, { PageType } from '@/backend/actions/getNavItems';

import BlackScreen from '@/ui/components/core/black-screen'
import Navbar from '@/ui/components/core/navbar';
import Hero from '@/ui/components/core/hero';
import About from '@/ui/components/core/about';
import Projects from '@/ui/components/core/projects';
import ContactMe from '@/ui/components/core/contact-me';
import WorkExperience from '@/ui/components/core/work-experience';

export default function Home() {

    const [showBlackScreen, setShowBlackScreen] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false);

    const tabs = getNavItems(PageType.MAIN);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowBlackScreen(false);
            setShowNavbar(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='relative bg-slate-200'>
            <BlackScreen show={showBlackScreen} />
            <Navbar show={showNavbar} tabs={tabs} />
            <Hero />
            <About />
            <Projects />
            <WorkExperience />
            <ContactMe />
        </div>
    )
}
