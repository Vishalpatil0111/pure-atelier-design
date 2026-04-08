import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import heroImg from "@/assets/hero-architecture.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

const projects = [
  { img: project1, title: "Villa Serene", category: "Architecture", tall: true },
  { img: project2, title: "The Calm Interior", category: "Interiors", tall: false },
  { img: project3, title: "Culinary Space", category: "Turnkey", tall: false },
  { img: project4, title: "Forest Retreat", category: "Architecture", tall: true },
];

const services = [
  { title: "Architecture", desc: "Thoughtful structures that honor context, material, and light." },
  { title: "Interior Design", desc: "Spaces curated with restraint, warmth, and enduring beauty." },
  { title: "Turnkey Solutions", desc: "From vision to completion — every detail, handled." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative h-screen flex items-end">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Modern architectural interior" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-12 pb-20 lg:pb-28">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-[1.1] max-w-3xl animate-fade-up">
          Designing Spaces That Define Living
        </h1>
        <p className="mt-6 text-primary-foreground/80 text-sm md:text-base max-w-lg tracking-wide animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Architecture & interior design studio crafting timeless, intentional spaces.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mt-10 text-xs tracking-[0.2em] uppercase text-primary-foreground/90 hover:text-primary-foreground transition-colors duration-300 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          View Our Work <ArrowRight size={14} />
        </Link>
      </div>
    </section>

    {/* Featured Projects */}
    <section className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">Selected Work</p>
              <h2 className="font-serif text-3xl md:text-4xl text-foreground">Featured Projects</h2>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300">
              All Projects <ArrowRight size={12} />
            </Link>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <Link to="/projects" className="group block overflow-hidden">
                <div className={`relative overflow-hidden ${p.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs tracking-[0.15em] uppercase text-primary-foreground/70">{p.category}</p>
                    <h3 className="font-serif text-xl text-primary-foreground mt-1">{p.title}</h3>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* About Preview */}
    <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">About the Studio</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-[1.2] mb-8">
            Where Architecture Meets Intention
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-md">
            We believe spaces should be lived in, not merely looked at. Every project begins with listening — understanding how light, material, and proportion can shape the way you experience your world.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
          >
            Learn More <ArrowRight size={12} />
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={aboutStudio} alt="Design Atelier studio" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 text-center">What We Do</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16">Our Services</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="text-center">
                <div className="w-12 h-[1px] bg-accent mx-auto mb-8" />
                <h3 className="font-serif text-xl mb-4">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
        <AnimatedSection>
          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-accent transition-colors duration-300"
            >
              Explore Services <ArrowRight size={12} />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
      <AnimatedSection>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Ready to Begin?
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            Let's create something timeless together. Tell us about your vision.
          </p>
          <Link
            to="/contact"
            className="inline-block border border-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
          >
            Start Your Project
          </Link>
        </div>
      </AnimatedSection>
    </section>
  </div>
);

export default Index;
