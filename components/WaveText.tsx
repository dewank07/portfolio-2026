'use client';

interface WaveTextProps {
  children: string;
  className?: string;
}

export default function WaveText({ children, className = '' }: WaveTextProps) {
  const letters = children.split('');

  return (
    <span className={`inline-block ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="inline-block wave-letter"
          style={{
            '--letter-index': index,
          } as React.CSSProperties}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </span>
  );
}
