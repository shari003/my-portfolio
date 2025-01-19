'use client';
import React, {useEffect, useRef, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {useRouter} from "next/navigation";

type Props = {
    show: boolean;
}

export default function Navbar({show}: Props) {

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(false);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    const tabs = [
        {
            id: 1,
            label: "Home",
            to: "/"
        },
        {
            id: 2,
            label: "About",
            to: "#about"
        },
        {
            id: 3,
            label: "Projects",
            to: "#projects"
        },
        {
            id: 4,
            label: "Skills",
            to: "#skills"
        },
        {
            id: 5,
            label: "Contact",
            to: "#contact"
        }
    ];

    const blockVariants = {
        initial: {y: -5, opacity: 0},
        falling: {y: 0, opacity: 1, transition: {duration: 0.3, ease: "easeInOut"}}
    }

    function handleClick() {
        setIsOpen(prev => !prev);
    }

    function handleOutsideClick(event: MouseEvent) {
        if (hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }

    function handleNavigate(to: string) {
        router.push(to);
        setIsOpen(false);
    }

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);
        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.header 
                    className="fixed top-0 left-0 z-50 w-screen md:w-full px-8 md:px-36 py-4 backdrop-blur-sm"
                    initial={{translateY: "-100%", backdropFilter: "blur(0px)"}}
                    animate={{translateY: "0%", backdropFilter: "blur(5px)"}}
                    exit={{translateY: "-100%", backdropFilter: "blur(0px)"}}
                    transition={{duration: 0.2, ease: "easeInOut"}}
                >
                    <motion.nav 
                        className="bg-white h-16 rounded-md flex items-center justify-between p-4 shadow-md"
                        initial="initial"
                        animate="falling"
                        transition={{
                            staggerChildren: 0.3,
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                    >   
                        <motion.div variants={blockVariants} ref={hamburgerRef} className="block md:hidden relative">
                            <button onClick={handleClick} className="flex flex-col justify-center items-center">
                                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} >
                                </span>
                                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} >
                                </span>
                                <span className={`bg-black block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} >
                                </span>    
                            </button>
                            {isOpen && (
                                <motion.div 
                                    className="absolute z-50 top-12 -left-4 w-40 shadow-md rounded-md p-4 bg-white" 
                                    initial={{opacity: 0, y: -5}} 
                                    animate={{opacity: 1, y: 0}} 
                                    transition={{duration: 0.3, ease: "easeInOut"}} 
                                    exit={{
                                        opacity: 0,
                                        y: -5,
                                        transition: {duration: 0.3, ease: "easeInOut"}
                                    }}
                                >
                                    <menu className="flex flex-col space-y-4 bg-white w-full">
                                        {tabs.map(tab => (
                                            <li key={tab.id} onClick={() => handleNavigate(tab.to)} className="text-black font-semibold tracking-wider uppercase text-sm">
                                                {tab.label}
                                            </li>
                                        ))}
                                    </menu>
                                </motion.div>
                            )}
                        </motion.div>
                        <motion.div variants={blockVariants}>
                            <Link href="/" className="font-medium hover:bg-slate-200 hover:text-black bg-black text-white transition-all duration-300 px-2 py-1 rounded-md outline-none">
                                <span>/</span>
                                <span>shrihari</span>
                                <span className="font-extrabold italic">.dev</span>
                            </Link>
                        </motion.div>
                        <motion.div className="hidden md:flex space-x-4 text-xs uppercase" variants={blockVariants}>
                            {tabs.map((tab, index) => (
                                <React.Fragment key={tab.id}>
                                    <Link href={tab.to} className="relative group text-black font-semibold tracking-wider">
                                        <span className="inline-block">
                                            <span className="invisible font-semibold">{tab.label}</span>
                                            <span className="absolute left-0 top-0 transition-all duration-300 group-hover:font-semibold group-hover:text-black/90">
                                                {tab.label}
                                            </span>
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 cursor-default"></span>
                                    </Link>
                                        
                                    {index < tabs.length - 1 && <span className="text-gray-400 cursor-default">/</span>}
                                </React.Fragment>
                            ))}
                        </motion.div>
                        <motion.div variants={blockVariants}>
                            <button type="button" className="text-xs text-black bg-slate-200 px-3 py-1.5 rounded-md border-slate-400 hover:bg-black hover:text-white transition-all duration-300 tracking-wide uppercase">
                                Hire Me
                            </button>
                        </motion.div>
                    </motion.nav>
                </motion.header>
            )}
        </AnimatePresence>
    )
}