import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "SearchCheck",
    title: "Claim-Level Analysis",
    description: "We break down articles into individual factual claims and verify each one separately for precise accuracy.",
  },
  {
    icon: "Scale",
    title: "Three-Way Verdicts",
    description: "Get clear Supported, Disputed, or Unclear verdicts—no ambiguous labels or false certainty.",
  },
  {
    icon: "Link",
    title: "Source Transparency",
    description: "Every verdict includes direct links to the evidence sources so you can verify our work.",
  },
  {
    icon: "BarChart3",
    title: "Confidence Scoring",
    description: "See confidence levels (0-100%) to understand the strength of evidence behind each verdict.",
  },
  {
    icon: "GraduationCap",
    title: "Educational Rationale",
    description: "Learn why claims are credible or suspicious with clear, educational explanations.",
  },
  {
    icon: "Shield",
    title: "No Black Boxes",
    description: "We show our work. No secret algorithms—just transparent evidence matching you can understand.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Core Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        How Veritas Works Differently
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Unlike traditional fact-checkers, we focus on transparency and education—showing you the evidence and teaching you how to think critically.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none hover:bg-muted/50 transition-colors">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-3 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={28}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-center text-xl">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};