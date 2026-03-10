import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <SectionReveal>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="line-accent" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Get Started</span>
            <div className="line-accent" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase mb-6">
            Ready to Optimize<br />Your Supply Chain?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Request a complimentary supply chain audit and discover how we can reduce costs, improve efficiency, and future-proof your logistics network.
          </p>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading text-base tracking-wider uppercase px-10 py-5 rounded-sm hover:bg-safety-light transition-colors"
            >
              Request Your Free Audit <ArrowRight size={18} />
            </Link>
          </motion.div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default CTASection;
