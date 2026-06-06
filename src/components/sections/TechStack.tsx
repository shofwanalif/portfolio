"use client";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { Marquee } from "@/components/ui/marquee";
import { cn } from "@/lib/utils";

interface Tech {
  name: string;
  icon: string; // devicon class
}

const rowOne: Tech[] = [
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "Astro", icon: "devicon-astro-plain" },
  { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Express", icon: "devicon-express-original" },
];

const rowTwo: Tech[] = [
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "Prisma", icon: "devicon-prisma-original colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
  { name: "Linux", icon: "devicon-linux-plain" },
  { name: "Figma", icon: "devicon-figma-plain colored" },
  { name: "Laravel", icon: "devicon-laravel-plain colored" },
];

function TechCard({ name, icon }: Tech) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-border/50 bg-background/30 px-4 py-3 backdrop-blur-sm",
        "transition-colors duration-200 hover:border-border hover:bg-background/60",
      )}
    >
      <i className={cn(icon, "text-2xl")} />
      <span className="text-sm font-medium whitespace-nowrap">{name}</span>
    </div>
  );
}

export function TechStack() {
  return (
    <div className="relative w-full py-16 sm:py-20 lg:py-24">
      {/* Flickering grid background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 mask-[linear-gradient(to_bottom,white_10%,transparent)]"
        squareSize={4}
        gridGap={6}
        color="#60A5FA"
        maxOpacity={0.2}
        flickerChance={0.5}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-7xl px-6 mb-12 text-center">
          <h2 className="text-3xl font-semibold mt-2">Technology Stack</h2>
          <p className="text-lg leading-8 text-muted-foreground mt-2">
            A comprehensive list of technologies I have worked with and am
            proficient in.
          </p>
        </div>

        {/* Marquee rows */}
        <div className="flex flex-col gap-4 max-w-7xl mx-auto">
          <Marquee pauseOnHover className="[--duration:35s]">
            {rowOne.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {rowTwo.map((tech) => (
              <TechCard key={tech.name} {...tech} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
