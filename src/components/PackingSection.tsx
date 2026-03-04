"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function PackingSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const artworkRef = useRef<HTMLDivElement>(null);
    const boxBottomRef = useRef<HTMLDivElement>(null);
    const boxTopRef = useRef<HTMLDivElement>(null);
    const boxLeftRef = useRef<HTMLDivElement>(null);
    const boxRightRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Animate artwork dropping into the box
        tl.fromTo(artworkRef.current,
            { y: -200, opacity: 0, scale: 0.8 },
            { y: 50, opacity: 1, scale: 0.6, duration: 2, ease: "bounce.out" }
        )
            // Box flaps closing around the artwork
            .to(boxLeftRef.current, { rotationY: 90, duration: 1 }, "-=0.5")
            .to(boxRightRef.current, { rotationY: -90, duration: 1 }, "-=1")
            .to(boxTopRef.current, { rotationX: -90, duration: 1 }, "-=0.2")
            // Sealing effect (shaking a bit or scaling down slightly)
            .to([boxBottomRef.current, boxLeftRef.current, boxRightRef.current, boxTopRef.current],
                { scale: 0.95, y: "+=10", duration: 0.5 }
            );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="panel bg-[#050505] flex-col perspective-1000 relative">
            <h2 className="text-4xl text-zinc-300 font-light mb-20 z-20">Carefully Packing...</h2>

            <div className="relative w-64 h-64 flex justify-center items-end mt-20">

                {/* The artwork */}
                <div
                    ref={artworkRef}
                    className="absolute z-10 w-40 h-56 bg-[url('https://images.unsplash.com/photo-1544265089-c70e28f3223d?q=80&w=400')] bg-cover border border-white/20 shadow-lg bottom-10"
                ></div>

                {/* The Box */}
                <div className="relative w-full h-32 z-20">
                    <div ref={boxBottomRef} className="absolute inset-0 bg-yellow-800/80 border border-yellow-700 backdrop-blur-sm z-20 flex items-center justify-center shadow-2xl">
                        <span className="text-yellow-600/50 uppercase tracking-widest text-sm font-bold absolute bottom-2">Fragile</span>
                    </div>
                    {/* Flaps */}
                    <div ref={boxLeftRef} className="absolute left-0 top-0 bottom-0 w-16 bg-yellow-700/90 origin-left transform -translate-x-full"></div>
                    <div ref={boxRightRef} className="absolute right-0 top-0 bottom-0 w-16 bg-yellow-700/90 origin-right transform translate-x-full"></div>
                    <div ref={boxTopRef} className="absolute top-0 left-0 right-0 h-16 bg-yellow-600/90 origin-bottom transform -translate-y-full"></div>
                </div>
            </div>
        </section>
    );
}
