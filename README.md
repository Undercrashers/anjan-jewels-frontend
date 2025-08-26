# Anjan Jewels - Frontend

This is a [Next.js](https://nextjs.org) project for Anjan Jewels luxury jewelry website, featuring a beautiful coming soon page with animations.

## 🚀 Features

- ✨ Beautiful coming soon page with smooth animations
- 🎭 Framer Motion animations for premium feel
- 🎨 Custom fonts (Bodoni Moda & Poppins) for luxury branding
- 📱 Fully responsive design
- ⚡ Optimized for performance and SEO
- 🔒 Security headers implemented
- 🌟 Modern Next.js 13+ App Router

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
app/
├── components/
│   └── coming-soon.tsx    # Main coming soon component
├── layout.tsx             # Root layout with metadata and fonts
├── page.tsx               # Home page that renders coming soon
├── not-found.tsx          # Custom 404 page
└── globals.css            # Global styles
```

## 🚀 Deployment

### For Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically

### For Other Platforms

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

### Important Notes for Production

- Ensure all environment variables are set
- The app uses standalone output configuration for optimal performance
- Custom 404 page handles routing errors gracefully
- All assets should be in the `public/` directory

## 🔧 Configuration

The project includes optimized configurations for:
- Image optimization with WebP/AVIF support
- Font loading optimization
- Bundle splitting for better performance
- Security headers
- SEO optimization

## 📝 Key Files

- `next.config.ts` - Next.js configuration with optimizations
- `app/layout.tsx` - Root layout with metadata and font loading
- `app/components/coming-soon.tsx` - Main coming soon page component
- `vercel.json` - Deployment configuration for Vercel

## 🐛 Troubleshooting

If you encounter 404 errors in production:

1. Ensure the build completed successfully with `npm run build`
2. Check that all components are in the correct directories
3. Verify that imports use correct relative paths
4. Make sure the deployment platform supports Next.js App Router

## 🎨 Customization

The coming soon page can be customized by editing:
- `app/components/coming-soon.tsx` - Main component
- `app/globals.css` - Global styles
- `app/layout.tsx` - Metadata and fonts

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
