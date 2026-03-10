import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { TrendingUp, Route, BarChart3, Zap, Brain, Globe2, Warehouse, FileCheck, Leaf, Ship, Plane, Truck } from "lucide-react";

const solutions = [
  { icon: TrendingUp, title: "Supply Chain Optimization", desc: "End-to-end visibility and ML-powered demand forecasting reducing inventory costs by up to 34%. We analyze every node in your logistics network to eliminate inefficiencies." },
  { icon: Brain, title: "AI Freight Routing", desc: "Proprietary neural network analyzing 50+ real-time variables to determine optimal shipping routes. Delivers average cost savings of 23% across global lanes." },
  { icon: Warehouse, title: "Warehousing Strategy", desc: "Network design, facility location analysis, and automation integration across 450+ locations. From cross-docking to cold chain operations." },
  { icon: FileCheck, title: "Trade Compliance", desc: "Automated customs documentation, sanctions screening, FTA optimization, and AI-assisted tariff classification with 99.7% accuracy." },
  { icon: Route, title: "Multi-Modal Transport", desc: "Seamless integration of sea, air, rail, and road transport. Dynamic mode-shifting based on cost, time, and environmental impact." },
  { icon: BarChart3, title: "Real-Time Analytics", desc: "Live dashboards tracking 2.3M+ shipments. Predictive analytics for disruption management and proactive decision-making." },
  { icon: Leaf, title: "Green Freight", desc: "Carbon-neutral shipping options, clean fuel transition support, and circular logistics solutions for sustainable operations." },
  { icon: Zap, title: "Digital Integration", desc: "Rapid plug-in to existing ERP, WMS, and TMS systems within 4 weeks. API-first architecture for seamless data flow." },
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-secondary pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">What We Do</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-secondary-foreground uppercase mb-6">
              Our Solutions
            </h1>
            <p className="text-steel-light text-xl max-w-2xl">
              Comprehensive logistics consulting services designed to transform enterprise supply chains at global scale.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-card section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="glass-card p-8 border-l-4 border-l-accent"
              >
                <s.icon className="text-accent mb-4" size={32} />
                <h3 className="font-heading text-xl font-semibold uppercase tracking-wider mb-3 text-foreground">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground uppercase mb-4">
                How We Deliver
              </h2>
              <p className="text-steel-light text-lg max-w-2xl mx-auto">
                A proven methodology honed over 20 years and 500+ enterprise engagements.
              </p>
            </div>
          </SectionReveal>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", desc: "Deep-dive audit of your current logistics operations and pain points." },
              { step: "02", title: "Design", desc: "Custom strategy blueprint with clear KPIs and implementation roadmap." },
              { step: "03", title: "Deploy", desc: "Phased rollout with dedicated project team and change management." },
              { step: "04", title: "Optimize", desc: "Continuous improvement with AI-driven insights and quarterly reviews." },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <span className="font-heading text-5xl font-bold text-accent">{item.step}</span>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-secondary-foreground mt-4 mb-2">{item.title}</h3>
                <p className="text-steel-light text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
