// components/AboutSection.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

const ShinyText = require("@/components/ShinyText").default as any;
const LightRays = require("@/components/LightRays").default as any;

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const SKILLS = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "shadcn/ui",
  ],

  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "Socket.IO",
    "Authentication",
    "Authorization",
    "JWT",
    "Middleware",
    "Role-Based Access Control",
  ],

  database: ["MongoDB", "Mongoose", "Convex"],

  tools: ["Clerk", "Git", "GitHub", "Vercel"],
};

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Digital Land",
    year: "Jan 2026 – Present",
  },
  {
    role: "Software Tester",
    company: "I.T Square",
    year: "Mar 2025 – Dec 2025",
  },
  {
    role: "Frontend Developer",
    company: "Route Academy(trainee)",
    year: "Jun 2025 – Dec 2025",
  },
];

const SOCIALS = [
  {
    label: "facebook",
    href: "https://www.facebook.com/share/1DDRBtjK8X/?mibextid=wwXIfr",
    icon: <FaFacebookF />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/abdalrahman_aboollo?igsh=MThpdTliZXZ6Ymp2cA%3D%3D&utm_source=qr",
    icon: <FaInstagram />,
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/1555743737",
    icon: <FaWhatsapp />,
  },
];

export default function AboutSection() {
  return (
    <>
      <section
        id="about"
        className="relative w-full min-h-screen  flex flex-col items-center justify-center px-6 py-20 font-[Plus_Jakarta_Sans]"
      >
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ opacity: 0.4 }}
        >
          <div style={{ width: "100%", height: "600px", position: "relative" }}>
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

        {/* scroll 1 */}
        <div
          data-aos="slide-up" // Choose from fade, flip, slide, zoom animations
          data-aos-duration="10000" // Optional: specific duration for this element
          // style={{ height: '10vh' }}
        >
          {/* ── Top Badge ── */}
          <div
            className=" inline-flex items-center gap-2 text-xl rounded-4xl px-4 py-2 mb-6"
            style={{
              boxShadow:
                "16px 24px 20px 8px rgba(0,0,0,0.4), 0px 2px 0px 0px rgba(184,180,180,0.08) inset",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            <CircleDotIcon />
            <ShinyText
              text="Full-stack Developer"
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
            <span className="text-white/30">Full-stack Developer</span>
          </h1>

          {/* ── Subheading ── */}
          <p className="text-white/70 text-base text-center mb-14 m-auto max-w-md">
            Brief initial presentation of myself and my previous experiences.
          </p>
        </div>

        {/* scroll 2  */}
        <div
          data-aos="zoom-in" // Choose from fade, flip, slide, zoom animations
          data-aos-duration="10000" // Optional: specific duration for this element
        >
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
                  <span className="text-white text-xs font-medium">
                    Available for work
                  </span>
                </div>
              </div>

              {/* Name & title */}
              <div>
                <h2 className="text-white text-2xl font-semibold mb-1">
                  Hello I am Abdelrahman Yehia
                </h2>
                <p className="text-white/40 text-md">
                  Full-stack Developer Based in Egypt.
                </p>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-5 text-white/50">
                {SOCIALS.map(({ label, href, icon }, i) => (
                  <span
                    key={label}
                    className="flex items-center gap-5 text-2xl"
                  >
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
              <Link
                href="/Abdelrahman_Aboollo_CV_Full_Stack_Developer.pdf"
                download="Abdelrahman_Aboollo_CV_Full_Stack_Developer.pdf"
                className="w-[40%] text-center py-3 rounded-[30px] text-base font-medium text-white border border-white/20 bg-transparent transition-all duration-300 hover:bg-white/5 hover:border-white/30 no-underline"
              >
                Download CV
              </Link>

              {/* Experience */}
              <div className="flex flex-col divide-y divide-white/5 mt-5">
                <h3 className="text-white text-lg font-medium mb-1">
                  Experience
                </h3>
                {EXPERIENCE.map(({ role, company, year }) => (
                  <div
                    key={year}
                    className="flex items-center justify-between py-4 cursor-default"
                  >
                    <span className="text-white/50 text-sm w-1/3 ">{role}</span>
                    <span className="text-white/50 text-sm w-1/3 text-center ">
                      {company}
                    </span>
                    <span className="text-white/50 text-sm w-1/3 text-right ">
                      {year}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT CARD ── */}
            <div className="bg-[#111] border border-white/[0.07] rounded-2xl p-8 flex flex-col gap-6">
              {/* Bio */}
              <p className="text-white/70 text-base leading-relaxed">
                Hi! I&apos;m Abdelrahman. I&apos;m a{" "}
                <span className="text-white">
                  Full-Stack JavaScript Developer
                </span>{" "}
                focused on building modern, scalable, and production-ready web
                applications. I work across both frontend and backend using{" "}
                <span className="text-white">
                  React, Next.js, TypeScript, Node.js, and Express.js
                </span>
                .
                <br />
                <br />
                On the backend, I build{" "}
                <span className="text-white">
                  RESTful APIs, authentication and authorization systems,
                  role-based access control, database-driven applications,
                  real-time features, and server-side business logic
                </span>{" "}
                using Node.js, Express.js, MongoDB, Mongoose, Convex, and
                Socket.IO. I also work with modern deployment and development
                tools such as Git, GitHub, Clerk, and Vercel.
              </p>

              {/* Divider */}
              <div className="h-px bg-white/6" />

              {/* Skills */}
              <div className="flex flex-col gap-6">
                {/* Section Title */}
                <div>
                  <h3 className="text-white text-lg font-medium mb-1">
                    Technologies I Work With
                  </h3>

                  <p className="text-white/40 text-sm">
                    Full-stack technologies I use to build modern web
                    applications.
                  </p>
                </div>

                {/* Frontend */}
                <div>
                  <h4 className="text-white/60 text-sm font-medium mb-3">
                    Frontend
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {SKILLS.frontend.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#1c1c1c] border border-white/[0.07] text-white/60 text-sm px-4 py-2 rounded-lg cursor-default hover:text-white hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div>
                  <h4 className="text-white/60 text-sm font-medium mb-3">
                    Backend
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {SKILLS.backend.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#1c1c1c] border border-white/[0.07] text-white/60 text-sm px-4 py-2 rounded-lg cursor-default hover:text-white hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Database */}
                <div>
                  <h4 className="text-white/60 text-sm font-medium mb-3">
                    Database
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {SKILLS.database.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#1c1c1c] border border-white/[0.07] text-white/60 text-sm px-4 py-2 rounded-lg cursor-default hover:text-white hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools & Deployment */}
                <div>
                  <h4 className="text-white/60 text-sm font-medium mb-3">
                    Tools & Deployment
                  </h4>

                  <div className="flex flex-wrap gap-2">
                    {SKILLS.tools.map((skill) => (
                      <span
                        key={skill}
                        className="bg-[#1c1c1c] border border-white/[0.07] text-white/60 text-sm px-4 py-2 rounded-lg cursor-default hover:text-white hover:border-white/15 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/6" />
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
