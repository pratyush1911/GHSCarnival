
import React from "react";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex justify-center bg-[#F3F3F3]">
      {/* MOBILE VIEW */}
      <div
        className="w-[390px] min-h-screen bg-cover bg-center overflow-y-auto"
        style={{ backgroundImage: "url(/Background.png)" }}
      >
        {/* CONTENT */}
        <div className="px-[20px] pt-[24px] pb-[24px]">
          
          {/* TOP LOGO */}
          <div className="flex justify-center">
            <img
              src="/ghs-carnival-logo.png"
              alt="GHS Carnival"
              className="h-[66px] object-contain"
            />
          </div>

          {/* HERO IMAGE */}
          <div className="mt-[20px] bg-white rounded-[20px] shadow-lg p-[10px]">
            <img
              src="/ghs.png"
              alt="GHS Carnival"
              className="w-full h-[237px] object-cover rounded-[14px]"
            />

            {/* DOT INDICATORS */}
            <div className="flex justify-center gap-[6px] mt-[10px]">
              <span className="w-[6px] h-[6px] rounded-full bg-[#FF8736]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#D1D5DB]" />
              <span className="w-[6px] h-[6px] rounded-full bg-[#D1D5DB]" />
            </div>
          </div>

          {/* TITLE */}
          <h2
            className="mt-[18px] text-center text-[#FF8736] text-[26px] tracking-[0.02em]"
            style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
          >
            The Annual Carnival
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-[12px] text-center text-[14px] leading-[22px] text-[#2F2F2F]"
           style={{ fontFamily: "'Kdam Thmor Pro', sans-serif" }}
           >
            Returning back in 2026, the annual GHS Carnival is better than ever,
            with upcoming jaw-dropping cultural performances, to be presented by
            our very own students and thrilling sporting events.
          </p>

          {/* EVENT GALLERY */}
          <h3 className="mt-[22px] text-center text-[#FF8736] text-[26px] font-semibold">
            Event Gallery
          </h3>

          <div className="mt-[14px] grid grid-cols-3 gap-[10px]">
            <div className="h-[72px] rounded-[10px] bg-gray-300" />
            <div className="h-[72px] rounded-[10px] bg-gray-300" />
            <div className="h-[72px] rounded-[10px] bg-gray-300" />
          </div>

          {/* QUICK LINKS CARD */}
          <div className="mt-[26px] bg-white rounded-[18px] shadow-md px-[18px] py-[16px]">
            <h4 className="text-[18px] font-bold mb-[14px]">
              Quick Links
            </h4>

            <div className="space-y-[14px] text-[14px] font-semibold">
              <div className="flex items-center gap-[12px]">
                <img src="/instagram.png" alt="Instagram" className="w-[22px]" />
                <span>GHS CARNIVAL’s Official Page</span>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="/globe.png" alt="Guidelines" className="w-[22px]" />
                <span>Guidelines / Rulebook</span>
              </div>

              <div className="flex items-center gap-[12px]">
                <img src="/clock.png" alt="Updates" className="w-[22px]" />
                <span>Cultural Events Updates</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM NAV (SCROLLS WITH PAGE) */}
        <div className="bg-white border-t py-[12px]">
          <div className="flex justify-around text-[11px] text-gray-500">
            <div className="flex flex-col items-center text-[#FF8736]">
              <span className="text-[18px]">🏠</span>
              Home
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px]">ℹ️</span>
              About
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px]">👥</span>
              Dev Team
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px]">📊</span>
              Live Score
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[18px]">📄</span>
              Guidelines
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
