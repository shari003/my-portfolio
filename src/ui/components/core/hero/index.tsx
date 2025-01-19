import {Teko, Signika} from "next/font/google"
import {motion} from "framer-motion"

const teko = Teko({
    weight: "400",
    subsets: ['latin']
})

const signika = Signika({
    weight: "400",
    subsets: ['latin']
})

export default function Hero() {
    return (
        <section className="md:pt-24 pt-16 overflow-hidden flex justify-center items-center relative min-h-screen bg-primary">
            <main className="pt-28 min-h-screen md:max-w-7xl md:w-full md:mx-auto md:px-36 px-4">
                <motion.div 
                    className="text-black font-bold flex items-center justify-center flex-col md:block"
                    initial="initial"
                    animate="falling"
                    transition={{
                        staggerChildren: 0.3,
                        duration: 0.4,
                        ease: "easeInOut"
                    }}
                >
                    <h1 
                        className={`text-left md:text-[9rem] text-9xl md:leading-[8rem] tracking-wider ${teko.className} [&>*]:h-fit`}
                    >
                        <span>I<span className="text-slate-700">&apos;</span>M</span>
                        <br />
                        <span>SHRI</span>
                        <br />
                        <span className="flex items-end">HARI <span className=" text-slate-700">.</span></span>
                    </h1>
                    <p className={`${signika.className} text-2xl pt-10 md:pt-4 px-4 md:px-0 uppercase tracking-wider text-slate-700`}>
                        Full Stack Developer & Data Scientist
                    </p>
                </motion.div>
            </main>
        </section>
    )
}