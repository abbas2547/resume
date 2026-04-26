"use client";
export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 px-8">
      <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
          <p className="text-[var(--text-secondary)] mb-4">Building pixel-perfect interfaces with modern frameworks.</p>
          <div className="grid gap-3">
            {['HTML','CSS','JavaScript','Next.js','Tailwind'].map((s)=> (
              <div key={s} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm">{s}</div>
                  <div className="h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                    <div className="h-2" style={{ width: s === 'Next.js' ? '90%' : s === 'JavaScript' ? '85%' : s === 'Tailwind' ? '88%' : '80%', background: 'linear-gradient(90deg, var(--primary), #60a5fa)' }} />
                  </div>
                </div>
                <div className="text-sm text-[var(--text-secondary)] w-12 text-right">{s === 'Next.js' ? '90' : s === 'JavaScript' ? '85' : s === 'Tailwind' ? '88' : '80'}%</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Backend & Systems</h3>
          <p className="text-[var(--text-secondary)] mb-4">Designing APIs and robust server-side systems.</p>
          <div className="grid gap-3">
            {['Laravel','API Development','PostgreSQL','Database Design'].map((s)=> (
              <div key={s} className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="text-sm">{s}</div>
                  <div className="h-2 bg-gray-200 rounded mt-2 overflow-hidden">
                    <div className="h-2" style={{ width: s === 'Laravel' ? '88%' : s === 'API Development' ? '86%' : '82%', background: 'linear-gradient(90deg, var(--primary), #60a5fa)' }} />
                  </div>
                </div>
                <div className="text-sm text-[var(--text-secondary)] w-12 text-right">{s === 'Laravel' ? '88' : s === 'API Development' ? '86' : '82'}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
