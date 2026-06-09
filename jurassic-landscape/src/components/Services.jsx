export default function Services() {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-5xl text-center mb-16">
          Our <span style={{ color: "var(--gold)" }}>Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {["Landscape Design", "Installation", "Maintenance"].map(
            (service) => (
              <div
                key={service}
                className="p-8 border border-leaf/20 hover:border-gold/50 transition"
              >
                <h3
                  className="font-display text-2xl mb-4"
                  style={{ color: "var(--leaf)" }}
                >
                  {service}
                </h3>
                <p className="text-gray-400">
                  Professional {service.toLowerCase()} services for your
                  property.
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
