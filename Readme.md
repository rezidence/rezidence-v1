# 3D Property Rental Platform

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
- **Toast Notifications:** Custom implementation with Radix UI
- **Utilities:** clsx, tailwind-merge for class management

## 📦 Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install framer-motion @radix-ui/react-toast class-variance-authority lucide-react clsx tailwind-merge @radix-ui/react-slot
```

4. Run the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
app/
  ├── api/
  │   └── waitlist/
  │       └── route.ts          # Handles waitlist form submissions
  ├── components/
  │   ├── ui/
  │   │   ├── button.tsx       # Reusable button component
  │   │   ├── input.tsx        # Reusable input component
  │   │   ├── toast.tsx        # Toast notification component
  │   │   └── toaster.tsx      # Toast manager component
  │   └── Hero.tsx             # Landing page hero section
  ├── hooks/
  │   └── use-toast.ts         # Custom hook for toast management
  ├── lib/
  │   └── utils.ts             # Utility functions
  ├── waitlist/
  │   └── page.tsx             # Waitlist signup page
  ├── globals.css              # Global styles and CSS variables
  └── layout.tsx               # Root layout with providers
```

## 🎨 Key Features Implementation

### Waitlist System
- Separate flows for renters and property owners
- Form validation and error handling
- Success/error notifications
- Loading states during submission

### Toast Notifications
- Custom implementation using Radix UI
- Multiple variants (success, error, etc.)
- Auto-dismiss functionality
- Smooth animations

### UI Components
- Custom button component with multiple variants
- Responsive input fields
- Gradient backgrounds
- Interactive hover states

## 🔧 Configuration

### Tailwind Configuration
```javascript
// tailwind.config.js
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ... (rest of the configuration)
    }
  }
}
```

### Environment Variables
Create a `.env.local` file in the root directory:
```bash
# Add your environment variables here
DATABASE_URL=your_database_url
NEXT_PUBLIC_API_URL=your_api_url
```

## 🚀 Deployment

The application can be deployed on Vercel:

1. Push your code to GitHub
2. Import the project to Vercel
3. Configure environment variables
4. Deploy

## 💻 Development Guidelines

### Component Structure
- Use TypeScript for type safety
- Implement proper error handling
- Add loading states for async operations
- Include proper accessibility attributes

### Styling Guidelines
- Use Tailwind CSS utilities
- Follow the design system color scheme
- Maintain consistent spacing
- Ensure responsive design

### Best Practices
- Use Next.js App Router features
- Implement proper form validation
- Handle loading and error states
- Follow accessibility guidelines
- Write clean, maintainable code

## 🧪 Testing

### Running Tests
```bash
npm run test
```

### Building for Production
```bash
npm run build
```

### Linting
```bash
npm run lint
```

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

- Your Name - Initial work

## 🙏 Acknowledgments

- Shadcn/ui for component inspiration
- Radix UI for accessible components
- Framer Motion for animations
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework

## 🤝 Support

For support, email [your-email@example.com] or join our Slack channel.
