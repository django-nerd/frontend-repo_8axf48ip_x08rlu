export default function Features(){
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-3 gap-6">
      {[{t:"Virtual Try‑On",d:"See fits on your avatar in seconds."},{t:"Custom Measurements",d:"Dialed‑in sizing saved to your profile."},{t:"AI Styling",d:"Personalized looks based on your vibe."}].map((f,i)=> (
        <div key={i} className="rounded-2xl p-6 border border-white/10 bg-slate-800/40 text-white/90">
          <h3 className="font-bold text-white mb-2">{f.t}</h3>
          <p className="text-sm text-white/70">{f.d}</p>
        </div>
      ))}
    </section>
  )
}
