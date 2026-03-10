import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { TrendingUp, Route, BarChart3, Zap } from "lucide-react";

const features = [
  { icon: TrendingUp, title: "Demand Forecasting", desc: "ML-powered demand prediction models reducing inventory costs by 34%." },
  { icon: Route, title: "Route Optimization", desc: "Dynamic multi-modal routing across sea, air, rail, and road networks." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live dashboards tracking 2.3M+ shipments across your global network." },
  { icon: Zap, title: "Rapid Integration", desc: "Plug into existing ERP, WMS, and TMS systems within 4 weeks." },
];

const SupplyChainSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <div className="line-accent" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Core Capabilities</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground uppercase mb-6">
            Supply Chain<br />Optimization
          </h2>
          <p className="text-steel-light text-lg max-w-2xl mb-16">
            End-to-end visibility and control across every node in your logistics network.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="industrial-card p-8"
            >
              <f.icon className="text-accent mb-4" size={32} />
              <h3 className="font-heading text-lg font-semibold uppercase tracking-wider mb-3 text-secondary-foreground">
                {f.title}
              </h3>
              <p className="text-steel-light text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupplyChainSection;
