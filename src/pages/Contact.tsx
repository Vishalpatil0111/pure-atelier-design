import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit
    alert("Thank you for reaching out. We'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-6">Get in Touch</p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground max-w-2xl">
              Start Your Project
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="pb-24 lg:pb-36 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="space-y-8">
              {[
                { label: "Name", key: "name" as const, type: "text" },
                { label: "Email", key: "email" as const, type: "email" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300 text-sm"
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-muted-foreground mb-3">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-accent transition-colors duration-300 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="border border-foreground px-10 py-4 text-xs tracking-[0.2em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500 mt-4"
              >
                Send Inquiry
              </button>
            </form>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="space-y-10 lg:pl-12">
              <div>
                <h3 className="font-serif text-xl mb-6">Studio</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="mt-0.5 text-accent" />
                    <span>42 Design Quarter, Bandra West<br />Mumbai, Maharashtra 400050</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={16} className="text-accent" />
                    <span>hello@thedesignatelier.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-accent" />
                    <span>+91 98765 43210</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-6">Working Hours</h3>
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Monday — Friday: 10:00 AM — 7:00 PM</p>
                  <p>Saturday: By Appointment</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-xs tracking-[0.15em] uppercase text-muted-foreground">Map</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Contact;
