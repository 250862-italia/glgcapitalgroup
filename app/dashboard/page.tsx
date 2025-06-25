export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard GLG Capital</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Portfolio</h3>
          <p className="text-2xl font-bold text-green-600">€2,450,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Rendimento</h3>
          <p className="text-2xl font-bold text-blue-600">+12.5%</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold">Investimenti</h3>
          <p className="text-2xl font-bold text-purple-600">24</p>
        </div>
      </div>
    </div>
  )
}
