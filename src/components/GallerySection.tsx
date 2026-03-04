"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const artworks = [
    { id: 1, title: "The Abstract Dream", type: "Painting", img: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&w=600&auto=format&fit=crop" },
    { id: 2, title: "Marble Serenity", type: "Statue", img: "https://images.unsplash.com/photo-1544265089-c70e28f3223d?q=80&w=600&auto=format&fit=crop" },
    { id: 3, title: "Oceanic Whispers", type: "Painting", img: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600&auto=format&fit=crop" },
    { id: 4, title: "Bronze Guardian", type: "Statue", img: "https://images.unsplash.com/photo-1618331835717-801e976710b2?q=80&w=600&auto=format&fit=crop" },
];

export default function GallerySection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useGSAP(() => {
        const cards = cardsRef.current;

        gsap.fromTo(
            cards,
            { y: 100, opacity: 0, scale: 0.8 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="panel bg-zinc-950 text-white flex-col gap-12 py-20">
            <div className="text-center space-y-4 font-sans z-10">
                <h1 className="text-5xl md:text-7xl font-light tracking-tight">Curated Masterpieces</h1>
                <p className="text-zinc-400 text-lg md:text-xl tracking-wide">Scroll to begin your collection journey</p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 w-full max-w-7xl px-4 z-10">
                {artworks.map((art, i) => (
                    <div
                        key={art.id}
                        ref={(el) => {
                            if (el) cardsRef.current[i] = el;
                        }}
                        className="relative group w-64 h-96 rounded-xl overflow-hidden shadow-2xl bg-zinc-900 border border-zinc-800"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={art.img} alt={art.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                            <h3 className="text-xl font-semibold mb-1">{art.title}</h3>
                            <span className="text-xs uppercase tracking-widest text-zinc-400">{art.type}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
