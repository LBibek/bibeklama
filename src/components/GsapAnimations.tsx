"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function GsapAnimations() {
  useEffect(() => {
    // Register GSAP plugins safely on client
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);

      // Section Fade-in & Scale Animation
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0.85, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Spatial VR Glass Cards Hover / Mouse Follower Depth
      const cards = document.querySelectorAll<HTMLElement>(".vr-glass");
      cards.forEach((card) => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * -5;
          const rotateY = ((x - centerX) / centerX) * 5;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: "power1.out",
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        };

        card.addEventListener("mousemove", handleMouseMove);
        card.addEventListener("mouseleave", handleMouseLeave);
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return null;
}
