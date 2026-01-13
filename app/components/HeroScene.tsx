export default function HeroScene() {
  return (
    <div 
      className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
      style={{ background: 'linear-gradient(135deg, #ffc8dd 0%, #bde0fe 50%, #fff4a3 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-800 drop-shadow-sm">Imfura Name Oracle</h1>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">Discover the perfect Rwandan name</p>
          <div className="mt-6 inline-block px-6 py-2 bg-[#fff4a3] text-gray-800 rounded-full text-sm font-semibold shadow-md">
            ✨ Blending Faith, Culture & Family
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/30 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/30 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'url(/patterns/traditional.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      </div>
    </div>
  );
}
