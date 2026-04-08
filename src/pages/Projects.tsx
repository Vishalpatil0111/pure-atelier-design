import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heroImg from "@/assets/hero-architecture.jpg";
import aboutStudio from "@/assets/about-studio.jpg";

const allProjects = [
  { img: project1, title: "Villa Serene", category: "Architecture", desc: "A contemporary residence embracing natural light and open living." },
  { img: project2, title: "The Calm Interior", category: "Interiors", desc: "Curated warmth in a city apartment — restraint meets comfort." },
  { img: project3, title: "Culinary Space", category: "Turnkey", desc: "A chef's kitchen delivered end-to-end, from concept to completion." },
  { img: project4, title: "Forest Retreat", category: "Architecture", desc: "A secluded retreat where architecture dissolves into nature." },
  { img: heroImg, title: "The Glass Pavilion", category: "Architecture", desc: "Transparent living — blurring the boundary between inside and out." },
  { img: aboutStudio, title: "Studio Workspace", category: "Interiors", desc: "Our own workspace — designed for focused creativity." },
];

const categories = ["All", "Architecture", "Interiors", "Turnkey"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Our Work</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-12">Projects</h1>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex gap-8 mb-16 border-b border-border pb-4">
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
                  <div className="relative aspect-[3/4] overflow-hidden mb-4">
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
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
