"use client";

import { useRef, use } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { products } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const productId = resolvedParams.id;
    const { addToCart } = useCart();

    const product = products.find(p => p.id === productId);

    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!product) return;

        const tl = gsap.timeline();

        tl.fromTo(".product-image",
            { scale: 0.95, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "power2.out" }
        )
            .fromTo(".product-info > *",
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
                "-=0.6"
            );
    }, [product]);

    if (!product) {
        notFound();
    }

    return (
        <main ref={containerRef} className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <nav className="flex text-sm text-zinc-500 mb-8" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <Link href="/" className="hover:text-white transition-colors">Ziggurats</Link>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <span className="mx-2">/</span>
                            <Link href={`/category/${product.category}`} className="hover:text-white transition-colors capitalize">
                                {product.category}
                            </Link>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <span className="mx-2">/</span>
                            <span className="text-zinc-300">{product.title}</span>
                        </div>
                    </li>
                </ol>
            </nav>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                <div className="product-image lg:col-span-1 flex items-center justify-center">
                    <div className="aspect-[3/4] w-full max-w-[400px] relative bg-transparent overflow-hidden shadow-2xl">
                        <img
                            src={product.imageUrl}
                            alt={product.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                <div className="product-info flex flex-col justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">{product.title}</h1>
                    <p className="text-xl text-zinc-400 mb-6 font-serif italic">by {product.artist}</p>

                    <div className="text-3xl font-light tracking-wide mb-8">
                        USD ${product.price.toLocaleString()}
                    </div>

                    <div className="prose prose-invert border-t border-zinc-900 pt-8 mb-8">
                        <p className="text-zinc-400 leading-relaxed">
                            {product.description}
                        </p>
                        <p className="text-zinc-500 text-sm mt-4">
                            Includes certificate of authenticity. Securely packaged and shipped globally.
                        </p>
                    </div>

                    <button
                        onClick={() => addToCart(product)}
                        className="w-full bg-white text-black py-4 px-8 rounded-full font-semibold text-lg hover:bg-zinc-200 transition-colors flex justify-center items-center group"
                    >
                        <span>Add To Collection</span>
                        <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>

                    <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-zinc-500 border-t border-zinc-900 pt-6">
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            Global Shipping
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                            Secure Checkout
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
