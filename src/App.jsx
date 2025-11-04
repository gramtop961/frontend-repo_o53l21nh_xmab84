import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] font-inter text-white">
      {/* Subtle background grid */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      <Navbar />

      <main className="relative z-0">
        <Hero />
        <section id="about" className="relative py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold tracking-tight text-white">About</h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                I’m a UI/UX designer with 6+ years crafting products across fintech, SaaS, and creator tools. My approach blends systems thinking with playful visual design, resulting in interfaces that feel intuitive and alive. I partner closely with founders and teams to ship outcomes, not just screens.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 text-sm text-white/80 sm:grid-cols-3">
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">Design Systems</li>
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">Rapid Prototyping</li>
                <li className="rounded-xl border border-white/10 bg-white/5 p-4">UX Research</li>
              </ul>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
