"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRegister } from "@/services/auth/hooks";
import { getErrorMessage } from "@/lib/errorUtils";
import { Link } from "@/i18n/routing";
import { m, Variants } from "framer-motion";
import { ChevronRight, Loader2, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ButtonSlide } from "@/components/ui/ButtonSlide";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  const { mutate: registerMutation, isPending, isError, error } = useRegister();

  const handleRegister = () => {
    registerMutation(
      { name, email, password },
      {
        onSuccess: () => {
          router.push("/auth/login");
        },
      },
    );
  };

  return (
    <div className="w-full max-w-lg mx-auto relative isolate">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <m.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[20%] w-[600px] h-[600px] bg-[#F15A29]/10 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -60, 0],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute -bottom-[20%] -right-[20%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"
        />
        <m.div
          animate={{
            y: [0, 50, 0],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"
        />
      </div>

      <m.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Card Structure matching ToolsGrid items */}
        <div className="relative p-3 group">
          {/* Top Border & Dots */}
          <div
            className="absolute top-0 left-0 right-0 h-[0.05rem] bg-black/6"
            aria-hidden="true"
          />
          <div
            className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-200 rounded-full"
            aria-hidden="true"
          />

          {/* Bottom Border & Dots */}
          <div
            className="absolute bottom-0 left-0 right-0 h-[0.05rem] bg-black/6"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1.5 left-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-zinc-300 rounded-full"
            aria-hidden="true"
          />

          {/* Inner Card Content */}
          {/* Inner Card Content */}
          {/* Inner Card Content */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-10 border border-zinc-100 shadow-xl shadow-black/5 relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#F15A29]/5 hover:border-[#F15A29]/20">
            {/* Logo / Brand Header */}
            <m.div
              variants={itemVariants}
              className="flex flex-col items-center mb-6 text-center"
            >
              <Link
                href="/"
                className="mb-4 inline-block hover:opacity-80 transition-opacity"
              >
                <span className="sr-only">Home</span>
                <Image
                  src="/hrseo-logo.png"
                  alt="HRSEO"
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  priority
                />
              </Link>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 mb-2">
                Start for free
              </h1>
              <p className="text-zinc-500 font-light text-sm sm:text-base">
                Create your account to unlock powerful SEO tools.
              </p>
            </m.div>

            {/* Form */}
            <div className="flex flex-col gap-3">
              <m.div variants={itemVariants} className="space-y-1">
                <label
                  htmlFor="name"
                  className="text-xs sm:text-sm font-light text-gray-900 ml-1"
                >
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-10 sm:h-11 rounded-lg bg-zinc-50/50 border border-zinc-200 px-3 text-gray-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F15A29]/20 focus:border-[#F15A29] transition-all text-sm hover:bg-white"
                />
              </m.div>

              <m.div variants={itemVariants} className="space-y-1">
                <label
                  htmlFor="email"
                  className="text-xs sm:text-sm font-light text-gray-900 ml-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 sm:h-11 rounded-lg bg-zinc-50/50 border border-zinc-200 px-3 text-gray-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F15A29]/20 focus:border-[#F15A29] transition-all text-sm hover:bg-white"
                />
              </m.div>

              <m.div variants={itemVariants} className="space-y-1">
                <label
                  htmlFor="password"
                  className="text-xs sm:text-sm font-light text-gray-900 ml-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleRegister()}
                  className="w-full h-10 sm:h-11 rounded-lg bg-zinc-50/50 border border-zinc-200 px-3 text-gray-900 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#F15A29]/20 focus:border-[#F15A29] transition-all text-sm hover:bg-white"
                />
              </m.div>

              <m.div variants={itemVariants}>
                {isError && (
                  <div className="mb-2 p-2.5 rounded-lg bg-red-50 text-red-600 text-xs font-medium border border-red-100 flex items-center gap-2 animate-pulse">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    {getErrorMessage(error)}
                  </div>
                )}

                <ButtonSlide
                  onClick={handleRegister}
                  disabled={isPending}
                  variant="dark" // Using dark variant (orange handled via custom class if needed, or stick to dark/light as defined in component for consistency with branding)
                  className="w-full h-12 rounded-full mt-2 bg-[#F15A29] hover:bg-[#d64a1d] shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30 disabled:opacity-70 disabled:pointer-events-none"
                  icon={
                    isPending ? (
                      <Loader2
                        size={18}
                        className="animate-spin text-white/80"
                      />
                    ) : (
                      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
                        <ArrowRight size={14} />
                      </span>
                    )
                  }
                >
                  Create Account
                </ButtonSlide>
              </m.div>
            </div>

            {/* Footer */}
            <m.div
              variants={itemVariants}
              className="mt-6 text-center text-zinc-500 text-xs sm:text-sm"
            >
              <p className="mb-4">
                Already have an account?{" "}
                <Link
                  href="/auth/login"
                  className="font-bold text-black hover:underline underline-offset-2 hover:text-[#F15A29] transition-colors"
                >
                  Log in
                </Link>
              </p>
              <div className="text-[10px] sm:text-xs text-zinc-400 mx-auto max-w-xs leading-relaxed">
                By signing up, you agree to our{" "}
                <Link href="#" className="underline hover:text-gray-500">
                  Terms
                </Link>{" "}
                and{" "}
                <Link href="#" className="underline hover:text-gray-500">
                  Privacy
                </Link>
                .
              </div>
            </m.div>
          </div>
        </div>
      </m.div>
    </div>
  );
}
