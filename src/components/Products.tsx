import { Palmtree, Truck, Map } from 'lucide-react';

function Products() {
  return (
    <section id="produk" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Produk & Layanan
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Solusi lengkap distribusi kelapa hibrida untuk memenuhi kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-400 transition-all hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Palmtree className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-4">Kelapa Hibrida Premium</h3>
            <p className="text-gray-700 leading-relaxed">
              Kelapa hibrida unggul dengan produktivitas tinggi, tahan penyakit, dan kualitas daging
              kelapa yang konsisten. Dipilih langsung dari kebun mitra terbaik.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-400 transition-all hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Truck className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-4">Pengiriman Cepat</h3>
            <p className="text-gray-700 leading-relaxed">
              Sistem logistik terintegrasi dengan jadwal pengiriman teratur dan pengemasan aman
              untuk menjaga kesegaran produk hingga tujuan.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-400 transition-all hover:shadow-xl">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform">
              <Map className="w-10 h-10 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-bold text-green-900 mb-4">Jangkauan Antar Pulau</h3>
            <p className="text-gray-700 leading-relaxed">
              Melayani distribusi ke seluruh Indonesia dari Sumatera hingga Papua dengan jaringan
              mitra logistik terpercaya di setiap wilayah.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Products;
