function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/2529375/pexels-photo-2529375.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-green-700/60"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Distribusi Kelapa Hibrida Premium Antar Pulau
        </h1>
        <p className="text-xl md:text-2xl text-white/95 mb-10 font-light">
          Solusi terpercaya untuk kebutuhan kelapa hibrida berkualitas di seluruh Indonesia
        </p>
        <button
          onClick={scrollToContact}
          className="bg-white text-green-800 px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all transform hover:scale-105 shadow-xl"
        >
          Hubungi Kami
        </button>
      </div>
    </section>
  );
}

export default Hero;
