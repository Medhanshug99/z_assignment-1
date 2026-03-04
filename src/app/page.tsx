"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const featuredRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Intro
        const tl = gsap.timeline();
        tl.fromTo(".hero-text-line",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
        ).fromTo(".hero-cta",
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            "-=0.5"
        ).fromTo(".hero-image",
            { y: 60, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, ease: "power3.out" },
            "-=1"
        );

        // Featured Item Reveal (No ScrollTrigger needed, just staggers in)
        if (featuredRef.current) {
            gsap.from(".product-card",
                {
                    y: 50,
                    opacity: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power2.out",
                    delay: 1.5 // Start after hero animation
                }
            );
        }

    }, { scope: heroRef });

    const featuredProducts = products.slice(0, 4);

    return (
        <main className="w-full flex-grow flex flex-col">
            <section ref={heroRef} className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-black to-[#050505] z-10" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div ref={textRef} className="flex-1 max-w-2xl text-left">
                        <span className="hero-text-line block text-sm tracking-[0.3em] text-zinc-400 uppercase mb-4">
                            Welcome to Ziggurats
                        </span>
                        <h1 className="hero-text-line text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
                            Elevate your space with <br className="hidden md:block" />
                            original <span className="text-zinc-500 italic font-serif">masterpieces</span>.
                        </h1>
                        <p className="hero-text-line text-xl text-zinc-400 max-w-xl mb-10">
                            We curate extraordinary paintings, breath-taking modern sculptures, and visionary digital art from emerging creators around the world.
                        </p>
                        <div className="hero-cta flex space-x-4">
                            <Link href="/category/paintings" className="bg-white text-black px-8 py-4 rounded-full font-medium inline-block hover:bg-zinc-200 transition-colors">
                                Explore Paintings
                            </Link>
                            <Link href="/category/sculptures" className="border border-zinc-700 text-white px-8 py-4 rounded-full font-medium inline-block hover:bg-zinc-900 transition-colors">
                                View Sculptures
                            </Link>
                        </div>
                    </div>

                    <div className="flex-1 w-full relative h-[600px] hidden lg:block">
                        <div className="hero-image absolute top-[10%] left-0 w-[45%] h-[60%] rounded-lg overflow-hidden shadow-2xl z-20 bg-zinc-900 border border-zinc-800">
                            <img src={products[0].imageUrl} alt="Art 1" className="w-full h-full object-cover" />
                        </div>
                        <div className="hero-image absolute top-0 right-[5%] w-[50%] h-[50%] rounded-lg overflow-hidden shadow-2xl z-10 bg-zinc-900 border border-zinc-800">
                            <img src={products[3].imageUrl} alt="Art 2" className="w-full h-full object-cover" />
                        </div>
                        <div className="hero-image absolute bottom-[5%] right-0 w-[60%] h-[45%] rounded-lg overflow-hidden shadow-2xl z-30 bg-zinc-900 border border-zinc-800">
                            <img src={products[1].imageUrl} alt="Art 3" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section ref={featuredRef} className="py-24 bg-[#050505] relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight mb-2">New Arrivals</h2>
                            <p className="text-zinc-400">Discover the latest additions to our permanent collection.</p>
                        </div>
                        <Link href="/category/paintings" className="text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1">
                            Browse Gallery
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {featuredProducts.map((product, index) => (
                            <ProductCard key={product.id} product={product} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
