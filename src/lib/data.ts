export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    category: 'paintings' | 'sculptures' | 'digital';
    imageUrl: string;
    artist: string;
}

export const products: Product[] = [
    {
        id: 'p1',
        title: 'Ethereal Dawn',
        description: 'An abstract oil painting capturing the first light of day with vibrant colors.',
        price: 1200,
        category: 'paintings',
        imageUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=800',
        artist: 'Elena Rossi'
    },
    {
        id: 'p2',
        title: 'Midnight Serenade',
        description: 'Acrylic on canvas, an exploration of deep blues and starry whites.',
        price: 950,
        category: 'paintings',
        imageUrl: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&q=80&w=800',
        artist: 'Michael Chang'
    },
    {
        id: 'p3',
        title: 'Urban Geometry',
        description: 'A striking geometric painting depicting modern cityscapes.',
        price: 1500,
        category: 'paintings',
        imageUrl: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800',
        artist: 'Sarah Jenkins'
    },
    {
        id: 'p4',
        title: 'Crimson Tide',
        description: 'A bold, sweeping abstract piece relying heavily on rich reds and gold leaf.',
        price: 2100,
        category: 'paintings',
        imageUrl: 'https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&q=80&w=800',
        artist: 'Julian Vance'
    },
    {
        id: 'p5',
        title: 'Oceanic Drift',
        description: 'Fluid art technique capturing the chaotic serenity of crashing waves.',
        price: 850,
        category: 'paintings',
        imageUrl: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800',
        artist: 'Marina Silva'
    },
    {
        id: 's1',
        title: 'Bronze Embrace',
        description: 'A modern bronze sculpture exploring the concept of connection.',
        price: 3500,
        category: 'sculptures',
        imageUrl: 'https://images.unsplash.com/photo-1582561424760-0321d75e81fa?auto=format&fit=crop&q=80&w=800',
        artist: 'David Kim'
    },
    {
        id: 's2',
        title: 'Marble Whisper',
        description: 'Minimalist carved marble abstract form, smooth and inviting.',
        price: 4200,
        category: 'sculptures',
        imageUrl: 'https://images.unsplash.com/photo-1544252899-c8eb7054ae05?auto=format&fit=crop&q=80&w=800', // Replaced broken image
        artist: 'Isabella Fox'
    },
    {
        id: 's3',
        title: 'Geometric Tension',
        description: 'A striking steel sculpture balancing impossible angles.',
        price: 5500,
        category: 'sculptures',
        imageUrl: 'https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?auto=format&fit=crop&q=80&w=800',
        artist: 'Anton Berkov'
    },
    {
        id: 'd1',
        title: 'Cyberpunk Reverie',
        description: 'High-resolution digital artwork of a futuristic city alley.',
        price: 150,
        category: 'digital',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
        artist: 'Neo Vector'
    },
    {
        id: 'd2',
        title: 'Fractal Dream',
        description: 'Algorithmic generated digital art showcasing complex infinite patterns.',
        price: 200,
        category: 'digital',
        imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
        artist: 'Code Weaver'
    },
    {
        id: 'd3',
        title: 'Neon Bloom',
        description: 'Vibrant digital botanical rendering using glowing neon palettes.',
        price: 180,
        category: 'digital',
        imageUrl: 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80&w=800',
        artist: 'Lara Croft'
    },
    {
        id: 'd4',
        title: 'Synthwave Skyline',
        description: 'Retro-futuristic 80s inspired digital landscape.',
        price: 120,
        category: 'digital',
        imageUrl: 'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=800',
        artist: 'Rex Apollo'
    }
];
