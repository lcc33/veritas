import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, Github, Mail, BookOpen } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-8">
          <div className="col-span-full lg:col-span-2">
            <Link href="/" className="flex font-bold items-center mb-4">
              <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" />
              <h3 className="text-2xl">Veritas</h3>
            </Link>
            <p className="text-muted-foreground max-w-md">
              A transparent claim verification tool that shows you the evidence behind factual claims. 
              Built as a student project to promote critical thinking and media literacy.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Product</h3>
            <div>
              <Link href="/analyze" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                Analyze Claims
              </Link>
            </div>
            <div>
              <Link href="#how-it-works" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                How It Works
              </Link>
            </div>
            <div>
              <Link href="#features" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                Features
              </Link>
            </div>
            <div>
              <Link href="#examples" className="opacity-60 hover:opacity-100 hover:text-primary transition-all">
                Examples
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-lg">Connect</h3>
            <div>
              <Link 
                href="https://github.com/your-username/veritas" 
                target="_blank"
                className="opacity-60 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </div>
            <div>
              <Link 
                href="#feedback" 
                className="opacity-60 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Feedback
              </Link>
            </div>
            <div>
              <Link 
                href="#faq" 
                className="opacity-60 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                FAQ
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        
        <section className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            <h3 className="">
              &copy; {currentYear} Veritas - Student Project
            </h3>
            <p className="mt-1 text-xs">
              Built with transparency in mind. Not a definitive truth source.
            </p>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p>
              Designed and developed by{" "}
              <Link
                target="_blank"
                href="https://github.com/your-username"
                className="text-primary transition-all hover:border-b hover:border-primary ml-1"
              >
                Your Team
              </Link>
            </p>
          </div>
        </section>
      </div>
    </footer>
  );
};