import { Sprout } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sprout className="w-6 h-6 text-green-300" strokeWidth={2.5} />
            <span className="text-lg font-semibold">ArvoAgro</span>
          </div>

          <p className="text-green-200 text-sm text-center">
            © 2025 ArvoAgro – Distribusi Kelapa Hibrida Indonesia
          </p>

          <p className="text-green-300 text-sm">
            Agribisnis Berkelanjutan
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
