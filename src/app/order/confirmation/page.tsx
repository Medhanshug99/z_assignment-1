"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import ConfirmationSection from "@/components/ConfirmationSection";

export default function OrderConfirmationPage() {
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.5 }
        );
    }, []);

    return (
        <main className="flex-grow w-full relative min-h-screen">
            {/* Background Animation Component from Original implementation */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <ConfirmationSection />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
                <div ref={textRef} className="max-w-2xl bg-black/60 backdrop-blur-xl border border-zinc-800 p-8 md:p-12 rounded-2xl shadow-2xl">
                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 text-white border border-white/20">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                        Acquisition Confirmed
                    </h1>
                    <p className="text-lg text-zinc-300 mb-8">
                        Thank you for your trust. Your masterpiece is now being prepared for secure, climate-controlled transit.
                    </p>

                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 mb-8 text-left text-sm text-zinc-400">
                        <div className="flex justify-between mb-2">
                            <span>Dossier Reference</span>
                            <span className="text-white font-mono">#ZG-{Math.floor(100000 + Math.random() * 900000)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Status</span>
                            <span className="text-green-400">Authenticated & Confirmed</span>
                        </div>
                    </div>

                    <Link
                        href="/order/packed"
                        className="inline-block bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-zinc-200 transition-colors"
                    >
                        Monitor Preparation
                    </Link>
                </div>
            </div>
        </main>
    );
}
