"use client";

import { useState } from "react";
import { Lock, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/services/auth/hooks";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  const { mutate: loginMutation, isPending, isError, error } = useLogin();

  const handleLogin = () => {
    loginMutation(
      { email, password },
      {
        onSuccess: () => {
          router.push("/");
        },
      },
    );
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(/assets/image.png)`,
        backgroundSize: "cover ",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Background blur - subtle blur on background itself */}
      <div className="absolute inset-0 backdrop-blur-[2px] " />

      {/* Main container - 50/50 split */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-2 sm:p-3 md:p-4 lg:p-8 xl:p-0">
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 w-full max-w-3xl">
          {/* LEFT CONTAINER - 50% width */}
          <div className="w-full lg:w-1/2 relative flex flex-col">
            {/* LEFT CARD - Login Form */}
            <div
              className="backdrop-blur-xl rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] p-3 sm:p-4 lg:p-5 bord flex flex-col relative mb-2 h-full"
              style={{
                backgroundColor: "rgb(244 244 244 / 40%)",
                minHeight: "auto",
              }}
            >
              {/* Top Header */}
              <div className="flex justify-between items-center mb-3">
                <h1 className="text-[12px] font-normal text-gray-700">HRSeo</h1>
                <Link
                  href="/auth/register"
                  className=" cursor-pointer text-sm font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  Sign up
                </Link>
              </div>

              {/* Log in title and Facebook button - same row */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline gap-2 sm:gap-0 mb-3 sm:mb-6">
                <h2 className="text-[28px] sm:text-[32px] lg:text-[37px] text-gray-800 leading-none">
                  Log in
                </h2>
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <div className="relative">
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center">
                    <span className="text-sm sm:text-base font-bold text-gray-700">
                      @
                    </span>
                  </div>
                  <input
                    type="email"
                    placeholder="e-mail address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 sm:pl-14 pr-4 py-3 sm:py-3.5 rounded-full bg-[#e3dcd4] border-none focus:outline-none focus:ring-0 text-gray-800 font-normal text-sm sm:text-[12px]"
                  />
                </div>
              </div>

              {/* Password Input with "I forgot" inside */}
              <div className="mb-6">
                <div className="relative">
                  <div className="absolute left-1 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white flex items-center justify-center z-10">
                    <Lock
                      size={13}
                      className="sm:w-[15px] sm:h-[15px] text-gray-700"
                    />
                  </div>
                  <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                    className="w-full pl-12 sm:pl-14 pr-24 sm:pr-28 py-3 sm:py-3.5 rounded-full bg-[#e3dcd4] border-none focus:outline-none focus:ring-0 text-gray-800 font-normal text-sm sm:text-[12px]"
                  />
                  <button className="absolute cursor-pointer right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-[9px] sm:text-[11px] font-normal text-gray-800 hover:text-gray-600 transition-colors px-2 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white">
                    I forgot
                  </button>
                </div>
              </div>

              {/* Spacer to push content down */}
              {/* <div className="flex-1" /> */}

              {/* Bottom section */}
              <div className="space-y-4 ">
                {/* Login Button - small rounded black button on right */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <p className="min-h-20 text-[8px] sm:text-[9px] w-full sm:w-3/4 mb-0 sm:mb-10 text-red-500 leading-relaxed font-light">
                    {isError && error?.message}
                  </p>
                  <button
                    onClick={handleLogin}
                    disabled={isPending}
                    className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-colors shadow-lg self-end sm:self-auto disabled:opacity-50"
                  >
                    <span className="h-4 w-5 sm:h-5 sm:w-6 bg-black absolute rounded-l-full left-[-15px] sm:left-[-18px]" />
                    {isPending ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ChevronRight
                        size={20}
                        className="sm:w-[20px] sm:h-[20px] text-white"
                        strokeWidth={2.5}
                      />
                    )}
                  </button>
                </div>

                {/* Disclaimer Text */}

                {/* Responsibility message - centered, italic, slightly larger, dark grey */}
                <p className="text-sm text-black-700   text-center">
                  Please consume responsibly!
                </p>
              </div>
            </div>

            {/* BOTTOM LEFT CARD - New in */}
            <div
              className="hidden lg:block w-full  backdrop-blur-xl rounded-[15px] sm:rounded-[19px] lg:rounded-[25px] p-2 sm:p-3 border border-white/20 shadow-2xl flex flex-col"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              }}
            >
              <h3 className="text-[25px] sm:text-[30px] lg:text-[32px] font-bold text-white mb-2 leading-tight">
                New in
              </h3>
              <p className="text-gray-400 font-normal text-[16px] sm:text-[18px] lg:text-[20px] mb-auto">
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
            <div
              className="relative shadow-white lg:absolute z-20 w-full lg:w-1/2 backdrop-blur-2xl rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] p-4 sm:p-5 border border-white/50 shadow-2xl flex flex-col justify-between h-[98%]"
              style={{
                backgroundColor: "rgba(244, 244, 244, 0.4)",
                alignItems: "center",
              }}
            >
              {/* Top Section - Date and Event Details */}
              <div className="flex flex-col">
                {/* Date Display */}
                <div>
                  <h1 className="font-light text-[50px] sm:text-[60px] lg:text-[70px] pb-2 text-gray-800 leading-none">
                    Thu
                  </h1>
                  <p className="font-light text-[42px] sm:text-[52px] lg:text-[60px] text-gray-400 leading-none -mt-2 sm:-mt-3">
                    24th
                  </p>
                </div>

                {/* Event Details */}
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
                <div className="w-5 h-5 sm:w-6 sm:h-6 mb-1">
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
            <div
              className="rounded-[20px] sm:rounded-[24px] lg:rounded-[32px] border border-white/50 shadow-2xl relative overflow-hidden mt-4 lg:mt-0"
              style={{
                backgroundColor: "white",
                minHeight: "400px",
                height: "auto",
              }}
            >
              {/* Orange gradient circle - right side, extending off edge */}
              {/* <div className="absolute top-1/2 -right-20 transform -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-gradient-to-br from-orange-300 via-orange-400 to-orange-600 opacity-75 blur-3xl" /> */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] sm:w-[180px] sm:h-[1800px] lg:w-[230px] lg:h-[230px] rounded-full bg-linear-to-br from-orange-400 to-orange-500 opacity-85" />

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-5 h-full flex flex-col justify-between min-h-[92vh]">
                {/* Top Right - Grand opening */}
                <div className="text-right self-end">
                  <p className="text-xs sm:text-sm font-normal text-gray-600 mb-0.5">
                    Grand opening
                  </p>
                  <p className="text-xs sm:text-sm font-normal text-gray-800">
                    New store
                  </p>
                </div>

                {/* Date and Location - positioned in upper-left area */}

                {/* Bottom */}
                <div className="flex flex-col sm:flex-row justify-end items-end gap-3 sm:gap-0">
                  {/* C.Lab Logo - icon above text */}

                  {/* Join in Button */}
                  <Link
                    href="/auth/register"
                    className=" cursor-pointer px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-black flex items-center gap-2 hover:bg-gray-900 transition-colors shadow-lg"
                  >
                    <span className="text-white font-normal text-xs sm:text-sm">
                      Join in
                    </span>
                    {/* <ChevronRight size={18} className="text-white" strokeWidth={2} /> */}
                  </Link>
                  <button className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black flex items-center justify-center hover:bg-gray-900 transition-colors shadow-lg">
                    <span className="h-4 w-7 sm:h-5 sm:w-8 bg-black absolute rounded-l-full left-[-15px] sm:left-[-18px]" />
                    <ChevronRight
                      size={20}
                      className="sm:w-[22px] sm:h-[22px] text-white"
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
