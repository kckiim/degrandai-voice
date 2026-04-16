'use client';

import { useEffect, useRef, useState } from 'react';
import Vapi from '@vapi-ai/web';

const VAPI_PUBLIC_KEY = '8de7eb94-daac-4b80-95c3-83ea5870367e';
const ASSISTANT_ID = '2d907008-a80b-4fd7-b9c3-a8569541b495';

type CallStatus = 'idle' | 'connecting' | 'active' | 'ending';

export default function Demo() {
  const vapiRef = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<CallStatus>('idle');
  const [isMuted, setIsMuted] = useState(false);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on('call-start', () => setStatus('active'));
    vapi.on('call-end', () => {
      setStatus('idle');
      setVolumeLevel(0);
    });
    vapi.on('speech-start', () => {
      // Agent is speaking — animate
    });
    vapi.on('volume-level', (vol: number) => {
      setVolumeLevel(vol);
    });
    vapi.on('error', () => {
      setStatus('idle');
    });

    return () => {
      vapi.stop();
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const startCall = async () => {
    if (!vapiRef.current || status !== 'idle') return;
    setStatus('connecting');
    try {
      await vapiRef.current.start(ASSISTANT_ID);
    } catch {
      setStatus('idle');
    }
  };

  const endCall = () => {
    if (!vapiRef.current) return;
    setStatus('ending');
    vapiRef.current.stop();
  };

  const toggleMute = () => {
    if (!vapiRef.current) return;
    const next = !isMuted;
    vapiRef.current.setMuted(next);
    setIsMuted(next);
  };

  // Pulse ring scale based on volume
  const pulseScale = status === 'active' ? 1 + volumeLevel * 0.6 : 1;

  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-blue-400 text-sm font-medium tracking-widest uppercase mb-4">Live Demo</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Talk to the agent yourself.
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto leading-relaxed mb-12">
          Click the button below and have a real conversation. This is exactly what your customers hear when they call after hours.
        </p>

        {/* Demo widget */}
        <div className="bg-[#111111] border border-white/8 rounded-2xl p-12 flex flex-col items-center gap-6">

          {/* Pulse ring + mic button */}
          <div className="relative flex items-center justify-center">
            {/* Outer pulse ring — only visible during active call */}
            {status === 'active' && (
              <div
                className="absolute rounded-full bg-blue-500/20 transition-transform duration-100"
                style={{
                  width: 96,
                  height: 96,
                  transform: `scale(${pulseScale})`,
                }}
              />
            )}
            {/* Connecting spinner ring */}
            {status === 'connecting' && (
              <div className="absolute w-24 h-24 rounded-full border-2 border-blue-500/30 border-t-blue-400 animate-spin" />
            )}

            {/* Main button */}
            <button
              onClick={status === 'idle' ? startCall : endCall}
              disabled={status === 'connecting' || status === 'ending'}
              className={`relative z-10 w-20 h-20 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg
                ${status === 'idle'
                  ? 'bg-blue-500 hover:bg-blue-400 hover:scale-105'
                  : status === 'active'
                  ? 'bg-red-500 hover:bg-red-400 hover:scale-105'
                  : 'bg-gray-700 cursor-not-allowed opacity-60'
                }`}
              aria-label={status === 'active' ? 'End call' : 'Start call'}
            >
              {status === 'idle' && (
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              )}
              {status === 'connecting' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
              )}
              {status === 'active' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                  <rect x="6" y="4" width="4" height="16" rx="1"/>
                  <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
              )}
              {status === 'ending' && (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="none">
                  <rect x="6" y="4" width="4" height="16" rx="1"/>
                  <rect x="14" y="4" width="4" height="16" rx="1"/>
                </svg>
              )}
            </button>
          </div>

          {/* Status label */}
          <div className="flex flex-col items-center gap-1">
            <p className="text-white font-semibold text-base">
              {status === 'idle' && 'Start a demo call'}
              {status === 'connecting' && 'Connecting…'}
              {status === 'active' && 'Call in progress'}
              {status === 'ending' && 'Ending call…'}
            </p>
            <p className="text-gray-500 text-sm">
              {status === 'idle' && 'Click to speak with the AI agent — uses your mic'}
              {status === 'connecting' && 'Getting the agent ready for you'}
              {status === 'active' && 'Speak naturally — ask about services, pricing, or booking'}
              {status === 'ending' && 'Wrapping up…'}
            </p>
          </div>

          {/* Mute button — only show during active call */}
          {status === 'active' && (
            <button
              onClick={toggleMute}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200
                ${isMuted
                  ? 'border-red-500/40 text-red-400 bg-red-500/10 hover:bg-red-500/20'
                  : 'border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                }`}
            >
              {isMuted ? (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="1" y1="1" x2="23" y2="23"/>
                    <path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"/>
                    <path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                  Unmute
                </>
              ) : (
                <>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                    <line x1="12" y1="19" x2="12" y2="23"/>
                    <line x1="8" y1="23" x2="16" y2="23"/>
                  </svg>
                  Mute
                </>
              )}
            </button>
          )}

          {/* Disclaimer */}
          <p className="text-gray-600 text-xs mt-2">
            This demo uses your browser microphone. No data is stored.
          </p>
        </div>
      </div>
    </section>
  );
}
