"use client"

import { motion } from "framer-motion"
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

// This would typically come from a CMS or API
const blogPosts = {
  "the-future-of-property-viewings": {
    title: "The Future of Property Viewings",
    category: "Technology",
    date: "March 15, 2024",
    readTime: "5 min read",
    excerpt: "Discover how AR and VR are transforming the way we view rental properties.",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format",
    content: `
      Virtual and augmented reality technologies are revolutionizing the way we view and experience rental properties. This transformation is not just a temporary trend but a fundamental shift in the real estate industry.

      ## The Rise of Virtual Tours

      With the advancement of 3D scanning technology and virtual reality, potential renters can now explore properties from anywhere in the world. This immersive experience provides a realistic sense of space and layout that traditional photos simply cannot match.

      ### Benefits of Virtual Viewings:
      - Save time and resources for both renters and property owners
      - Reduce the number of unnecessary physical viewings
      - Provide 24/7 access to property tours
      - Enable remote viewing from anywhere in the world

      ## Augmented Reality Applications

      AR technology is taking property viewings a step further by allowing users to:
      - Visualize their furniture in the space
      - See property information overlaid in real-time
      - Measure rooms and spaces accurately
      - Explore neighborhood amenities and features

      ## The Impact on the Rental Market

      This technological revolution is making the rental process more efficient and transparent. Property owners can reach a wider audience, while renters can make more informed decisions before committing to in-person viewings.

      ### Future Developments
      
      Looking ahead, we can expect to see:
      - Even more realistic virtual experiences
      - Integration with smart home features
      - AI-powered virtual staging
      - Interactive neighborhood tours

      The future of property viewings is here, and it's more immersive and convenient than ever before.
    `
  },
  // Add other blog posts here
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Blog Post Not Found</h1>
            <Button
              onClick={() => router.push('/blog')}
              className="bg-gradient-to-r from-purple-500 to-blue-500"
            >
              Back to Blog
            </Button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <div className="relative">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(76,29,149,0.15)_0%,transparent_100%)]" />
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
        </div>

        <div className="container mx-auto px-4 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {/* Back Button */}
            <Button
              variant="ghost"
              className="text-gray-400 hover:text-white mb-8"
              onClick={() => router.push('/blog')}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>

            {/* Featured Image */}
            <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
            </div>

            {/* Post Header */}
            <div className="mb-8">
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <span className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                </span>
                <span className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-b from-white to-gray-400 text-transparent bg-clip-text">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-400">
                {post.excerpt}
              </p>
            </div>

            {/* Post Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="text-gray-300 space-y-6 whitespace-pre-wrap">
                {post.content}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 