import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import aerialImg from "@/assets/aerial-port.jpg";

const AerialPortSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] min-h-[400px] overflow-hidden">
      <motion.div
        style={{ y }}
        className="absolute inset-0 -top-20 -bottom-20"
      >
        <img
          src={aerialImg}
          alt="Aerial view of a massive global logistics port at golden hour"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-secondary/50" />
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-foreground uppercase text-center leading-tight"
        >
          Infrastructure That<br />
          <span className="text-accent">Moves the World</span>
        </motion.h2>
      </div>
    </section>
  );
};

export default AerialPortSection;
