# Music Technology Portfolio

A minimalistic, artistic, and interactive portfolio showcasing music technology projects, audio engineering work, and plugin development.

## Features

- **Dynamic Audio Visualizer**: Real-time frequency visualization on the hero section
- **Project Showcase**: Interactive project cards with modal details
- **Responsive Design**: Beautiful on all devices with Tailwind CSS
- **Smooth Animations**: Framer Motion animations throughout
- **Modern Aesthetic**: Dark theme with cyan and pink accents
- **Contact Form**: Get in touch section with form validation
- **Skills Display**: Organized skill categories

## Tech Stack

- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Audio**: Web Audio API
- **Deployment**: Ready for Netlify/Vercel

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd music-tech-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx            # Hero section with visualizer
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── Skills.tsx          # Skills section
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
public/
├── audio/                  # Your audio files
├── videos/                 # Your video files
└── images/                 # Your images
```

## Customization

### Update Personal Information
Edit the following files to add your information:
- `src/components/About.tsx` - Your bio and skills
- `src/components/Contact.tsx` - Your email and social links
- `src/components/Projects.tsx` - Your projects

### Add Your Projects
Update the `projects` array in `src/components/Projects.tsx` with your own projects. Include:
- Title and description
- Category and tags
- Images, audio, or video URLs

### Add Media Files
Place your files in the `public/` directory:
- Audio files: `public/audio/`
- Videos: `public/videos/`
- Images: `public/images/`

### Customize Colors
Edit `tailwind.config.ts` to change the accent colors:
```typescript
colors: {
  accent: '#00d9ff',        // Cyan
  'accent-secondary': '#ff006e', // Pink
}
```

## Building for Production

```bash
npm run build
npm start
```

## Deployment

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `.next`

### Vercel
1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js settings

## Adding Audio Features

The portfolio includes a Web Audio API visualizer. To add interactive audio:

1. Add audio files to `public/audio/`
2. Create an audio player component using Web Audio API
3. Connect to the analyser for real-time visualization

Example:
```typescript
const audioContext = new AudioContext()
const analyser = audioContext.createAnalyser()
// Connect audio source to analyser
```

## Performance Tips

- Optimize images before adding to `public/`
- Use WebP format for better compression
- Lazy load video content
- Compress audio files (MP3 or AAC)

## Browser Support

- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support (iOS 14.5+)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please reach out through the contact form on the portfolio.

---

**Ready to showcase your music tech work!** 🎵
