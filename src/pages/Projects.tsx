import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heroImg from "@/assets/hero-architecture.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

const allProjects = [
  {
    img: project1,
    title: "Oman International Container Terminal",
    category: "Architecture",
    desc: "A large-scale logistics hub designed for efficiency, clarity, and operational flow.",
  },
  {
    img: project2,
    title: "Military Technical College, Oman",
    category: "Institutional",
    desc: "A campus environment that balances discipline, learning, and civic presence.",
  },
  {
    img: project3,
    title: "Oman Oil Marketing Food Court & Drive Through",
    category: "Hospitality",
    desc: "A service-driven retail destination designed for comfort, speed, and brand clarity.",
  },
  {
    img: project4,
    title: "PAN Food India — Sigma Mall, Bangalore",
    category: "Commercial",
    desc: "A dynamic retail and dining interior crafted for engagement and flow.",
  },
  {
    img: heroImg,
    title: "Primary Health Centre & Staff Quarters — Nandurbar",
    category: "Healthcare",
    desc: "A community-focused healthcare facility created for calm, functionality, and resilience.",
  },
  {
    img: aboutStudio,
    title: "Studio Workspace",
    category: "Interiors",
    desc: "Our own office space designed to support clarity, collaboration, and quiet focus.",
  },
];

const categories = ["All", "Architecture", "Institutional", "Hospitality", "Commercial", "Healthcare", "Interiors"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      <PageHero
        label="Our Work"
        title="A Portfolio of Thoughtful Architecture and Interiors"
        description="From logistics and commercial spaces to hospitality and healthcare, our portfolio shows how we create environments that feel clear, purposeful, and refined."
        imgSrc={project4}
      />

      <section className="py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Our Work</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">Projects</h1>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              The Design Atelier creates homes, commercial venues, hospitality spaces, healthcare facilities, and institutional environments designed to feel both purposeful and timeless.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-wrap gap-3 mb-16 border-b border-border pb-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`text-xs tracking-[0.2em] uppercase pb-2 transition-colors duration-300 ${
                    active === cat ? "text-foreground border-b border-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filtered.map((p, i) => (
              <AnimatedSection key={`${active}-${i}`} delay={i * 100}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden mb-4 rounded-[2rem]">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
                  </div>
                  <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-1">{p.category}</p>
                  <h3 className="font-serif text-lg text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="Interested in a project like this?"
        description="Let's discuss how we can translate your brief into a timeless built environment with clarity, detail, and durability."
        buttonText="Talk to Our Team"
        buttonLink="/contact"
        imgSrc={heroImg}
      />
    </div>
  );
};

export default Projects;
