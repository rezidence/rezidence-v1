export default function LoadingProperties() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mb-2" />
        <div className="h-4 w-96 bg-gray-200 rounded animate-pulse" />
      </div>

      {/* Search form skeleton */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-8 animate-pulse">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 bg-gray-200 rounded" />
          ))}
        </div>
      </div>

      {/* Property grid skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200" />
            <div className="p-4">
              <div className="h-6 w-3/4 bg-gray-200 rounded mb-4" />
              <div className="h-4 w-1/2 bg-gray-200 rounded mb-4" />
              <div className="h-4 w-full bg-gray-200 rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 