const stats = [
  { value: "40%", label: "of global energy consumed by buildings" },
  { value: "24/7", label: "autonomous monitoring & optimization" },
  { value: "Net-0", label: "carbon target through graph intelligence" },
  { value: "L2→L4", label: "building autonomy roadmap" },
];

export function LogoCloud() {
  return (
    <section className="border-y border-[rgba(0,0,0,0.06)] py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-[#008080] sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-[#94a3b8]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
