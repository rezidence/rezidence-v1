# Rezidence

A modern web application for exploring rental properties in 3D with AR technology and gamified features. Currently in development with a waitlist system for early access.

## 🚀 Features

- Interactive 3D property visualization
- Waitlist system for both renters and property owners
- Modern UI with animations and toast notifications
- Responsive design
- Server-side form handling
- Beautiful gradient backgrounds
- Interactive form elements
- Toast notifications for user feedback
- Loading states and error handling
- Smooth animations and transitions

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **UI Components:** 
  - Radix UI
  - Shadcn/ui inspired components
- **Form Handling:** Server Actions
- **Type Safety:** TypeScript
- **Database:** Prisma
- **Toast Notifications:** Custom implementation with Radix UI
- **Utilities:** clsx, tailwind-merge

## 📁 Project Structure

```
├── frontend/                  # Frontend Next.js application
│   ├── .next/                # Next.js build output
│   ├── app/                  # Next.js app directory
│   ├── components/           # React components
│   ├── config/              # Configuration files
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility functions
│   ├── prisma/              # Prisma schema and migrations
│   ├── public/              # Static assets
│   ├── styles/              # Global styles
│   ├── types/               # TypeScript type definitions
│   ├── .env.local           # Local environment variables
│   ├── middleware.ts        # Next.js middleware
│   ├── next.config.mjs      # Next.js configuration
│   ├── tailwind.config.ts   # Tailwind CSS configuration
│   └── tsconfig.json        # TypeScript configuration
├── server/                   # Backend server (if separate)
└── .env                     # Root environment variables
```

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/rezidence/rezidence-v1.git
```

2. Navigate to frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Set up environment variables:
Create `.env.local` in the frontend directory with necessary variables.

5. Run the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Environment Variables
Required environment variables in `.env.local`:
```bash
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url
# Add other required variables
```

### AWS Amplify
The project uses AWS Amplify for deployment, configured via `amplify.yml`.

## 🚀 Deployment

The application is deployed on Vercel. Visit [rezidence.vercel.app](https://rezidence.vercel.app) to see the live version.

## 📝 Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Known Issues

- Currently in development phase
- Waitlist system needs database integration
- Additional features coming soon

## 📅 Roadmap

- [ ] Add email notification system
- [ ] Implement user authentication
- [ ] Add 3D property viewer
- [ ] Integrate AR features
- [ ] Add property management dashboard

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 👥 Authors

- [Krunal Chavda](https://github.com/krunal16-c)

## 🙏 Acknowledgments

- Shadcn/ui for component inspiration
- Radix UI for accessible components
- Framer Motion for animations
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework

## 🤝 Support

For support, please open an issue in the GitHub repository.

## Branching Strategy

This project uses a three-branch deployment strategy:

### 1. Development Branch (`dev`)
- Used for local development
- Environment: `.env.development`
- Features:
  - Local database
  - Full test functionality
  - Development-specific configurations
- Workflow:
  1. Developers create feature branches from `dev`
  2. Test locally
  3. Create PR to merge into `dev`

### 2. Staging Branch (`staging`)
- Used for production testing
- Environment: `.env.staging`
- Features:
  - Staging database
  - Test functionality enabled with authentication
  - Production-like environment
- Workflow:
  1. Merge tested features from `dev` to `staging`
  2. Test in production-like environment
  3. Verify all features work as expected

### 3. Production Branch (`main`)
- Used for live production
- Environment: `.env.production`
- Features:
  - Production database
  - Test functionality disabled
  - Full production configuration
- Workflow:
  1. Merge verified features from `staging` to `main`
  2. Deploy to production
  3. Monitor for any issues

## Deployment Process

1. **Local Development**:
   ```bash
   git checkout dev
   npm run dev
   ```

2. **Staging Deployment**:
   ```bash
   git checkout staging
   git merge dev
   git push origin staging
   ```
   - Amplify will automatically deploy using `amplify.staging.yml`

3. **Production Deployment**:
   ```bash
   git checkout main
   git merge staging
   git push origin main
   ```
   - Amplify will automatically deploy using `amplify.production.yml`

## Environment Setup

Each environment has its own configuration:

- Development: `.env.development`
- Staging: `.env.staging`
- Production: `.env.production`

Make sure to set up the appropriate environment variables in AWS Amplify for each environment.

## Testing

- Development: Full test access without authentication
- Staging: Test access with authentication token
- Production: Testing disabled

## Database Management

- Development: Local PostgreSQL database
- Staging: Separate staging database
- Production: Production database

Never use production database for testing or development.
