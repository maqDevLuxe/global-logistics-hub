import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SectionReveal from "@/components/SectionReveal";

const counters = [
  { value: 14.2, suffix: "M", label: "Tons Moved Annually" },
  { value: 2.3, suffix: "M", label: "Shipments Tracked" },
  { value: 450, suffix: "+", label: "Warehouse Locations" },
  { value: 68, suffix: "", label: "Countries Operated" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2200;
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

const CountersSection = () => {
  return (
    <section className="bg-card section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">By The Numbers</span>
          </div>
        </SectionReveal>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {counters.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="text-center"
            >
              <Counter value={c.value} suffix={c.suffix} />
              <p className="text-muted-foreground text-sm tracking-wider uppercase mt-3 font-heading">{c.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountersSection;
