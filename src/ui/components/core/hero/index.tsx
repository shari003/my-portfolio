import {Teko} from "next/font/google"

const teko = Teko({
    weight: "400",
    subsets: ['latin']
})

export default function Hero() {
    return (
        <section className="pt-24 overflow-hidden flex relative max-h-screen">
            <div className="ml-12 mt-12 text-slate-800">
                <p className="font-semibold text-lg whitespace-nowrap">Developer</p>
                <p className="font-semibold text-lg whitespace-nowrap">& Data Science</p>
            </div>
            <div className='flex gap-10 animate-infinite-scroll'>
                {[...new Array(10)].fill(0).map((_, index) => (
                    <p key={index} className={`tracking-tight font-teko text-[28em] font-medium text-slate-800 cursor-default whitespace-nowrap ${teko.className}`}>
                        SHRI HARI
                    </p>
                ))}
            </div>
        </section>
    )
}