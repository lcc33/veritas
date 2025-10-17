import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does Veritas determine if a claim is supported or disputed?",
    answer: "Veritas analyzes claims by searching trusted sources and using AI to compare the evidence. We look for consensus among reliable sources and score the agreement between the claim and available evidence. Each verdict includes a confidence score and links to the sources we found.",
    value: "item-1",
  },
  {
    question: "What sources does Veritas use for verification?",
    answer: "We use a curated list of reputable sources including established fact-checking organizations (like Snopes, FactCheck.org), major news outlets (AP, Reuters), academic publications, and government databases. We're transparent about our sources and show them alongside each verdict.",
    value: "item-2",
  },
  {
    question: "Why do some claims get an 'Unclear' verdict?",
    answer: "Claims receive an 'Unclear' verdict when we can't find sufficient reliable evidence to support or dispute them. This might happen with very recent claims, niche topics, or when sources conflict without clear consensus. We prefer being honest about uncertainty rather than making guesses.",
    value: "item-3",
  },
  {
    question: "Is Veritas completely automated or do humans review the results?",
    answer: "Veritas is primarily automated for scalability, but we're building in human review processes for edge cases. Our AI handles claim extraction and initial evidence matching, but we're developing systems for manual review of controversial or complex claims.",
    value: "item-4",
  },
  {
    question: "How accurate is Veritas? What's the confidence score?",
    answer: "As a student project MVP, we're continuously improving accuracy. The confidence score (0-100%) represents how strongly the evidence aligns with our verdict. Higher scores mean more consistent evidence across multiple reliable sources. We're transparent about being a learning system.",
    value: "item-5",
  },
  {
    question: "Can I use Veritas for any type of content?",
    answer: "Currently, Veritas works best with factual claims in news articles, blog posts, and social media content. It's less effective for opinions, satire, or highly technical scientific claims. We're expanding to handle more content types as we improve our models.",
    value: "item-6",
  },
  {
    question: "Why should I trust Veritas over other fact-checking tools?",
    answer: "We don't ask for blind trust. Our key differentiator is transparency - we show you the evidence and our reasoning. Unlike tools that just give a 'true/false' label, we provide source links, confidence scores, and educational explanations so you can verify our work.",
    value: "item-7",
  },
  {
    question: "Is my data stored when I use Veritas?",
    answer: "No. For this MVP, we don't store user data, require accounts, or save your analysis history. We process claims in real-time and don't retain the content you submit. This may change if we add features like history saving in the future.",
    value: "item-8",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[800px] py-24 sm:py-32">
      <div className="text-center mb-12">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          How Veritas Works
        </h2>
        <p className="text-xl text-muted-foreground">
          Common questions about our claim verification process and methodology
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left hover:no-underline">
              {question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
        <p className="text-muted-foreground">
          Still have questions? <a href="#feedback" className="text-primary hover:underline">Send us feedback</a> or check out our <a href="https://github.com/your-username/veritas" target="_blank" className="text-primary hover:underline">GitHub repository</a>.
        </p>
      </div>
    </section>
  );
};