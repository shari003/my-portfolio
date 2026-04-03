import React from 'react';
import { Teko, Signika } from 'next/font/google';
import { motion, Variants } from "motion/react";
import { ArrowUpRight } from 'lucide-react';

const teko = Teko({
	weight: '400',
	subsets: ['latin']
})

const signika = Signika({
	weight: '400',
	subsets: ['latin']
})

export default function About() {
	// Consistent premium easing
	const customEase = [0.76, 0, 0.24, 1] as const;

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			}
		}
	};

	const itemVariants: Variants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: customEase }
		}
	};

	return (
		<section className="relative min-h-screen bg-zinc-950 text-zinc-50 overflow-hidden" id="about">

			{/* Subtle top border gradient to transition from the light Hero section */}
			<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

			{/* Background ambient glow matching the emerald accent */}
			<div className="absolute top-1/4 right-0 w-[40rem] h-[40rem] bg-emerald-400/5 rounded-full blur-[120px] pointer-events-none" />

			<div className="px-6 pt-32 pb-24 mx-auto md:pt-40 max-w-7xl md:px-12 relative z-10">
				<motion.div
					className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-12 lg:gap-16"
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }} // Only animates once when scrolling down
				>
					{/* LEFT COLUMN: Sticky Header & Glitch Effect */}
					<div className="md:col-span-5 lg:col-span-5 flex flex-col md:sticky md:top-32 h-fit">

						{/* Heading */}
						<motion.div variants={itemVariants} className="flex items-start">
							<h2 className="flex items-start m-0 p-0 text-zinc-100">
								<span className="text-5xl md:text-[5rem] lg:text-[7rem] xl:text-[9rem] font-light md:-mt-4 lg:-mt-4 text-emerald-400 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">/</span>
								<span className={`text-6xl md:text-[5rem] lg:text-[7rem] xl:text-[9rem] font-extrabold leading-none ${teko.className}`}>
									ABOUT
								</span>
							</h2>
						</motion.div>
					</div>

					{/* RIGHT COLUMN: Bio & Info */}
					<div className="md:col-span-7 lg:col-span-7 flex flex-col gap-10 lg:pl-8">

						{/* Bio Text */}
						<motion.div variants={itemVariants} className={`flex flex-col gap-6 text-zinc-400 text-lg md:text-xl 2xl:text-2xl leading-relaxed ${signika.className}`}>
							<p>
								Hi, I am <span className="text-zinc-100 font-semibold">K. Shri Hari</span>, a passionate Software Engineer skilled in crafting intuitive web applications and scalable backend systems. With expertise in the <span className="text-zinc-200">MERN stack</span>, <span className="text-zinc-200">TypeScript</span>, and <span className="text-zinc-200">AWS</span>, I thrive on building impactful solutions that drive user engagement and streamline processes.
							</p>
							<p>
								In my current role, I&apos;ve led the development of Tutort&apos;s website and LMS Portal, integrated advanced features like a <span className="text-emerald-400/90">coding engine</span> and contest modules, and created personalized mentor session tools to enhance user experiences. My prior experience includes building CRM systems with comprehensive functionality, showcasing my ability to manage both frontend and backend development seamlessly.
							</p>
							<p>
								I&apos;m always eager to explore emerging technologies and deliver solutions that align with strategic goals. Let&apos;s connect and create something extraordinary!
							</p>
						</motion.div>

						{/* Current Role Callout Card */}
						<motion.div variants={itemVariants} className="pt-2 md:pt-6">
							<a
								href="https://www.tutort.net?utm_source=shri+hari+portfolio&utm_medium=shri.is-a.dev"
								target="_blank"
								rel="noreferrer"
								className="group block p-6 md:p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-400/30 hover:bg-zinc-900 transition-all duration-500 ease-out relative overflow-hidden"
							>
								{/* Hover gradient effect inside card */}
								<div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-emerald-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />

								<div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
									<div>
										<p className="text-xs md:text-sm font-semibold tracking-widest text-zinc-500 uppercase mb-2">
											Currently working at
										</p>
										<p className="text-xl md:text-2xl font-bold text-zinc-100 group-hover:text-emerald-400 transition-colors duration-300">
											Tutort Academy LLP
										</p>
										<p className="text-zinc-400 mt-1">
											Software Engineer II
										</p>
									</div>

									{/* Animated Arrow */}
									<div className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-400/10 transition-colors duration-300">
										<span className="text-zinc-400 group-hover:text-emerald-400 transition-colors duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transform">
											<ArrowUpRight />
										</span>
									</div>
								</div>
							</a>
						</motion.div>

					</div>
				</motion.div>
			</div>
		</section>
	);
}