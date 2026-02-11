import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Building2, Globe, Heart, Landmark, University, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const partners = [
  { icon: University, label: "Universities", desc: "Academic institutions co-developing curriculum and learning pathways." },
  { icon: Landmark, label: "Government Bodies", desc: "Policy-aligned collaborations for education infrastructure." },
  { icon: Heart, label: "NGOs", desc: "Ground-level organizations extending reach to underserved communities." },
  { icon: Building2, label: "CSR Partners", desc: "Corporate partners investing in education impact programs." },
  { icon: Globe, label: "Institutions", desc: "Research and education bodies shaping our approach." },
];

const Partnerships = () => (
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
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Partnerships</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Collaboration at{" "}
            <span className="text-gradient">every level.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-lg">
            We work with institutions, governments, and organizations who share our belief that education can — and must — be reimagined.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container-wide relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((p, i) => (
            <SectionReveal key={p.label} delay={i * 0.08}>
              <div className="group glass-card-hover rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <p.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 section-glow" />
      <div className="container-narrow text-center relative">
        <SectionReveal>
          <div className="glass-card rounded-3xl p-12 md:p-20">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Partner with Tekhlym</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg">
              Whether you're an institution, a government body, or a mission-driven organization — we'd love to explore how we can build together.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Start a Conversation
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Partnerships;
