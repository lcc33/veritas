"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Check, X, HelpCircle } from "lucide-react";

interface ExampleProps {
  claim: string;
  verdict: "supported" | "disputed" | "unclear";
  confidence: number;
  sources: string[];
  context: string;
}

const exampleList: ExampleProps[] = [
  {
    claim: "\"Climate change is primarily caused by human activities\"",
    verdict: "supported",
    confidence: 95,
    sources: ["NASA", "IPCC Report", "NOAA"],
    context: "Scientific consensus strongly supports human influence on climate change"
  },
  {
    claim: "\"Vaccines cause autism in children\"",
    verdict: "disputed",
    confidence: 98,
    sources: ["CDC", "WHO", "The Lancet"],
    context: "Multiple large-scale studies have found no link between vaccines and autism"
  },
  {
    claim: "\"Eating carrots significantly improves night vision\"",
    verdict: "unclear",
    confidence: 45,
    sources: ["Limited studies", "Mixed evidence"],
    context: "While carrots contain vitamin A which supports eye health, the night vision claim is exaggerated"
  },
  {
    claim: "\"The Great Wall of China is visible from space\"",
    verdict: "disputed",
    confidence: 90,
    sources: ["NASA", "Astronaut reports"],
    context: "NASA confirms the wall is not visible to the naked eye from space"
  },
  {
    claim: "\"Regular exercise improves cognitive function\"",
    verdict: "supported",
    confidence: 88,
    sources: ["Harvard Health", "NIH studies"],
    context: "Multiple studies show consistent exercise benefits brain health"
  },
  {
    claim: "\"Drinking 8 glasses of water daily is scientifically proven necessary\"",
    verdict: "unclear",
    confidence: 60,
    sources: ["Various health organizations"],
    context: "Hydration needs vary by individual; 8 glasses is a general guideline, not a strict requirement"
  },
];

const VerdictIcon = ({ verdict }: { verdict: string }) => {
  switch (verdict) {
    case "supported":
      return <Check className="size-5 text-green-600" />;
    case "disputed":
      return <X className="size-5 text-red-600" />;
    case "unclear":
      return <HelpCircle className="size-5 text-yellow-600" />;
    default:
      return <HelpCircle className="size-5 text-gray-600" />;
  }
};

const VerdictBadge = ({ verdict }: { verdict: string }) => {
  const styles = {
    supported: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    disputed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300", 
    unclear: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
  };

  return (
    <Badge className={styles[verdict as keyof typeof styles]}>
      {verdict.charAt(0).toUpperCase() + verdict.slice(1)}
    </Badge>
  );
};

export const TestimonialSection = () => {
  return (
    <section id="examples" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          See Veritas in Action
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Real Claim Analysis Examples
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          See how Veritas analyzes different types of claims with evidence-based verdicts
        </p>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {exampleList.map((example, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card h-full">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <VerdictIcon verdict={example.verdict} />
                    <div className="text-right">
                      <VerdictBadge verdict={example.verdict} />
                      <div className="text-sm text-muted-foreground mt-1">
                        {example.confidence}% confidence
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight">
                    {example.claim}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {example.context}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Sources:</h4>
                    <div className="flex flex-wrap gap-1">
                      {example.sources.map((source, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {source}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};