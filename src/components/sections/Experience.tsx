"use client";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
  TimelineSubtitle,
} from "@/components/reui/timeline";

const roadmap = [
  {
    id: 1,
    date: "Sept 2025 - Present",
    title: "Infotech UMM",
    subtitle: "Informatics Laboratory Assistant",
    description:
      "Assisted informatics laboratory practicum sessions, contributed to several internal lab projects including internal system development, and authored practicum modules.",
  },
  {
    id: 2,
    date: "Jan 2023 - Feb 2023",
    title: "Polnet Sampit",
    subtitle: "Fiber Optic Jointer Technician",
    description:
      "Field technician for FTTH and FTTx fiber optic internet network installation and network troubleshooting.",
  },
  {
    id: 3,
    date: "Jun 2022 - Nov 2022",
    title: "Universitas Muhammadiyah Sampit",
    subtitle: "IT Support Staff Intern",
    description:
      "Handled maintenance of network infrastructure and digital devices across the office. Also participated in a campus network expansion project, extending internet coverage to previously unreached zones.",
  },
];

export function Experience() {
  return (
    <>
      <GridPattern
        width={30}
        height={30}
        x={10}
        y={-1}
        className={cn(
          "mask-[linear-gradient(to_bottom_left,white,transparent,transparent)]",
          "-z-10",
        )}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold">Experience</h2>
          <p className="mt-3 max-w-2xl text-base leading-7">
            I'm a very hands on person and love to work on and tinker with
            electronics, coding, and everything that involves building things.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl flex justify-center">
        <Timeline className="w-full max-w-2xl">
          {roadmap.map((item) => (
            <TimelineItem
              key={item.id}
              className="sm:group-data-[orientation=vertical]/timeline:ms-40"
            >
              <TimelineHeader>
                <TimelineSeparator />
                <TimelineDate className="sm:group-data-[orientation=vertical]/timeline:absolute sm:group-data-[orientation=vertical]/timeline:-left-12 sm:group-data-[orientation=vertical]/timeline:-translate-x-full sm:group-data-[orientation=vertical]/timeline:text-right whitespace-nowrap">
                  {item.date}
                </TimelineDate>
                <TimelineTitle className="sm:-mt-1.5">
                  {item.title}
                </TimelineTitle>
                <TimelineSubtitle className="mb-2">
                  {item.subtitle}
                </TimelineSubtitle>
                <TimelineIndicator />
              </TimelineHeader>
              <TimelineContent>{item.description}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </>
  );
}
