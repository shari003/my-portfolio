import {Teko} from "next/font/google"

const teko = Teko({
    weight: "400",
    subsets: ['latin']
})

export default function Hero() {
    return (
        <section className="pt-24 overflow-hidden flex justify-center items-center relative h-screen">
            <div className="ml-12 mt-10 text-slate-800 absolute top-24 md:left-24 left-0 md:text-lg text-4xl">
                <p className="font-semibold whitespace-nowrap">Developer</p>
                <p className="font-semibold whitespace-nowrap">& Data Science</p>
            </div>
            <div className='flex gap-10 animate-infinite-scroll'>
                {[...new Array(10)].fill(0).map((_, index) => (
                    <p key={index} className={`tracking-tight font-teko text-[20em] md:text-[28em] font-medium text-slate-800 cursor-default whitespace-nowrap select-none ${teko.className}`}>
                        SHRI HARI
                    </p>
                ))}
            </div>
        </section>
    )
}