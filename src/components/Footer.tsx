import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border py-16 px-6 lg:px-12">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-serif text-lg mb-4">The Design Atelier</h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Architecture, interior design, and turnkey solutions — crafted with intention.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Navigation</h4>
          <div className="flex flex-col gap-3">
            {["About", "Projects", "Services", "Contact"].map((link) => (
              <Link
                key={link}
                to={`/${link.toLowerCase()}`}
                className="text-sm text-foreground hover:text-accent transition-colors duration-300"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-4">Connect</h4>
          <div className="flex flex-col gap-3 text-sm">
            <span className="text-foreground">hello@thedesignatelier.com</span>
            <span className="text-foreground">+91 98765 43210</span>
            <div className="flex gap-4 mt-2">
              {["Instagram", "Pinterest", "LinkedIn"].map((s) => (
                <a key={s} href="#" className="text-muted-foreground hover:text-accent transition-colors duration-300 text-xs tracking-wider uppercase">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-border text-center">
        <p className="text-xs text-muted-foreground tracking-wider">
          © 2024 The Design Atelier. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
