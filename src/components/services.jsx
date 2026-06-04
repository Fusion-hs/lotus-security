import { ShieldCheck, Network, Users, Cloud, Globe, Code2, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import NetworkBackground from './networkbg';

const services = [
  {
    icon: Network,
    title: 'Network Penetration Testing',
    tag: 'Infrastructure',
    description: 'Probe every corner of your network attack surface. We map exposed hosts, enumerate services, exploit misconfigurations, and chain vulnerabilities to demonstrate real breach paths — before an attacker does.',
    points: ['Internal & external network scoping', 'Firewall & ACL bypass techniques', 'Lateral movement simulation', 'Full kill-chain reporting'],
  },
  {
    icon: Users,
    title: 'Social Engineering Campaigns',
    tag: 'Human Surface',
    description: "Your firewall won't stop a convincing email. We run targeted phishing simulations, vishing calls, and pretexting scenarios to measure and harden your human attack surface.",
    points: ['Spear-phishing email campaigns', 'Vishing & pretexting calls', 'Physical access attempts', 'Awareness training recommendations'],
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure Security',
    tag: 'Azure · AWS · GCP',
    description: 'Misconfigured buckets, over-permissive IAM roles, and exposed management consoles are the new perimeter. We audit the foundation of your organisation across all major cloud providers.',
    points: ['IAM privilege escalation paths', 'Storage & secrets exposure audit', 'Container & serverless security', 'CIS Benchmark compliance review'],
  },
  {
    icon: Globe,
    title: 'Web Application Security',
    tag: 'OWASP Top 10',
    description: 'From injection flaws to broken authentication, we uncover web app vulnerabilities that automated scanners miss. Manual testing backed by AI-assisted analysis delivers findings that matter.',
    points: ['Authentication & session testing', 'Business logic vulnerabilities', 'IDOR & access control flaws', 'Full OWASP Top 10 coverage'],
  },
  {
    icon: Code2,
    title: 'API Security Assessment',
    tag: 'REST · GraphQL · gRPC',
    description: 'APIs are the backbone of modern applications and the most overlooked attack vector. We test every endpoint for broken object-level authorisation, mass assignment, and data exposure.',
    points: ['BOLA / IDOR endpoint testing', 'Authentication bypass attempts', 'Rate limiting & abuse testing', 'GraphQL introspection & injection'],
  },
  {
    icon: ShieldCheck,
    title: 'Automated Vulnerability Scan',
    tag: 'Fast Track',
    description: 'Need results today? Our automated scan engine checks against 96,000+ CVEs, scans all 65,535 ports, and delivers a prioritised report within hours — not weeks.',
    points: ['96,000+ CVE database', 'Full port range scanning', 'SSL/TLS configuration audit', 'Report delivered in hours'],
  },
];

function ServiceCard({ service: s, delay }) {
  const { ref, isVisible } = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className={`reveal-element ${isVisible ? 'revealed' : ''} group bg-[#0b1d2e] border border-slate-700/50 hover:border-emerald-500/40 rounded-xl p-6 flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10`}
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-300 flex-shrink-0">
          <s.icon size={22} className="text-emerald-400" strokeWidth={1.5} />
        </div>
        <span className="text-emerald-500/70 text-xs font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full">
          {s.tag}
        </span>
      </div>
      <h3 className="text-white font-semibold text-base mb-3">{s.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-5">{s.description}</p>
      <ul className="mt-auto space-y-2">
        {s.points.map((p, j) => (
          <li key={j} className="flex items-start gap-2 text-gray-500 text-xs">
            <ChevronRight size={12} className="text-emerald-500/60 mt-0.5 flex-shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 px-8 relative">
      <NetworkBackground />
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className={`text-center mb-16 reveal-element ${isVisible ? 'revealed' : ''}`}>
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3 block">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Small Business,{' '}
            <span className="text-emerald-400">Big Risks</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm leading-relaxed">
            Every service is delivered by certified security professionals backed by AI-assisted tooling. We cover the full attack surface — network, cloud, people, and code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}
