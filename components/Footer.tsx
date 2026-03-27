export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Degrand. All rights reserved.</p>
        <a href="mailto:hello@degrand.ai" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
          hello@degrand.ai
        </a>
      </div>
    </footer>
  );
}
