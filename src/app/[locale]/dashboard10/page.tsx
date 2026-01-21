"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Play, Star, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Components ---

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="w-6 h-6 rounded-full border-2 border-[#1A1B26] flex items-center justify-center">
      <div className="w-2 h-2 bg-[#1A1B26] rounded-full" />
    </div>
    <span className="font-bold text-[#1A1B26] text-xl tracking-wide">
      VISOU
    </span>
  </div>
);

const SectionLabel = ({ text }: { text: string }) => (
  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#1A1B26]/60 uppercase">
    {text}
  </span>
);

export default function Dashboard9Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E8ECEF] via-[#DEE2E6] to-[#D0D4D8] relative overflow-hidden font-[system-ui] selection:bg-[#D94528] selection:text-white">
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3)_0%,rgba(0,0,0,0.05)_100%)] pointer-events-none" />
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-50 px-12 py-8 flex justify-between items-center max-w-[1600px] mx-auto">
        <Logo />

        <div className="hidden md:flex items-center gap-12">
          <SectionLabel text="LABORATORY" />
          <SectionLabel text="PRICING" />
          <SectionLabel text="ABOUT US" />
        </div>

        <button className="flex items-center gap-2 text-[#1A1B26] font-medium text-sm group">
          Contact
          <div className="w-8 h-8 rounded-full bg-[#1A1B26] text-white flex items-center justify-center transition-transform group-hover:bg-[#D94528]">
            <ChevronRight className="w-4 h-4" />
          </div>
        </button>
      </nav>

      {/* Main Hero Content */}
      <main className="relative w-full max-w-[1500px] mx-auto min-h-screen pt-32 px-12 grid grid-cols-12 gap-8 items-start">
        {/* Left Column: Big Text & CTA */}
        <div className="col-span-5 flex flex-col pt-10 relative z-20">
          {/* Big Heading */}
          <div className="flex flex-col select-none pointer-events-none">
            <h1 className="text-[120px] leading-[0.85] font-bold text-white tracking-tight">
              CLEAR
            </h1>
            <div className="flex items-center gap-4">
              {/* Decorative Eye/Iris Icon */}
              <div className="w-16 h-16 rounded-full border-[6px] border-white flex items-center justify-center opacity-60">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>
              <h1 className="text-[120px] leading-[0.85] font-bold text-white tracking-tight">
                VISION
              </h1>
            </div>
            <h1 className="text-[120px] leading-[0.85] font-bold text-white tracking-tight">
              CLINIC
            </h1>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex items-center gap-8 pl-2">
            <button className="bg-[#1A1B26] text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-[#D94528] transition-colors shadow-lg shadow-[#1A1B26]/20">
              View price
            </button>
            <Link
              href="#"
              className="text-[#1A1B26] font-medium text-sm border-b border-[#1A1B26] pb-0.5 hover:text-[#D94528] hover:border-[#D94528] transition-colors"
            >
              Features
            </Link>
          </div>

          {/* Tech Card - Bottom Left */}
          <div className="mt-24 w-[280px] bg-white rounded-[20px] p-5 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-[#1A1B26] leading-tight w-2/3">
                Cutting-Edge
                <br />
                Tech
              </h3>
              <div className="bg-[#DEE2E6] px-2 py-1 rounded text-[10px] font-bold text-[#1A1B26]/60">
                FDA
              </div>
            </div>

            <div className="relative w-full h-[140px]">
              {/* VR Headset Image */}
              <Image
                src="/dashboard9/vr_headset.png"
                alt="VR Tech"
                fill
                className="object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Center/Right Column: Composition */}
        <div className="col-span-7 relative h-[800px] w-full isolate">
          {/* Main Woman Image - Right Aligned largely */}
          <div className="absolute top-0 right-0 w-[500px] h-[650px] overflow-hidden rounded-none z-0">
            {/*  Using a container to mimic the crop. The image needs to be styled carefully. */}
            <div className="relative w-full h-full">
              <Image
                src="/dashboard9/woman.png"
                alt="Woman"
                fill
                className="object-cover object-top grayscale-[20%]"
                priority
              />
              {/* Overlay Star Icon (Top Right of image) */}
              <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>

              {/* Review Card - Floating on Image Bottom */}
              <div className="absolute bottom-12 left-12 bg-[#1A1B26] rounded-xl pl-4 pr-3 py-3 flex items-center gap-4 text-white shadow-2xl z-20">
                <div className="flex items-start gap-1">
                  <span className="text-2xl font-light">4.9</span>
                  <Star className="w-2.5 h-2.5 fill-white mt-1" />
                </div>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full border border-[#1A1B26] bg-gray-200 overflow-hidden">
                    <Image
                      src="/dashboard9/woman.png"
                      alt="user"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-[#1A1B26] bg-gray-300 overflow-hidden">
                    <Image
                      src="/dashboard9/abstract.png"
                      alt="user"
                      width={32}
                      height={32}
                      className="object-cover"
                    />
                  </div>
                </div>
                <button className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 ml-2">
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Red Card "99%" - Top Left of the Right Column */}
          <div className="absolute top-10 left-0 w-[260px] h-[320px] bg-[#D94528] rounded-none shadow-[20px_20px_40px_rgba(217,69,40,0.3)] flex flex-col p-8 text-white z-10 hover:translate-x-1 transition-transform">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center self-center mb-8 backdrop-blur-sm">
              <Play className="w-3 h-3 fill-white text-white ml-0.5" />
            </div>

            <div className="text-center mt-auto mb-4">
              <h2 className="text-5xl font-light mb-1">99%</h2>
              <p className="text-xs tracking-wider opacity-80 uppercase">
                Therapy Success
              </p>
            </div>

            <div className="relative w-full h-[100px] mt-4">
              <Image
                src="/dashboard9/red_pill.png"
                alt="Pill"
                fill
                className="object-contain drop-shadow-2xl rotate-12"
              />
            </div>
          </div>

          {/* Price Card "199$" - Below Red Card, slightly offset */}
          <div className="absolute top-[350px] left-[50px] w-[220px] h-[280px] bg-white/60 backdrop-blur-xl border border-white/40 rounded-[2px] shadow-xl p-6 flex flex-col items-center justify-between z-20">
            <div className="text-center mt-4">
              <h2 className="text-4xl font-light text-[#1A1B26]">199$</h2>
              <p className="text-[10px] tracking-widest text-[#1A1B26]/60 uppercase mt-1">
                Starting Price
              </p>
            </div>

            <div className="relative w-full h-[100px] mb-4">
              <Image
                src="/dashboard9/contact_lens.png"
                alt="Lens"
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>

            <div className="w-6 h-1 rounded-full bg-white/50" />
          </div>
        </div>
      </main>

      {/* Bottom Text */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 max-w-[300px] z-10">
        <p className="text-[10px] leading-relaxed text-[#1A1B26] font-medium tracking-wide">
          OUR EXPERTS OFFER TOP-TIER TREATMENTS, ENSURING CLEAR & HEALTHY EYES.
          YOUR PATH TO IMPROVED VISION STARTS HERE.
        </p>
        <Link
          href="#"
          className="inline-block mt-4 text-[10px] font-bold text-[#1A1B26] border-b border-[#1A1B26] pb-0.5 hover:text-[#D94528] hover:border-[#D94528] transition-colors uppercase"
        >
          See services
        </Link>
      </div>

      {/* Decorative 3D Shape - Bottom Right */}
      <div className="absolute bottom-[-50px] right-[10%] w-[300px] h-[300px] z-30 pointer-events-none opacity-90 mix-blend-multiply">
        <Image
          src="/dashboard9/abstract.png"
          alt="Abstract"
          fill
          className="object-contain" // Minimal styles as the image itself is the shape
        />
      </div>
    </div>
  );
}
