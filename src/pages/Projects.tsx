import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import PageCta from "@/components/PageCta";
import PageHero from "@/components/PageHero";
import { siteImages } from "@/lib/siteImages";

const allProjects = [
  {
    img: siteImages.projects.architecture.balajiAngan,
    title: "Balaji Angan",
    category: "Architecture",
    desc: "A residential architecture project planned around clarity, usability, and long-term comfort.",
  },
  {
    img: siteImages.projects.architecture.balajiVihar,
    title: "Balaji Vihar",
    category: "Architecture",
    desc: "A composed built form with clean massing, practical planning, and a calm residential presence.",
  },
  {
    img: siteImages.projects.architecture.cambridgeSchool,
    title: "Cambridge School",
    category: "Institutional",
    desc: "An educational environment shaped for structure, learning, and everyday movement.",
  },
  {
    img: siteImages.projects.architecture.sceneSeven,
    title: "Facade Development Study",
    category: "Architecture",
    desc: "A facade-focused architectural study balancing scale, rhythm, and visual clarity.",
  },
  {
    img: siteImages.projects.architecture.sceneEight,
    title: "Residential Elevation Study",
    category: "Architecture",
    desc: "A rendered elevation study exploring proportion, openings, and contemporary material expression.",
  },
  {
    img: siteImages.projects.architecture.sitePhotoOne,
    title: "Site Coordination",
    category: "Architecture",
    desc: "On-site architectural coordination supporting practical execution and construction progress.",
  },
  {
    img: siteImages.projects.architecture.planRender,
    title: "Plan Render",
    category: "Planning",
    desc: "A representative plan render used to communicate floor organization, circulation, and spatial logic.",
  },
  {
    img: siteImages.home.highlighted.livingRoom,
    title: "Residential Living Room",
    category: "Interior",
    desc: "A composed interior designed with soft material balance, warmth, and everyday comfort.",
  },
  {
    img: siteImages.home.highlighted.livingRoomOne,
    title: "Living Room Palette",
    category: "Interior",
    desc: "An interior palette focused on texture, proportion, and a refined residential atmosphere.",
  },
  {
    img: siteImages.home.highlighted.livingRoomTwo,
    title: "Interior Detail Study",
    category: "Interior",
    desc: "A layered living-space detail that brings together lighting, furniture, and finish coordination.",
  },
  {
    img: siteImages.projects.turnkey.interiorOne,
    title: "Turnkey Interior Project",
    category: "Turnkey",
    desc: "A warm interior built through coordinated design, documentation, and execution.",
  },
  {
    img: siteImages.projects.turnkey.interiorTwo,
    title: "Commercial Interior Fit-Out",
    category: "Turnkey",
    desc: "A commercial interior crafted for efficient flow, material richness, and practical delivery.",
  },
  {
    img: siteImages.projects.turnkey.interiorThree,
    title: "Kitchen and Storage Detail",
    category: "Turnkey",
    desc: "A turnkey interior detail where storage, lighting, and surface finishes are resolved together.",
  },
  {
    img: siteImages.projects.turnkey.interiorFour,
    title: "Custom Interior Execution",
    category: "Turnkey",
    desc: "A finished interior execution showing the transition from design intent to site-ready detail.",
  },
  {
    img: siteImages.projects.turnkey.interiorSeven,
    title: "Built-In Furniture Detail",
    category: "Turnkey",
    desc: "A turnkey detail focused on clean joinery, practical storage, and coordinated finishes.",
  },
];

const projectVideos = [
  {
    src: siteImages.projects.videos.architectureOne,
    title: "Architecture Walkthrough",
    category: "Architecture",
  },
  {
    src: siteImages.projects.videos.architectureTwo,
    title: "Facade Motion Study",
    category: "Architecture",
  },
  {
    src: siteImages.projects.videos.turnkeyOne,
    title: "Turnkey Interior Reel",
    category: "Turnkey",
  },
  {
    src: siteImages.projects.videos.slidingPartition,
    title: "Sliding Partition Detail",
    category: "Turnkey",
  },
];

const categories = ["All", "Architecture", "Institutional", "Interior", "Turnkey", "Planning"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div className="pt-20">
      <PageHero
        label="Our Work"
        title="A Portfolio of Thoughtful Architecture and Interiors"
        description="From architecture and institutional spaces to interiors, turnkey execution, and planning work, our portfolio shows how we create environments that feel clear, purposeful, and refined."
        imgSrc={siteImages.projects.architecture.sceneSeven}
      />

      <section className="py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.72fr,1.28fr] lg:items-end">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Our Work</p>
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">Projects</h1>
              </div>
              <p className="max-w-2xl text-muted-foreground leading-relaxed lg:ml-auto">
                The Design Atelier creates architecture, interiors, turnkey spaces, institutional environments, and planning documentation designed to feel both purposeful and timeless.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="mt-12 mb-16 flex flex-wrap items-center gap-x-7 gap-y-4 border-y border-border py-5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`relative pb-1 text-[0.68rem] tracking-[0.18em] uppercase transition-colors duration-300 md:text-xs ${
                    active === cat ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {cat}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-px origin-left bg-foreground transition-transform duration-300 ${
                      active === cat ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <AnimatedSection key={`${active}-${i}`} delay={i * 80}>
                <div className="group cursor-pointer">
                  <div className="relative aspect-[3/4] overflow-hidden mb-5 rounded-lg bg-muted">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.06]"
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

      <section className="pb-24 lg:pb-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto border-t border-border pt-16">
          <AnimatedSection>
            <div className="grid gap-8 lg:grid-cols-[0.72fr,1.28fr] lg:items-end">
              <div>
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Project Videos</p>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground">Motion Studies & Site Reels</h2>
              </div>
              <p className="max-w-2xl text-muted-foreground leading-relaxed lg:ml-auto">
                Short videos from architecture and turnkey folders show project movement, partition details, and execution moments in a more direct way.
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projectVideos.map((video, index) => (
              <AnimatedSection key={video.src} delay={index * 100}>
                <article className="group">
                  <div className="aspect-video overflow-hidden rounded-lg bg-foreground">
                    <video
                      className="h-full w-full object-cover"
                      controls
                      muted
                      playsInline
                      preload="metadata"
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  </div>
                  <p className="mt-5 text-xs tracking-[0.15em] uppercase text-muted-foreground">{video.category}</p>
                  <h3 className="mt-2 font-serif text-xl text-foreground">{video.title}</h3>
                </article>
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
        imgSrc={siteImages.home.highlighted.balajiVihar}
      />
    </div>
  );
};

export default Projects;
