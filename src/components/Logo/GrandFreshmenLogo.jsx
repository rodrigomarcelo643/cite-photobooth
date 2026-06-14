import React from 'react';
import '../../styles/GrandFreshmenLogo.css';

function GrandFreshmenLogo({ size = 'md', theme = 'dark', className = '' }) {
  // size can be 'sm', 'md', 'lg'
  // theme can be 'dark' (for light bg, e.g. white/peach) or 'light' (for dark bg, e.g. orange strip)
  
  const containerClasses = `grand-freshmen-logo-container select-none flex items-center justify-center ${size} ${theme} ${className}`;
  
  return (
    <div className={containerClasses}>
      <div className="logo-emblem-wrapper">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-emblem-svg">
          {/* Outer rotating/dashed circle */}
          <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="2" strokeDasharray="5 4" className="emblem-outer-circle" />
          
          {/* Inner circle background */}
          <circle cx="32" cy="32" r="23" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" />
          
          {/* Star sparkle in top center */}
          <path d="M32 13L34 18.5L39.5 20.5L34 22.5L32 28L30 22.5L24.5 20.5L30 18.5L32 13Z" fill="currentColor" />
          
          {/* Center meetup figure */}
          <circle cx="32" cy="37" r="4.5" fill="currentColor" />
          <path d="M25 48.5C25 43.5 28 43.5 32 43.5C36 43.5 39 43.5 39 48.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Left figure */}
          <circle cx="23" cy="40" r="3.5" fill="currentColor" opacity="0.85" />
          <path d="M18 49C18 45 20 45 23 45C26 45 28 45 28 49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
          
          {/* Right figure */}
          <circle cx="41" cy="40" r="3.5" fill="currentColor" opacity="0.85" />
          <path d="M36 49C36 45 38 45 41 45C44 45 46 49 46 49" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85" />
        </svg>
      </div>
      <div className="logo-text-wrapper">
        <span className="logo-text-main">AWSSBG  GRAND FRESHMEN</span>
        <span className="logo-text-sub">MEETUP</span>
      </div>
    </div>
  );
}

export default GrandFreshmenLogo;
