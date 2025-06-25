export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login GLG Capital</h1>
        <div className="space-y-4">
          <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" />
          <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" />
          <button className="w-full bg-blue-600 text-white py-2 rounded-md">Accedi</button>
        </div>
      </div>
    </div>
  )
}
