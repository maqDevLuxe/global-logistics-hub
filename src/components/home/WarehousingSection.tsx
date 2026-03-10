import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import warehouseImg from "@/assets/warehouse.jpg";
import { CheckCircle } from "lucide-react";

const points = [
  "Network design & facility location analysis",
  "Automated inventory management systems",
  "Cross-docking and just-in-time strategies",
  "Cold chain & hazmat-certified operations",
  "Robotic process automation integration",
];

const WarehousingSection = () => {
  return (
    <section className="bg-card section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal delay={0.1}>
            <div className="relative rounded-sm overflow-hidden">
              <img
                src={warehouseImg}
                alt="Modern enterprise warehouse with automated conveyor systems"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className="flex items-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Infrastructure</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground uppercase mb-6">
              Warehousing<br />Strategy
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Strategic facility planning and warehouse optimization across 450+ locations in 68 countries.
            </p>
            <ul className="space-y-4">
              {points.map((p, i) => (
                <motion.li
                  key={p}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="text-accent mt-0.5 shrink-0" size={18} />
                  <span className="text-foreground text-sm">{p}</span>
                </motion.li>
              ))}
            </ul>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
};

export default WarehousingSection;
