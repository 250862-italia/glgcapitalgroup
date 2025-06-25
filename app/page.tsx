export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-900 text-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-6xl font-bold mb-8">GLG Capital Group</h1>
        <p className="text-2xl mb-8">Piattaforma Investimenti Professionale</p>
        
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Portfolio</h3>
            <p className="text-3xl text-green-400">€2,450,000</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Rendimento</h3>
            <p className="text-3xl text-blue-400">+12.5%</p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Investimenti</h3>
            <p className="text-3xl text-purple-400">24</p>
          </div>
        </div>
        
        <div className="space-x-4">
          <a href="/login" className="bg-white text-blue-900 px-8 py-3 rounded-lg font-bold">
            Login
          </a>
          <a href="/dashboard" className="bg-blue-600 px-8 py-3 rounded-lg font-bold">
            Dashboard  
          </a>
        </div>
      </div>
    </div>
  )
}
