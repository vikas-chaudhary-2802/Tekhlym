import { Link } from "react-router-dom";
import { Phone, Mail, ArrowUpRight } from "lucide-react";
import logo from "@/assets/tekhlym-logo.png";

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/tekhlym", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
  )},
  { label: "Twitter", href: "https://twitter.com/tekhlym", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
  )},
  { label: "Instagram", href: "https://instagram.com/tekhlym", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
  )},
  { label: "YouTube", href: "https://youtube.com/@tekhlym", icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
  )},
];

const Footer = () => {
  return (
    <footer className="relative border-t border-border/50 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container-wide section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Tekhlym" className="h-8 w-auto" />
              <h3 className="text-lg font-bold text-foreground">Tekhlym</h3>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              Education Technology Holding Company — building and scaling future-ready learning platforms.
            </p>
            <div className="flex flex-col gap-2 mt-5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={14} className="text-primary" />
                <a href="tel:+917628928150" className="hover:text-primary transition-colors">
                  +91 76289 28150
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} className="text-primary" />
                <a href="mailto:info@tekhlym.com" className="hover:text-primary transition-colors">
                  info@tekhlym.com
                </a>
              </div>
            </div>
            {/* Social Media */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "About", href: "/about" },
                { label: "Ventures", href: "/ventures" },
                { label: "Approach", href: "/approach" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Partnerships", href: "/partnerships" },
                { label: "Careers", href: "/careers" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.href} to={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group">
                  {l.label}
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Tekhlym. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full animated-gradient animate-pulse-glow" />
            <span className="text-xs text-muted-foreground">Building the future of education</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
