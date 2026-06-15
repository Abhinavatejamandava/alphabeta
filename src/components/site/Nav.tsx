import { useState } from "react";
import { Link } from "@tanstack/react-router";

const navLinks = [
  { to: "/it-systems", label: "IT Systems" },
  { to: "/engineering", label: "Engineering" },
  { to: "/resumes", label: "Resumes" },
  { to: "/security", label: "Security" },
  { to: "/refund", label: "Refund" },
];

export function TopBar() {
  return (
    <div className="bg-brand-navy text-white py-2 px-6 flex justify-between items-center text-[11px] font-mono tracking-wider">
      <span className="flex items-center gap-2">
        <span className="size-2 bg-brand-emerald rounded-full animate-pulse" />
        ISO 27001 CERTIFIED · USCIS E-VERIFY+ ACTIVE
      </span>
      <span className="hidden md:block">AES-256 DATA ENCRYPTION ACTIVE</span>
    </div>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="border-b border-hairline px-6 py-5 flex justify-between items-center sticky top-0 bg-background/85 backdrop-blur-md z-40">
      <Link to="/" className="flex items-center gap-2">
        <div className="size-8 bg-brand-blue flex items-center justify-center text-white font-bold text-lg">α</div>
        <span className="font-bold text-xl tracking-tight uppercase">
          Alpha-Beta <span className="font-light">Solutions</span>
        </span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className="hover:text-brand-blue transition-colors"
            activeProps={{ className: "text-brand-blue" }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 text-brand-navy"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <svg className="size-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-hairline px-6 py-4 md:hidden shadow-brand">
          <div className="flex flex-col gap-4 text-sm font-medium text-muted-foreground">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-brand-blue transition-colors py-2"
                activeProps={{ className: "text-brand-blue" }}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="size-6 bg-brand-blue flex items-center justify-center text-white font-bold text-sm">α</div>
            <span className="font-bold text-lg tracking-tight uppercase">Alpha-Beta Solutions</span>
          </div>
          <p className="text-white/55 max-w-sm text-sm leading-relaxed">
            USCIS E-Verify+ enrolled · Employment Commission partner. We protect candidate and client data with globally recognized security practices across digital and engineering domains.
          </p>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] font-mono text-white/40">Services</h5>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/it-systems" className="hover:text-white">IT Systems</Link></li>
            <li><Link to="/engineering" className="hover:text-white">Engineering</Link></li>
            <li><Link to="/resumes" className="hover:text-white">Resume Engineering</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-6 text-xs uppercase tracking-[0.2em] font-mono text-white/40">Trust Center</h5>
          <ul className="space-y-3 text-sm text-white/70">
            <li><Link to="/security" className="hover:text-white">Security Protocol</Link></li>
            <li><Link to="/refund" className="hover:text-white">Refund Policy</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/compliance" className="hover:text-white">Compliance</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-white/40">
        <span>© 2026 ALPHA-BETA SOLUTIONS LTD. ALL RIGHTS RESERVED.</span>
        <div className="flex gap-6 uppercase">
          <span>Status: Operational</span>
          <span>Latency: 24ms</span>
          <span>v1.0.4</span>
        </div>
      </div>
    </footer>
  );
}
