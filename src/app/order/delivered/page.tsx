"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import DeliverySection from "@/components/DeliverySection";

export default function OrderDeliveredPage() {
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(textRef.current,
            { opacity: 0, scale: 0.9 },
            { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.7)", delay: 2.5 }
        );
    }, []);

    return (
        <main className="flex-grow w-full relative min-h-screen bg-[#050505]">

            <div className="h-[70vh] w-full flex items-center justify-center overflow-hidden relative">
                <DeliverySection />
            </div>

            <div ref={textRef} className="absolute bottom-20 w-full flex flex-col items-center justify-center z-20 px-4">
                <Link
                    href="/"
                    className="inline-block bg-white text-black px-10 py-5 rounded-full font-bold shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_50px_rgba(255,255,255,0.5)] transition-all duration-300"
                >
                    Return to the Gallery
                </Link>
            </div>
        </main>
    );
}
