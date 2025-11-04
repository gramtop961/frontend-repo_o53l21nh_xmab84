import { Mail, Github, Twitter, Linkedin, Figma } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="absolute inset-x-0 -z-[1] mx-auto h-40 max-w-5xl rounded-full bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-sky-500/20 blur-3xl" />
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Let’s build something great</h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70">
          I’m available for select freelance projects, product design consulting, and collaborations. Share a few details about your project and I’ll get back within 24 hours.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@novastudio.design"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-fuchsia-500/20 transition hover:shadow-fuchsia-500/30"
          >
            <Mail size={16} /> Email me
          </a>
          <div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Response time: under 24h
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#" aria-label="GitHub" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white">
            <Github size={18} />
          </a>
          <a href="#" aria-label="Twitter" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white">
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="Figma" className="rounded-lg border border-white/10 bg-white/5 p-2 text-white/80 hover:text-white">
            <Figma size={18} />
          </a>
        </div>

        <p className="mt-8 text-xs text-white/50">© {new Date().getFullYear()} Nova Studio — Portfolio by Your Name</p>
      </div>
    </section>
  );
}
