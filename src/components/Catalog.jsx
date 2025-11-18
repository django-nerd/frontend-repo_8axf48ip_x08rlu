import { useEffect, useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

function Badge({ children }) {
  return (
    <span className="px-2 py-1 text-xs rounded-full bg-white/10 text-white/80 border border-white/10">
      {children}
    </span>
  );
}

export default function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${API}/api/products?limit=8`).then(r => r.json()).then(setProducts).catch(() => setProducts([]));
  }, []);

  const fallback = [
    { title: "Neon Puffer", price: 89, category: "unisex", tags: ["new"], images: ["https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"] },
    { title: "Tech Hoodie", price: 59, category: "men", tags: ["bestseller"], images: ["https://images.unsplash.com/photo-1516826957135-700dedea698c?q=80&w=1200&auto=format&fit=crop"] },
    { title: "Cargo Skirt", price: 49, category: "women", tags: ["limited"], images: ["https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"] },
    { title: "Reflective Jacket", price: 99, category: "unisex", tags: ["weekly"], images: ["https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200&auto=format&fit=crop"] },
  ];

  const items = products.length ? products : fallback;

  return (
    <section id="new" className="mx-auto max-w-7xl px-6 py-12">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">New Arrivals</h2>
        <a href="#" className="text-sm text-cyan-300 hover:underline">View all</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((p, i) => (
          <div key={i} className="group relative rounded-2xl overflow-hidden bg-slate-800/40 border border-white/10">
            <img src={p.images?.[0]} alt={p.title} className="h-48 sm:h-64 w-full object-cover group-hover:scale-105 transition" />
            <div className="p-3">
              <div className="flex items-center gap-2 mb-2">
                {p.tags?.slice(0,2).map((t, j) => <Badge key={j}>{t}</Badge>)}
              </div>
              <h3 className="text-white font-semibold text-sm line-clamp-1">{p.title}</h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-cyan-300 font-bold">${p.price}</span>
                <button className="px-3 py-1.5 rounded-full text-xs bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white">Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
