export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-dark/80 backdrop-blur-sm border-b border-leaf/10">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src="/Jurassic Landscape Logo Transparent (2).png"
            alt="Jurassic Landscape"
            className="h-12 w-auto drop-shadow-[0_0_10px_rgba(200,168,75,0.3)] hover:h-32 hover:drop-shadow-[0_0_20px_rgba(200,168,75,0.5)] transition-all duration-400"
          />
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm tracking-wider">
          <a href="#hero" className="hover:text-leaf transition">
            HOME
          </a>
          <a href="#services" className="hover:text-leaf transition">
            SERVICES
          </a>
          <a href="#portfolio" className="hover:text-leaf transition">
            PORTFOLIO
          </a>
          <a href="#about" className="hover:text-leaf transition">
            ABOUT
          </a>
          <a href="#contact" className="btn-primary py-2 px-6 text-2xl">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
