import { ChevronRight } from 'lucide-react';
import NetworkBackground from './networkbg';

const steps = [
  {
    number: '1',
    title: 'Submit Your System',
    description: 'You send us the details.',
  },
  {
    number: '2',
    title: 'We Scan & Analyze',
    description: 'AI-powered assessment.',
  },
  {
    number: '3',
    title: 'Get Your Report',
    description: 'Receive an easy-to-read summary.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 md:px-20 overflow-hidden">
      <NetworkBackground />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-[#0b1d2e]/80 backdrop-blur border border-slate-700/50 hover:border-emerald-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
            >
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-white/80">{step.number}</span>
                <span className="text-emerald-400 text-xl font-light">/</span>
              </div>
              <h3 className="text-white font-semibold text-base mb-3">{step.title}</h3>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <ChevronRight size={14} className="text-emerald-500/60 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{step.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
