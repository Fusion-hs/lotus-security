import NetworkBackground from "./networkbg";

export default function Process() {
  return (
     <section className="relative py-20 px-8 overflow-hidden">
      <NetworkBackground />
        <div className="px-6 md:px-20 py-20">
          
          <h2 className="text-3xl font-semibold mb-10">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Submit your system",
              "We scan and analyze",
              "You get a clear report",
            ].map((step, i) => (
              <div key={i} className="bg-card p-6 rounded-xl">
                <p className="text-gray-300">
                  {i + 1}. {step}
                </p>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}