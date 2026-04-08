import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const services = [
  {
    title: "Architecture",
    desc: "We design buildings that respond to their context — honoring landscape, climate, and the rituals of daily life. From private residences to cultural spaces, every project is a conversation between form and purpose.",
    details: ["Residential Design", "Commercial Spaces", "Cultural & Public", "Landscape Integration"],
  },
  {
    title: "Interior Design",
    desc: "Our interiors are composed with the same rigor as our architecture. We curate materials, light, and furniture to create environments that feel both considered and effortless.",
    details: ["Space Planning", "Material Curation", "Furniture Selection", "Lighting Design"],
  },
  {
    title: "Turnkey Solutions",
    desc: "From the first sketch to the final detail — we manage every aspect of your project. Our turnkey service ensures a seamless journey from vision to reality.",
    details: ["Project Management", "Contractor Coordination", "Budget Oversight", "Quality Assurance"],
  },
];

const steps = [
  { num: "01", title: "Consult", desc: "We listen. Understanding your needs, aspirations, and the soul of the site." },
  { num: "02", title: "Design", desc: "Translating vision into form — drawings, materials, and spatial narratives." },
  { num: "03", title: "Execute", desc: "Meticulous construction oversight, ensuring craft meets concept." },
  { num: "04", title: "Deliver", desc: "A finished space, ready to be lived in — every detail in its place." },
];

const Services = () => (
  <div className="pt-20">
    <section className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">What We Do</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-3xl mb-10">
            Crafting Spaces with Purpose
          </h1>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed">
            Every project is an opportunity to create something meaningful — a space that reflects the values and rhythms of the people who inhabit it.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Services Detail */}
    {services.map((s, i) => (
      <section key={i} className={`py-24 lg:py-36 px-6 lg:px-12 ${i % 2 === 1 ? "bg-card" : ""}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <div className="w-12 h-[1px] bg-accent mb-8" />
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">{s.title}</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">{s.desc}</p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-foreground hover:text-accent transition-colors duration-300"
            >
              Inquire <ArrowRight size={12} />
            </Link>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 gap-6">
              {s.details.map((d, j) => (
                <div key={j} className="border-t border-border pt-4">
                  <p className="text-sm text-foreground">{d}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    ))}

    {/* Process */}
    <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 text-center">How We Work</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16">Our Process</h2>
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((s, i) => (
            <AnimatedSection key={i} delay={i * 150}>
              <div className="text-center">
                <span className="font-serif text-4xl text-accent">{s.num}</span>
                <h3 className="font-serif text-xl mt-4 mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Services;
