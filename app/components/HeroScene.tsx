export default function HeroScene() {
  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Imfura Name Oracle</h1>
          <p className="text-xl">Discover the perfect Rwandan name</p>
        </div>
      </div>
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'url(/patterns/traditional.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }} />
      </div>
    </div>
  );
}
