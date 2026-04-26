"use client";
export default function Services() {
  const services = [
    { title: 'Landing Page Design (Frontend)', desc: 'Modern, high-converting responsive designs (Tailwind).' },
    { title: 'Full Website Development', desc: 'End-to-end full-stack development.' },
    { title: 'Web Application Development', desc: 'Custom SaaS and enterprise web apps.' },
    { title: 'API Development (Laravel)', desc: 'Scalable API solutions & backend logic.' },
  ];

  return (
    <section id="services" className="w-full py-20 px-8">
      <div className="max-w-[1200px] mx-auto">
        <h3 className="text-xl font-semibold mb-6">Services</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="glass p-6 rounded-xl">
              <div className="font-semibold mb-2">{s.title}</div>
              <div className="text-[var(--text-secondary)] text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
