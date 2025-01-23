import {motion, AnimatePresence} from 'framer-motion'

type Props = {
    show: boolean;
}

export default function BlackScreen({show}: Props) {

    const wordVairants = {
        initial: {y: 0, opacity: 1},
        falling: {y: 20, opacity: 0, transition: {duration: 0.3, ease: "easeInOut"}}
    }

    const screenVariants = {
        visible: {translateY: "0%"},
        hidden: {translateY: "100%"},
    }

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className='fixed inset-0 bg-black z-50 flex justify-center items-center flex-col'
                    variants={screenVariants}
                    initial='visible'
                    animate='hidden'
                    exit='hidden'
                    transition={{duration: 0.5, ease: "easeInOut", delay: 0.5}}
                >
                    <motion.h1
                        className='flex flex-row items-center'
                        initial='initial'
                        animate='falling'
                        transition={{
                            staggerChildren: 0.3,
                            duration: 0.4,
                            ease: "easeInOut"
                        }}
                    >
                        <motion.span className='text-white text-2xl font-bold' variants={wordVairants}>shri</motion.span>
                        <motion.span className='text-white text-2xl font-bold' variants={wordVairants}>.is-a</motion.span>
                        <motion.span className='text-white text-2xl font-bold' variants={wordVairants}>.dev</motion.span>
                    </motion.h1>
                </motion.div>
            )}
        </AnimatePresence>
    )
}