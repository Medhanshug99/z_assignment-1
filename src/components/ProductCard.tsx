"use client";

import Link from 'next/link';
import { Product } from '@/lib/data';

interface ProductCardProps {
    product: Product;
    index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
    return (
        <Link
            href={`/product/${product.id}`}
            className="group block relative product-card bg-transparent flex flex-col items-center text-center"
        >
            <div className="aspect-square w-full max-w-[240px] relative overflow-hidden mb-6 mx-auto bg-zinc-900">
                <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
            </div>
            <div className="flex flex-col items-center">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-zinc-500 uppercase mb-2">{product.category}</span>
                <h3 className="text-base font-medium text-white group-hover:text-zinc-300 transition-colors mb-1">
                    {product.title}
                </h3>
                <p className="text-xs text-zinc-400 font-serif italic mb-3">{product.artist}</p>
                <div className="flex items-center">
                    <span className="text-sm border-b border-transparent group-hover:border-white pb-0.5 transition-colors">
                        Explore
                    </span>
                </div>
            </div>
        </Link>
    );
}
