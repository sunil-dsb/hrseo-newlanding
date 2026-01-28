import { getTranslations, setRequestLocale } from "next-intl/server";
import { BlurFade } from "@/components/ui/Animators";

export default async function PrivacyPage({
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
            {t("privacy")}
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
                  1. Information We Collect
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  We collect information that you provide directly to us when
                  you create an account, use our services, or communicate with
                  us. This may include your name, email address, and payment
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">
                  2. How We Use Your Information
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  We use the information we collect to provide, maintain, and
                  improve our services, to develop new ones, and to protect
                  HRSEO and our users. We also use this information to offer you
                  tailored content – like giving you more relevant search
                  results.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">
                  3. Information Sharing
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  We do not share your personal information with companies,
                  organizations, or individuals outside of HRSEO except in the
                  following cases: with your consent, for external processing,
                  or for legal reasons.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-zinc-800 mb-4 tracking-tight">
                  4. Data Security
                </h2>
                <p className="text-zinc-600 leading-relaxed">
                  We work hard to protect HRSEO and our users from unauthorized
                  access to or unauthorized alteration, disclosure, or
                  destruction of information we hold.
                </p>
              </section>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
