"use client";

import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { usePathname } from 'next/navigation';

export default function Navbar() {
    const { itemCount } = useCart();
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname?.startsWith(path + '/');

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link href="/" className="font-bold text-xl tracking-tighter">
                        <span className="text-zinc-300">ZIGG</span>URATS
                    </Link>
                    <div className="hidden md:flex space-x-8 items-center">
                        <Link href="/" className={`text-sm transition-colors ${pathname === '/' ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                            Home
                        </Link>
                        <Link href="/category/paintings" className={`text-sm transition-colors ${isActive('/category/paintings') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                            Paintings
                        </Link>
                        <Link href="/category/sculptures" className={`text-sm transition-colors ${isActive('/category/sculptures') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                            Sculptures
                        </Link>
                        <Link href="/category/digital" className={`text-sm transition-colors ${isActive('/category/digital') ? 'text-white' : 'text-zinc-400 hover:text-white'}`}>
                            Digital Art
                        </Link>
                    </div>

                    {/* Cart Icon */}
                    <div className="flex items-center">
                        <Link href="/cart" className="relative p-2 text-zinc-400 hover:text-white transition-colors group">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                            {itemCount > 0 && (
                                <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-black bg-white rounded-full transition-transform group-hover:scale-110">
                                    {itemCount}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
