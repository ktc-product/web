export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20">
      {/* Background effects */}
      <div className="radial-fade absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Badge */}
        <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(0,128,128,0.2)] bg-white px-4 py-1.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-[#DF4C4C]" />
          <span className="text-xs font-medium text-[#008080]">
            Physical AI for Buildings — The autonomous era begins
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-up-delay-1 mx-auto max-w-4xl text-5xl font-bold leading-[1.1] tracking-tight sm:text-6xl md:text-7xl" style={{ letterSpacing: "-2px" }}>
          Buildings That{" "}
          <span className="gradient-text">Think For Themselves</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#475569] sm:text-xl">
          KTC develops controllers, BMS software, and metering solutions that
          don&apos;t just monitor your building — they understand it. Powered by a
          knowledge graph that makes every system smarter.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#008080] px-8 text-sm font-medium text-white transition-all hover:bg-[#006666] hover:shadow-lg"
            style={{ boxShadow: "0 4px 16px rgba(0,128,128,0.25)" }}
          >
            Book a demo
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[rgba(0,0,0,0.1)] px-8 text-sm font-medium text-[#475569] transition-all hover:border-[rgba(0,0,0,0.2)] hover:text-[#0f172a]"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
            Explore the knowledge graph
          </a>
        </div>

        {/* Hero visual — building dashboard mockup */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-1 shadow-xl shadow-black/[0.06]">
            <div className="overflow-hidden rounded-xl bg-[#f8fafc]">
              {/* Window chrome */}
              <div className="flex items-center gap-2 border-b border-[rgba(0,0,0,0.06)] bg-white px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#DF4C4C]/40" />
                <div className="h-3 w-3 rounded-full bg-[#f59e0b]/40" />
                <div className="h-3 w-3 rounded-full bg-[#008080]/40" />
                <div className="ml-4 h-5 w-64 rounded bg-[#f1f5f9]" />
              </div>
              {/* Content area */}
              <div className="grid grid-cols-12 gap-0">
                {/* Sidebar — building systems */}
                <div className="col-span-3 border-r border-[rgba(0,0,0,0.06)] bg-white p-4">
                  <div className="mb-6 flex items-center gap-2">
                    <div className="h-5 w-5 rounded bg-[rgba(0,128,128,0.15)]" />
                    <div className="text-xs font-medium text-[#0f172a]">Building A</div>
                  </div>
                  {[
                    { label: "AHU-1", active: false },
                    { label: "AHU-2", active: false },
                    { label: "Chiller Plant", active: true },
                    { label: "Boiler Room", active: false },
                    { label: "VAV Zones", active: false },
                    { label: "Metering", active: false },
                    { label: "Schedules", active: false },
                    { label: "Alarms", active: false },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className={`mb-1 flex items-center gap-2 rounded-md px-2 py-1.5 ${
                        item.active
                          ? "bg-[rgba(0,128,128,0.06)]"
                          : ""
                      }`}
                    >
                      <div className={`h-3.5 w-3.5 rounded ${item.active ? "bg-[#008080]/20" : "bg-[#e2e8f0]"}`} />
                      <span className={`text-xs ${item.active ? "font-medium text-[#008080]" : "text-[#94a3b8]"}`}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                {/* Main content — graph visualization hint */}
                <div className="col-span-9 p-6">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-[#0f172a]">Knowledge Graph</div>
                      <div className="text-xs text-[#94a3b8]">Chiller Plant — 12 nodes, 24 relationships</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="rounded-md bg-[#f1f5f9] px-3 py-1 text-xs text-[#475569]">Graph</div>
                      <div className="rounded-md bg-[rgba(0,128,128,0.08)] px-3 py-1 text-xs font-medium text-[#008080]">Live</div>
                    </div>
                  </div>
                  {/* Graph nodes mockup */}
                  <div className="relative h-52">
                    {/* Connection lines */}
                    <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                      <line x1="50%" y1="15%" x2="25%" y2="45%" stroke="#008080" strokeWidth="1.5" opacity="0.2" />
                      <line x1="50%" y1="15%" x2="75%" y2="45%" stroke="#008080" strokeWidth="1.5" opacity="0.2" />
                      <line x1="25%" y1="45%" x2="15%" y2="80%" stroke="#008080" strokeWidth="1.5" opacity="0.2" />
                      <line x1="25%" y1="45%" x2="40%" y2="80%" stroke="#008080" strokeWidth="1.5" opacity="0.2" />
                      <line x1="75%" y1="45%" x2="60%" y2="80%" stroke="#008080" strokeWidth="1.5" opacity="0.2" />
                      <line x1="75%" y1="45%" x2="85%" y2="80%" stroke="#008080" strokeWidth="1.5" opacity="0.2" />
                    </svg>
                    {/* Nodes */}
                    {[
                      { label: "Chiller-1", x: "50%", y: "8%", primary: true },
                      { label: "Supply Pump", x: "25%", y: "38%", primary: false },
                      { label: "Cooling Tower", x: "75%", y: "38%", primary: false },
                      { label: "Valve CV-01", x: "15%", y: "73%", primary: false },
                      { label: "Meter EM-3", x: "40%", y: "73%", primary: false },
                      { label: "Sensor TS-04", x: "60%", y: "73%", primary: false },
                      { label: "VFD-02", x: "85%", y: "73%", primary: false },
                    ].map((node) => (
                      <div
                        key={node.label}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-lg border px-3 py-1.5 text-xs font-medium ${
                          node.primary
                            ? "border-[#008080]/30 bg-[rgba(0,128,128,0.08)] text-[#008080]"
                            : "border-[rgba(0,0,0,0.06)] bg-white text-[#475569] shadow-sm"
                        }`}
                        style={{ left: node.x, top: node.y }}
                      >
                        {node.label}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom gradient fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#fafbfc] to-transparent" />
        </div>
      </div>
    </section>
  );
}
