import React from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
    show: boolean;
}

export default function Navbar({show}: Props) {

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

    const blockVairants = {
        initial: {y: -5, opacity: 0},
        falling: {y: 0, opacity: 1, transition: {duration: 0.3, ease: "easeInOut"}}
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.header 
                    className="fixed top-0 left-0 z-50 w-full px-36 py-4 backdrop-blur-sm"
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
                        <motion.a href="/" className="font-medium hover:bg-slate-200 hover:text-slate-700 bg-slate-700 text-white transition-all duration-300 px-2 py-1 rounded-md outline-none" variants={blockVairants}>
                            <span>/</span>
                            <span>shrihari</span>
                            <span className="font-extrabold italic">.dev</span>
                        </motion.a>
                        <motion.div className="flex space-x-4 text-xs uppercase" variants={blockVairants}>
                            {tabs.map((tab, index) => (
                                <React.Fragment key={tab.id}>
                                    <a href={tab.to} className="relative group text-slate-800 font-semibold tracking-wider">
                                        <span className="inline-block">
                                            <span className="invisible font-semibold">{tab.label}</span>
                                            <span className="absolute left-0 top-0 transition-all duration-300 group-hover:font-semibold group-hover:text-slate-700">
                                                {tab.label}
                                            </span>
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-slate-800 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 cursor-default"></span>
                                    </a>
                                        
                                    {index < tabs.length - 1 && <span className="text-gray-400 cursor-default">/</span>}
                                </React.Fragment>
                            ))}
                        </motion.div>
                        <motion.div variants={blockVairants}>
                            <button type="button" className="text-xs text-slate-700 bg-slate-200 px-3 py-1.5 rounded-md border-slate-400 hover:bg-slate-700 hover:text-white transition-all duration-300 tracking-wide uppercase">
                                Hire Me
                            </button>
                        </motion.div>
                    </motion.nav>
                </motion.header>
            )}
        </AnimatePresence>
    )
}