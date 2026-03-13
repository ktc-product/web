"use client";

import { useState, useRef, useEffect } from "react";

const productItems = [
  { title: "Knowledge Graph", description: "The semantic backbone of every KTC building" },
  { title: "DDC Controllers", description: "Intelligent edge controllers for HVAC systems" },
  { title: "BMS Platform", description: "Monitor, control, and optimize — powered by the graph" },
  { title: "Metering / MDM", description: "Meter data management with full graph context" },
  { title: "Control Cards", description: "Standardized sequences as graph objects" },
  { title: "System Integration", description: "Any vendor, any protocol, one graph" },
];

const serviceItems = [
  { title: "Project Management", description: "End-to-end delivery from modeling through commissioning" },
  { title: "Engineering", description: "Autonomy design and control architecture" },
  { title: "Support", description: "Ongoing graph maintenance and optimization" },
];

const resourceItems = [
  { title: "About", description: "Our mission and the team behind KTC" },
  { title: "Developers", description: "APIs, protocols, and graph integration" },
  { title: "Docs", description: "Technical guides and references" },
  { title: "Blog", description: "Insights on autonomous buildings" },
  { title: "Careers", description: "Join the team building the future" },
  { title: "ASHRAE Standards", description: "How we shape global HVAC guidelines" },
  { title: "Security", description: "Enterprise-grade data protection" },
  { title: "Contact", description: "Get in touch with our team" },
  { title: "Newsletter", description: "Autonomy roadmap updates monthly" },
];

type ActiveMenu = "product" | "services" | "resources" | null;

const dropdownContent: Record<"product" | "services" | "resources", typeof productItems> = {
  product: productItems,
  services: serviceItems,
  resources: resourceItems,
};

function MegaDropdown({ activeMenu }: { activeMenu: ActiveMenu }) {
  const open = activeMenu !== null;
  const items = activeMenu ? dropdownContent[activeMenu] : productItems;

  return (
    <div
      className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-2 transition-all duration-200 ${
        open
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-1 opacity-0"
      }`}
    >
      <div className="w-[720px] overflow-hidden rounded-2xl border border-[rgba(0,0,0,0.06)] bg-white p-3 shadow-xl shadow-black/[0.08]">
        <div className="grid grid-cols-3 gap-1">
          {items.map((item) => (
            <a
              key={item.title}
              href="#"
              className="rounded-xl px-5 py-4 transition-colors hover:bg-[#f1f5f9]"
            >
              <div className="mb-1.5 text-sm font-medium text-[#0f172a]">{item.title}</div>
              <div className="text-[13px] leading-snug text-[#475569]">
                {item.description}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

const simpleNavItems = [
  { label: "Customers", href: "#customers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const openMenu = (menu: ActiveMenu) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setActiveMenu(menu);
  };

  const scheduleClose = () => {
    closeTimeoutRef.current = setTimeout(() => setActiveMenu(null), 150);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[rgba(0,0,0,0.06)] bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <svg className="h-6" viewBox="0 0 486 185" xmlns="http://www.w3.org/2000/svg">
            <g><clipPath id="hc1"><rect x="0" y="0" width="486" height="184.53"/></clipPath><g clipPath="url(#hc1)"><g transform="matrix(1,0,0,1,-4.37,-5.5)"><path d="M488.77,53.91C492.38,44.83 488.77,35.59 488.77,35.59C488.77,35.59 479.5,5.5 437.45,5.5C395.4,5.5 358.7,32 335.66,80.37C312.62,128.74 329.42,190 387.18,190C444.94,190 462.07,153.16 462.07,144L432.23,144C432.23,144 427.65,161.8 406.91,161.8C383.91,161.8 387.71,130.39 387.71,130.39C387.71,130.39 390.38,96.88 408.88,66.91C428,36 437.3,32.8 450.26,32.8C462.73,32.8 462.07,50.18 462.07,53.96L488.77,53.96L488.77,53.91Z" style={{fill:"#008080"}}/></g></g></g>
            <path d="M61.27,11.77L130.4,11.77L65.99,180.91L0,180.91L61.27,11.77Z" style={{fill:"#008080"}}/>
            <path d="M98.97,93.98L120.45,179.87L188,179.87L152.4,78.8L192.72,39.52L150.3,39.52L101.87,86.39L98.97,93.98Z" style={{fill:"#008080"}}/>
            <path d="M186.31,179.88L248.23,34.29L207.91,34.29L228.33,11.24L359.25,11.24L346.68,34.29L312.12,34.29L254.91,179.88L186.31,179.88Z" style={{fill:"#008080"}}/>
            <path d="M156.59,34.8L199,34.8L220.47,11.24L178.58,11.24L156.59,34.8Z" style={{fill:"#DF4C4C"}}/>
          </svg>
        </a>

        {/* Desktop Nav — centered */}
        <nav
          className="relative hidden items-center gap-0.5 md:flex"
          onMouseLeave={scheduleClose}
        >
          {(["product", "services", "resources"] as const).map((menu) => (
            <button
              key={menu}
              className={`rounded-full px-4 py-1.5 text-sm capitalize transition-colors ${
                activeMenu === menu
                  ? "bg-[rgba(0,128,128,0.08)] text-[#008080]"
                  : "text-[#475569] hover:text-[#0f172a]"
              }`}
              onMouseEnter={() => openMenu(menu)}
            >
              {{ product: "Products", services: "Services", resources: "Resources" }[menu]}
            </button>
          ))}

          {simpleNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-full px-4 py-1.5 text-sm text-[#475569] transition-colors hover:text-[#0f172a]"
              onMouseEnter={() => openMenu(null)}
            >
              {item.label}
            </a>
          ))}

          <MegaDropdown activeMenu={activeMenu} />
        </nav>

        {/* Right side */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#"
            className="text-sm text-[#475569] transition-colors hover:text-[#0f172a]"
          >
            Log in
          </a>
          <div className="h-4 w-px bg-[rgba(0,0,0,0.1)]" />
          <a
            href="#"
            className="rounded-full bg-[#008080] px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#006666]"
          >
            Book a demo
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="flex h-8 w-8 items-center justify-center rounded-md text-[#475569] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {mobileOpen ? (
              <path d="M4 4L14 14M14 4L4 14" />
            ) : (
              <path d="M2 4.5H16M2 9H16M2 13.5H16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-[rgba(0,0,0,0.06)] bg-white px-6 py-4 md:hidden">
          <div className="mb-3">
            <div className="mb-2 text-xs font-medium uppercase tracking-widest text-[#94a3b8]">
              Products
            </div>
            {productItems.map((item) => (
              <a
                key={item.title}
                href="#"
                className="block py-2"
              >
                <div className="text-sm font-medium text-[#0f172a]">{item.title}</div>
                <div className="text-sm text-[#475569]">{item.description}</div>
              </a>
            ))}
          </div>
          <div className="mb-3 border-t border-[rgba(0,0,0,0.06)] pt-3">
            <div className="mb-2 text-xs font-medium uppercase tracking-widest text-[#94a3b8]">
              Services
            </div>
            {serviceItems.map((item) => (
              <a
                key={item.title}
                href="#"
                className="block py-2"
              >
                <div className="text-sm font-medium text-[#0f172a]">{item.title}</div>
                <div className="text-sm text-[#475569]">{item.description}</div>
              </a>
            ))}
          </div>
          <div className="mb-3 border-t border-[rgba(0,0,0,0.06)] pt-3">
            <div className="mb-2 text-xs font-medium uppercase tracking-widest text-[#94a3b8]">
              Resources
            </div>
            {resourceItems.map((item) => (
              <a
                key={item.title}
                href="#"
                className="block py-2"
              >
                <div className="text-sm font-medium text-[#0f172a]">{item.title}</div>
                <div className="text-sm text-[#475569]">{item.description}</div>
              </a>
            ))}
          </div>
          <div className="border-t border-[rgba(0,0,0,0.06)] pt-3">
            {simpleNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-sm text-[#475569] hover:text-[#0f172a]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t border-[rgba(0,0,0,0.06)] pt-4">
            <a href="#" className="text-sm text-[#475569]">Log in</a>
            <a
              href="#"
              className="inline-flex w-fit rounded-full bg-[#008080] px-4 py-1.5 text-sm font-medium text-white"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
