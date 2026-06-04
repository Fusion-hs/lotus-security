import { useEffect, useState } from 'react';
import NetworkBackground from './networkbg';

export default function Hero({ onGetScan }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden ">
      <NetworkBackground />
      <div className={`relative z-10 px-8 md:px-16 pt-28 pb-20 max-w-2xl reveal-element ${visible ? 'revealed' : ''}`}>
        <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-4 block">
          Cybersecurity for Small &amp; Mid-Sized Business
        </span>
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
          Your business<br />
          is already{' '}
          <span className="text-emerald-400">vulnerable.</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-3 leading-relaxed max-w-lg">
          43% of cyberattacks target small businesses — yet most go undetected for months. We find and fix your security risks before hackers do.
        </p>
        <p className="text-gray-500 text-sm mb-10 max-w-md leading-relaxed">
          Network penetration testing, web app security, cloud audits, and automated vulnerability scans — all in one place, at a price that makes sense for your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={onGetScan}
            className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-semibold px-8 py-3.5 rounded transition-all duration-200 shadow-lg shadow-emerald-500/30 text-sm"
          >
            Get a Free Scan
          </button>
          <a
            href="#services"
            className="border border-slate-600 hover:border-emerald-500/50 text-gray-300 hover:text-white font-semibold px-8 py-3.5 rounded transition-all duration-200 text-sm text-center"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
