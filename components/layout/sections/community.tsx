import { Users, GraduationCap, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <GraduationCap className="w-12 h-12 mb-4 text-primary" />
                <div>
                  Join the
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    Conversation
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              This is a student project focused on fighting misinformation. Share your thoughts, report issues, or suggest improvements to help us learn and grow.
            </CardContent>

            <CardFooter className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="gap-2">
                <a href="/analyze">
                  <MessageSquare className="w-4 h-4" />
                  Test the Tool
                </a>
              </Button>
              <Button asChild variant="outline" className="gap-2">
                <a href="https://github.com/your-username/veritas/issues" target="_blank">
                  <Users className="w-4 h-4" />
                  Report Issues
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};