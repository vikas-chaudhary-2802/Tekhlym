import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, Lightbulb, Users, Sparkles } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";

const focusAreas = [
  { icon: BookOpen, title: "EdTech Platforms", desc: "Building scalable digital learning infrastructure." },
  { icon: GraduationCap, title: "Competitive Exam Preparation", desc: "Contextual preparation systems for aspirants." },
  { icon: Briefcase, title: "Career Development", desc: "Bridging education with employability." },
  { icon: Lightbulb, title: "Skill-Based Learning", desc: "Practical, outcome-oriented learning programs." },
  { icon: Users, title: "Youth Empowerment", desc: "Enabling the next generation of leaders." },
];

const stats = [
  { value: "5+", label: "Active Initiatives" },
  { value: "10K+", label: "Learners Impacted" },
  { value: "3+", label: "States Reached" },
  { value: "2024", label: "Founded" },
];

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 hero-glow" />
        <div className="absolute inset-0 gradient-mesh" />
        <div className="absolute inset-0 dot-grid opacity-30" />
        
        {/* Floating orbs */}
        <div className="absolute top-20 left-[15%] w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl animate-pulse-glow" />

        <div className="container-narrow relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-8"
            >
              <Sparkles size={14} className="text-primary" />
              <span>Education Technology Holding Company</span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground">
              Powering Education{" "}
              <span className="text-gradient">Innovation</span>
              <br className="hidden md:block" />
              {" "}and Youth Potential
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Tekhlym builds and scales future-ready learning platforms focused on education, career readiness, and youth empowerment.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/ventures"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Our Ventures
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 glass-card px-8 py-4 rounded-xl text-sm font-semibold text-foreground hover:border-primary/30 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center glass-card rounded-xl p-6">
                <p className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Snapshot */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 section-glow" />
        <div className="container-narrow relative">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                An education technology holding company
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Tekhlym is the parent organization behind multiple learning initiatives. We focus on building scalable education ecosystems, identifying critical gaps in learning access, and deploying technology-enabled solutions that create lasting impact.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-mesh opacity-50" />
        <div className="container-narrow relative">
          <div className="grid md:grid-cols-2 gap-16">
            <SectionReveal direction="left">
              <div className="glass-card rounded-2xl p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Vision</p>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                  To build future-ready education systems for a rapidly evolving world.
                </h2>
              </div>
            </SectionReveal>
            <SectionReveal direction="right" delay={0.15}>
              <div className="glass-card rounded-2xl p-10">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">Mission</p>
                <ul className="space-y-4">
                  {[
                    "Expand access to quality education",
                    "Bridge learning with careers",
                    "Empower underserved regions",
                    "Build technology-enabled learning models",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full animated-gradient mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 section-glow" />
        <div className="absolute inset-0 dot-grid opacity-20" />
        <div className="container-wide relative">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Core Focus Areas</h2>
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {focusAreas.map((area, i) => (
              <SectionReveal key={area.title} delay={i * 0.08}>
                <div className="group glass-card-hover rounded-2xl p-8 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <area.icon size={22} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{area.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        <div className="container-narrow text-center relative">
          <SectionReveal>
            <div className="glass-card rounded-3xl p-12 md:p-20">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Building something meaningful?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto text-lg">
                We're always looking for partners, institutions, and mission-driven individuals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/partnerships"
                  className="group inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-sm font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Partner With Us
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-sm font-semibold hover:bg-secondary/80 transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
