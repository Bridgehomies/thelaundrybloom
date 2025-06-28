import React from "react";

export const StatsIllustration = ({ isRTL }: { isRTL?: boolean }) => (
  <div className="flex justify-center mb-8">
    <svg width="400" height="160" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Folded Clothes Stack */}
      <rect x={isRTL ? 290 : 20} y="60" width="120" height="10" rx="2" fill="#BFDBFE" />
      <rect x={isRTL ? 300 : 30} y="50" width="100" height="10" rx="2" fill="#BFDBFE" />
      <rect x={isRTL ? 310 : 40} y="40" width="80" height="10" rx="2" fill="#BFDBFE" />

      {/* Trophy */}
      <path d={isRTL ? "M200 30L190 70L210 70Z" : "M200 30L210 70L190 70Z"} fill="#FBBF24"/>
      <rect x={isRTL ? 195 : 195} y="70" width="10" height="30" rx="2" fill="#FBBF24"/>

      {/* Star Rating */}
      <polygon points={isRTL ? "130,90 120,120 90,120 115,135 110,160 105,135 80,120 50,120 75,90 65,60 95,75 110,50 125,75 155,60 145,90" : "130,90 140,120 170,120 145,135 150,160 155,135 180,120 210,120 185,90 195,60 165,75 150,50 135,75 105,60 115,90"} fill="#FACD49" />

      {/* Happy Face Icon */}
      <circle cx={isRTL ? 300 : 370} cy="100" r="15" fill="#BFDBFE" stroke="#93C5FD" strokeWidth="2"/>
      <circle cx={isRTL ? 310 : 380} cy="95" r="2" fill="#6B7280"/>
      <circle cx={isRTL ? 290 : 360} cy="95" r="2" fill="#6B7280"/>
      <path d={`M${isRTL ? 300 : 370} 110 A5 5 0 0 0 ${isRTL ? 290 : 380} 115`} stroke="#6B7280" strokeWidth="1.5" fill="none" />

      {/* Support Chat Bubble */}
      <path d="M250 100Q270 80 290 100T330 100V130H250Z" fill="#E0F2F7"/>
      <path d="M270 110L280 115L270 120" fill="#60A5FA"/>
    </svg>
  </div>
)