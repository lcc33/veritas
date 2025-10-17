import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum AnalysisType {
  SUPPORTED = 1,
  COMING_SOON = 0,
}

interface ServiceProps {
  title: string;
  type: AnalysisType;
  description: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "News Articles & Blog Posts",
    description: "Analyze factual claims in news stories, opinion pieces, and blog content from any source.",
    type: 1,
  },
  {
    title: "Social Media Claims",
    description: "Verify viral posts, memes, and claims circulating on social media platforms.",
    type: 1,
  },
  {
    title: "Academic & Research Claims",
    description: "Check scientific claims and research findings against established literature.",
    type: 0,
  },
  {
    title: "Political Statements & Speeches",
    description: "Analyze claims made by public figures and in political discourse.",
    type: 1,
  },
  {
    title: "Product Health Claims",
    description: "Verify marketing claims about health benefits, product efficacy, and scientific backing.",
    type: 0,
  },
  {
    title: "Financial & Economic Claims",
    description: "Check market predictions, economic data interpretations, and investment advice.",
    type: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        What You Can Analyze
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Types of Claims We Verify
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Veritas helps you verify factual claims across different types of content and contexts.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full lg:w-[90%] mx-auto">
        {serviceList.map(({ title, description, type }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative hover:bg-muted/80 transition-colors"
          >
            <CardHeader>
              <CardTitle className="flex items-start justify-between">
                {title}
                <Badge
                  data-supported={AnalysisType.SUPPORTED === type}
                  variant={AnalysisType.SUPPORTED === type ? "default" : "secondary"}
                  className="ml-2"
                >
                  {AnalysisType.SUPPORTED === type ? "Available" : "Coming Soon"}
                </Badge>
              </CardTitle>
              <CardDescription className="pt-2">{description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};