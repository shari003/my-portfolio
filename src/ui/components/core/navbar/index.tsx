'use client';
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, Variants } from "motion/react";
import { useRouter } from "next/navigation";

import { NavItemType } from "@/backend/actions/getNavItems";

type Props = {
    show: boolean;
    tabs: NavItemType[];
}

export default function Navbar({ show, tabs }: Props) {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    // EXACT same easing as your BlackScreen for perfect synchronization
    const customEase = [0.76, 0, 0.24, 1] as const;

    // Main header dropping down 
    const headerVariants: Variants = {
        initial: { y: "-100%", opacity: 0 },
        animate: {
            y: "0%",
            opacity: 1,
            transition: {
                duration: 1,
                ease: customEase,
                // Waits slightly so it drops down right as the splash screen slides up
                delay: 0.6
            }
        },
        exit: {
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.4, ease: customEase }
        }
    };

    // Controls the staggering of the inner items
    const navVariants: Variants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.7 }
        }
    };

    // The individual items (logo, links, hamburger)
    const itemVariants: Variants = {
        initial: { y: -10, opacity: 0, filter: "blur(4px)" },
        animate: { y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } }
    };

    // Smooth blur reveal for the mobile dropdown menu
    const menuVariants: Variants = {
        hidden: { opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)" },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: { duration: 0.4, ease: customEase }
        },
        exit: {
            opacity: 0,
            y: -5,
            scale: 0.95,
            filter: "blur(4px)",
            transition: { duration: 0.3, ease: customEase }
        }
    };

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
        // mousedown is slightly more reliable than click for outside-click logic
        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.header
                    className="fixed top-0 left-0 z-40 w-full px-6 py-4 md:px-12 pointer-events-none"
                    variants={headerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {/* pointer-events-none on wrapper prevents invisible blocking. pointer-events-auto applied here. */}
                    <motion.nav
                        className="relative flex items-center justify-between p-3 mx-auto bg-white/80 backdrop-blur-xl border border-zinc-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl pointer-events-auto md:max-w-6xl"
                        variants={navVariants}
                    >
                        {/* 1. Mobile Hamburger */}
                        <motion.div variants={itemVariants} ref={hamburgerRef} className="block md:hidden relative">
                            <button
                                onClick={handleClick}
                                className="flex flex-col justify-center items-center w-10 h-10 rounded-full hover:bg-zinc-100 transition-colors"
                            >
                                <span className={`bg-zinc-900 block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm ${isOpen ? 'rotate-45 translate-y-[5px]' : '-translate-y-1'}`} />
                                <span className={`bg-zinc-900 block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm my-[3px] ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                                <span className={`bg-zinc-900 block transition-all duration-300 ease-out h-[2px] w-5 rounded-sm ${isOpen ? '-rotate-45 -translate-y-[5px]' : 'translate-y-1'}`} />
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        variants={menuVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        className="absolute top-16 -left-3 w-64 p-2 bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] rounded-2xl overflow-hidden z-40"
                                    >
                                        <ul className="flex flex-col space-y-1">
                                            {tabs.map((tab) => (
                                                <motion.li key={tab.id} variants={itemVariants}>
                                                    <button
                                                        onClick={() => handleNavigate(tab.to)}
                                                        className="w-full text-left px-4 py-3.5 text-xs font-bold tracking-widest text-gray-400 uppercase rounded-xl hover:text-white hover:bg-[#34d399]/10 hover:translate-x-1 transition-all duration-300 flex items-center justify-between group"
                                                    >
                                                        {tab.label}
                                                        <span className="opacity-0 group-hover:opacity-100 text-[#34d399] transition-opacity duration-300">
                                                            &rarr;
                                                        </span>
                                                    </button>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        {/* 2. Brand Logo */}
                        <motion.div variants={itemVariants}>
                            <Link href="/" className="group flex items-center outline-none px-2">
                                <span className="flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-zinc-900 rounded-md group-hover:bg-zinc-700 transition-colors duration-300">
                                    /shri
                                </span>
                                <span className="text-sm font-bold text-zinc-900 italic tracking-tight">
                                    .is-a.dev
                                </span>
                            </Link>
                        </motion.div>

                        {/* 3. Desktop Links */}
                        <motion.div className="hidden md:flex items-center space-x-6 pr-4" variants={navVariants}>
                            {tabs.map((tab, index) => (
                                <motion.div key={tab.id} variants={itemVariants} className="flex items-center space-x-6">
                                    <button
                                        type="button"
                                        onClick={() => handleNavigate(tab.to)}
                                        className="relative text-[11px] font-bold tracking-widest text-zinc-700 uppercase transition-colors hover:text-zinc-900 group py-2"
                                    >
                                        {tab.label}
                                        {/* Styled with the same emerald-400 as your splash screen */}
                                        <span className="absolute bottom-1 left-0 w-full h-[2px] bg-emerald-400 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out rounded-full" />
                                    </button>
                                    {index < tabs.length - 1 && (
                                        <span className="text-zinc-400 select-none text-xs">/</span>
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.nav>
                </motion.header>
            )}
        </AnimatePresence>
    );
}