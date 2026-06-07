"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#project" },
  { name: "Stack", href: "#tech-stack" },
  { name: "Experience", href: "#experience" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    links.forEach((link) => {
      const element = document.querySelector(link.href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav className="flex items-center gap-1 rounded-full border bg-background/80 px-2 py-2 shadow-lg backdrop-blur-md dark:shadow-none">
        {links.map((link) => {
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors hover:text-primary",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="activeSection"
                  className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-primary"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          );
        })}
      </nav>
    </div>
  );
}
