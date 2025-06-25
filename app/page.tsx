export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">GLG Capital</div>
            <div className="space-x-4">
              <a href="/login" className="text-white/80 hover:text-white">Login</a>
              <a href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Dashboard</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            GLG Capital Group
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-12 max-w-3xl mx-auto">
            Piattaforma di investimenti professionale per la gestione del tuo patrimonio
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">€2.45M</div>
              <div className="text-white/80 text-lg">Assets Under Management</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">+12.5%</div>
              <div className="text-white/80 text-lg">Annual Return</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl md:text-5xl font-bold text-purple-400 mb-2">24</div>
              <div className="text-white/80 text-lg">Active Investments</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/login" className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all">
              Accedi al Portale
            </a>
            <a href="/dashboard" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-700 transition-all border border-blue-500">
              Visualizza Dashboard
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Portfolio Management</h3>
            <p className="text-white/70">Gestione professionale del tuo portafoglio investimenti</p>
          </div>
         
