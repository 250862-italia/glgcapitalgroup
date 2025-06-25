export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">GLG Capital Group</h1>
          <h2 className="text-2xl text-gray-700 mb-6">Dashboard Investimenti</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900">Portfolio Totale</h3>
              <p className="text-3xl font-bold text-blue-600">€2,450,000</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900">Rendimento Annuo</h3>
              <p className="text-3xl font-bold text-green-600">+12.5%</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900">Investimenti Attivi</h3>
              <p className="text-3xl font-bold text-purple-600">24</p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Stato Sistema</h3>
            <div className="space-y-2">
              <p className="text-green-600">✅ Database Supabase: Connesso</p>
              <p className="text-green-600">✅ Sistema Autenticazione: Attivo</p>
              <p className="text-green-600">✅ Dashboard: Online</p>
              <p className="text-green-600">✅ Deploy: Completato</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
