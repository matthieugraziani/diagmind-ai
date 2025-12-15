const Watermark = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Layer 1 - Hexagons with slow drift */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] animate-[drift_60s_ease-in-out_infinite]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
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
        </defs>
        <rect width="200%" height="200%" x="-50%" y="-50%" fill="url(#hexPattern)" />
      </svg>

      {/* Layer 2 - Neural dots with subtle pulse */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.025] animate-[pulse-watermark_8s_ease-in-out_infinite]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
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
            
            <line x1="0" y1="0" x2="75" y2="43" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="75" y1="43" x2="150" y2="0" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="75" y1="43" x2="37" y2="107" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="75" y1="43" x2="112" y2="107" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="37" y1="107" x2="75" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
            <line x1="112" y1="107" x2="75" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.5" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotsPattern)" />
      </svg>

      {/* Layer 3 - DNA helix with vertical flow */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.015] animate-[flow_30s_linear_infinite]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
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
        <rect width="100%" height="200%" y="-100%" fill="url(#dnaPattern)" />
      </svg>

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          25% { transform: translate(10px, 5px); }
          50% { transform: translate(5px, 10px); }
          75% { transform: translate(-5px, 5px); }
        }
        @keyframes pulse-watermark {
          0%, 100% { opacity: 0.025; }
          50% { opacity: 0.04; }
        }
        @keyframes flow {
          0% { transform: translateY(0); }
          100% { transform: translateY(120px); }
        }
      `}</style>
    </div>
  );
};

export default Watermark;
