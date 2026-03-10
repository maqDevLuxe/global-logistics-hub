import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="bg-secondary pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <SectionReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="line-accent" />
              <span className="font-heading text-xs tracking-[0.3em] uppercase text-accent">Get In Touch</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-secondary-foreground uppercase mb-6">
              Contact Us
            </h1>
            <p className="text-steel-light text-xl max-w-2xl">
              Request a complimentary supply chain audit or speak with our consulting team.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="bg-card section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <SectionReveal>
              <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-8">
                Request a Supply Chain Audit
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-card p-12 text-center"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="text-accent" size={28} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold uppercase text-foreground mb-2">Request Submitted</h3>
                  <p className="text-muted-foreground">Our team will contact you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Full Name</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Company</label>
                      <input
                        type="text"
                        required
                        className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="Enterprise Corp."
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Email</label>
                    <input
                      type="email"
                      required
                      className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@enterprise.com"
                    />
                  </div>
                  <div>
                    <label className="block font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Area of Interest</label>
                    <select className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors">
                      <option>Supply Chain Optimization</option>
                      <option>AI Freight Routing</option>
                      <option>Warehousing Strategy</option>
                      <option>Trade Compliance</option>
                      <option>Green Freight</option>
                      <option>Full Audit</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-heading text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">Message</label>
                    <textarea
                      rows={5}
                      className="w-full bg-muted border border-border rounded-sm px-4 py-3 text-foreground text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your logistics challenges..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-accent text-accent-foreground font-heading text-sm tracking-wider uppercase px-10 py-4 rounded-sm hover:bg-safety-light transition-colors inline-flex items-center gap-2"
                  >
                    Submit Request <Send size={16} />
                  </motion.button>
                </form>
              )}
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <h2 className="font-heading text-3xl font-bold text-foreground uppercase mb-8">
                Our Offices
              </h2>
              <div className="space-y-8">
                {[
                  { city: "Rotterdam", address: "Wilhelminakade 123, 3072 AP", phone: "+31 10 799 0000" },
                  { city: "Singapore", address: "1 Raffles Place, Tower 2, #38-01", phone: "+65 6532 0000" },
                  { city: "Houston", address: "1000 Louisiana St, Suite 4500", phone: "+1 713 555 0000" },
                  { city: "Dubai", address: "DIFC, Gate Building, Level 14", phone: "+971 4 399 0000" },
                ].map((office) => (
                  <div key={office.city} className="glass-card p-6 border-l-4 border-l-accent">
                    <h3 className="font-heading text-lg font-semibold uppercase tracking-wider text-foreground mb-2">{office.city}</h3>
                    <p className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                      <MapPin size={14} className="text-accent shrink-0" /> {office.address}
                    </p>
                    <p className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Phone size={14} className="text-accent shrink-0" /> {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
