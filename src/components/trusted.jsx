import { useScrollReveal } from '../hooks/useScrollReveal';
import NetworkBackground from './networkbg';

export default function TrustedBy({ onRequestScan }) {
  const { ref: headRef, isVisible: headVisible } = useScrollReveal(0);
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal(100);
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal(200);

  return (
    <section className="relative py-24 px-8">
      <NetworkBackground />
      <div className="max-w-4xl mx-auto">
        <div ref={headRef} className={`text-center mb-12 reveal-element ${headVisible ? 'revealed' : ''}`}>
          <span className="text-emerald-400 text-xs font-semibold tracking-widest uppercase mb-3 block">Social Proof</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Growing Startups
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
            From seed-stage startups to established SMBs — companies across Europe trust Lotus Security to protect their digital assets.
          </p>
        </div>

        <div ref={gridRef} className={`reveal-element ${gridVisible ? 'revealed' : ''} grid grid-cols-3 gap-4 mb-12`}>
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-[#0d2236] border border-slate-700/50 rounded-xl py-8 flex items-center justify-center"
            >
              <span className="text-slate-600 font-semibold text-sm tracking-widest uppercase">
                Your Logo
              </span>
            </div>
          ))}
        </div>

        <div ref={ctaRef} className={`reveal-element ${ctaVisible ? 'revealed' : ''} bg-[#0d2236] border border-emerald-500/20 rounded-2xl p-8 md:p-12 text-center`}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Don't wait until it's too late.
          </h3>
          <p className="text-gray-400 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            The average cost of a data breach for an SMB is $3.31M. A security scan costs a fraction of that — and could save your business.
          </p>
          <button
            onClick={onRequestScan}
            className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-semibold px-10 py-3.5 rounded transition-all duration-200 shadow-lg shadow-emerald-500/30 text-sm"
          >
            Request a Free Scan
          </button>
        </div>
      </div>
    </section>
  );
}
