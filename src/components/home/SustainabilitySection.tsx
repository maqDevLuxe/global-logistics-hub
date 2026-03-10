import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Leaf, Droplets, Wind, Recycle } from "lucide-react";

const initiatives = [
  { icon: Leaf, title: "Carbon-Neutral Shipping", desc: "Partnered with leading carriers to offer net-zero emission routes on 60% of global lanes." },
  { icon: Droplets, title: "Clean Fuel Transition", desc: "Supporting LNG and methanol-powered vessel adoption across our carrier network." },
  { icon: Wind, title: "Renewable Energy Hubs", desc: "Solar and wind-powered warehousing facilities reducing operational emissions by 45%." },
  { icon: Recycle, title: "Circular Logistics", desc: "Reverse logistics solutions enabling closed-loop supply chains for packaging and returns." },
];

const SustainabilitySection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Green Freight</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase mb-4">
              Sustainable Logistics
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Committed to decarbonizing global supply chains without compromising performance.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="glass-card p-8 text-center magnetic-hover"
            >
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-accent" size={26} />
              </div>
              <h3 className="font-heading text-base font-semibold uppercase tracking-wider mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
