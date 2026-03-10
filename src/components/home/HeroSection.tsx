import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-port.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="line-accent" />
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">
              Enterprise Logistics Consulting
            </span>
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground leading-[1.05] mb-6 uppercase">
            Powering Global
            <br />
            <span className="text-accent">Supply Chain</span>
            <br />
            Excellence
          </h1>

          <p className="text-steel-light text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            AI-driven freight optimization, multinational compliance, and end-to-end logistics strategy for Fortune 500 enterprises.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-accent text-accent-foreground font-heading text-sm tracking-wider uppercase px-8 py-4 rounded-sm hover:bg-safety-light transition-all inline-flex items-center gap-2 justify-center"
            >
              Request Supply Chain Audit <ArrowRight size={16} />
            </Link>
            <Link
              to="/solutions"
              className="border border-steel-light/30 text-secondary-foreground font-heading text-sm tracking-wider uppercase px-8 py-4 rounded-sm hover:border-accent hover:text-accent transition-all text-center"
            >
              Our Solutions
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-12 right-6 lg:right-12 hidden md:flex flex-col items-end gap-1"
        >
          <span className="font-heading text-6xl font-bold text-accent">120+</span>
          <span className="text-steel-light text-sm tracking-wider uppercase">Countries Served</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
