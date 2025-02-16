import ClientButton from "../components/ClientButton"

export default function PressPage() {
  const pressReleases = [
    {
      date: "January 2025",
      title: "Rezidence Announces Revolutionary Property Viewing Technology",
      source: "TechCrunch",
      description: "Startup aims to transform the rental market with immersive 3D property tours."
    },
    {
      date: "January 2025",
      title: "The Future of Property Viewings is Here",
      source: "Forbes",
      description: "How Rezidence is using AR technology to revolutionize property rentals."
    },
    {
      date: "January 2025",
      title: "Rezidence Raises Seed Round",
      source: "VentureBeat",
      description: "Leading investors back innovative property tech platform."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Press & Media
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Latest news and updates from Rezidence.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-8">Press Kit</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Media Assets</h3>
                <ul className="space-y-3">
                  <li>
                    <ClientButton 
                      href="/waitlist"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Download Logo Pack →
                    </ClientButton>
                  </li>
                  <li>
                    <ClientButton 
                      href="/waitlist"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Product Screenshots →
                    </ClientButton>
                  </li>
                  <li>
                    <ClientButton 
                      href="/waitlist"
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Brand Guidelines →
                    </ClientButton>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="text-gray-600 mb-4">
                  For press inquiries, please reach out to our media relations team.
                </p>
                <ClientButton 
                  href="/waitlist"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Contact Press Team →
                </ClientButton>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-8">Recent Coverage</h2>
            <div className="space-y-8">
              {pressReleases.map((press, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-8 last:pb-0">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span>{press.date}</span>
                    <span className="mx-2">•</span>
                    <span>{press.source}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{press.title}</h3>
                  <p className="text-gray-600 mb-4">{press.description}</p>
                  <ClientButton 
                    href="/waitlist"
                    className="text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Read More →
                  </ClientButton>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 