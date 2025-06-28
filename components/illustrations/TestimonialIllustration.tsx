import React from "react";

export const TestimonialIllustration = ({ isRTL }: { isRTL?: boolean }) => (
  <div className="mt-16 flex justify-center">
    <svg width="400" height="160" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Folded Clothes Stack */}
      <rect x={isRTL ? 290 : 20} y="60" width="120" height="10" rx="2" fill="#BFDBFE" />
      <rect x={isRTL ? 300 : 30} y="50" width="100" height="10" rx="2" fill="#BFDBFE" />
      <rect x={isRTL ? 310 : 40} y="40" width="80" height="10" rx="2" fill="#BFDBFE" />

      {/* Person Holding Laundry Bag */}
      <circle cx={isRTL ? 220 : 180} cy="100" r="15" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
      <path d={isRTL ? "M220 115V140 M210 130 M230 130" : "M180 115V140 M170 130 M190 130"} stroke="#E5E7EB" strokeWidth="2"/>
      <rect x={isRTL ? 190 : 160} y="140" width="60" height="15" rx="4" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>

      {/* Happy Face Icons */}
      <circle cx={isRTL ? 320 : 80} cy="100" r="15" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="2"/>
      <circle cx={isRTL ? 330 : 90} cy="95" r="2" fill="#6B7280"/>
      <circle cx={isRTL ? 310 : 70} cy="95" r="2" fill="#6B7280"/>
      <path d={isRTL ? "M320 110 A5 5 0 0 0 310 115" : "M80 110 A5 5 0 0 0 90 115"} stroke="#6B7280" strokeWidth="1.5" fill="none" />

      {/* Stars */}
      <polygon points={isRTL ? "330,30 340,60 370,60 345,75 350,100 345,75 320,60 290,60 315,45 305,20" : "130,30 140,60 170,60 145,75 150,100 145,75 120,60 90,60 115,45 105,20"} fill="#FBBF24" />

      {/* Chat Bubble */}
      <path d="M250 100Q270 80 290 100T330 100V130H250Z" fill="#E0F2F7"/>
      <path d={isRTL ? "M270 110L260 115L270 120" : "M270 110L280 115L270 120"} fill="#60A5FA"/>
    </svg>
  </div>
)