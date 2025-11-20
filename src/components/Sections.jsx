function Sections() {
  const items = [
    {
      id: 'work',
      title: 'Artifacts',
      copy:
        'Prototypes that expose structure. Typography first. Surfaces are documented, not decorated.',
    },
    {
      id: 'research',
      title: 'Process',
      copy:
        'Field notes, material tests, and grid studies. The interface is a lab bench. Results are repeatable.',
    },
    {
      id: 'notes',
      title: 'Changelog',
      copy:
        'Sharp corners. Immediate feedback. Less animation, more momentum. This is an evolving brief.',
    },
  ]

  return (
    <main className="bg-black text-white">
      {items.map((s, i) => (
        <section key={s.id} id={s.id} className="border-b border-neutral-900">
          <div className="grid grid-cols-12 gap-x-6 px-6 sm:px-10 lg:px-16 py-16 md:py-24">
            <div className="col-span-12 md:col-span-3">
              <h2 className="text-[10vw] md:text-[6vw] leading-none tracking-tighter uppercase">{s.title}</h2>
            </div>
            <div className="col-span-12 md:col-span-6">
              <p className="text-neutral-300 max-w-prose text-base md:text-lg">
                {s.copy}
              </p>
            </div>
            <div className="col-span-12 md:col-span-3 self-start">
              <div className="text-[10px] text-neutral-400 font-mono uppercase space-y-1">
                <p>Spec: 120px Grid / Sharp</p>
                <p>Build: v0.1 / Public</p>
                <p>License: CC BY-NC</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </main>
  )
}

export default Sections
