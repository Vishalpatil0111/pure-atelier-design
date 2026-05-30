import { ReactNode } from "react";
import AnimatedSection from "@/components/AnimatedSection";

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
  imgSrc: string;
  children?: ReactNode;
}

const PageHero = ({ label, title, description, imgSrc, children }: PageHeroProps) => (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0">
      <img src={imgSrc} alt={title} loading="lazy" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
    </div>

    <div className="relative mx-auto max-w-7xl px-6 lg:px-12 py-32 lg:py-44 text-center text-white">
      <AnimatedSection>
        <p className="text-xs tracking-[0.2em] uppercase text-white/70 mb-6">{label}</p>
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">{title}</h1>
        <p className="mt-6 text-sm md:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed text-white/80">
          {description}
        </p>
      </AnimatedSection>
      {children && <div className="mt-12">{children}</div>}
    </div>
  </section>
);

export default PageHero;
