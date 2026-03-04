"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function DeliverySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const packageRef = useRef<HTMLDivElement>(null);
    const successTextRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.fromTo(packageRef.current,
            { y: -300, rotation: -10, opacity: 0 },
            { y: 0, rotation: 0, opacity: 1, duration: 2, ease: "bounce.out", delay: 0.5 }
        )
            .fromTo(successTextRef.current,
                { opacity: 0, scale: 0.8, y: 30 },
                { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: "back.out(1.7)" }
            );

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="panel bg-[#050505] flex-col items-center justify-center relative bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-900 to-black">

            <div className="relative mb-16 flex items-end justify-center w-full h-64">
                {/* Door/House Background minimal representation */}
                <div className="absolute bottom-0 w-48 h-64 border-t border-l border-r border-zinc-800 rounded-t-sm shadow-[inset_0_40px_100px_rgba(0,0,0,0.8)] z-0"></div>

                {/* The package dropping on doorstep */}
                <div ref={packageRef} className="z-10 bg-yellow-800 w-24 h-24 shadow-2xl border border-yellow-700 flex items-center justify-center rounded-sm">
                    <svg className="w-8 h-8 text-yellow-500/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                </div>
            </div>

            <div ref={successTextRef} className="text-center z-20">
                <div className="mx-auto w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-6 ring-1 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)]">
                    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight mb-4">
                    Successfully Delivered
                </h2>
                <p className="text-zinc-400 text-lg">Your artwork has arrived at its destination.</p>
            </div>

        </section>
    );
}
