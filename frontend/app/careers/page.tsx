"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export default function CareersPage() {
  const router = useRouter()
  const jobOpenings = [
    {
      title: "3D Scanning Specialist",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to help capture and process 3D scans of properties."
    },
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description: "Build beautiful and intuitive interfaces for our property platform."
    },
    {
      title: "AR/VR Engineer",
      location: "Remote",
      type: "Full-time",
      description: "Create immersive virtual property viewing experiences."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Help us revolutionize the future of property rentals with cutting-edge technology.
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6">Why Join Us?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {[
                {
                  title: "Remote First",
                  description: "Work from anywhere in the world"
                },
                {
                  title: "Growth",
                  description: "Continuous learning and development"
                },
                {
                  title: "Impact",
                  description: "Shape the future of property tech"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-semibold mb-8">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="flex space-x-2">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                        {job.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <Button 
                    variant="link"
                    onClick={() => router.push('/waitlist')}
                    className="text-blue-600 hover:text-blue-700 font-medium p-0"
                  >
                    Learn More →
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 