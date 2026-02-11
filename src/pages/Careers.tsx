import { motion } from "framer-motion";
import { ArrowRight, Flame, Target, Heart } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const values = [
  { icon: Flame, title: "Builder Culture", desc: "We value people who create, not just manage. If you like building from the ground up, you'll thrive here." },
  { icon: Target, title: "Ownership Mindset", desc: "Every team member owns their work end-to-end. We trust you to make decisions and deliver impact." },
  { icon: Heart, title: "Mission-Driven", desc: "We're not chasing vanity metrics. We measure success by the lives we touch through education." },
];

const Careers = () => (
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
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Careers</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Build with{" "}
            <span className="text-gradient">purpose.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-lg">
            We're a small team with a large mission. If you believe education can be reimagined through technology, we'd love to hear from you.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container-wide relative">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-8">What We Value</p>
        </SectionReveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <SectionReveal key={v.title} delay={i * 0.1}>
              <div className="group glass-card-hover rounded-2xl p-8 h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <v.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Open Applications</h2>
            <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg">
              We're always open to hearing from exceptional people. Send us your story and what you'd like to build.
            </p>
            <div className="mt-8">
              <a
                href="mailto:careers@tekhlym.com"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                careers@tekhlym.com
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Careers;
