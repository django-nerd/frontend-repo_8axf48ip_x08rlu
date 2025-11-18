import { useState } from "react";

const API = import.meta.env.VITE_BACKEND_URL || "";

export default function Quiz() {
  const [style_vibe, setStyle] = useState("streetwear");
  const [color_pref, setColor] = useState("neon");
  const [budget, setBudget] = useState("$$");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setSaved(false);
    try {
      const res = await fetch(`${API}/api/quiz`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: email || undefined, style_vibe, color_pref, budget, answers: [] })});
      if (res.ok) setSaved(true);
    } catch {}
  };

  return (
    <section id="quiz" className="mx-auto max-w-7xl px-6 py-16">
      <div className="rounded-3xl border border-white/10 bg-slate-800/40 backdrop-blur p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Style Quiz</h2>
        <p className="text-white/70 mb-6">Get personalized picks and AI styling suggestions.</p>
        <form onSubmit={submit} className="grid sm:grid-cols-4 gap-4">
          <div>
            <label className="text-sm text-white/70">Vibe</label>
            <select value={style_vibe} onChange={(e)=>setStyle(e.target.value)} className="w-full mt-1 bg-slate-900/60 border border-white/10 rounded-xl p-3 text-white">
              <option value="streetwear">Streetwear</option>
              <option value="athleisure">Athleisure</option>
              <option value="retro">Retro</option>
              <option value="y2k">Y2K</option>
              <option value="preppy">Preppy</option>
              <option value="grunge">Grunge</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-white/70">Colors</label>
            <select value={color_pref} onChange={(e)=>setColor(e.target.value)} className="w-full mt-1 bg-slate-900/60 border border-white/10 rounded-xl p-3 text-white">
              <option value="neon">Neon</option>
              <option value="pastel">Pastel</option>
              <option value="monochrome">Monochrome</option>
              <option value="earthy">Earthy</option>
              <option value="mixed">Mixed</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-white/70">Budget</label>
            <select value={budget} onChange={(e)=>setBudget(e.target.value)} className="w-full mt-1 bg-slate-900/60 border border-white/10 rounded-xl p-3 text-white">
              <option value="$">$</option>
              <option value="$$">$$</option>
              <option value="$$$">$$$</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-white/70">Email (optional)</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="you@kinfash.com" className="w-full mt-1 bg-slate-900/60 border border-white/10 rounded-xl p-3 text-white" />
          </div>
          <div className="sm:col-span-4 flex items-center gap-3 mt-2">
            <button className="px-5 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400 text-white font-semibold">Save & Get Suggestions</button>
            {saved && <span className="text-cyan-300 text-sm">Saved! We’ll personalize your feed.</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
