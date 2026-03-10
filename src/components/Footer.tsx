import { Link } from "react-router-dom";
import { Anchor, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center">
                <span className="font-heading text-accent-foreground text-xl font-bold">A</span>
              </div>
              <span className="font-heading text-lg font-semibold tracking-wider uppercase">
                Apex Logistics
              </span>
            </div>
            <p className="text-steel-light text-sm leading-relaxed">
              Enterprise-grade logistics consulting powering the world's most complex supply chains across 120+ countries.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase mb-6 text-accent">Solutions</h4>
            <ul className="space-y-3 text-sm text-steel-light">
              <li><Link to="/solutions" className="hover:text-accent transition-colors">Supply Chain Optimization</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition-colors">AI Freight Routing</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition-colors">Warehousing Strategy</Link></li>
              <li><Link to="/solutions" className="hover:text-accent transition-colors">Trade Compliance</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase mb-6 text-accent">Company</h4>
            <ul className="space-y-3 text-sm text-steel-light">
              <li><Link to="/" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/global-network" className="hover:text-accent transition-colors">Global Network</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm tracking-widest uppercase mb-6 text-accent">Contact</h4>
            <ul className="space-y-3 text-sm text-steel-light">
              <li className="flex items-center gap-2"><MapPin size={14} /> Rotterdam, Netherlands</li>
              <li className="flex items-center gap-2"><Phone size={14} /> +31 10 799 0000</li>
              <li className="flex items-center gap-2"><Mail size={14} /> info@apexlogistics.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-steel-light">© 2026 Apex Logistics Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6 text-xs text-steel-light">
            <span className="hover:text-accent transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-accent transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
