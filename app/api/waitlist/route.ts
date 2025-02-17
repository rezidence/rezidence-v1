import { NextResponse } from 'next/server'
import { db } from '@/app/lib/db'

// You might want to add your database connection here
// import { db } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { email, userType } = await request.json()

    // Validate input
    if (!email || !userType) {
      return NextResponse.json(
        { error: 'Email and user type are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Validate user type
    if (!['owner', 'renter'].includes(userType)) {
      return NextResponse.json(
        { error: 'Invalid user type' },
        { status: 400 }
      )
    }

    // Check if email already exists
    const existingEntry = await db.waitlist.findUnique({
      where: { email }
    })

    if (existingEntry) {
      return NextResponse.json(
        { error: 'Email already registered in waitlist' },
        { status: 400 }
      )
    }

    // Create new waitlist entry
    const waitlistEntry = await db.waitlist.create({
      data: {
        email,
        userType
      }
    })

    return NextResponse.json({
      status: 'success',
      message: 'Successfully joined waitlist',
      data: {
        email: waitlistEntry.email,
        userType: waitlistEntry.userType,
        createdAt: waitlistEntry.createdAt
      }
    }, { status: 201 })

  } catch (error) {
    console.error('Waitlist join error:', error)
    return NextResponse.json(
      { error: 'Error joining waitlist' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const entries = await db.waitlist.findMany({
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json(entries)
  } catch (error) {
    console.error('Error fetching waitlist entries:', error)
    return NextResponse.json(
      { error: 'Error fetching waitlist entries' },
      { status: 500 }
    )
  }
} 