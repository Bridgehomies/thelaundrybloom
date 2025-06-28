import React from "react";

export const LaundryIllustration = () => (
  <div className="flex justify-center mb-12">
    <svg width="400" height="250" viewBox="0 0 400 250" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Washing Machine */}
      <rect x="60" y="80" width="100" height="100" rx="10" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
      <circle cx="110" cy="130" r="15" fill="#D1D5DB"/>
      <path d="M90 170C90 181.046 98.9543 190 110 190C121.046 190 130 181.046 130 170H90Z" fill="#D1D5DB"/>

      {/* Baskets */}
      <rect x="180" y="100" width="60" height="80" rx="5" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
      <rect x="250" y="120" width="50" height="60" rx="5" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>

      {/* Folded Clothes */}
      <rect x="190" y="90" width="40" height="10" rx="2" fill="#BFDBFE" />
      <rect x="195" y="80" width="30" height="10" rx="2" fill="#BFDBFE" />
      <rect x="200" y="70" width="20" height="10" rx="2" fill="#BFDBFE" />

      {/* Hanger */}
      <path d="M270 80L280 90L290 80" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>
      <path d="M280 90V110" stroke="#60A5FA" strokeWidth="3" strokeLinecap="round"/>

      {/* Detergent Bottle */}
      <rect x="50" y="50" width="20" height="30" rx="3" fill="#BBF7D0" stroke="#A3E6D0" strokeWidth="1"/>
      <rect x="55" y="45" width="10" height="10" rx="2" fill="#6EE7B7"/>

      {/* Steam Effect */}
      <path d="M110 60C110 54.4772 114.477 50 120 50C125.523 50 130 54.4772 130 60C130 65.5228 134.477 70 140 70C145.523 70 150 74.4772 150 80" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M120 65C120 59.4772 124.477 55 130 55C135.523 55 140 59.4772 140 65C140 70.5228 144.477 75 150 75C155.523 75 160 79.4772 160 85" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </path>
      <path d="M130 70C130 64.4772 134.477 60 140 60C145.523 60 150 64.4772 150 70C150 75.5228 154.477 80 160 80C165.523 80 170 84.4772 170 90" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="2s" repeatCount="indefinite" />
      </path>
    </svg>
  </div>
);

export const LaundryStatsIllustration = ({ isRTL }: { isRTL?: boolean }) => (
  <div className="flex justify-center mb-8">
    <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Washing Machine */}
      <rect x={isRTL ? 290 : 50} y="60" width="100" height="80" rx="10" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
      <circle cx={isRTL ? 340 : 100} cy="100" r="10" fill="#D1D5DB"/>

      {/* Baskets */}
      <rect x={isRTL ? 180 : 170} y="90" width="50" height="60" rx="5" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
      <rect x={isRTL ? 100 : 240} y="110" width="40" height="40" rx="5" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>

      {/* Folded Clothes */}
      <rect x={isRTL ? 190 : 160} y="80" width="30" height="10" rx="2" fill="#BFDBFE" />
      <rect x={isRTL ? 200 : 170} y="70" width="20" height="10" rx="2" fill="#BFDBFE" />

      {/* Hanger */}
      <path d={isRTL ? "M120 70L110 80L100 70" : "M100 70L110 80L120 70"} stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>
      <path d={isRTL ? "M110 80V100" : "M110 80V100"} stroke="#60A5FA" strokeWidth="2" strokeLinecap="round"/>

      {/* Steam Effect */}
      <path d="M110 50C110 44.477 114.477 40 120 40C125.523 40 130 44.477 130 50C130 55.523 134.477 60 140 60C145.523 60 150 64.477 150 70" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M120 55C120 49.477 124.477 45 130 45C135.523 45 140 49.477 140 55C140 60.523 144.477 65 150 65C155.523 65 160 69.477 160 75" stroke="#9CA3AF" strokeWidth="2" fill="none" strokeLinecap="round">
        <animate attributeName="opacity" values="0;1;0" dur="3s" begin="1s" repeatCount="indefinite" />
      </path>
    </svg>
  </div>
)