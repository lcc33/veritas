import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Veritas - Transparent Claim Verification & Fact Checking",
    template: "%s | Veritas Claim Checker"
  },
  description: "Verify claims in articles and text with evidence-based analysis. Get Supported, Disputed, or Unclear verdicts with source links and confidence scores. Transparent fact-checking tool.",
  keywords: [
    "fact checking",
    "claim verification",
    "evidence analysis",
    "truth check",
    "article verification",
    "fake news detection",
    "source checking",
    "transparent verification",
    "media literacy",
    "critical thinking"
  ],
  authors: [{ name: "Veritas Team" }],
  creator: "Veritas",
  publisher: "Veritas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://veritas-yourdomain.com'), // Update with your domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://veritas-yourdomain.com",
    title: "Veritas - Transparent Claim Verification",
    description: "Check claims in articles or text. Get evidence-based verdicts with sources and explanations.",
    siteName: "Veritas",
    images: [
      {
        url: "/og-image.jpg", // Create this image
        width: 1200,
        height: 630,
        alt: "Veritas - Evidence-Based Claim Checking Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Veritas - Transparent Claim Verification",
    description: "Check claims in articles or text. Get evidence-based verdicts with sources and explanations.",
    images: ["/og-image.jpg"],
    creator: "@veritas", // Update with your handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add these when you have them
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning> {/* Changed to en for better SEO */}
      <head>
        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon links - add these files to your public folder */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Veritas",
              "description": "Transparent claim verification tool that analyzes articles and text to provide evidence-based verdicts.",
              "url": "https://veritas-yourdomain.com",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Any",
              "permissions": "browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Organization",
                "name": "Veritas"
              }
            })
          }}
        />
      </head>
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}