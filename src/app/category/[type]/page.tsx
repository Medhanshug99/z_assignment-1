"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { use } from "react";
import { products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function CategoryPage({ params }: { params: Promise<{ type: string }> }) {
    const resolvedParams = use(params);
    const categoryType = resolvedParams.type;
    const gridRef = useRef<HTMLDivElement>(null);

    const filteredProducts = products.filter(p => p.category === categoryType);
    const pageTitle = categoryType.charAt(0).toUpperCase() + categoryType.slice(1);

    useGSAP(() => {
        gsap.fromTo(".category-title",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        );

        if (gridRef.current && filteredProducts.length > 0) {
            gsap.fromTo(".product-card",
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    delay: 0.2
                }
            );
        }
    }, [categoryType]);

    return (
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="mb-12">
                <span className="text-sm tracking-[0.2em] text-zinc-500 uppercase mb-2 block">Collection</span>
                <h1 className="category-title text-4xl md:text-5xl font-bold tracking-tight">{pageTitle}</h1>
            </div>

            {filteredProducts.length > 0 ? (
                <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            ) : (
                <div className="py-24 text-center">
                    <p className="text-xl text-zinc-500">No artworks found in this collection.</p>
                </div>
            )}
        </main>
    );
}
