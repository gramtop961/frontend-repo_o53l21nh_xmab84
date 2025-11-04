import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28">
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_600px_at_80%_-10%,rgba(168,85,247,0.25),transparent),radial-gradient(800px_400px_at_20%_10%,rgba(56,189,248,0.2),transparent)]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative z-10 py-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            Available for freelance from Dec ‘25
            <span className="ml-1 inline-flex h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Designing interfaces that feel effortless and delight users
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70">
            I’m a product designer crafting thoughtful experiences for startups and brands. From research to high-fidelity prototypes, I turn complex problems into simple, beautiful solutions.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-fuchsia-500/30"
            >
              View Work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-white"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-white/60">
            <span className="text-xs">Specialties:</span>
            <ul className="flex flex-wrap gap-2 text-xs">
              {['Product Design', 'Design Systems', 'Prototyping', 'User Research'].map((tag) => (
                <li key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1">{tag}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative h-[60vh] w-full sm:h-[70vh] lg:h-[80vh]">
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5">
            <Spline
              scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
