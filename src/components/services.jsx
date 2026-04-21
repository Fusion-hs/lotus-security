import { ShieldCheck, ShieldAlert, Crosshair } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: "Security Scan",
    desc: "Automated vulnerability detection in minutes",
  },
  {
    icon: ShieldAlert,
    title: "Consulting",
    desc: "Simple steps to fix your risks",
  },
  {
    icon: Crosshair,
    title: "Pentest",
    desc: "Manual deep security analysis",
  },
];

export default function Services() {
  return (
    <section className="px-6 md:px-20 py-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
            Small Business,{' '}
            <span className="text-emerald-400">Big Risks</span>
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {services.map((s, i) => (
              <div
                key={i}
                className="group bg-[#0b1d2e]/80 border border-slate-700/50 hover:border-emerald-500/40 rounded-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 cursor-pointer"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300">
                    <s.icon size={28} className="text-emerald-400" strokeWidth={1.5} />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 rounded-full bg-emerald-400/20 border border-emerald-400/40" />
                </div>
                <h3 className="text-white font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm">{s.desc}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}