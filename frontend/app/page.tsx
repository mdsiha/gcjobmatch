export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          GCJobMatch AI
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Trouve les offres d'emploi fédérales qui correspondent à ton profil
        </p>
        <div className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg">
          🇨🇦 Bientôt disponible
        </div>
      </div>
    </main>
  )
}