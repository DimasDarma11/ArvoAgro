import { Leaf, Target, Award } from 'lucide-react';

function About() {
  return (
    <section id="tentang" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Tentang ArvoAgro
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            ArvoAgro adalah perusahaan agribisnis Indonesia yang berfokus pada distribusi kelapa
            hibrida premium antar pulau. Kami berkomitmen menyediakan produk berkualitas tinggi
            dengan layanan pengiriman cepat dan terpercaya, sambil menjaga keberlanjutan lingkungan
            dan mendukung petani lokal.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Leaf className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">Keberlanjutan</h3>
            <p className="text-gray-600">
              Praktik ramah lingkungan dan dukungan pada petani lokal
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Award className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">Kualitas Premium</h3>
            <p className="text-gray-600">
              Kelapa hibrida pilihan dengan standar kualitas tertinggi
            </p>
          </div>

          <div className="text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-green-900 mb-3">Jangkauan Luas</h3>
            <p className="text-gray-600">
              Distribusi cepat ke seluruh wilayah Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
