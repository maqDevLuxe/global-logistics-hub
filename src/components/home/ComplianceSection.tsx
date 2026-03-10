import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { FileCheck, AlertTriangle, Globe2, Scale } from "lucide-react";

const services = [
  { icon: FileCheck, title: "Customs Documentation", desc: "Automated document generation and compliance verification for 190+ countries." },
  { icon: AlertTriangle, title: "Sanctions Screening", desc: "Real-time screening against 40+ global sanction lists and denied parties." },
  { icon: Globe2, title: "FTA Optimization", desc: "Maximize free trade agreement benefits across your supply network." },
  { icon: Scale, title: "Tariff Classification", desc: "AI-assisted HS code classification with 99.7% accuracy rate." },
];

const ComplianceSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Regulatory</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground uppercase mb-4">
              Global Trade Compliance
            </h2>
            <p className="text-steel-light text-lg max-w-2xl mx-auto">
              Navigate the complex web of international trade regulations with confidence.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="flex gap-6 p-8 bg-steel-dark/40 rounded-sm border border-border/10 hover:border-accent/30 transition-colors"
            >
              <s.icon className="text-accent shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-wider mb-2 text-secondary-foreground">{s.title}</h3>
                <p className="text-steel-light text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;
