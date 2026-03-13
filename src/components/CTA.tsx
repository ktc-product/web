export function CTA() {
  return (
    <section className="relative py-32">
      <div className="dot-grid absolute inset-0 opacity-40" />
      <div className="radial-fade absolute inset-0" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ letterSpacing: "-2px" }}>
          Your building is wasting energy{" "}
          <span className="gradient-text">right now.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-lg text-[#475569]">
          Buildings consume over 40% of the world&apos;s energy. They should be
          smart enough to fix that themselves. Let&apos;s make yours autonomous.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#008080] px-8 text-sm font-medium text-white transition-all hover:bg-[#006666] hover:shadow-lg"
            style={{ boxShadow: "0 4px 16px rgba(0,128,128,0.25)" }}
          >
            Book a demo
          </a>
          <a
            href="#"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[rgba(0,0,0,0.1)] px-8 text-sm font-medium text-[#475569] transition-all hover:border-[rgba(0,0,0,0.2)] hover:text-[#0f172a]"
          >
            Talk to our team
          </a>
        </div>
      </div>
    </section>
  );
}
