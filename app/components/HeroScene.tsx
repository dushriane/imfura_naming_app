import Logo from "./Logo";

export default function HeroScene() {
  return (
    <div 
      className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl"
      style={{ background: 'linear-gradient(135deg, #ffc8dd 0%, #bde0fe 50%, #fff4a3 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4">
          <Logo />
          <p className="text-xl md:text-2xl text-gray-700 font-display font-medium mt-4">
            Discover the perfect Rwandan name
          </p>
          <div className="mt-6 inline-block px-6 py-2.5 bg-white/80 backdrop-blur-sm text-gray-800 rounded-full text-sm font-semibold shadow-md border-2 border-white/50">
            <span className="inline-block mr-2">✨</span>
            Blending Faith, Culture & Family
          </div>
        </div>
      </div>
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-white/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }} />
    </div>
  );
}
