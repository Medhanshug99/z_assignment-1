"use client";

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-zinc-900 py-12 text-zinc-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold text-lg mb-4 tracking-tighter"><span className="text-zinc-500">ZIGG</span>URATS</h3>
                        <p className="text-sm">Curators of modern, abstract, and digital aesthetics for the contemporary collector.</p>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Gallery</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/category/paintings" className="hover:text-white transition-colors">Paintings</Link></li>
                            <li><Link href="/category/sculptures" className="hover:text-white transition-colors">Sculptures</Link></li>
                            <li><Link href="/category/digital" className="hover:text-white transition-colors">Digital Art</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Client Services</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/cart" className="hover:text-white transition-colors">Your Private Collection</Link></li>
                            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Contact Curators</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Newsletter</h4>
                        <p className="text-sm mb-4">Subscribe for private previews of new collections.</p>
                        <form className="flex" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-zinc-900 border border-zinc-800 text-white px-3 py-2 text-sm w-full focus:outline-none focus:border-zinc-500 rounded-l-md"
                            />
                            <button type="submit" className="bg-white text-black px-4 py-2 text-sm font-medium rounded-r-md hover:bg-zinc-200 transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-zinc-900 text-sm flex flex-col md:flex-row justify-between items-center text-zinc-500">
                    <p>&copy; {new Date().getFullYear()} Ziggurats. All rights reserved.</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
