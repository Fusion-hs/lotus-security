import { Zap, DollarSign, Brain } from 'lucide-react';

const features = [
  { icon: Zap, label: 'Fast Results in 24-72 Hours' },
  { icon: DollarSign, label: 'Affordable Pricing' },
  { icon: Brain, label: 'AI-Driven Insights' },
];

export default function WhyUs() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-12">
          Why Choose Us?
        </h2>
        <div className="bg-[#0d2236] border border-slate-700/50 rounded-xl px-6 py-5 flex flex-col md:flex-row items-center justify-around gap-6 mb-6">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-full border border-emerald-500/40 flex items-center justify-center">
                <f.icon size={16} className="text-emerald-400" />
              </div>
              <span className="text-white font-semibold text-sm">{f.label}</span>
              {i < features.length - 1 && (
                <div className="hidden md:block w-px h-6 bg-slate-700 ml-4" />
              )}
            </div>
          ))}
        </div>
        <p className="text-center">
          <span className="text-emerald-400 italic font-medium text-sm">Case Studies</span>
          <span className="text-gray-500 italic text-sm"> Coming Soon...</span>
        </p>
      </div>
    </section>
  );
}
