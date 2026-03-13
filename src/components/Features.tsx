const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2">
        <path d="M12 2L2 7l10 5 10-5-10-5z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 17l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Knowledge graph core",
    description:
      "Every product, every integration, every controller connects to one unified knowledge graph. The same ontology-first approach that transformed defense and logistics, applied to buildings.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    title: "Vendor-independent",
    description:
      "Your building, your graph, your choice. We integrate with any system and protocol. The knowledge graph is yours — not locked inside a proprietary cloud.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI-native architecture",
    description:
      "Control cards, meter structures, and system models are structured for machine reasoning from day one. When AI agents arrive, KTC buildings are ready.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "ASHRAE at the core",
    description:
      "We don't just use ASHRAE standards — we help write them. Our knowledge graph is built on the same ontological rigor that shapes global HVAC&R guidelines.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: "Products + services + knowledge",
    description:
      "We develop the hardware, write the software, deliver the projects, and maintain the graph. End-to-end ownership means no finger-pointing and faster innovation.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008080" strokeWidth="2">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Real-world delivery",
    description:
      "Unlike pure software companies, we commission real buildings. Unlike traditional integrators, we think in graphs, not point lists. That combination is rare.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008080]">
            Why KTC
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ letterSpacing: "-1.5px" }}>
            They have points.
            <br />
            <span className="text-[#94a3b8]">We have knowledge.</span>
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Most building systems collect data but don&apos;t understand it.
            KTC builds the semantic model of your building.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="feature-card rounded-xl p-6"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(0,128,128,0.08)]">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-[15px] font-semibold text-[#0f172a]">{feature.title}</h3>
              <p className="text-[13px] leading-relaxed text-[#475569]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
