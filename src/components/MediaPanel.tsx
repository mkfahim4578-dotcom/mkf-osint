import React, { useState } from 'react';
import { X, Radio, Tv, Search, Play, Pause } from 'lucide-react';

interface MediaPanelProps {
  onClose: () => void;
}

const MediaPanel: React.FC<MediaPanelProps> = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState<'radio' | 'tv'>('radio');

  return (
    <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-[#0a0a0a]/95 backdrop-blur-xl border-l border-[var(--border-primary)] z-[1000] flex flex-col shadow-2xl">
      {/* Header */}
      <div className="p-4 border-b border-[var(--border-primary)] flex items-center justify-between bg-black/20">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[var(--gold-primary)]/10 rounded-lg">
            {activeTab === 'radio' ? <Radio className="w-5 h-5 text-[var(--gold-primary)]" /> : <Tv className="w-5 h-5 text-[var(--gold-primary)]" />}
          </div>
          <h2 className="text-lg font-mono font-bold text-[var(--gold-primary)] tracking-wider">MEDIA HUB</h2>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-white/5 rounded-full transition-colors">
          <X className="w-6 h-6 text-gray-400" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[var(--border-primary)]">
        <button 
          onClick={() => setActiveTab('radio')}
          className={`flex-1 py-3 font-mono text-sm tracking-widest transition-all ${activeTab === 'radio' ? 'text-[var(--gold-primary)] border-b-2 border-[var(--gold-primary)] bg-white/5' : 'text-gray-500 hover:text-gray-300'}`}
        >
          RADIO FM
        </button>
        <button 
          onClick={() => setActiveTab('tv')}
          className={`flex-1 py-3 font-mono text-sm tracking-widest transition-all ${activeTab === 'tv' ? 'text-[var(--gold-primary)] border-b-2 border-[var(--gold-primary)] bg-white/5' : 'text-gray-500 hover:text-gray-300'}`}
        >
          LIVE TV
        </button>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
        {activeTab === 'radio' ? (
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search Bangladesh Stations..." 
                className="w-full bg-black/40 border border-[var(--border-primary)] rounded-lg py-2 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-[var(--gold-primary)] text-gray-300"
              />
            </div>
            <div className="text-center py-10 text-gray-500 font-mono text-xs italic">
              Radio stations will appear here...
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="aspect-video bg-black rounded-lg border border-[var(--border-primary)] flex items-center justify-center group cursor-pointer overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
               <Play className="w-12 h-12 text-[var(--gold-primary)] opacity-50 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100" />
               <span className="absolute bottom-4 left-4 font-mono text-[10px] text-gray-400">SELECT A CHANNEL TO PLAY</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-[var(--border-primary)] bg-black/40">
        <p className="text-[9px] font-mono text-gray-600 text-center uppercase tracking-[0.2em]">
          MKF OSINT Media Module v1.0
        </p>
      </div>
    </div>
  );
};

export default MediaPanel;
