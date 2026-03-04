"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ConfirmationSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const artworkRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                end: "bottom center",
                scrub: 1, // Smooth scrubbing
            }
        });

        // Artwork scale and glow
        tl.fromTo(artworkRef.current,
            { scale: 0.5, opacity: 0, boxShadow: "0px 0px 0px rgba(255,255,255,0)" },
            { scale: 1.2, opacity: 1, boxShadow: "0px 20px 60px rgba(255, 255, 255, 0.4)", duration: 2, ease: "power2.out" }
        )
            .fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" },
                "-=1.5"
            );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="panel bg-zinc-900 flex-col gap-12 relative">
            <h2 ref={textRef} className="text-4xl md:text-6xl font-light text-center z-20">
                Thank you for buying <br /> <span className="font-serif italic text-yellow-500">Marble Serenity</span>
            </h2>

            <div
                ref={artworkRef}
                className="w-64 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden relative z-10 border-2 border-white/10"
            >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://images.unsplash.com/photo-1544265089-c70e28f3223d?q=80&w=800&auto=format&fit=crop"
                    alt="Selected Artwork"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-lg"></div>
            </div>

            {/* Background glow overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-yellow-500/5 rounded-full blur-3xl pointer-events-none"></div>
        </section>
    );
}
