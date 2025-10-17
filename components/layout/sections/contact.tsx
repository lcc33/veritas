"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Bug, Mail, MessageSquare, Github } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2).max(255),
  email: z.string().email().optional().or(z.literal('')),
  issueType: z.string().min(2).max(255),
  message: z.string().min(10, "Please provide at least 10 characters of detail"),
});

export const ContactSection = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      issueType: "bug",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { name, email, issueType, message } = values;
    
    const subject = `[Veritas Feedback] ${issueType.toUpperCase()} - ${name}`;
    const body = `Name: ${name}${email ? `\nEmail: ${email}` : ''}\nIssue Type: ${issueType}\n\nMessage:\n${message}\n\n---\nSent from Veritas Feedback Form`;

    const mailToLink = `mailto:your-team@veritas.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailToLink;
  }

  return (
    <section id="feedback" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Feedback
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Help Us Improve</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Found an issue? Have suggestions? As a student project, your feedback helps us learn and improve Veritas. Report bugs, suggest features, or share your experience.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <div className="flex gap-2 mb-1">
                <Bug className="w-5 h-5" />
                <div className="font-bold">Report Issues</div>
              </div>
              <div className="text-muted-foreground">
                Found incorrect verdicts? Broken features? Let us know so we can fix them.
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <MessageSquare className="w-5 h-5" />
                <div className="font-bold">Suggest Improvements</div>
              </div>
              <div className="text-muted-foreground">
                Have ideas for new features or better analysis? We'd love to hear them.
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Github className="w-5 h-5" />
                <div className="font-bold">GitHub Issues</div>
              </div>
              <div className="text-muted-foreground">
                Prefer GitHub? <a href="https://github.com/your-username/veritas/issues" target="_blank" className="text-primary hover:underline">Open an issue</a> on our repository for technical feedback.
              </div>
            </div>

            <div>
              <div className="flex gap-2 mb-1">
                <Mail className="w-5 h-5" />
                <div className="font-bold">Quick Feedback</div>
              </div>
              <div className="text-muted-foreground">
                Just want to say something worked well? We appreciate positive feedback too!
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader>
            <h3 className="text-xl font-semibold">Send Us Feedback</h3>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="john@example.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="issueType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Feedback Type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select feedback type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="bug">Bug Report</SelectItem>
                          <SelectItem value="incorrect-verdict">Incorrect Verdict</SelectItem>
                          <SelectItem value="feature-request">Feature Request</SelectItem>
                          <SelectItem value="ui-issue">UI/UX Issue</SelectItem>
                          <SelectItem value="performance">Performance Issue</SelectItem>
                          <SelectItem value="general">General Feedback</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Details *</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Please describe the issue or suggestion in detail. For claim verification issues, include the text or URL you analyzed..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="mt-2">
                  Send Feedback
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter className="text-xs text-muted-foreground">
            <p>This is a student project. We appreciate your patience and feedback!</p>
          </CardFooter>
        </Card>
      </section>
    </section>
  );
};