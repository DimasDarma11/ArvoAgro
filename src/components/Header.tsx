import { Sprout } from 'lucide-react';

function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sprout className="w-8 h-8 text-green-700" strokeWidth={2.5} />
          <span className="text-2xl font-bold text-green-800">ArvoAgro</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection('tentang')}
            className="text-gray-700 hover:text-green-700 transition-colors font-medium"
          >
            Tentang
          </button>
          <button
            onClick={() => scrollToSection('produk')}
            className="text-gray-700 hover:text-green-700 transition-colors font-medium"
          >
            Produk
          </button>
          <button
            onClick={() => scrollToSection('kontak')}
            className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-colors font-medium"
          >
            Kontak
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
