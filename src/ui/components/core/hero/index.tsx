import { Teko, Signika } from "next/font/google"
import { motion, Variants } from "motion/react"

const teko = Teko({
	weight: "400",
	subsets: ['latin']
})

const signika = Signika({
	weight: "400",
	subsets: ['latin']
})

export default function Hero() {
	// EXACT same easing as your BlackScreen and Navbar for perfect synchronization
	const customEase = [0.76, 0, 0.24, 1] as const;

	// Parent container handling the overall stagger timing
	const containerVariants: Variants = {
		initial: { opacity: 1 },
		animate: {
			transition: {
				staggerChildren: 0.15,
				// Waits exactly 0.8s for the Splash screen to finish its exit animation
				delayChildren: 0.8,
			}
		}
	};

	// Premium "reveal from bottom" text animation
	const textRevealVariants: Variants = {
		initial: { y: "120%", rotate: 2 },
		animate: {
			y: "0%",
			rotate: 0,
			transition: { duration: 1, ease: customEase }
		}
	};

	// Simple fade and slight slide for the subtitle
	const subtitleVariants: Variants = {
		initial: { opacity: 0, y: 20 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: customEase }
		}
	};

	return (
		// bg-transparent ensures it inherits the nice zinc-50 from your layout
		<section className="relative flex items-center justify-center min-h-screen overflow-hidden bg-transparent">

			<div className="absolute inset-0 pointer-events-none -z-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-60" />
            </div>

			<main className="w-full px-6 pt-24 pb-10 md:pt-32 md:max-w-7xl md:mx-auto md:px-36">
				<motion.div
					className="flex flex-col items-start justify-center font-bold text-zinc-900 md:block"
					variants={containerVariants}
					initial="initial"
					animate="animate"
				>
					{/* Using overflow-hidden on wrappers to mask the text. 
                        This creates that premium "sliding up from nowhere" effect. 
                    */}
					<h1 className={`text-left text-[6rem] leading-[0.85] md:text-[9rem] 2xl:text-[11rem] md:leading-[0.85] uppercase select-none ${teko.className}`}>

						<div className="overflow-hidden pb-2 md:pb-4">
							<motion.div variants={textRevealVariants} className="origin-bottom-left">
								I<span className="text-zinc-400">&apos;</span>M
							</motion.div>
						</div>

						<div className="overflow-hidden pb-2 md:pb-4">
							<motion.div variants={textRevealVariants} className="origin-bottom-left">
								SHRI
							</motion.div>
						</div>

						<div className="overflow-hidden pb-2 md:pb-4">
							<motion.div variants={textRevealVariants} className="flex items-end origin-bottom-left">
								HARI
								{/* The requested glowing emerald dot */}
								<span className="ml-2 md:ml-4 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.3)]">
									.
								</span>
							</motion.div>
						</div>

					</h1>

					<motion.div variants={subtitleVariants}>
						<p className={`mt-8 md:mt-12 text-lg md:text-2xl 2xl:text-3xl uppercase tracking-[0.2em] text-zinc-500 font-medium ${signika.className}`}>
							Full Stack Developer
						</p>
					</motion.div>

				</motion.div>
			</main>

			{/* Subtle background glow effect behind the text (optional, fits the theme) */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-zinc-200/40 rounded-full blur-[100px] pointer-events-none -z-10" />
		</section>
	);
}