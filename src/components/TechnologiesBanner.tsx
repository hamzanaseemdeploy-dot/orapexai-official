import React from 'react';

const technologies = [
  { name: 'OpenAI', url: 'https://openai.com' },
  { name: 'Gemini', url: 'https://deepmind.google/technologies/gemini/' },
  { name: 'ElevenLabs', url: 'https://elevenlabs.io' },
  { name: 'Deepgram', url: 'https://deepgram.com' },
  { name: 'Murf.ai', url: 'https://murf.ai' },
  { name: 'Resemble AI', url: 'https://www.resemble.ai' },
  { name: 'Play.ht', url: 'https://play.ht' },
];

const TechnologiesBanner: React.FC = () => {
  return (
    <div className="w-full bg-slate-950 py-16 border-y border-slate-900 overflow-hidden relative group">
      
      <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
        <h3 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em] font-display">
          Technologies You Can Use
        </h3>
      </div>
      
      <div className="relative flex overflow-hidden mask-image-linear-gradient">
        <div className="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap px-8 group-hover:[animation-play-state:paused]">
          {technologies.map((tech, index) => (
            <a 
              key={index} 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl md:text-4xl font-bold text-slate-700 hover:text-cyan-400 transition-colors duration-300 font-display flex items-center gap-2"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}
            >
              {tech.name}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 animate-marquee items-center gap-16 whitespace-nowrap px-8 group-hover:[animation-play-state:paused]" aria-hidden="true">
          {technologies.map((tech, index) => (
            <a 
              key={`dup-${index}`} 
              href={tech.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl md:text-4xl font-bold text-slate-700 hover:text-cyan-400 transition-colors duration-300 font-display flex items-center gap-2"
              style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}
            >
              {tech.name}
            </a>
          ))}
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-24 md:w-64 h-full bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-24 md:w-64 h-full bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default TechnologiesBanner;
