import React, { useState } from 'react';
import { ChevronDown, Leaf } from 'lucide-react';

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return React.createElement('nav', { className: 'absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5' },
    React.createElement('div', { className: 'flex items-center gap-2' },
      React.createElement('div', { className: 'text-emerald-400' },
        React.createElement(Leaf, { size: 32, strokeWidth: 1.5 })
      ),
      React.createElement('span', { className: 'text-white font-light tracking-widest text-sm uppercase' },
        React.createElement('span', { className: 'font-bold' }, 'LOTUS'),
        ' SECURITY'
      )
    ),
    React.createElement('div', { className: 'hidden md:flex items-center gap-8' },
      React.createElement('div', { className: 'relative group' },
        React.createElement('button', {
          className: 'flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors',
          onMouseEnter: () => setServicesOpen(true),
          onMouseLeave: () => setServicesOpen(false)
        },
          'Services ',
          React.createElement(ChevronDown, { size: 14 })
        ),
        servicesOpen && React.createElement('div', {
          className: 'absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg py-2 shadow-xl',
          onMouseEnter: () => setServicesOpen(true),
          onMouseLeave: () => setServicesOpen(false)
        },
          React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors' }, 'Automated Scan'),
          React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors' }, 'Security Consulting'),
          React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors' }, 'Penetration Testing')
        )
      ),
      React.createElement('div', { className: 'relative group' },
        React.createElement('button', {
          className: 'flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors',
          onMouseEnter: () => setWhyOpen(true),
          onMouseLeave: () => setWhyOpen(false)
        },
          'Why Us ',
          React.createElement(ChevronDown, { size: 14 })
        ),
        whyOpen && React.createElement('div', {
          className: 'absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg py-2 shadow-xl',
          onMouseEnter: () => setWhyOpen(true),
          onMouseLeave: () => setWhyOpen(false)
        },
          React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors' }, 'Our Approach'),
          React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors' }, 'Case Studies')
        )
      ),
      React.createElement('div', { className: 'relative group' },
        React.createElement('button', {
          className: 'flex items-center gap-1 text-gray-300 hover:text-white text-sm transition-colors',
          onMouseEnter: () => setAboutOpen(true),
          onMouseLeave: () => setAboutOpen(false)
        },
          'About ',
          React.createElement(ChevronDown, { size: 14 })
        ),
        aboutOpen && React.createElement('div', {
          className: 'absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-slate-700 rounded-lg py-2 shadow-xl',
          onMouseEnter: () => setAboutOpen(true),
          onMouseLeave: () => setAboutOpen(false)
        },
          React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors' }, 'Our Team'),
          React.createElement('a', { href: '#', className: 'block px-4 py-2 text-sm text-gray-300 hover:text-emerald-400 hover:bg-slate-800 transition-colors' }, 'Mission')
        )
      ),
      React.createElement('button', { className: 'bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200 shadow-lg shadow-emerald-500/20' },
        'Request Scan'
      )
    )
  );
}
