import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Quiz from "./components/Quiz";
import Features from "./components/Features";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 backdrop-blur border-b border-white/10 bg-slate-950/60">
        <div className="mx-auto max-w-7xl px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-extrabold tracking-tight text-lg">KIN<span className="text-cyan-300">FASH</span></a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#new" className="hover:text-white">New</a>
            <a href="#" className="hover:text-white">Men</a>
            <a href="#" className="hover:text-white">Women</a>
            <a href="#" className="hover:text-white">Drops</a>
            <a href="#quiz" className="hover:text-white">Style Quiz</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 rounded-full bg-white text-slate-900 text-sm font-semibold">Sign in</button>
          </div>
        </div>
      </header>

      <Hero />
      <Catalog />
      <Features />
      <Quiz />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-emerald-400/30 bg-emerald-400/10 p-6">
          <h3 className="text-2xl font-bold text-emerald-300">Sustainability</h3>
          <p className="text-white/80 mt-2">Recycled fabrics, low‑impact dyes, ethical production. Look good, feel better.</p>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Kinfash</p>
          <div className="flex gap-4 text-white/70 text-sm">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
