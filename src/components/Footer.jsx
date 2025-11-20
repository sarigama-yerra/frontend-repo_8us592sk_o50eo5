function Footer() {
  return (
    <footer className="bg-black text-white border-t border-neutral-900">
      <div className="grid grid-cols-12 gap-x-6 px-6 sm:px-10 lg:px-16 py-10">
        <div className="col-span-12 md:col-span-6">
          <p className="text-xs font-mono uppercase text-neutral-500">
            Public build log — Updated {new Date().toISOString().slice(0,10)}
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 md:text-right">
          <a href="#" className="text-xs uppercase border-b border-neutral-600 hover:border-white transition-none">Source</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
