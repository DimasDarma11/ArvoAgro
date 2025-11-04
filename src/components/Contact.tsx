import { Mail, MessageCircle } from 'lucide-react';

function Contact() {
  return (
    <section id="kontak" className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700">
            Siap melayani kebutuhan distribusi kelapa hibrida Anda
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <a
            href="https://wa.me/6281234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-green-100 hover:border-green-400 group"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-green-600 rounded-full group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-green-900 mb-1">WhatsApp</h3>
              <p className="text-gray-600">Chat langsung dengan tim kami</p>
            </div>
          </a>

          <a
            href="mailto:info@arvoagro.co.id"
            className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border-2 border-green-100 hover:border-green-400 group"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-green-600 rounded-full group-hover:scale-110 transition-transform">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-green-900 mb-1">Email</h3>
              <p className="text-gray-600">info@arvoagro.co.id</p>
            </div>
          </a>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-md">
            <p className="text-gray-700 mb-2">
              <span className="font-semibold text-green-900">Jam Operasional:</span>
            </p>
            <p className="text-gray-600">Senin - Jumat: 08.00 - 17.00 WIB</p>
            <p className="text-gray-600">Sabtu: 08.00 - 13.00 WIB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
