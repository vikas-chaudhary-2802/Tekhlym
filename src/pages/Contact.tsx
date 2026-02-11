import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageLayout>
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container-narrow relative">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Contact</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Let's{" "}
              <span className="text-gradient">connect.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container-wide relative">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <SectionReveal direction="left">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get in touch</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Whether you're an institution, a potential partner, or someone who shares our vision — we'd love to hear from you.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "Phone", value: "+91 76289 28150", href: "tel:+917628928150" },
                    { icon: Mail, label: "Email", value: "info@tekhlym.com", href: "mailto:info@tekhlym.com" },
                    { icon: MapPin, label: "Location", value: "Delhi,India", href: undefined },
                  ].map((item) => (
                    <div key={item.label} className="glass-card rounded-xl p-4 flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon size={18} className="text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-foreground font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>

            {/* Form */}
            <SectionReveal direction="right" delay={0.15}>
              <div className="glass-card rounded-2xl p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">We'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { label: "Name", type: "text", placeholder: "Your name", required: true },
                      { label: "Email", type: "email", placeholder: "you@example.com", required: true },
                      { label: "Organization", type: "text", placeholder: "Your organization (optional)", required: false },
                    ].map((field) => (
                      <div key={field.label}>
                        <label className="text-sm font-medium text-foreground mb-1.5 block">{field.label}</label>
                        <input
                          type={field.type}
                          required={field.required}
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all backdrop-blur-sm"
                          placeholder={field.placeholder}
                        />
                      </div>
                    ))}
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                      <textarea
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background/50 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none backdrop-blur-sm"
                        placeholder="How can we help?"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group w-full bg-primary text-primary-foreground py-3.5 rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Send Message
                      <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                )}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
