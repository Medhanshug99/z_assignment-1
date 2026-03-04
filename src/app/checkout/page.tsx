"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CheckoutPage() {
    const { cartTotal, clearCart } = useCart();
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.fromTo(".checkout-anim",
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" }
        );
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate processing secure acquisition
        setTimeout(() => {
            clearCart();
            router.push('/order/confirmation');
        }, 1500);
    };

    return (
        <main ref={containerRef} className="flex-grow w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
            <h1 className="checkout-anim text-4xl font-bold tracking-tight mb-8">Secure Acquisition</h1>

            <div className="checkout-anim bg-[#050505] border border-zinc-900 rounded-lg p-6 md:p-8 mb-8">
                <div className="flex justify-between items-center pb-6 border-b border-zinc-800 mb-6 text-xl font-medium">
                    <span>Total Amount due</span>
                    <span className="text-3xl font-light">${cartTotal.toLocaleString()}</span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <h2 className="text-lg font-medium mb-4">Contact Information</h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1" htmlFor="email">Email address</label>
                                <input required type="email" id="email" className="w-full bg-black border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-zinc-500" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-900">
                        <h2 className="text-lg font-medium mb-4">Shipping Address</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1" htmlFor="firstName">First name</label>
                                <input required type="text" id="firstName" className="w-full bg-black border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-zinc-500" />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1" htmlFor="lastName">Last name</label>
                                <input required type="text" id="lastName" className="w-full bg-black border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-zinc-500" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-sm text-zinc-400 mb-1" htmlFor="address">Address</label>
                                <input required type="text" id="address" className="w-full bg-black border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-zinc-500" />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1" htmlFor="city">City</label>
                                <input required type="text" id="city" className="w-full bg-black border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-zinc-500" />
                            </div>
                            <div>
                                <label className="block text-sm text-zinc-400 mb-1" htmlFor="zip">ZIP code</label>
                                <input required type="text" id="zip" className="w-full bg-black border border-zinc-800 rounded-md py-2 px-3 text-white focus:outline-none focus:border-zinc-500" />
                            </div>
                        </div>
                    </div>

                    <div className="pt-6 border-t border-zinc-900">
                        <h2 className="text-lg font-medium mb-4">Payment Method (Mock)</h2>
                        <div className="bg-black border border-zinc-800 rounded-md p-4 text-sm text-zinc-500 text-center">
                            This is a demonstration store. No real payment is required.
                        </div>
                    </div>

                    <div className="pt-8">
                        <button
                            type="submit"
                            disabled={isSubmitting || cartTotal === 0}
                            className={`w-full py-4 rounded-full font-semibold text-center transition-colors ${isSubmitting || cartTotal === 0
                                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                                : 'bg-white text-black hover:bg-zinc-200'
                                }`}
                        >
                            {isSubmitting ? 'Authenticating...' : `Complete Acquisition - $${cartTotal.toLocaleString()}`}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}
