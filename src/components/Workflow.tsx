const steps = [
  {
    number: "01",
    title: "Assess & Model",
    description:
      "We assess your building, model its systems, and design the knowledge graph and control architecture. Every piece of equipment, every relationship, mapped into a unified ontology.",
  },
  {
    number: "02",
    title: "Deploy & Commission",
    description:
      "Graph-connected DDC controllers, BMS integration, and metering — deployed and commissioned by our own engineers. End-to-end delivery from modeling through handover.",
  },
  {
    number: "03",
    title: "Optimize & Learn",
    description:
      "Your building begins reasoning across systems. Predictive demand, autonomous scheduling, and continuous optimization — all powered by the knowledge graph.",
  },
  {
    number: "04",
    title: "Evolve & Scale",
    description:
      "As the building evolves, so does its digital intelligence. Ongoing graph maintenance, new AI capabilities, and portfolio-wide scaling through shared ontology.",
  },
];

export function Workflow() {
  return (
    <section className="relative py-32">
      <div className="glow-line mx-auto mb-32 max-w-xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008080]">
            How We Work
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ letterSpacing: "-1.5px" }}>
            From manual operation
            <br />
            <span className="text-[#94a3b8]">to autonomous intelligence.</span>
          </h2>
        </div>

        <div className="relative mt-20">
          {/* Vertical line connector */}
          <div className="absolute left-8 top-0 bottom-0 hidden w-px bg-gradient-to-b from-[#008080]/50 via-[#008080]/20 to-transparent lg:block" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="relative flex gap-8 lg:gap-16">
                {/* Step number */}
                <div className="relative hidden lg:block">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white font-mono text-lg font-semibold text-[#008080] shadow-sm">
                    {step.number}
                  </div>
                  {/* Dot on the line */}
                  <div className="absolute -left-[0.3125rem] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full border-2 border-[#008080] bg-[#fafbfc]" />
                </div>

                {/* Content */}
                <div className="feature-card flex-1 rounded-xl p-8">
                  <div className="mb-1 font-mono text-xs text-[#008080] lg:hidden">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold text-[#0f172a]">{step.title}</h3>
                  <p className="max-w-lg text-sm leading-relaxed text-[#475569]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
