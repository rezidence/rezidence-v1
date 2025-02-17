export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Story
            </h1>
            <p className="text-xl text-gray-400">
              Transforming the rental experience through innovation and community impact.
            </p>
          </div>

          {/* Mission & Vision */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-12 border border-gray-700/50">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Our Mission
                </h2>
                <p className="text-gray-300 mb-6">
                  To revolutionize the rental market by making property viewing more accessible, 
                  efficient, and transparent for everyone through cutting-edge 3D technology.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Our Vision
                </h2>
                <p className="text-gray-300 mb-6">
                  A future where finding your perfect home is a seamless, immersive experience, 
                  and property management is effortless and rewarding.
                </p>
              </div>
            </div>
          </div>

          {/* Founder's Story */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-8 mb-12 border border-gray-700/50">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative group">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-purple-500/50 bg-gray-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white/80">
                      KC
                    </div>
                    <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 blur-xl -z-10 opacity-75" />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-blue-500/10 blur-2xl -z-20 opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  Meet Our Founder
                </h2>
                <h3 className="text-xl text-white mb-2">Krunal Chavda</h3>
                <p className="text-gray-400 mb-4">Founder & CEO</p>
                <div className="space-y-4 text-gray-300">
                  <p>
                    As the former President of the University of Saskatchewan Students' Union (USSU), 
                    Krunal witnessed firsthand the challenges students and community members faced 
                    in finding suitable housing. The struggle to secure affordable, quality 
                    accommodation was a recurring theme throughout his tenure.
                  </p>
                  <p>
                    This experience inspired him to create Rezidence, a platform that leverages 
                    cutting-edge 3D technology to transform the rental market. By making property 
                    viewing more accessible and efficient, Krunal aims to help both renters find 
                    their perfect home and property owners maximize their rental potential.
                  </p>
                  <p>
                    His vision extends beyond just creating a business – it's about building a 
                    community where finding a home is no longer a source of stress but an 
                    exciting journey towards your next chapter in life.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-gray-700/50">
            <h2 className="text-2xl font-semibold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Innovation",
                  description: "Continuously pushing boundaries to create better solutions in property technology"
                },
                {
                  title: "Community Impact",
                  description: "Making a positive difference in how people find and manage rental properties"
                },
                {
                  title: "Transparency",
                  description: "Building trust through honest, clear communication and representation"
                }
              ].map((value, index) => (
                <div 
                  key={index}
                  className="bg-gray-900/50 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 