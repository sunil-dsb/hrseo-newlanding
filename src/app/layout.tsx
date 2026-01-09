import type { Metadata } from "next";
import { GridLines, Navbar, Footer } from "@/components/layout";
import { MotionProvider } from "@/lib/motion";
import localFont from "next/font/local";
import "./globals.css";

const hrseFont = localFont({
  src: [
    {
      path: "./fonts/hrseTwo.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/hrseOne.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/hrseThree.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hrse",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://hrseo.io"),

  title: {
    default: "HRSEO - SEO Tool",
    template: "%s | HRSEO",
  },
  description:
    "Hazlo Rentable - HRSEO a SEO tools package. Productive keyword research, SERP analysis, rank tracking and backlink analysis thanks to super easy to use tools.",

  keywords: [
    "HRSEO",
    "SEO Tool",
    "Keyword Research",
    "SEO Analysis",
    "Search Engine Optimization",
    "Digital Marketing",
    "Content Optimization",
    "Backlink Analysis",
    "Website Audit",
    "Rank Tracking",
  ],

  authors: [{ name: "HRSEO", url: "https://hrseo.io" }],

  creator: "Hazlo Rentable",
  publisher: "Hazlo Rentable",

  icons: {
    icon: [
      {
        url: "/favicon_io/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon_io/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/favicon_io/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "android-chrome-192x192",
        url: "/favicon_io/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/favicon_io/android-chrome-512x512.png",
      },
    ],
  },
  manifest: "/favicon_io/site.webmanifest",

  openGraph: {
    type: "website",
    url: "https://hrseo.io",
    siteName: "HRSEO",
    title: "HRSEO - SEO Tool",
    description:
      "Hazlo Rentable - HRSEO a SEO Tool for Keyword research with modern SEO needs",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "HRSEO - SEO Tool Preview",
        type: "image/png",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://hrseo.io",
  },

  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${hrseFont.variable} antialiased`}
      >
        <MotionProvider>
          <GridLines />
          <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" aria-hidden="true">
            <div className="absolute inset-0 bg-[url('/noise.gif')] opacity-[0.04]"></div>
          </div>
          <Navbar />
          <div className="relative z-10">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
