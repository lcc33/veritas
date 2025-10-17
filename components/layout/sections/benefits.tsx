import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "SearchCheck",
    title: "Evidence-Based Analysis",
    description: "See the actual sources and reasoning behind every verdict, not just a label. Understand why claims are credible or suspicious.",
  },
  {
    icon: "GraduationCap",
    title: "Build Critical Thinking",
    description: "Learn to spot misleading claims yourself by understanding verification patterns and source credibility.",
  },
  {
    icon: "Shield",
    title: "Transparent Confidence",
    description: "Get clear confidence scores and understand uncertainty. We show you when evidence is strong or limited.",
  },
  {
    icon: "Zap",
    title: "Instant Verification",
    description: "Paste any URL or text and get claim-level analysis in seconds. No accounts, no setup, just results.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Why Veritas</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Verify with Confidence
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Unlike traditional fact-checkers, we show you the evidence and teach you how to think critically about information—not just what to think.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};