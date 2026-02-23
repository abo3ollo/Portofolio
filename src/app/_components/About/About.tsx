// components/AboutSection.tsx
"use client"
import Link from "next/link";
import Image from "next/image";

const ShinyText = require("@/components/ShinyText").default as any;
const LightRays = require("@/components/LightRays").default as any;


import { FaFacebookF, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";


const SKILLS = ["HTML", "CSS", "JavaScript", "Bootstrap", "Tailwind", "React" , "Next" , "Git" , "GitHub"];

const EXPERIENCE = [
    { role: "Student", company: "AAST", year: "2024" },
    { role: "Frontend Developer", company: "Route Academy", year: "2026" },
    
];

const SOCIALS = [
    {
        label: "facebook",
        href: "#",
        icon: <FaFacebookF />
    },
    {
        label: "Instagram",
        href: "#",
        icon: <FaInstagram />
    },
    {
        label: "Whatsapp",
        href: "#",
        icon: <FaWhatsapp />
    },
];

export default function AboutSection() {
    return (
        <>
            <section id="about" className="relative w-full min-h-screen  flex flex-col items-center justify-center px-6 py-20 font-[Plus_Jakarta_Sans]">
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ opacity: 0.4 }}>
                    <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                        <LightRays
                            raysOrigin="top-center"
                            raysColor="#ffffff"
                            raysSpeed={1}
                            lightSpread={0.5}
                            rayLength={3}
                            followMouse={true}
                            mouseInfluence={0.1}
                            noiseAmount={0}
                            distortion={0}
                            className="custom-rays"
                            pulsating={false}
                            fadeDistance={1}
                            saturation={1}
                        />
                    </div>

                    

                </div>

                {/* ── Top Badge ── */}
                <div className=" inline-flex items-center gap-2 text-xl rounded-4xl px-4 py-2 mb-6"
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

                {/* ── Heading ── */}
                <h1 className="text-5xl md:text-6xl font-light text-center mb-4 tracking-tight">
                    <span className="text-white">Abdelrahman,</span>{" "}
                    <span className="text-white/30">Frontend Developer</span>
                </h1>

                {/* ── Subheading ── */}
                <p className="text-white/70 text-base text-center mb-14 max-w-md">
                    Brief initial presentation of myself and my previous experiences.
                </p>

                {/* ── Two-column Card Grid ── */}
                <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">

                    {/* ── LEFT CARD ── */}
                    <div className="bg-[#111] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-6">
                        {/* Profile image */}
                        <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden bg-[#1a1a1a]">
                            <Image
                                src="/me2.jpeg"
                                alt="Johan Beker"
                                fill
                                className="object-cover  grayscale "
                                priority
                            />
                            {/* Available badge */}
                            <div className="absolute bottom-4 right-41 flex items-center gap-2 bg-black/60 backdrop-blur-lg border border-white/10 rounded-full px-3 py-1.5">
                                <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_rgba(74,222,128,0.8)]" />
                                <span className="text-white text-xs font-medium">Available for work</span>
                            </div>
                        </div>

                        {/* Name & title */}
                        <div>
                            <h2 className="text-white text-2xl font-semibold mb-1">Hello I am Abdelrahman Yehia</h2>
                            <p className="text-white/40 text-md">Frontend Developer Based in Egypt.</p>
                        </div>

                        {/* Socials */}
                        <div className="flex items-center gap-5 text-white/50">
                            {SOCIALS.map(({ label, href, icon }, i) => (
                                <span key={label} className="flex items-center gap-5 text-2xl">
                                    <Link
                                        href={href}
                                        aria-label={label}
                                        className="hover:text-white transition-colors duration-200"
                                    >
                                        {icon}
                                    </Link>
                                    {i < SOCIALS.length - 1 && (
                                        <span className="w-px h-4 bg-white/10" />
                                    )}
                                </span>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/6" />


                        {/* CTA */}
                        <Link href="/Frontend Developer_CV_Abdelrahman Yehia.pdf" download="Frontend Developer_CV_Abdelrahman Yehia.pdf" className="w-[40%] text-center py-3 rounded-[30px] text-base font-medium text-white border border-white/20 bg-transparent transition-all duration-300 hover:bg-white/5 hover:border-white/30 no-underline">
                            Download CV
                        </Link>
                    </div>

                    {/* ── RIGHT CARD ── */}
                    <div className="bg-[#111] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-6">
                        {/* Bio */}
                        <p className="text-white/70 text-base leading-relaxed">
                            I'm Johan Beker, a dedicated Web Designer & Developer based in the vibrant city of{" "}
                            <span className="text-white">Berlin, Germany</span>. I specialize in creative design
                            with seamless technical execution to craft exceptional digital experiences.
                        </p>

                        {/* Divider */}
                        <div className="h-px bg-white/6" />

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                            {SKILLS.map((skill) => (
                                <span
                                    key={skill}
                                    className="bg-[#1c1c1c] border border-white/[0.07] text-white/60 text-sm px-4 py-2 rounded-lg  cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="h-px bg-white/6" />

                        {/* Experience */}
                        <div className="flex flex-col divide-y divide-white/5 mt-5">
                            {EXPERIENCE.map(({ role, company, year }) => (
                                <div
                                    key={year}
                                    className="flex items-center justify-between py-4 cursor-default"
                                >
                                    <span className="text-white/50 text-sm w-1/3 ">{role}</span>
                                    <span className="text-white/50 text-sm w-1/3 text-center ">{company}</span>
                                    <span className="text-white/50 text-sm w-1/3 text-right ">{year}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
                <div className="h-px bg-white/6" />
        </>
    );
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