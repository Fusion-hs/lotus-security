const services = [
  {
    title: "Security Scan",
    desc: "Automated vulnerability detection in minutes",
  },
  {
    title: "Consulting",
    desc: "Simple steps to fix your risks",
  },
  {
    title: "Pentest",
    desc: "Manual deep security analysis",
  },
];

export default function Services() {
  return (
    <section className="px-6 md:px-20 py-20">
      <h2 className="text-3xl font-semibold mb-10">
        Small Business, Big Risks
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="bg-card p-6 rounded-xl">
            <h3 className="text-xl font-semibold">{s.title}</h3>
            <p className="text-gray-400 mt-3">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}