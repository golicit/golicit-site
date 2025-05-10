import React from 'react';

interface LogoProps {
  className?: string;
  color?: string;
}

export default function Logo({ className = "h-8 w-8", color = "text-teal-600" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`${className} ${color}`}
      fill="currentColor"
    >
      <path d="M85 50c0 19.33-15.67 35-35 35S15 69.33 15 50s15.67-35 35-35 35 15.67 35 35zm-35 0c0 8.28-6.72 15-15 15s-15-6.72-15-15 6.72-15 15-15 15 6.72 15 15zm30-5h10M20 45h10m15-15V20m0 60V70" />
    </svg>
  );
}