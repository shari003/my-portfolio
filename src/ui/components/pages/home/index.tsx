"use client";
import React, { useState, useEffect } from 'react'
import BlackScreen from '../../core/black-screen'
import Navbar from '../../core/navbar';
import Hero from '../../core/hero';
import About from '../../core/about';
import Projects from '../../core/projects';
import ContactMe from '../../core/contact-me';
import WorkExperience from '../../core/work-experience';
import getNavItems, { PageType } from '@/backend/actions/getNavItems';

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
