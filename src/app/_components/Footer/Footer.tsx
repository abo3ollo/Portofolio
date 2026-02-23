'use client'
import { div } from 'motion/react-client';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

const ShinyText = require("@/components/ShinyText").default as any;
const Galaxy = require("@/components/Galaxy").default as any;
const SplitText = require("@/components/SplitText").default as any;


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

export default function Footer() {
    return (

        <footer id='contact' className="relative flex flex-col items-center justify-center w-full min-h-screen overflow-hidden -mt-24 pt-54 pb-24 px-10 ">
            {/* ── Background  ── */}
            <div className="absolute inset-0 z-0 w-full h-full" >
                <Galaxy style={{ width: '100%', height: '100%' }}
                    mouseRepulsion={false}
                    mouseInteraction={false}
                    density={0.8}
                    glowIntensity={0.3}
                    saturation={0.6}
                    hueShift={140}
                    twinkleIntensity={0.3}
                    rotationSpeed={0.1}
                    repulsionStrength={2}
                    autoCenterRepulsion={0}
                    starSpeed={0.5}
                    speed={1} />
            </div>
            {/* ── Main Content ── */}
            <div className="relative z-10 w-[80%] container  mx-auto flex flex-col items-center justify-center text-center ">
                <div className="flex flex-wrap">

                    <div className="w-full  ">

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
                                text="Available For Work"
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
                        <h1 className="text-3xl w-full md:w-[60%] mx-auto mb-8 leading-[1.3] text-white ">
                            <SplitText
                                text="Curious about what we can create together? Let’s bring something extraordinary to life!"

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

                        {/* Buttons */}
                        <div className="flex gap-4 flex-wrap text-center justify-center">
                            <Link
                                target="_blank"
                                href="https://wa.me/1555743737"
                                className="px-10 py-3.5 rounded-[30px] text-base font-medium text-black bg-white border-none transition-all duration-300 hover:bg-[#e0e0e0] hover:-translate-y-0.5 "
                            >
                                Contact Now
                            </Link>
                        </div>

                        {/* links */}
                        <div className="flex items-center justify-center gap-5 text-white/50  mt-7">
                            {SOCIALS.map(({ label, href, icon }, i) => (
                                <span key={label} className="flex items-center gap-7 text-2xl">
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
                    </div>

                </div>
            </div>


        </footer>
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
