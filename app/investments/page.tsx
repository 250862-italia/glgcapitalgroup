export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-8">Investimenti</h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Portfolio Investimenti</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h3 className="font-medium">Fondo Azionario Europa</h3>
            <p className="text-gray-600">€500,000 • +8.2%</p>
          </div>
          <div className="border-b pb-4">
            <h3 className="font-medium">Obbligazioni Corporate</h3>
            <p className="text-gray-600">€750,000 • +4.1%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
