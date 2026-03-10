import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    name: "Europe",
    hq: "Rotterdam, Netherlands",
    offices: 18,
    warehouses: 120,
    countries: ["Netherlands", "Germany", "UK", "France", "Poland", "Spain", "Italy", "Sweden"],
  },
  {
    name: "Asia Pacific",
    hq: "Singapore",
    offices: 14,
    warehouses: 180,
    countries: ["Singapore", "China", "Japan", "South Korea", "India", "Australia", "Vietnam", "Thailand"],
  },
  {
    name: "Americas",
    hq: "Houston, USA",
    offices: 12,
    warehouses: 95,
    countries: ["United States", "Canada", "Mexico", "Brazil", "Colombia", "Chile", "Argentina"],
  },
  {
    name: "Middle East & Africa",
    hq: "Dubai, UAE",
    offices: 8,
    warehouses: 55,
    countries: ["UAE", "Saudi Arabia", "South Africa", "Nigeria", "Kenya", "Egypt", "Morocco"],
  },
];

const GlobalNetwork = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-secondary pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Worldwide Presence</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-secondary-foreground uppercase mb-6">
              Global Network
            </h1>
            <p className="text-steel-light text-xl max-w-2xl">
              Operating across 120+ countries with 52 offices and 450+ warehouse facilities worldwide.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-card section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-20">
            {[
              { value: "120+", label: "Countries" },
              { value: "52", label: "Offices" },
              { value: "450+", label: "Warehouses" },
              { value: "8,500+", label: "Team Members" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <span className="counter-value">{stat.value}</span>
                <p className="text-muted-foreground text-sm tracking-wider uppercase mt-2 font-heading">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regions.map((region, i) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 border-l-4 border-l-accent"
              >
                <h3 className="font-heading text-2xl font-bold uppercase tracking-wider text-foreground mb-2">{region.name}</h3>
                <p className="flex items-center gap-2 text-accent text-sm mb-4">
                  <MapPin size={14} /> Regional HQ: {region.hq}
                </p>
                <div className="flex gap-6 mb-4">
                  <div>
                    <span className="font-heading text-2xl font-bold text-accent">{region.offices}</span>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Offices</p>
                  </div>
                  <div>
                    <span className="font-heading text-2xl font-bold text-accent">{region.warehouses}</span>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">Warehouses</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((c) => (
                    <span key={c} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-sm">{c}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GlobalNetwork;
