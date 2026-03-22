export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-white font-medium text-sm">DEGRAND.AI</span>
        <p className="text-gray-600 text-sm">© 2026 DEGRAND. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          {['Home', 'Services', 'Work', 'About', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-xs text-gray-600 hover:text-gray-300 transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
