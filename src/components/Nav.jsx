function Nav() {
  return (
    <header className="w-full border-b border-neutral-800 bg-black text-white">
      <div className="grid grid-cols-12 gap-x-6 px-6 sm:px-10 lg:px-16 h-14 items-stretch">
        <div className="col-span-6 md:col-span-3 flex items-center">
          <a href="/" className="uppercase tracking-wider text-sm font-semibold hover:opacity-100 opacity-90">
            Studio
          </a>
        </div>
        <nav className="col-span-6 md:col-span-6 hidden md:flex items-center gap-8 text-xs uppercase">
          <a href="#work" className="hover:text-white text-neutral-400 transition-none border-b border-transparent hover:border-white">Work</a>
          <a href="#research" className="hover:text-white text-neutral-400 transition-none border-b border-transparent hover:border-white">Research</a>
          <a href="#notes" className="hover:text-white text-neutral-400 transition-none border-b border-transparent hover:border-white">Notes</a>
        </nav>
        <div className="col-span-6 md:col-span-3 flex items-center justify-end">
          <button className="text-xs uppercase border border-white/40 px-3 py-1.5 rounded-none hover:bg-white hover:text-black transition-colors duration-100">Contact</button>
        </div>
      </div>
    </header>
  )
}

export default Nav
