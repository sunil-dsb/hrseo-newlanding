"use client";

import { useState } from "react";
import { Lock, ChevronRight } from "lucide-react";
import { useLogin } from "@/services/auth/hooks";
import { getErrorMessage } from "@/lib/errorUtils";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { mutate: loginMutation, isPending, isError, error } = useLogin();

  const handleLogin = () => {
    loginMutation({ email, password });
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(/assets/image.png)`,
      }}
    >
      {/* Background blur - subtle blur on background itself */}
      <div className="absolute inset-0 backdrop-blur-sm" />

      {/* Main container - 50/50 split */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-2 sm:p-8">
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 w-full max-w-3xl">
          {/* LEFT CONTAINER - 50% width */}
          <div className="w-full lg:w-1/2 relative flex flex-col">
            {/* LEFT CARD - Login Form */}
            <div className="backdrop-blur-xl rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-3 sm:p-4 lg:p-5 flex flex-col relative mb-2 h-full bg-gray-100/40">
              {/* Top Header */}
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-xs font-normal text-gray-700">HRSeo</h1>
                <Link
                  href="/auth/register"
                  className="cursor-pointer text-sm font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Sign up
                </Link>
              </div>

              {/* Log in title and Facebook button - same row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 sm:gap-0 mb-3 sm:mb-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-800 leading-none">
                  Log in
                </h2>
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <div className="relative">
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2 size-6 sm:size-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm sm:text-base font-bold text-gray-700">
                      @
                    </span>
                  </div>
                  <input
                    type="email"
                    placeholder="e-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-3.5 rounded-full bg-stone-300 border-none focus:outline-none focus:ring-0 text-gray-800 font-normal text-sm sm:text-xs"
                  />
                </div>
              </div>

              {/* Password Input with "I forgot" inside */}
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2 size-8 sm:size-10 rounded-full bg-white flex items-center justify-center z-10">
                    <Lock className="size-3.5 sm:size-4 text-gray-700" />
                  </div>
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    className="w-full pl-12 sm:pl-14 pr-24 sm:pr-28 py-3 sm:py-3.5 rounded-full bg-stone-300 border-none focus:outline-none focus:ring-0 text-gray-800 font-normal text-sm sm:text-xs"
                  />
                  <button className="absolute cursor-pointer right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-xs font-normal text-gray-800 hover:text-gray-600 transition-colors px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white">
                    I forgot
                  </button>
                </div>
              </div>

              {/* Bottom section */}
              <div className="space-y-4">
                {/* Login Button - small rounded black button on right */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <p className="min-h-20 text-xs w-full sm:w-3/4 mb-0 sm:mb-10 text-red-500 leading-relaxed font-light">
                    {isError && getErrorMessage(error)}
                  </p>
                  <button
                    onClick={handleLogin}
                    disabled={isPending}
                    className="relative size-8 sm:size-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-colors shadow-lg self-end sm:self-auto disabled:opacity-50"
                  >
                    <span className="h-4 w-5 sm:h-5 sm:w-6 bg-black absolute rounded-l-full -left-4 sm:-left-5" />
                    {isPending ? (
                      <div className="size-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ChevronRight
                        className="size-5 text-white"
                        strokeWidth={2.5}
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* BOTTOM LEFT CARD - New in */}
            <div className="hidden lg:flex flex-col w-full backdrop-blur-xl rounded-xl sm:rounded-2xl lg:rounded-3xl p-2 sm:p-3 border border-white/20 shadow-2xl bg-black/75">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-white mb-2 leading-tight">
                New in
              </h3>
              <p className="text-gray-400 font-normal text-base sm:text-lg lg:text-xl mb-auto">
                HRSeo
              </p>
              <div className="flex justify-end mt-2 sm:mt-4">
                <button className="text-white font-normal text-xs sm:text-sm hover:opacity-80 transition-opacity">
                  Discover
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT CONTAINER - 50% width */}
          <div className="hidden lg:flex flex-col relative w-full lg:w-1/2">
            <div className="relative shadow-white lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-20 w-full lg:w-1/2 backdrop-blur-2xl rounded-2xl sm:rounded-3xl lg:rounded-[2rem] p-4 sm:p-5 border border-white/50 shadow-2xl flex flex-col justify-between items-start h-[96%] ml-3 bg-gray-100/40">
              {/* Top Section - Date and Event Details */}
              <div className="flex flex-col">
                {/* Date Display */}
                <div>
                  <h1 className="font-light text-5xl sm:text-6xl lg:text-7xl pb-2 text-gray-800">
                    Thu
                  </h1>
                  <p className="font-light text-4xl sm:text-5xl lg:text-6xl text-gray-400 -mt-2 sm:-mt-3">
                    24th
                  </p>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm sm:text-base font-normal text-gray-800">
                  18 PM
                </p>
                <p className="text-sm sm:text-base font-normal text-gray-800">
                  Kerkstraat 12B
                </p>
                <p className="text-sm sm:text-base font-normal text-gray-800">
                  Amsterdam
                </p>
              </div>

              {/* Bottom Section - C.Lab Logo */}
              <div className="flex flex-col items-start">
                <div className="size-5 sm:size-6 mb-1">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-full h-full text-gray-800"
                  >
                    <path d="M12 2L15.09 8.26L22 9L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9L8.91 8.26L12 2Z" />
                  </svg>
                </div>
                <p className="text-xs sm:text-sm font text-gray-800">HRSeo</p>
              </div>
            </div>
            {/* RIGHT CARD - Event Announcement */}
            <div className="rounded-2xl sm:rounded-3xl lg:rounded-[2rem] border border-white/50 shadow-2xl relative overflow-hidden mt-4 lg:mt-0 bg-white h-full flex-1">
              {/* Orange gradient circle - right side, extending off edge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-32 sm:size-44 lg:size-56 rounded-full bg-linear-to-br from-orange-400 to-orange-500 opacity-85" />

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col justify-end">
                {/* Bottom */}
                <div className="flex flex-col sm:flex-row justify-end items-end gap-3 sm:gap-0">
                  {/* Join in Button */}
                  <Link
                    href="/auth/register"
                    className="cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-lg"
                  >
                    <span className="text-white font-normal text-xs sm:text-sm">
                      Join in
                    </span>
                  </Link>
                  <button className="relative size-10 sm:size-11 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-colors shadow-lg">
                    <span className="h-4 w-7 sm:h-5 sm:w-8 bg-black absolute rounded-l-full -left-4 sm:-left-5" />
                    <ChevronRight
                      className="size-5 sm:size-6 text-white"
                      strokeWidth={2.5}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
