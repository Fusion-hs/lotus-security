export default function WhyUs() {
  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="text-3xl font-semibold mb-10">Why Choose Us</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-card p-6 rounded-xl">Fast results (24–72h)</div>
        <div className="bg-card p-6 rounded-xl">Affordable pricing</div>
        <div className="bg-card p-6 rounded-xl">AI-assisted analysis</div>
      </div>

      <p className="text-center text-gray-500 mt-6">
        Case studies coming soon
      </p>
    </section>
  );
}