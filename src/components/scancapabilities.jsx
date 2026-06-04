import { Shield, Activity, Lock, Server, Wifi, Database } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  { value: '96,000+', label: 'CVEs Detected', sub: 'Updated daily' },
  { value: '65,535', label: 'Ports Scanned', sub: 'Full TCP/UDP range' },
  { value: '< 6hrs', label: 'Time to Report', sub: 'Automated scan' },
  { value: '99.7%', label: 'Detection Rate', sub: 'Known vulnerabilities' },
];

const capabilities = [
  {
    icon: Activity,
    title: 'CVE & Exploit Detection',
    description: 'Cross-referenced against NVD, MITRE ATT&CK, and proprietary threat intel feeds. Every finding is CVSS-scored and mapped to real exploits in the wild.',
  },
  {
    icon: Server,
    title: 'Full-Spectrum Port Scanning',
    description: 'We scan all 65,535 TCP and UDP ports. Forgotten services, shadow IT, and legacy systems hiding on non-standard ports will not escape detection.',
  },
  {
    icon: Lock,
    title: 'SSL/TLS & Certificate Audit',
    description: 'Weak ciphers, expired certificates, HSTS misconfiguration, and protocol downgrade vulnerabilities are checked across every exposed endpoint.',
  },
  {
    icon: Wifi,
    title: 'API Endpoint Enumeration',
    description: 'Automated discovery of REST, GraphQL, and gRPC endpoints. We probe for unauthenticated access, excessive data exposure, and injection vectors.',
  },
  {
    icon: Database,
    title: 'Database & Service Fingerprinting',
    description: 'Identify exposed databases, message queues, and admin panels. We check default credentials, unpatched versions, and publicly accessible management interfaces.',
  },
  {
    icon: Shield,
    title: 'Compliance Mapping',
    description: 'Findings are automatically mapped to GDPR, ISO 27001, SOC 2, and PCI DSS requirements — giving you a clear path to compliance alongside security.',
  },
];

export default function ScanCapabilities() {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0);
  const { ref: statsRef, isVisible: statsVisible } = useScrollReveal(100);

  return (
    <section className="py-24 px-8">
      <div className="max-w-6xl mx-auto">
        <div ref={headRef} className={`text-center mb-16 reveal-element ${headVisible ? 'revealed' : ''}`}>
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3 block">Under the Hood</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What Our Scan{' '}
            <span className="text-emerald-400">Uncovers</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
            Our engine combines the breadth of automated scanning with the precision of curated threat intelligence — so you get signal, not noise.
          </p>
        </div>

        <div
          ref={statsRef}
          className={`reveal-element ${statsVisible ? 'revealed' : ''} grid grid-cols-2 md:grid-cols-4 gap-4 mb-16`}
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0b1d2e] border border-slate-700/50 rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-1">{s.value}</div>
              <div className="text-white text-sm font-semibold mb-1">{s.label}</div>
              <div className="text-gray-500 text-xs">{s.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((c, i) => (
            <CapabilityCard key={i} item={c} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ item, delay }) {
  const { ref, isVisible } = useScrollReveal(delay);

  return (
    <div
      ref={ref}
      className={`reveal-element ${isVisible ? 'revealed' : ''} bg-[#0d2236] border border-slate-700/50 hover:border-emerald-500/30 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
          <item.icon size={18} className="text-emerald-400" strokeWidth={1.5} />
        </div>
        <h3 className="text-white font-semibold text-sm">{item.title}</h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
    </div>
  );
}
