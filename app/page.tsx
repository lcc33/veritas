import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Veritas - Transparent Claim Verification",
  description: "Check claims in articles or text. Get evidence-based verdicts: Supported, Disputed, or Unclear.",
  openGraph: {
    type: "website",
    url: "https://veritas-yourdomain.com",
    title: "Veritas - Transparent Claim Verification",
    description: "Check claims in articles or text. Get evidence-based verdicts with sources and explanations.",
    images: [
      {
        url: "/og-image.jpg", // You'll want to create this
        width: 1200,
        height: 630,
        alt: "Veritas - Evidence-Based Claim Checking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://veritas-yourdomain.com",
    title: "Veritas - Transparent Claim Verification",
    description: "Check claims in articles or text. Get evidence-based verdicts with sources and explanations.",
    images: [
      "/og-image.jpg",
    ],
  },
};

export default function LandingPage() {
  return (
    <>
    <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      {/* <PricingSection /> */}
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}