import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative h-[80vh] w-full border-b border-neutral-800 overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Harsh gradient to create contrast with content; pointer-events-none so Spline remains interactive */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />

      {/* Content - aligned left, not centered, sharp edges only */}
      <div className="relative h-full grid grid-cols-12 gap-x-6 px-6 sm:px-10 lg:px-16">
        {/* Visible grid guide lines */}
        <div className="pointer-events-none absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_120px),repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_120px)]" />

        <div className="col-span-10 md:col-span-7 self-end pb-16">
          <h1 className="text-white tracking-tighter uppercase leading-[0.9] text-[14vw] sm:text-[10vw] lg:text-[8vw] select-none">
            Raw Systems
          </h1>
        </div>

        <div className="col-span-12 md:col-span-5 self-end pb-14 space-y-4">
          <p className="text-neutral-300 text-xs font-mono uppercase">v0.1 — Experimental Interface Study</p>
          <p className="text-neutral-400 text-sm md:text-base max-w-sm">
            Interfaces stripped to structure: grids, edges, and immediate states. Less decoration, more intention.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a href="#work" className="text-white text-sm uppercase font-semibold border border-white px-4 py-2 rounded-none hover:bg-white hover:text-black transition-colors duration-100">
              Explore
            </a>
            <a href="#notes" className="text-white/80 text-sm uppercase border border-white/30 px-4 py-2 rounded-none hover:border-white hover:text-white transition-colors duration-100">
              Notes
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
