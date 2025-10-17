"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, Shield } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>Transparent</Badge>
            </span>
            <span> Evidence-based verification </span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Check
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                Claims
              </span>
              Not Trust
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Veritas analyzes articles and text to show you evidence behind claims. 
            No black boxes—just transparent verification with sources and explanations.
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
              <Link href="/analyze">
                Analyze Claims
                <Search className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link href="#how-it-works">
                How It Works
                <Shield className="size-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <div className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30 bg-card p-8 min-h-[400px]">
            {/* Mock Veritas Analysis Interface */}
            <div className="w-full space-y-6">
              {/* Input Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="bg-muted rounded-lg p-4 border">
                  <p className="text-sm text-muted-foreground">Paste URL or text to analyze...</p>
                </div>
              </div>
              
              {/* Claim Cards Mockup */}
              <div className="space-y-4">
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Supported</Badge>
                    <div className="text-xs text-muted-foreground">85% confidence</div>
                  </div>
                  <p className="text-sm">Climate change is primarily caused by human activities.</p>
                  <div className="flex gap-2 text-xs">
                    <Badge variant="outline" className="text-xs">NASA</Badge>
                    <Badge variant="outline" className="text-xs">IPCC</Badge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="destructive">Disputed</Badge>
                    <div className="text-xs text-muted-foreground">92% confidence</div>
                  </div>
                  <p className="text-sm">Vaccines cause autism in children.</p>
                  <div className="flex gap-2 text-xs">
                    <Badge variant="outline" className="text-xs">CDC</Badge>
                    <Badge variant="outline" className="text-xs">WHO</Badge>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">Unclear</Badge>
                    <div className="text-xs text-muted-foreground">45% confidence</div>
                  </div>
                  <p className="text-sm">Specific economic impacts of recent policy changes.</p>
                  <div className="text-xs text-muted-foreground">Insufficient evidence found</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};