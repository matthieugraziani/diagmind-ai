const Watermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Hexagonal pattern */}
          <pattern
            id="hexPattern"
            x="0"
            y="0"
            width="100"
            height="86.6"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
            />
          </pattern>

          {/* Neural network dots pattern */}
          <pattern
            id="dotsPattern"
            x="0"
            y="0"
            width="150"
            height="150"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="0" cy="0" r="2" fill="hsl(var(--primary))" />
            <circle cx="75" cy="43" r="2" fill="hsl(var(--primary))" />
            <circle cx="150" cy="0" r="2" fill="hsl(var(--primary))" />
            <circle cx="37" cy="107" r="2" fill="hsl(var(--primary))" />
            <circle cx="112" cy="107" r="2" fill="hsl(var(--primary))" />
            <circle cx="75" cy="150" r="2" fill="hsl(var(--primary))" />
            
            {/* Connection lines */}
            <line x1="0" y1="0" x2="75" y2="43" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="75" y1="43" x2="150" y2="0" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="75" y1="43" x2="37" y2="107" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="75" y1="43" x2="112" y2="107" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="37" y1="107" x2="75" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="112" y1="107" x2="75" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
          </pattern>

          {/* DNA helix pattern */}
          <pattern
            id="dnaPattern"
            x="0"
            y="0"
            width="60"
            height="120"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0 Q45 30 30 60 Q15 90 30 120"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle cx="30" cy="0" r="3" fill="hsl(var(--accent))" opacity="0.6" />
            <circle cx="30" cy="60" r="3" fill="hsl(var(--accent))" opacity="0.6" />
            <circle cx="30" cy="120" r="3" fill="hsl(var(--accent))" opacity="0.6" />
          </pattern>
        </defs>

        {/* Apply patterns across the viewport */}
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
        <rect width="100%" height="100%" fill="url(#dotsPattern)" opacity="0.8" />
        <rect width="100%" height="100%" fill="url(#dnaPattern)" opacity="0.4" />
      </svg>
    </div>
  );
};

export default Watermark;
