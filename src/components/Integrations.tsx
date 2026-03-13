const protocols = [
  { name: "BACnet", icon: "BA" },
  { name: "Modbus", icon: "MB" },
  { name: "KNX", icon: "KX" },
  { name: "MQTT", icon: "MQ" },
  { name: "OPC-UA", icon: "UA" },
  { name: "LON", icon: "LN" },
  { name: "M-Bus", icon: "MB" },
  { name: "REST API", icon: "AP" },
];

export function Integrations() {
  return (
    <section id="integrations" className="relative py-32">
      <div className="glow-line mx-auto mb-32 max-w-xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[2px] text-[#008080]">
            Open Integration
          </p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ letterSpacing: "-1.5px" }}>
            Any vendor. Any protocol.
            <br />
            <span className="text-[#94a3b8]">One knowledge graph.</span>
          </h2>
          <p className="mt-4 text-lg text-[#475569]">
            Connect any building system into the unified knowledge graph.
            No vendor lock-in, no black boxes. Your building&apos;s intelligence
            belongs to you.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {protocols.map((protocol, i) => (
            <div
              key={`${protocol.name}-${i}`}
              className="feature-card flex flex-col items-center gap-3 rounded-xl p-6 text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[rgba(0,128,128,0.08)] font-mono text-sm font-bold text-[#008080]">
                {protocol.icon}
              </div>
              <span className="text-sm font-medium text-[#475569]">{protocol.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
