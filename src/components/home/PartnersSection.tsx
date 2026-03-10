import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";

const partners = [
  "Maersk", "DHL", "FedEx", "CMA CGM", "Hapag-Lloyd", "DB Schenker", "Kuehne+Nagel", "COSCO"
];

const PartnersSection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className="text-center text-sm tracking-[0.3em] uppercase text-muted-foreground font-heading mb-12">
            Trusted by industry leaders worldwide
          </p>
        </SectionReveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center h-20 glass-card px-6 cursor-default"
            >
              <span className="font-heading text-lg tracking-wider text-muted-foreground font-medium uppercase">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
