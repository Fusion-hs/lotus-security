import { useState } from 'react';
import { ChevronDown, Leaf } from 'lucide-react';

export default function Navbar({ onRequestScan }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <div className="flex items-center gap-2">
        <div className="text-emerald-400">
          <Leaf size={32} strokeWidth={1.5} />
        </div>
        <span className="text-white font-light tracking-widest text-sm uppercase">
          <span className="font-bold">LOTUS</span> SECURITY
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        <div className="relative group">
          <button
            className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            Services <ChevronDown size={14} />
          </button>
          {servicesOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg py-2 shadow-xl"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors">Automated Scan</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors">Security Consulting</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors">Penetration Testing</a>
            </div>
          )}
        </div>

        <div className="relative group">
          <button
            className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors"
            onMouseEnter={() => setWhyOpen(true)}
            onMouseLeave={() => setWhyOpen(false)}
          >
            Why Us <ChevronDown size={14} />
          </button>
          {whyOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg py-2 shadow-xl"
              onMouseEnter={() => setWhyOpen(true)}
              onMouseLeave={() => setWhyOpen(false)}
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors">Our Approach</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors">Case Studies</a>
            </div>
          )}
        </div>

        <div className="relative group">
          <button
            className="flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            About <ChevronDown size={14} />
          </button>
          {aboutOpen && (
            <div
              className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg py-2 shadow-xl"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors">Our Team</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors">Mission</a>
            </div>
          )}
        </div>

        <button
          onClick={onRequestScan}
          className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 shadow-lg shadow-emerald-500/20"
        >
          Request Scan
        </button>
      </div>
    </nav>
  );
}
