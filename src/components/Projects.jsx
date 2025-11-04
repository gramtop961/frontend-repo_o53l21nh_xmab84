import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Fintech Mobile App',
    description: 'End-to-end product design for a next-gen savings platform with playful micro-interactions.',
    tags: ['Mobile', 'UX', 'Prototype'],
    accent: 'from-fuchsia-500 to-violet-500',
  },
  {
    title: 'SaaS Analytics',
    description: 'Redesigned onboarding and dashboard for a B2B analytics tool to boost activation.',
    tags: ['Web', 'Design System', 'Accessibility'],
    accent: 'from-sky-500 to-cyan-500',
  },
  {
    title: 'AI Design Assistant',
    description: 'Explorations for an AI-aided workflow with clear information hierarchy and focus.',
    tags: ['Concept', 'Motion', 'AI'],
    accent: 'from-emerald-500 to-teal-500',
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">Selected Work</h2>
            <p className="mt-2 max-w-2xl text-sm text-white/60">
              A small curation of recent projects and explorations. Case studies available upon request.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur hover:text-white md:block"
          >
            Request case studies
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className={`h-44 w-full rounded-xl bg-gradient-to-br ${p.accent} opacity-90 transition group-hover:opacity-100`} />
              <h3 className="mt-4 text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-white/60">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between">
                <a href="#" className="inline-flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white">
                  View project <ExternalLink size={14} />
                </a>
                <div className="text-xs text-white/50">2024</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
