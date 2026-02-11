import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, ExternalLink } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const ventures = [
  {
    name: "Edunachal",
    tag: "Live",
    desc: "A competitive exam preparation platform focused on Northeast India. Covers UPSC, State PSC, and Foundation-level courses with contextual pedagogy.",
    focus: ["UPSC Preparation", "State Exams", "Foundation Courses", "Northeast India Focus"],
  },
];

const upcoming = [
  { name: "AI Learning Platform", desc: "Adaptive, AI-powered learning experiences tailored to individual progress.", icon: "🤖" },
  { name: "Career Tech Products", desc: "Tools and platforms bridging education with meaningful employment.", icon: "💼" },
  { name: "Youth Leadership Programs", desc: "Structured initiatives for youth development, leadership, and community impact.", icon: "🚀" },
];

const Ventures = () => (
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
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Our Ventures</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Initiatives building the{" "}
            <span className="text-gradient">future of education.</span>
          </h1>
          <p className="mt-6 text-muted-foreground max-w-2xl leading-relaxed text-lg">
            Each venture under Tekhlym addresses a specific gap in the education ecosystem.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Active */}
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="container-wide relative">
        <SectionReveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-8">Active Ventures</p>
        </SectionReveal>
        {ventures.map((v) => (
          <SectionReveal key={v.name}>
            <div className="glass-card rounded-2xl p-8 md:p-12 hover:border-primary/30 transition-all duration-500">
                <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground">{v.name}</h2>
                    <span className="text-xs font-semibold uppercase tracking-wider animated-gradient text-primary-foreground px-3 py-1 rounded-full">{v.tag}</span>
                  </div>
                  <p className="text-muted-foreground max-w-xl leading-relaxed text-lg">{v.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {v.focus.map((f) => (
                      <span key={f} className="text-xs font-medium bg-primary/8 text-primary px-4 py-2 rounded-lg border border-primary/10">{f}</span>
                    ))}
                  </div>
                  <a
                    href="https://www.edunachal.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 mt-8 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Visit Edunachal
                    <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </section>

    {/* Upcoming */}
    <section className="relative section-padding overflow-hidden">
      <div className="absolute inset-0 section-glow" />
      <div className="container-wide relative">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-8">
            <Rocket size={18} className="text-primary" />
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Coming Soon</p>
          </div>
        </SectionReveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcoming.map((u, i) => (
            <SectionReveal key={u.name} delay={i * 0.1}>
              <div className="group glass-card-hover rounded-2xl p-8 h-full">
                <span className="text-3xl mb-4 block">{u.icon}</span>
                <h3 className="text-lg font-semibold text-foreground mb-2">{u.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{u.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  </PageLayout>
);

export default Ventures;
