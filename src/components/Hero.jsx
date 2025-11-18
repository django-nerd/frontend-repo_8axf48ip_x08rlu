import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,#22d3ee33,transparent_40%),radial-gradient(circle_at_80%_20%,#a78bfa33,transparent_40%),radial-gradient(circle_at_50%_80%,#f472b633,transparent_40%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-20 pb-12 sm:pt-28 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-cyan-300 via-fuchsia-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(168,85,247,0.35)]"
            >
              Kinfash
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg sm:text-xl text-white/80"
            >
              Bold fits. Neon vibes. Built for Gen‑Z energy.
            </motion.p>
            <div className="mt-8 flex gap-3">
              <a href="#new" className="px-5 py-3 rounded-full bg-white text-slate-900 font-semibold hover:scale-[1.02] active:scale-95 transition">Shop New</a>
              <a href="#quiz" className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold hover:opacity-90 transition">Take Style Quiz</a>
            </div>
            <p className="mt-4 text-sm text-white/60">Sustainable fabrics • Weekly drops • Free returns</p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] w-full max-w-md mx-auto rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#22d3ee22,#a78bfa22,#f472b622,#22d3ee22)] animate-[spin_12s_linear_infinite]" />
              <img src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1200&auto=format&fit=crop" alt="Kinfash model" className="relative z-10 h-full w-full object-cover mix-blend-lighten" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
