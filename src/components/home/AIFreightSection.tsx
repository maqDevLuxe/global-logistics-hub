import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Brain, Globe, Clock, Shield } from "lucide-react";

const AIFreightSection = () => {
  return (
    <section className="bg-card section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">AI-Powered</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase mb-6">
              Intelligent<br />Freight Routing
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our proprietary AI engine analyzes 50+ variables in real-time — port congestion, weather, tariff changes, fuel costs — to determine the optimal route for every single shipment.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: "Neural Network Optimization" },
                { icon: Globe, label: "Multi-Modal Global Routing" },
                { icon: Clock, label: "Real-Time Rerouting" },
                { icon: Shield, label: "Risk-Adjusted Pathways" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <item.icon className="text-accent mt-0.5 shrink-0" size={18} />
                  <span className="text-sm text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="relative">
              <div className="bg-secondary rounded-sm p-8">
                <div className="space-y-4">
                  {[
                    { route: "Shanghai → Rotterdam", saving: "23%", time: "18 days" },
                    { route: "LA → Hamburg", saving: "31%", time: "21 days" },
                    { route: "Singapore → Felixstowe", saving: "19%", time: "24 days" },
                  ].map((r, i) => (
                    <motion.div
                      key={r.route}
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.15 }}
                      className="flex items-center justify-between p-4 bg-steel-dark/50 rounded-sm border-l-2 border-l-accent"
                    >
                      <div>
                        <p className="text-secondary-foreground font-heading text-sm uppercase tracking-wider">{r.route}</p>
                        <p className="text-steel-light text-xs mt-1">Est. transit: {r.time}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-accent font-heading text-2xl font-bold">{r.saving}</span>
                        <p className="text-steel-light text-xs">cost saved</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default AIFreightSection;
