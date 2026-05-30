import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import studioImg from "@/assets/about-studio.jpg";
import heroImg from "@/assets/hero-architecture.jpg";

const sectors = [
  { title: "Residential Homes", imgSrc: project1 },
  { title: "Commercial Spaces", imgSrc: heroImg },
  { title: "Hospitality Projects", imgSrc: project3 },
  { title: "Healthcare Facilities", imgSrc: studioImg },
  { title: "Educational Institutions", imgSrc: project2 },
  { title: "Recreational Spaces", imgSrc: project4 },
  { title: "Mixed-Use Developments", imgSrc: heroImg },
  { title: "Restoration & Renovation Projects", imgSrc: studioImg },
];

const WorkInShowcase = () => (
  <div>
    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-8">We Work In</p>
    <div className="grid gap-px overflow-hidden bg-border md:grid-cols-2">
      {sectors.map((sector, index) => (
        <div key={sector.title} className="group relative min-h-[15rem] overflow-hidden bg-foreground p-6 md:min-h-[18rem]" data-gsap-item>
          <img
            src={sector.imgSrc}
            alt={sector.title}
            loading="lazy"
            className="image-motion absolute inset-0 h-full w-full object-cover opacity-55 transition-opacity duration-700 group-hover:opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/35 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <span className="text-xs tracking-[0.2em] uppercase text-primary-foreground/65">0{index + 1}</span>
            <h3 className="font-serif text-2xl text-primary-foreground md:text-3xl">{sector.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default WorkInShowcase;
