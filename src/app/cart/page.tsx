"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CartPage() {
    const { items, updateQuantity, removeFromCart, cartTotal } = useCart();
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".cart-header",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
        );

        if (items.length > 0) {
            gsap.fromTo(".cart-item",
                { x: -30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out", delay: 0.2 }
            );
            gsap.fromTo(".cart-summary",
                { scale: 0.95, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 }
            );
        }
    }, [items.length]);

    if (items.length === 0) {
        return (
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <h1 className="text-4xl font-bold tracking-tight mb-6">Your Collection is Empty</h1>
                <p className="text-zinc-500 mb-10 text-lg">Looks like you haven't selected any pieces for your collection yet.</p>
                <Link href="/category/paintings" className="bg-white text-black px-8 py-4 rounded-full font-medium inline-block hover:bg-zinc-200 transition-colors">
                    Explore the Gallery
                </Link>
            </main>
        );
    }

    return (
        <main ref={containerRef} className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <h1 className="cart-header text-4xl font-bold tracking-tight mb-12">Your Cart</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-6">
                    {items.map((item) => (
                        <div key={item.id} className="cart-item flex flex-col sm:flex-row gap-6 p-6 bg-[#050505] border border-zinc-900 rounded-lg">
                            <div className="w-full sm:w-32 h-32 bg-zinc-900 rounded-md overflow-hidden flex-shrink-0">
                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                            </div>

                            <div className="flex-grow flex flex-col justify-between">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="text-xl font-medium mb-1">{item.title}</h3>
                                        <p className="text-sm text-zinc-500 font-serif italic">{item.artist}</p>
                                    </div>
                                    <div className="text-xl font-light">
                                        ${(item.price * item.quantity).toLocaleString()}
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-auto">
                                    <div className="flex items-center space-x-4 border border-zinc-800 rounded-full px-4 py-2 bg-black">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="text-zinc-500 hover:text-white transition-colors"
                                            disabled={item.quantity <= 1}
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>
                                        </button>
                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="text-zinc-500 hover:text-white transition-colors"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
                                        </button>
                                    </div>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-sm text-zinc-500 hover:text-red-400 transition-colors uppercase tracking-widest text-xs"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary lg:col-span-1">
                    <div className="bg-[#050505] border border-zinc-900 rounded-lg p-8 sticky top-24">
                        <h2 className="text-xl font-medium tracking-tight mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-8 text-sm text-zinc-400">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span className="text-white">${cartTotal.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping estimate</span>
                                <span className="text-white">Calculated at checkout</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Tax estimate</span>
                                <span className="text-white">Calculated at checkout</span>
                            </div>
                        </div>

                        <div className="border-t border-zinc-800 pt-6 mb-8 flex justify-between items-end">
                            <span className="text-lg font-medium">Order Total</span>
                            <span className="text-3xl font-light">${cartTotal.toLocaleString()}</span>
                        </div>

                        <Link
                            href="/checkout"
                            className="w-full bg-white text-black py-4 rounded-full font-semibold text-center block hover:bg-zinc-200 transition-colors"
                        >
                            Finalize Acquisition
                        </Link>

                        <p className="text-center text-xs text-zinc-600 mt-6 mt-4">
                            Taxes and shipping calculated at checkout.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
