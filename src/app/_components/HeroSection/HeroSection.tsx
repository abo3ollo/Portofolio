// components/HeroSection.tsx
"use client";

import Link from "next/link";


const ShinyText = require("@/components/ShinyText").default as any;
const SplitText = require("@/components/SplitText").default as any;



export default function HeroSection() {

    

    return (
        <section className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden -mt-24 pt-54 pb-24 md:px-10">
            {/* ── Background Video ── */}
            <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.4 }}>
                <video
                    src="/7UD0cQYVifWCo0HolmUKnCWLuO4.mp4"
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>


            {/* ── Main Content ── */}
            <div className="relative z-10 w-[80%] container  mx-auto">
                <div className="flex flex-wrap">

                    <div className="w-full md:w-3/5">

                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 text-xl rounded-4xl px-4 py-2 mb-6"
                            style={{
                                boxShadow:
                                    "16px 24px 20px 8px rgba(0,0,0,0.4), 0px 2px 0px 0px rgba(184,180,180,0.08) inset",
                                textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                            }}
                        >
                            <CircleDotIcon />
                            <ShinyText
                                text="Frontend Developer"
                                speed={2}
                                delay={0}
                                color="#b5b5b5"
                                shineColor="#ffffff"
                                spread={120}
                                direction="left"
                                yoyo={false}
                                pauseOnHover={false}
                                disabled={false}
                            />
                        </div>

                        {/* Heading */}
                        <h1
                            className="text-7xl  mb-8 leading-[1.1] text-white"
                        >

                            <SplitText
                                text="Abdelrahman Yehia"
                                
                                delay={50}
                                duration={1.25}
                                ease="power3.out"
                                splitType="chars"
                                from={{ opacity: 0, y: 40 }}
                                to={{ opacity: 1, y: 0 }}
                                threshold={0.1}
                                rootMargin="-100px"
                                textAlign="center"
                                showCallback
                            />
                        </h1>

                        {/* Description */}
                        <p className="text-[#888] text-lg leading-relaxed mb-12 max-w-150">
                            I'm a versatile designer specializing in graphic, web, and product
                            design to help grow your business. Let's build something great!
                            
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex gap-4 flex-wrap">
                            <Link
                                href="#projects"
                                className="px-8 py-4 rounded-[30px] text-base font-medium text-white border border-white/20 bg-transparent transition-all duration-300 hover:bg-white/5 hover:border-white/30 no-underline"
                            >
                                See All Projects
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-4 rounded-[30px] text-base font-medium text-black bg-white border-none transition-all duration-300 hover:bg-[#e0e0e0] hover:-translate-y-0.5 no-underline"
                            >
                                Contact Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Column — Testimonials */}
                    <div className="hidden lg:w-2/5 lg:flex lg:items-center lg:justify-center ">
                        <div className="relative flex flex-col items-center gap-6 w-full max-w-sm">
                            <div
                                className="w-[75%] self-start bg-white/3 border border-white/8 px-7 py-6 rounded-2xl backdrop-blur-[10px] animate-float-up"
                            >
                                <p className="text-white text-sm leading-relaxed mb-3">
                                    "Working with him was a game changer!"
                                </p>
                                <p className="text-gray-500 text-xs text-end">— Mohamed</p>
                            </div>
                            <div
                                className="w-[75%] self-end bg-white/3 border border-white/8 px-7 py-6 rounded-2xl backdrop-blur-[10px] animate-float-down"
                            >
                                <p className="text-white text-sm leading-relaxed mb-3">
                                    "Delivered beyond expectations, highly recommend!"
                                </p>
                                <p className="text-gray-500 text-xs text-end">— Sarah</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

/* ── Inline SVG icons (no FA dependency) ──────────────────────── */

function CircleDotIcon() {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-4 h-4 fill-none stroke-current"
            strokeWidth={1.5}
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" className="fill-current stroke-none" />
        </svg>
    );
}

