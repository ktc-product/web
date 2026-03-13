export function ProductShowcase() {
  return (
    <section id="product" className="relative py-32">
      {/* Divider line */}
      <div className="glow-line mx-auto mb-32 max-w-xl" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section 1: Knowledge Graph */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008080]">
              Knowledge Graph Platform
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: "-1px" }}>
              From data points
              <br />
              <span className="text-[#94a3b8]">to building intelligence.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#475569]">
              KTC&apos;s knowledge graph maps every piece of equipment, every control
              sequence, every meter, and every relationship between systems into
              a unified, machine-readable model.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Semantic model of how your building works",
                "Graph-based navigation and search",
                "AI-ready from day one",
                "Vendor-independent, open standards",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#475569]">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,128,128,0.08)]">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#008080"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual — before/after data understanding */}
          <div className="feature-card overflow-hidden rounded-xl p-1">
            <div className="rounded-lg bg-[#f8fafc] p-6">
              {/* Without knowledge graph */}
              <div className="mb-6 rounded-lg border border-[rgba(0,0,0,0.06)] bg-white p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">Without a knowledge graph</div>
                <div className="font-mono text-sm text-[#94a3b8]">
                  Sensor 47 reads 23.4°C
                </div>
                <div className="mt-1 text-xs text-[#cbd5e1]">→ Meaningless data point</div>
              </div>
              {/* With knowledge graph */}
              <div className="rounded-lg border border-[rgba(0,128,128,0.15)] bg-[rgba(0,128,128,0.03)] p-4">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#008080]">With KTC&apos;s knowledge graph</div>
                <div className="text-sm leading-relaxed text-[#0f172a]">
                  The supply air temperature in <span className="font-medium text-[#008080]">AHU-3</span>,
                  serving <span className="font-medium text-[#008080]">zones 4–7 on floor 2</span>,
                  is <span className="font-medium text-[#DF4C4C]">1.2°C above setpoint</span> because
                  the cooling valve is 92% open and outdoor temperature exceeded
                  design conditions 40 minutes ago.
                </div>
                <div className="mt-2 text-xs text-[#008080]">→ Actionable intelligence</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Autonomy Levels */}
        <div className="mt-40 grid items-center gap-16 lg:grid-cols-2">
          {/* Visual — autonomy levels */}
          <div className="feature-card order-2 overflow-hidden rounded-xl p-1 lg:order-1">
            <div className="rounded-lg bg-[#f8fafc] p-6">
              <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">
                Autonomy Roadmap
              </div>
              {[
                { level: "0", name: "Manual", desc: "Humans control everything", status: "legacy" },
                { level: "1", name: "Assisted", desc: "Schedules, setpoints, alarms", status: "industry" },
                { level: "2", name: "Semi-Autonomous", desc: "Optimizes across systems, predicts demand", status: "current" },
                { level: "3", name: "Highly Autonomous", desc: "Self-optimizes building-wide, predictive maintenance", status: "next" },
                { level: "4", name: "Fully Autonomous", desc: "Self-driving building, zero manual intervention", status: "vision" },
              ].map((item) => (
                <div
                  key={item.level}
                  className={`mb-2 flex items-center gap-4 rounded-lg border px-4 py-3 ${
                    item.status === "current"
                      ? "border-[#008080]/20 bg-[rgba(0,128,128,0.04)]"
                      : item.status === "next"
                        ? "border-[rgba(0,128,128,0.1)] bg-white"
                        : "border-[rgba(0,0,0,0.04)] bg-white"
                  }`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                    item.status === "current"
                      ? "bg-[#008080] text-white"
                      : item.status === "next"
                        ? "bg-[rgba(0,128,128,0.1)] text-[#008080]"
                        : item.status === "vision"
                          ? "bg-[rgba(0,128,128,0.06)] text-[#00a3a3]"
                          : "bg-[#f1f5f9] text-[#94a3b8]"
                  }`}>
                    L{item.level}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-medium ${item.status === "current" ? "text-[#008080]" : "text-[#0f172a]"}`}>
                        {item.name}
                      </span>
                      {item.status === "current" && (
                        <span className="rounded-full bg-[#008080] px-2 py-0.5 text-[10px] font-medium text-white">
                          KTC today
                        </span>
                      )}
                      {item.status === "next" && (
                        <span className="rounded-full bg-[rgba(0,128,128,0.1)] px-2 py-0.5 text-[10px] font-medium text-[#008080]">
                          Near-term
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#475569]">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008080]">
              The Self-Driving Building
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl" style={{ letterSpacing: "-1px" }}>
              From controlled
              <br />
              <span className="text-[#94a3b8]">to autonomous.</span>
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#475569]">
              Just as the automotive industry defined levels of self-driving,
              buildings need a clear autonomy roadmap. The gap between Level 1
              and Level 4 isn&apos;t just better algorithms — it&apos;s a fundamentally
              different architecture.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Graph-reasoning + intelligent controllers",
                "AI agents reasoning on the knowledge graph",
                "Continuous learning, zero manual intervention",
                "Complete lifecycle awareness",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#475569]">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[rgba(0,128,128,0.08)]">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 6l3 3 5-5"
                        stroke="#008080"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
