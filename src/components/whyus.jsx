import { Zap, DollarSign, Brain, Award, Headphones as HeadphonesIcon, FileText } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const features = [
  {
    icon: Zap,
    label: 'Fast Results',
    detail: 'Automated results in hours. Manual reports within 3–7 business days.',
  },
  {
    icon: DollarSign,
    label: 'Affordable Pricing',
    detail: 'SMB-friendly pricing tiers with no hidden fees or long-term contracts.',
  },
  {
    icon: Brain,
    label: 'AI-Driven Insights',
    detail: 'Machine learning filters false positives, so every finding is real and actionable.',
  },
  {
    icon: Award,
    label: 'Certified Testers',
    detail: 'Our team holds OSCP, CEH, and CREST certifications.',
  },
  {
    icon: HeadphonesIcon,
    label: 'Dedicated Support',
    detail: 'A security advisor guides you through findings and remediation steps.',
  },
  {
    icon: FileText,
    label: 'Compliance-Ready Reports',
    detail: 'Reports mapped to GDPR, ISO 27001, SOC 2, and PCI DSS out of the box.',
  },
];

export default function WhyUs() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0);

  return (
    <section className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        <div ref={headRef} className={`text-center mb-16 reveal-element ${headVisible ? 'revealed' : ''}`}>
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3 block">Our Edge</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Enterprise-grade security testing doesn't have to mean enterprise-level complexity or cost. We built Lotus Security specifically for growing businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {features.map((f, i) => (
            <FeatureCard key={i} feature={f} delay={i * 80} />
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

function FeatureCard({ feature: f, delay }) {
  const { ref, isVisible } = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className={`reveal-element ${isVisible ? 'revealed' : ''} bg-[#0b1d2e] border border-slate-700/50 hover:border-emerald-500/30 rounded-xl p-5 flex items-start gap-4 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10`}
    >
      <div className="w-9 h-9 rounded-full border border-emerald-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
        <f.icon size={16} className="text-emerald-400" />
      </div>
      <div>
        <p className="text-white font-semibold text-sm mb-1">{f.label}</p>
        <p className="text-gray-400 text-xs leading-relaxed">{f.detail}</p>
      </div>
    </div>
  );
}
