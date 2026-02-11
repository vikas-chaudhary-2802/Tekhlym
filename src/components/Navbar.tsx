import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/tekhylym main Logo.png";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Ventures", href: "/ventures" },
  { label: "Approach", href: "/approach" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <img src={logo} alt="Tekhlym Global" className="h-9 md:h-10 w-auto" />
          <span className="text-lg md:text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
            Tekhlym
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                pathname === link.href
                  ? "text-primary bg-primary/8"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-primary rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground rounded-lg hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-b border-border/50"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setOpen(false)}
                    className={`block text-sm font-medium py-3 px-4 rounded-lg transition-all ${
                      pathname === link.href
                        ? "text-primary bg-primary/8"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
