import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const steps = [
  { num: "01", title: "Identify Education Gaps", desc: "We study regions and demographics where access to quality education is limited or fragmented." },
  { num: "02", title: "Build Contextual Solutions", desc: "Rather than one-size-fits-all, we design platforms tailored to local needs and aspirations." },
  { num: "03", title: "Integrate Technology", desc: "We leverage modern tech infrastructure to make learning scalable, accessible, and adaptive." },
  { num: "04", title: "Focus on Outcomes", desc: "Every initiative is measured by real-world impact — careers started, exams cleared, potential unlocked." },
  { num: "05", title: "Scale Responsibly", desc: "Growth follows proof. We scale what works, iterate on what doesn't, and always keep learners first." },
];

const Approach = () => (
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
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Approach</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Thoughtful process.{" "}
            <span className="text-gradient">Lasting outcomes.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-lg">
            Our operating philosophy combines deep understanding of education gaps with disciplined, technology-first execution.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container-narrow relative">
        <div className="space-y-6">
          {steps.map((step, i) => (
            <SectionReveal key={step.num} delay={i * 0.08}>
              <div className="glass-card-hover rounded-2xl p-8 flex gap-6 md:gap-10">
                <span className="text-4xl md:text-5xl font-extrabold text-gradient shrink-0 font-display">{step.num}</span>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 section-glow" />
      <div className="container-narrow relative">
        <SectionReveal>
          <div className="glass-card rounded-3xl p-10 md:p-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Pedagogy Philosophy</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Education that respects the learner.
            </h2>
            <div className="space-y-4 max-w-3xl">
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe learning should be contextual — shaped by the environment, language, and aspirations of the learner. Our platforms are designed with empathy, grounded in pedagogical research, and built to adapt.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Instead of overwhelming students with content, we focus on clarity, structured progression, and feedback loops that build confidence alongside knowledge.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default Approach;
