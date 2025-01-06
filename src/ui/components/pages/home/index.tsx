"use client";
import React, { useState, useEffect } from 'react'
import BlackScreen from '../../core/black-screen'
import Navbar from '../../core/navbar';
import Hero from '../../core/hero';
import About from '../../core/about';

export default function Home() {

    const [showBlackScreen, setShowBlackScreen] = useState(true);
    const [showNavbar, setShowNavbar] = useState(false);

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
            <div className="min-h-screen">
                <div className="max-w-7xl mx-auto relative">
                    <Navbar show={showNavbar} />
                </div>
                <Hero />
                <About />
            </div>
        </div>
    )
}