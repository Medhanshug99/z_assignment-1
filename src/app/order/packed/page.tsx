"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import PackingSection from "@/components/PackingSection";

export default function OrderPackedPage() {
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Delay text reveal to let the PackingSection animation play 
        gsap.fromTo(textRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 3 }
        );
    }, []);

    return (
        <main className="flex-grow w-full relative min-h-screen bg-[#0a0a0a]">
            <div className="h-[70vh] w-full flex items-center justify-center overflow-hidden relative">
                <PackingSection />
            </div>

            <div ref={textRef} className="absolute bottom-20 w-full flex justify-center z-20">
                <div className="text-center px-4">
                    <h2 className="text-2xl font-semibold mb-6">Expertly Crated for Transport</h2>
                    <Link
                        href="/order/shipped"
                        className="inline-block border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                    >
                        Track Shipment
                    </Link>
                </div>
            </div>
        </main>
    );
}
