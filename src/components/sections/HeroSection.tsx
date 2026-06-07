"use client";
import { GridPattern } from "@/components/ui/grid-pattern";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";
import { TextAnimate } from "@/components/ui/text-animate";
import { cn } from "@/lib/utils";
import { Mail } from "lucide-react";

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function HeroSection() {
  return (
    <div>
      <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "mask-[linear-gradient(to_bottom,white,transparent,transparent)]",
          "-z-10",
        )}
      />

      {/*konten Hero Section */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <img src="/alifavatar.svg" alt="Avatar" className="w-16 h-16" />
            <h1 className="text-4xl font-bold tracking-tight">
              Shofwan Alif Alfani
            </h1>
          </div>

          <div className="flex flex-col mb-6">
            <TextAnimate
              children="Engineered with precision and creativity."
              as="h1"
              className="text-6xl"
            />
            {/* <h1 className="text-6xl ">
              Engineered with precision and creativity.
            </h1> */}
            <p className="mt-4 text-xl text-muted-foreground">
              Undergraduate informatics student from University of Muhammadiyah
              Malang. Interested in software engineering and networking.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 mb-6">
            <Button
              asChild
              className="rounded-full px-6 py-2 font-semibold h-auto"
            >
              <a
                href="https://drive.google.com/file/d/1pQDwE7I3O3kjEk56KQJquoexw5YFrIas/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                Download CV
              </a>
            </Button>
            <a href="mailto:shofwanalif@webmail.umm.ac.id">
              <InteractiveHoverButton>Discuss a project</InteractiveHoverButton>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shofwanalif"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/shofwanalif"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="mailto:shofwanalif@webmail.umm.ac.id"
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/shofwanalifalfani"
              target="_blank"
              rel="noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-full border bg-background transition-colors hover:bg-muted"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
