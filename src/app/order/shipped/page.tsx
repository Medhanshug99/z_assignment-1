"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ShipmentSection from "@/components/ShipmentSection";

export default function OrderShippedPage() {
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 2 }
        );
    }, []);

    return (
        <main className="flex-grow w-full relative min-h-screen bg-[#020202]">

            <div className="h-[70vh] w-full flex items-center justify-center overflow-hidden relative">
                <ShipmentSection />
            </div>

            <div ref={textRef} className="absolute bottom-20 w-full flex justify-center z-20">
                <div className="text-center px-4">
                    <h2 className="text-2xl font-semibold mb-6">In Transit via Secure Courier</h2>
                    <Link
                        href="/order/delivered"
                        className="inline-block border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-colors backdrop-blur-md"
                    >
                        Monitor Final Arrival
                    </Link>
                </div>
            </div>
        </main>
    );
}
