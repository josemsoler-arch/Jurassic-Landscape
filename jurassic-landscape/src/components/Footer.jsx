export default function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-leaf/10">
      <div className="max-w-6xl mx-auto">
        {/* Large Logo */}
        <div className="text-center mb-12">
          <img
            src="/Jurassic Landscape Logo Transparent (2).png"
            alt="Jurassic Landscape"
            className="h-32 w-auto mx-auto drop-shadow-[0_0_20px_rgba(200,168,75,0.4)] mb-6"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-2">
            Creating stunning outdoor spaces across Queen Creek and the East
            Valley
          </p>
          <p className="text-gray-400 text-sm mb-4">
            <a href="tel:480-401-5551" className="hover:text-leaf transition">
              480-401-5551
            </a>{" "}
            |
            <a
              href="mailto:jurassiclandscapedesign@gmail.com"
              className="hover:text-leaf transition ml-2"
            >
              jurassiclandscapedesign@gmail.com
            </a>
          </p>
          <p className="text-gray-500 text-xs">
            © 2026 Jurassic Landscape Design. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
