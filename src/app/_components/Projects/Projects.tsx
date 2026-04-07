"use client"

import { url } from "inspector";
import Link from "next/link";

const ChromaGrid = require("@/components/ChromaGrid").default as any;
const ShinyText = require("@/components/ShinyText").default as any;



const items = [
    {
        image : "/hospital system.jpeg",
        url:"https://hospital-system-omega.vercel.app/"
    },
    {
        image: '/mobile responsive.jpeg',
        url: 'https://e-commerce-heavenly.vercel.app/'
    },
    {
        image: '/animal app.jpeg',
        url: 'https://abo3ollo.github.io/Animal-App/'
    },
    {
        image: '/yummy.jpeg',
        url: 'https://abo3ollo.github.io/Yummy-Website/'
    },
    

];

export default function Projects() {


    return (
        <>
            <section id="projects" className="w-full  md:w-[65%] container  mx-auto  px-6 py-20 font-[Plus_Jakarta_Sans]">
                {/* scroll 1 */}

                <div
                    data-aos="slide-up" // Choose from fade, flip, slide, zoom animations
                    data-aos-duration="3000" // Optional: specific duration for this element
                // style={{ height: '10vh' }}
                >
                    <div className=" inline-flex items-center  gap-2 text-lg rounded-4xl px-4 py-2 mb-6"
                        style={{
                            boxShadow:
                                "16px 24px 20px 8px rgba(0,0,0,0.4), 0px 2px 0px 0px rgba(184,180,180,0.08) inset",
                            textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                        }}
                    >
                        <CircleDotIcon />
                        <ShinyText
                            text="Recent Projects"
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
                    <h1 className="text-5xl md:text-6xl ">Recent <span className="text-gray-300">Projects</span></h1>
                    <div className="flex flex-col md:flex-row space-y-6 items-baseline justify-between mb-10 ">


                        <p className="text-white/40 text-lg">Showcase of some of my recent sleek websites</p>

                        <div className="flex items-center gap-3 mb-1">
                            <Link
                                href="https://github.com/abo3ollo?tab=repositories"
                                className="hidden md:block px-8 py-5 rounded-full bg-[#1a1a1a] border border-white/10 text-white text-sm font-medium hover:bg-[#222] hover:border-white/20 transition-all duration-200 no-underline whitespace-nowrap"
                            >
                                See All Projects
                            </Link>
                            <Link
                                href="https://wa.me/1555743737"
                                target="_blank"
                                className="px-5 py-3 md:px-8 md:py-5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200 no-underline whitespace-nowrap"
                            >
                                Contact Now
                            </Link>
                        </div>
                    </div>
                </div>

                {/* scroll 2 */}

                <div
                    data-aos="zoom-in" // Choose from fade, flip, slide, zoom animations
                    data-aos-duration="3000" // Optional: specific duration for this element
                // style={{ height: '10vh' }}
                >
                    <div style={{ height: '1100px', position: 'relative' }}>
                        <ChromaGrid

                            items={items}
                            radius={10}
                            damping={0.45}
                            fadeOut={0.6}
                            ease="power3.out "
                        />
                    </div>
                </div>


            </section>
            <div className="h-px bg-white/6" />
        </>
    )
}


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
