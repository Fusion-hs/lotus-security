import NetworkBackground from "./networkbg";

export default function TrustedBy() {
  return (
    <section className="relative py-20 px-8  overflow-hidden">
        <NetworkBackground />
        <div className=" py-20 px-8">
        <div className="px-6 md:px-20 py-20">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-10">
            Trusted by Growing Startups
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[1, 2, 3].map((i) => (
                <div
                key={i}
                className="bg-card p-6 rounded-xl"
                >
                <span className="text-gray-300">
                    Your Logo
                </span>
                </div>
            ))}
            </div>
            <div className="flex justify-center">
            <button className="bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-white font-semibold px-10 py-3.5 rounded transition-all duration-200 shadow-lg shadow-emerald-500/30 text-sm">
                Request Scan
            </button>
            </div>
        </div>
      </div>
    </section>
  );
}
