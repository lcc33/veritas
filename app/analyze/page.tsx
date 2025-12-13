"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Search, Link as LinkIcon, FileText, AlertCircle, CheckCircle, HelpCircle, Download, Share2 } from "lucide-react";

// Mock data for demonstration
const mockAnalysis = {
  claims: [
    {
      id: 1,
      text: "Climate change is primarily caused by human activities",
      verdict: "supported" as const,
      confidence: 95,
      sources: [
        { name: "NASA Climate", url: "#", excerpt: "Multiple lines of evidence show that human activities are the primary driver of climate change." },
        { name: "IPCC Report", url: "#", excerpt: "It is unequivocal that human influence has warmed the atmosphere, ocean and land." }
      ],
      rationale: "Strong scientific consensus across multiple peer-reviewed studies and international climate organizations."
    },
    {
      id: 2,
      text: "Vaccines cause autism in children",
      verdict: "disputed" as const,
      confidence: 98,
      sources: [
        { name: "CDC Study", url: "#", excerpt: "No link found between vaccines and autism in large-scale population studies." },
        { name: "The Lancet Retraction", url: "#", excerpt: "Original study linking vaccines to autism was retracted due to methodological flaws and ethical concerns." }
      ],
      rationale: "Extensive research has consistently found no credible evidence supporting this claim."
    },
    {
      id: 3,
      text: "Eating carrots significantly improves night vision",
      verdict: "unclear" as const,
      confidence: 45,
      sources: [
        { name: "Health Organization", url: "#", excerpt: "While carrots contain vitamin A which supports eye health, the night vision benefits are often exaggerated." }
      ],
      rationale: "Limited direct evidence; vitamin A supports eye health but dramatic night vision improvements are not scientifically proven."
    }
  ],
  analyzedAt: new Date().toISOString(),
  source: "User input"
};

const AnalyzePage = () => {
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<typeof mockAnalysis | null>(null);
  const [activeTab, setActiveTab] = useState("input");

  const handleAnalyze = () => {
    if (!input.trim()) return;
    
    setIsAnalyzing(true);
    // Simulate API call
    setTimeout(() => {
      setAnalysis(mockAnalysis);
      setIsAnalyzing(false);
      setActiveTab("results");
    }, 2000);
  };

  const VerdictIcon = ({ verdict }: { verdict: string }) => {
    switch (verdict) {
      case "supported":
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case "disputed":
        return <AlertCircle className="w-5 h-5 text-red-600" />;
      case "unclear":
        return <HelpCircle className="w-5 h-5 text-yellow-600" />;
      default:
        return <HelpCircle className="w-5 h-5 text-gray-600" />;
    }
  };

  const VerdictBadge = ({ verdict }: { verdict: string }) => {
    const styles = {
      supported: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 border-green-200",
      disputed: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 border-red-200",
      unclear: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 border-yellow-200"
    };

    return (
      <Badge variant="outline" className={styles[verdict as keyof typeof styles]}>
        {verdict.charAt(0).toUpperCase() + verdict.slice(1)}
      </Badge>
    );
  };

  return (
    <div className="container max-w-6xl py-8 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Analyze Claims</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Paste a URL or text to verify factual claims with evidence-based analysis
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="input">Input Content</TabsTrigger>
          <TabsTrigger value="results" disabled={!analysis}>
            Analysis Results {analysis && `(${analysis.claims.length})`}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="input" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Enter Content to Analyze
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="text" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="text" className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Text
                  </TabsTrigger>
                  <TabsTrigger value="url" className="flex items-center gap-2">
                    <LinkIcon className="w-4 h-4" />
                    URL
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="text" className="space-y-4 pt-4">
                  <Textarea
                    placeholder="Paste article text, social media post, or any content containing factual claims..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="min-h-[200px] resize-none"
                  />
                </TabsContent>
                
                <TabsContent value="url" className="space-y-4 pt-4">
                  <Input
                    placeholder="https://example.com/article"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <p className="text-sm text-muted-foreground">
                    Enter a URL to analyze claims from a web page
                  </p>
                </TabsContent>
              </Tabs>

              <Button 
                onClick={handleAnalyze} 
                disabled={!input.trim() || isAnalyzing}
                className="w-full gap-2"
                size="lg"
              >
                {isAnalyzing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Analyzing Claims...
                  </>
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Analyze Claims
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Example prompts */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Try these examples</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                "The Earth is flat and NASA is hiding the evidence",
                "Regular exercise has been proven to reduce the risk of heart disease by up to 35%",
                "Drinking coffee stunts your growth and causes dehydration"
              ].map((example, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-3 text-left"
                  onClick={() => setInput(example)}
                >
                  <span className="text-sm font-normal">{example}</span>
                </Button>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="results" className="space-y-6">
          {analysis && (
            <>
              {/* Results header */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Analysis Complete</h3>
                      <p className="text-sm text-muted-foreground">
                        Analyzed {analysis.claims.length} claims • {new Date(analysis.analyzedAt).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="w-4 h-4" />
                        Export
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => {
                          setInput("");
                          setAnalysis(null);
                          setActiveTab("input");
                        }}
                      >
                        New Analysis
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Claims results */}
              <div className="space-y-4">
                {analysis.claims.map((claim) => (
                  <Card key={claim.id} className="overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div className="flex items-start gap-3 flex-1">
                          <VerdictIcon verdict={claim.verdict} />
                          <div className="space-y-1 flex-1">
                            <p className="font-medium leading-relaxed">{claim.text}</p>
                            <div className="flex items-center gap-3 flex-wrap">
                              <VerdictBadge verdict={claim.verdict} />
                              <div className="flex items-center gap-2">
                                <Progress value={claim.confidence} className="w-20 h-2" />
                                <span className="text-sm text-muted-foreground">
                                  {claim.confidence}% confidence
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4 pt-0">
                      {/* Rationale */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Rationale</h4>
                        <p className="text-sm text-muted-foreground">{claim.rationale}</p>
                      </div>

                      {/* Sources */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Evidence Sources</h4>
                        <div className="space-y-2">
                          {claim.sources.map((source, index) => (
                            <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-medium text-sm">{source.name}</span>
                                  <Badge variant="secondary" className="text-xs">
                                    Source
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground">{source.excerpt}</p>
                                <Button variant="link" className="h-auto p-0 text-xs" asChild>
                                  <a href={source.url} target="_blank" rel="noopener noreferrer">
                                    View source
                                  </a>
                                </Button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Disclaimer */}
              <Card className="bg-muted/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                    <div className="space-y-2">
                      <h4 className="font-semibold">Important Disclaimer</h4>
                      <p className="text-sm text-muted-foreground">
                        Veritas provides evidence-based analysis but is not a definitive truth source. 
                        Always consult multiple sources and use critical thinking. This is a student project 
                        and results should be verified independently.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AnalyzePage;