import AnimatedSection from "@/components/AnimatedSection";
import founderImg from "@/assets/founder.jpg";
import studioImg from "@/assets/about-studio.jpg";

const timeline = [
  { year: "2012", title: "Studio Founded", desc: "Established in Mumbai with a vision for intentional design." },
  { year: "2015", title: "First Major Commission", desc: "The Coastal Residence — our first nationally recognized project." },
  { year: "2018", title: "Interiors Division", desc: "Expanded services to include full interior design and curation." },
  { year: "2021", title: "Turnkey Solutions", desc: "End-to-end project delivery, from concept to handover." },
  { year: "2024", title: "12 Years of Craft", desc: "Over 80 projects completed across residential and commercial spaces." },
];

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">About Us</p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.15] max-w-3xl">
            Design Is How We Give Shape to Meaning
          </h1>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <p className="mt-10 text-muted-foreground leading-relaxed max-w-2xl text-lg">
            The Design Atelier is a multidisciplinary studio rooted in the belief that architecture should serve life — quietly, beautifully, and with lasting purpose.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Philosophy */}
    <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <div className="aspect-[4/3] overflow-hidden">
            <img src={studioImg} alt="Design Atelier workspace" loading="lazy" width={800} height={600} className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Our Philosophy</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>We design with restraint. Every element earns its place — nothing is added without purpose, nothing is removed without consequence.</p>
            <p>Our work sits at the intersection of architecture and craft, where materiality meets emotion and structure becomes poetry.</p>
            <p>We believe the best spaces are those that feel inevitable — as if they could not have been any other way.</p>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Founder */}
    <section className="py-24 lg:py-36 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">The Founder</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Ananya Sharma</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>With over 15 years of experience spanning residential, hospitality, and cultural projects, Ananya founded The Design Atelier with a singular purpose: to create spaces that honor how people truly live.</p>
            <p>Trained at the School of Planning and Architecture, her work draws from a deep respect for context, craft, and the poetry of everyday life.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <div className="aspect-[3/4] overflow-hidden max-w-md ml-auto">
            <img src={founderImg} alt="Ananya Sharma, Founder" loading="lazy" width={600} height={800} className="w-full h-full object-cover" />
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-24 lg:py-36 px-6 lg:px-12 bg-card">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 text-center">Our Journey</p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-center mb-16">Milestones</h2>
        </AnimatedSection>
        <div className="space-y-0">
          {timeline.map((t, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="flex gap-8 lg:gap-12 py-8 border-b border-border">
                <span className="font-serif text-2xl text-accent min-w-[80px]">{t.year}</span>
                <div>
                  <h3 className="font-serif text-lg mb-2">{t.title}</h3>
                  <p className="text-muted-foreground text-sm">{t.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
