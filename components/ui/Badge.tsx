import React from 'react';

interface BadgeProps {
  label: string;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ label, className = '' }) => {
  return (
    <span
      className={`
        inline-flex items-center justify-center px-3 py-1
        text-xs font-medium tracking-wide text-white
        bg-black/60 backdrop-blur-sm border border-white/10 rounded-full
        ${className}
      `}
    >
      {label}
    </span>
  );
};

export default Badge;