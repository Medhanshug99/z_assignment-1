"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function ShipmentSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const truckRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const progressLineRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });

        // Complex continuous driving animation
        tl.to(truckRef.current, {
            y: -5,
            duration: 0.1,
            yoyo: true,
            repeat: 20,
            ease: "sine.inOut"
        }, 0);

        // Wheels spinning continuous
        gsap.to(".wheel", {
            rotation: 360,
            duration: 1,
            repeat: -1,
            ease: "none"
        });

        // Background lines moving to simulate speed
        gsap.fromTo(".speed-line",
            { x: '100%', opacity: 0 },
            {
                x: '-100%',
                opacity: 0.5,
                duration: 1.5,
                stagger: {
                    each: 0.2,
                    repeat: -1
                },
                ease: "none"
            }
        );

        // Main truck entrance animation (only once on mount)
        gsap.fromTo(truckRef.current,
            { x: -500, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power3.out" }
        );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="panel bg-zinc-900 border-t border-b border-zinc-800 flex-col overflow-hidden relative">
            <div ref={textRef} className="absolute top-32 text-center text-zinc-300">
                <h2 className="text-4xl lg:text-5xl font-light tracking-wide">Your shipment is on the way</h2>
            </div>

            <div className="w-full relative mt-32 h-64 flex items-center justify-center">
                {/* Road line */}
                <div className="absolute w-full h-[2px] bg-zinc-800 top-1/2 left-0 -translate-y-1/2">
                    <div ref={progressLineRef} className="h-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.5)] w-full"></div>
                </div>

                {/* Animated Truck/Package representation */}
                <div ref={truckRef} className="absolute top-1/2 -translate-y-1/2 z-10 flex flex-col items-center drop-shadow-2xl">
                    <div className="bg-zinc-800 p-4 rounded-xl border border-zinc-700 mb-2">
                        <svg className="w-16 h-16 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                        </svg>
                    </div>
                    <span className="text-xs uppercase tracking-widest text-zinc-500 font-semibold bg-zinc-950 px-3 py-1 rounded-full border border-zinc-800">In Transit</span>
                </div>
            </div>
        </section>
    );
}
