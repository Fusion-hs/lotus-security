import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#071524] border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-8 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-white text-base font-medium mb-1">
              Don't wait until it's too late.{' '}
              <span className="text-emerald-400 font-semibold">Secure your</span> business now.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-12 h-12 bg-emerald-900/40 border border-emerald-700/30 rounded-lg flex items-center justify-center">
                <Leaf size={24} className="text-emerald-400" strokeWidth={1.5} />
              </div>
              <span className="text-white text-xs font-light tracking-widest uppercase">
                <span className="font-bold">LOTUS</span> SECURITY
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="flex gap-6 mb-2">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Privacy Policy
              </a>
              <div className="w-px bg-slate-700" />
              <a href="#" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">
                Terms of Service
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span>info@lotussecurity.com</span>
              <Mail size={12} className="text-emerald-500/60" />
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span>+123 456 7890</span>
              <Phone size={12} className="text-emerald-500/60" />
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span>Europe-Based</span>
              <MapPin size={12} className="text-emerald-500/60" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
