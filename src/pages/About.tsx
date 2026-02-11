import { motion } from "framer-motion";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const About = () => (
  <PageLayout>
    {/* Hero */}
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 hero-glow" />
      <div className="absolute inset-0 dot-grid opacity-20" />
      <div className="container-narrow relative">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Tekhlym</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Built to strengthen education{" "}
            <span className="text-gradient">from the ground up.</span>
          </h1>
        </motion.div>
      </div>
    </section>

    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container-narrow space-y-8 relative">
        {[
          {
            title: "Why Tekhlym Exists",
            text: "Education in many parts of the world remains fragmented — disconnected from careers, inaccessible to many, and slow to adapt. Tekhlym was founded to address these systemic gaps by building technology-powered learning infrastructure that's contextual, scalable, and outcome-focused.",
          },
          {
            title: "Our Institutional Mindset",
            text: "We don't think in terms of campaigns or launches. We think in decades. Every platform, every initiative we build is designed to compound — growing stronger with time, serving more people with each iteration, and creating infrastructure that outlasts trends.",
          },
          {
            title: "Long-Term Vision",
            text: "We envision a world where quality education is not a privilege but a given — where learning seamlessly connects to careers, where youth in underserved regions have the same access to opportunities, and where technology serves as an equalizer rather than a divider.",
          },
        ].map((item, i) => (
          <SectionReveal key={item.title} delay={i * 0.1}>
            <div className="glass-card rounded-2xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-foreground mb-4">{item.title}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">{item.text}</p>
            </div>
          </SectionReveal>
        ))}

        <SectionReveal delay={0.3}>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h2 className="text-2xl font-bold text-foreground mb-6">The Gaps We're Solving</h2>
            <ul className="space-y-4">
              {[
                "Disconnect between education and employability",
                "Limited access to quality preparation in tier-2 and tier-3 regions",
                "Absence of scalable, technology-first education infrastructure",
                "Lack of youth development ecosystems beyond academics",
              ].map((gap) => (
                <li key={gap} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full animated-gradient mt-2 shrink-0" />
                  <span className="text-muted-foreground text-lg">{gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </SectionReveal>
      </div>
    </section>
  </PageLayout>
);

export default About;
