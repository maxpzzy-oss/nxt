import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <div
      className={`bg-white rounded-card shadow-card p-6 ${hover ? 'transition-all duration-200 hover:shadow-hover hover:-translate-y-1' : ''} ${className}`}
    >
      {children}
    </div>
  );
};
