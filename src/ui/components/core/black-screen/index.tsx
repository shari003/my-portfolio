import { motion, AnimatePresence, Variants } from 'motion/react';

type Props = {
    show: boolean;
}

export default function BlackScreen({ show }: Props) {
    // Parent background animation
    const screenVariants: Variants = {
        initial: { y: 0 },
        animate: { y: 0 },
        exit: {
            y: "-100%", // Slides up like a curtain revealing the site
            transition: { 
                duration: 0.8, 
                ease: [0.76, 0, 0.24, 1], 
                delay: 0.4 // Waits for text to exit first
            }
        },
    };

    // Controls the staggering of the text children
    const textWrapperVariants: Variants = {
        initial: { opacity: 1 },
        animate: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.15, 
                delayChildren: 0.2 
            }
        },
        exit: {
            opacity: 1,
            transition: { 
                staggerChildren: 0.1, 
                staggerDirection: -1 // Reverses the stagger on exit
            }
        }
    };

    // Individual word animations with a modern blur reveal
    const wordVariants: Variants = {
        initial: { 
            y: 30, 
            opacity: 0, 
            filter: "blur(8px)" 
        },
        animate: { 
            y: 0, 
            opacity: 1, 
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
        },
        exit: { 
            y: -20, 
            opacity: 0, 
            filter: "blur(5px)",
            transition: { duration: 0.4, ease: "easeIn" } 
        }
    };

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950"
                    variants={screenVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    {/* Subtle radial gradient for background depth */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900/40 via-zinc-950 to-zinc-950 pointer-events-none" />

                    <motion.h1
                        className="relative flex flex-row items-center font-sans tracking-tighter cursor-default"
                        variants={textWrapperVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                    >
                        <motion.span 
                            className="text-4xl md:text-6xl font-extrabold text-white" 
                            variants={wordVariants}
                        >
                            shri
                        </motion.span>
                        <motion.span 
                            className="text-4xl md:text-6xl font-medium text-zinc-500" 
                            variants={wordVariants}
                        >
                            .is-a
                        </motion.span>
                        <motion.span 
                            className="text-4xl md:text-6xl font-extrabold text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]" 
                            variants={wordVariants}
                        >
                            .dev
                        </motion.span>
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    );
}