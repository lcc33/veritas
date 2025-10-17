"use client";
import { Icon } from "@/components/ui/icon";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
import { icons } from "lucide-react";

interface sourceProps {
  icon: string;
  name: string;
  type: string;
}

const trustedSources: sourceProps[] = [
  {
    icon: "BookOpen",
    name: "Wikipedia",
    type: "Reference"
  },
  {
    icon: "Newspaper",
    name: "AP News",
    type: "News"
  },
  {
    icon: "FileText",
    name: "Reuters",
    type: "News"
  },
  {
    icon: "Scale",
    name: "FactCheck.org",
    type: "Fact Checker"
  },
  {
    icon: "SearchCheck",
    name: "Snopes",
    type: "Fact Checker"
  },
  {
    icon: "GraduationCap",
    name: "Academic Journals",
    type: "Research"
  },
  {
    icon: "Globe",
    name: "BBC News",
    type: "News"
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sources" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-2">
        Verified Against Trusted Sources
      </h2>
      <p className="text-sm text-muted-foreground text-center mb-6">
        Our AI cross-references claims with established fact-checkers and reputable news outlets
      </p>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {trustedSources.map(({ icon, name }) => (
            <div
              key={name}
              className="flex items-center text-lg md:text-xl font-medium text-muted-foreground"
            >
              <Icon
                name={icon as keyof typeof icons}
                size={28}
                color="currentColor"
                className="mr-3 text-primary"
              />
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};