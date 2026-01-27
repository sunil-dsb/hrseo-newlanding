import type { Metadata } from "next";
import { MotionProvider } from "@/lib/motion";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import localFont from "next/font/local";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  setRequestLocale,
  getTranslations,
} from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const hrseFont = localFont({
  src: [
    {
      path: "../fonts/hrseTwo.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/hrseOne.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/hrseThree.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-hrse",
  display: "swap",
  preload: true,
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://hrseo.io";

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: t("title"),
      template: `%s | HRSEO`,
    },
    description: t("description"),
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
    authors: [{ name: "HRSEO", url: baseUrl }],
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
      url: baseUrl,
      siteName: "HRSEO",
      title: t("title"),
      description: t("description"),
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
      languages: {
        en: "/en",
        es: "/es",
        fr: "/fr",
      },
    },
    verification: {
      // google: "your-google-verification-code",
      // yandex: "your-yandex-verification-code",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${hrseFont.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <MotionProvider>{children}</MotionProvider>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
