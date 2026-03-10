import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Marcus Reinhardt",
    role: "VP Supply Chain, Siemens Energy",
    text: "Apex transformed our freight operations. We reduced transit costs by 31% while improving on-time delivery to 99.4%. Their AI routing is genuinely world-class.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "Director of Logistics, Unilever APAC",
    text: "The level of compliance expertise is unmatched. They navigated complex multi-country regulations that had been blocking our expansion for two years.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Chief Operating Officer, Dangote Industries",
    text: "From warehouse optimization to last-mile strategy, Apex delivered measurable results within the first quarter. A true enterprise partner.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Testimonials</span>
              <div className="line-accent" />
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground uppercase">
              Supply Chain Director Reviews
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-steel-dark/40 rounded-sm border border-border/10 p-8 relative"
            >
              <Quote className="text-accent/20 absolute top-6 right-6" size={40} />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="text-accent fill-accent" size={14} />
                ))}
              </div>
              <p className="text-steel-light text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
              <div>
                <p className="text-secondary-foreground font-heading text-sm font-semibold uppercase tracking-wider">{r.name}</p>
                <p className="text-steel-light text-xs mt-1">{r.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
