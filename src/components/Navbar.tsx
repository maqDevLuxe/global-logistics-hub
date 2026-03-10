import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Solutions", path: "/solutions" },
  { label: "Global Network", path: "/global-network" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-secondary/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-12 h-20">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
            <span className="font-heading text-accent-foreground text-xl font-bold">A</span>
          </div>
          <span className="font-heading text-xl font-semibold tracking-wider text-secondary-foreground uppercase">
            Apex Logistics
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-heading text-sm tracking-widest uppercase transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-accent"
                  : "text-steel-light hover:text-accent"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-accent text-accent-foreground font-heading text-sm tracking-wider uppercase px-6 py-2.5 rounded-sm hover:bg-safety-light transition-colors"
          >
            Request Audit
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-secondary-foreground"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-border/20"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-heading text-sm tracking-widest uppercase text-steel-light hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="bg-accent text-accent-foreground font-heading text-sm tracking-wider uppercase px-6 py-2.5 rounded-sm text-center mt-2"
              >
                Request Audit
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
