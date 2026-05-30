import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const revealSelector = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "li",
  "label",
  "input",
  "textarea",
  "button",
  "form",
  "iframe",
  "img",
  "video",
].join(",");

const SiteScrollReveal = () => {
  const location = useLocation();

  useEffect(() => {
    let observer: IntersectionObserver | undefined;

    const frame = window.requestAnimationFrame(() => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector)).filter(
        (element) =>
          !element.closest("[data-no-scroll-reveal]") &&
          !element.closest("nav") &&
          !element.closest("[data-radix-toast-viewport]"),
      );

      elements.forEach((element, index) => {
        element.classList.add("site-scroll-reveal");
        element.style.setProperty("--reveal-delay", `${Math.min(index % 8, 5) * 45}ms`);
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("site-scroll-reveal-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: "0px 0px -8% 0px",
          threshold: 0.08,
        },
      );

      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [location.pathname]);

  return null;
};

export default SiteScrollReveal;
