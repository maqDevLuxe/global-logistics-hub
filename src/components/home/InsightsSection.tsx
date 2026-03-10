import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    tag: "AI & Automation",
    title: "How Machine Learning is Reshaping Last-Mile Delivery in 2026",
    date: "Feb 2026",
    excerpt: "Deep dive into neural network models that predict delivery windows with 97% accuracy.",
  },
  {
    tag: "Trade Policy",
    title: "Navigating the New EU Carbon Border Adjustment Mechanism",
    date: "Jan 2026",
    excerpt: "What enterprises need to know about CBAM compliance and carbon reporting requirements.",
  },
  {
    tag: "Strategy",
    title: "Building Resilient Supply Chains in an Era of Geopolitical Uncertainty",
    date: "Dec 2025",
    excerpt: "Frameworks for de-risking your logistics network while maintaining cost efficiency.",
  },
];

const InsightsSection = () => {
  return (
    <section className="bg-secondary section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="line-accent" />
                <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Knowledge</span>
              </div>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-secondary-foreground uppercase">
                Logistics Insights
              </h2>
            </div>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-steel-dark/40 rounded-sm border border-border/10 p-8 flex flex-col cursor-pointer hover:border-accent/30 transition-colors"
            >
              <span className="text-accent font-heading text-xs tracking-[0.2em] uppercase mb-4">{a.tag}</span>
              <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-secondary-foreground mb-3 leading-snug">
                {a.title}
              </h3>
              <p className="text-steel-light text-sm leading-relaxed mb-6 flex-grow">{a.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-steel-light">
                <span className="flex items-center gap-1"><Calendar size={12} /> {a.date}</span>
                <span className="flex items-center gap-1 text-accent">Read more <ArrowRight size={12} /></span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
