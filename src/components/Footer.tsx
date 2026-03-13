const footerLinks = {
  Products: ["Knowledge Graph", "DDC Controllers", "BMS Platform", "Metering / MDM", "Control Cards"],
  Services: ["Autonomy Design", "Project Management", "System Integration", "Graph Maintenance"],
  Company: ["About", "Blog", "Careers", "ASHRAE Standards", "Contact"],
  Resources: ["Documentation", "API Reference", "Security", "Newsletter"],
};

export function Footer() {
  return (
    <footer className="border-t border-[rgba(0,0,0,0.06)] bg-[#0f172a]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <svg className="h-5" viewBox="0 0 486 185" xmlns="http://www.w3.org/2000/svg">
                <g><clipPath id="fc1"><rect x="0" y="0" width="486" height="184.53"/></clipPath><g clipPath="url(#fc1)"><g transform="matrix(1,0,0,1,-4.37,-5.5)"><path d="M488.77,53.91C492.38,44.83 488.77,35.59 488.77,35.59C488.77,35.59 479.5,5.5 437.45,5.5C395.4,5.5 358.7,32 335.66,80.37C312.62,128.74 329.42,190 387.18,190C444.94,190 462.07,153.16 462.07,144L432.23,144C432.23,144 427.65,161.8 406.91,161.8C383.91,161.8 387.71,130.39 387.71,130.39C387.71,130.39 390.38,96.88 408.88,66.91C428,36 437.3,32.8 450.26,32.8C462.73,32.8 462.07,50.18 462.07,53.96L488.77,53.96L488.77,53.91Z" style={{fill:"#ffffff"}}/></g></g></g>
                <path d="M61.27,11.77L130.4,11.77L65.99,180.91L0,180.91L61.27,11.77Z" style={{fill:"#ffffff"}}/>
                <path d="M98.97,93.98L120.45,179.87L188,179.87L152.4,78.8L192.72,39.52L150.3,39.52L101.87,86.39L98.97,93.98Z" style={{fill:"#ffffff"}}/>
                <path d="M186.31,179.88L248.23,34.29L207.91,34.29L228.33,11.24L359.25,11.24L346.68,34.29L312.12,34.29L254.91,179.88L186.31,179.88Z" style={{fill:"#ffffff"}}/>
                <path d="M156.59,34.8L199,34.8L220.47,11.24L178.58,11.24L156.59,34.8Z" style={{fill:"#DF4C4C"}}/>
              </svg>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-white/30">
              Buildings that think for themselves. Swedish building technology
              for the autonomous era.
            </p>
            <div className="mt-6 flex gap-3">
              {["X", "GH", "LI"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-xs text-white/30 transition-colors hover:border-white/20 hover:text-white/50"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-widest text-white/50">
                {category}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/30 transition-colors hover:text-white/60"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} KTC. All rights reserved. Sweden.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/20 hover:text-white/40">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/20 hover:text-white/40">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
