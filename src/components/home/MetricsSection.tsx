import SectionReveal from "@/components/SectionReveal";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const metrics = [
  { value: 34, suffix: "%", label: "Average Cost Reduction" },
  { value: 47, suffix: "%", label: "Faster Transit Times" },
  { value: 99.2, suffix: "%", label: "On-Time Delivery Rate" },
  { value: 28, suffix: "%", label: "Carbon Footprint Reduction" },
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.round(current * 10) / 10);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="counter-value">
      {count}{suffix}
    </span>
  );
};

const MetricsSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Proven Results</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground uppercase">
              Efficiency at Scale
            </h2>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <AnimatedCounter value={m.value} suffix={m.suffix} />
              <p className="text-steel-light text-sm tracking-wider uppercase mt-2 font-heading">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
