"use client"

import { motion } from "framer-motion"
import { Book, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const blogPosts = [
  {
    slug: "the-future-of-property-viewings",
    title: "The Future of Property Viewings",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    excerpt: "Discover how AR and VR are transforming the way we view rental properties.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format"
  },
  {
    slug: "tips-for-first-time-renters",
    title: "Tips for First-Time Renters",
    category: "Guides",
    date: "March 10, 2024",
    readTime: "4 min read",
    excerpt: "Essential tips and tricks for navigating your first rental experience.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format"
  },
  {
    slug: "maximizing-property-virtual-appeal",
    title: "Maximizing Your Property's Virtual Appeal",
    category: "Landlords",
    date: "March 5, 2024",
    readTime: "6 min read",
    excerpt: "Learn how to make your property stand out in virtual tours.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format"
  }
]

const categories = ["All", "Technology", "Guides", "Landlords", "Market Insights", "Company News"]

export default function BlogPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.15)_0%,transparent_100%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2 mb-4"
            >
              <Book className="h-6 w-6 text-purple-400" />
              <span className="text-sm uppercase tracking-wider bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
                Blog & Insights
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text"
            >
              Latest Updates & Guides
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Stay informed about the latest trends in property technology and rental insights
            </motion.p>
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex overflow-x-auto pb-4 mb-12 gap-4"
          >
            {categories.map((category, index) => (
              <Button
                key={category}
                variant="outline"
                className="bg-gray-800/50 border-gray-700/50 hover:border-purple-500/50 text-gray-300 hover:text-white whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative z-10 bg-gray-800/50 backdrop-blur-xl rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                      <span>{post.category}</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Button
                        variant="ghost"
                        className="text-purple-400 hover:text-purple-300 p-0 h-auto font-medium"
                        onClick={() => router.push(`/blog/${post.slug}`)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <Button
              className="relative overflow-hidden rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-6 text-lg font-semibold text-white transition-all duration-300 hover:scale-105 group"
            >
              <span className="relative z-10 flex items-center">
                Load More Posts
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 