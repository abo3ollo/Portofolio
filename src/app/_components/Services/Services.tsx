"use client"
import Link from 'next/link'
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { DiRequirejs } from 'react-icons/di';
import { MdOutlineDesignServices } from 'react-icons/md';
import { FaCode } from 'react-icons/fa6';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTestcafe, SiTypescript } from 'react-icons/si';
import { section } from 'motion/react-client';


const ShinyText = require("@/components/ShinyText").default as any;

const LogoLoop = require("@/components/LogoLoop").default as any;


const data = [
    {
        icon: <DiRequirejs />,
        title: 'Requirements gathering',
        desc: 'Stakeholders and designers are to identify core use cases, target users, business goals, and branding guidelines.',
        step: "step 1"
    },
    {
        icon: <MdOutlineDesignServices />,
        title: 'Designing and prototyping',
        desc: 'Turn ideas into interactive, user-focused interfaces, laying the visual foundation for development.',
        step: "step 2"

    },
    {
        icon: <FaCode />,
        title: 'Write clean and scalable frontend code',
        desc: 'Parallel tasking allows UI, backend, and testing to happen at the same time. If you want to launch the product faster, scaling teams up based on project requirements offers you flexibility.',
        step: "step 3"
    },
    {
        icon: <SiTestcafe />,
        title: 'Testing',
        desc: 'Before going live, ensure everything works across browsers, devices, and scenarios.',
        step: "step 4"
    },


];

const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

export default function Services() {
    return (


        <section id='services' className="w-full  md:w-[65%] container  mx-auto  px-6 py-20 font-[Plus_Jakarta_Sans]  ">

            {/* scroll 1  */}

            <div
                data-aos="fade-up" // Choose from fade, flip, slide, zoom animations
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
                        text="Services"
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
                <h1 className="text-5xl md:text-6xl ">Services</h1>
                <div className="flex flex-col md:flex-row space-y-6 items-baseline justify-between mb-10 ">
                    <p className="text-white/40 text-lg">Explore a suite of services to elevate your brand.</p>
                    <div className="flex items-center gap-3 mb-1">
                        <Link
                            target="_blank"
                            href="https://wa.me/1555743737"
                            className="px-5 py-3 md:px-8 md:py-5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200 no-underline whitespace-nowrap"
                        >
                            Contact Now
                        </Link>
                    </div>
                </div>
            </div>


            <div className="overflow-hidden w-full py-4 mb-6"
                style={{
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                    maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
                }}
            >
                <div
                    className="flex gap-3 w-max"
                    style={{ animation: "marquee 20s linear infinite" }}
                >
                    {[...data, ...data].map((item, index) => (
                        <div
                            key={index}
                            className="w-60 shrink-0 rounded-2xl p-px"
                            style={{
                                background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                            }}
                        >
                            <div className="rounded-2xl bg-[#0d0d0d] h-full flex flex-col p-5 gap-4">
                                {/* Icon + step badge row */}

                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center text-lg">
                                    {item.icon}
                                </div>



                                {/* Text */}
                                <div className="flex flex-col gap-3">
                                    <h3 className="text-sm font-semibold text-white leading-snug">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs leading-relaxed"
                                        style={{ color: "rgba(255,255,255,0.38)" }}
                                    >
                                        {item.desc}
                                    </p>
                                </div>

                                {/* Bottom accent line */}
                                <div className="mt-auto h-px w-full rounded-full"
                                    style={{ background: "linear-gradient(to right, rgba(255,255,255,0.08), transparent)" }}
                                />
                                <span
                                    className="text-[10px] w-15 text-center font-semibold tracking-widest uppercase px-2 py-1 rounded-full"
                                    style={{
                                        background: "rgba(255,255,255,0.05)",
                                        color: "rgba(255,255,255,0.3)",
                                        letterSpacing: "0.12em",
                                    }}
                                >
                                    {item.step}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`
    @keyframes marquee {
      from { transform: translateX(0); }
      to   { transform: translateX(-50%); }
    }
  `}</style>
            </div>
            {/* loop */}
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                {/* Basic horizontal loop */}
                <LogoLoop
                    logos={techLogos}
                    speed={100}
                    direction="left"
                    logoHeight={60}
                    gap={60}
                    hoverSpeed={0}
                    scaleOnHover
                    ariaLabel="Technology partners"
                />
            </div>
        </section>

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

