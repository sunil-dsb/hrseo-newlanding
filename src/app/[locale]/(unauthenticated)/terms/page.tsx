import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlurFade } from "@/components/ui/Animators";

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Footer");

  return (
    <section className="relative pt-48 pb-24 px-6 md:px-0">
      <div className="max-w-5xl 2xl:max-w-7xl container-4k mx-auto w-full px-4">
        <BlurFade delay={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-zinc-900 mb-12">
            {t("terms")}
          </h1>
        </BlurFade>

        <BlurFade delay={0.2}>
          <div className="prose prose-zinc max-w-4xl">
            <p className="text-xl text-zinc-500 font-light mb-12">
              Last updated: January 16, 2026
            </p>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">
                  1. Introduction
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  Welcome to HRSEO. By using our website and services, you agree
                  to comply with and be bound by the following terms and
                  conditions of use. Please read these terms carefully before
                  using our platform.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">
                  2. Use of Service
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  You agree to use HRSEO services only for lawful purposes and
                  in a way that does not infringe the rights of, restrict or
                  inhibit anyone else's use and enjoyment of the website.
                  Prohibited behavior includes harassing or causing distress or
                  inconvenience to any other user.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">
                  3. Intellectual Property
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  All content included on this site, such as text, graphics,
                  logos, button icons, images, data compilations, and software,
                  is the property of HRSEO or its content suppliers and
                  protected by international copyright laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">
                  4. Limitation of Liability
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  HRSEO will not be liable for any damages of any kind arising
                  from the use of this site, including, but not limited to
                  direct, indirect, incidental, punitive, and consequential
                  damages.
                </p>
              </section>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
