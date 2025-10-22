# Deployment Guide

Your portfolio is ready to be deployed! Here are the easiest ways to share it globally:

## Option 1: Deploy to Netlify (Recommended - Free & Easy)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/music-tech-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Select GitHub and authorize
4. Choose your `music-tech-portfolio` repository
5. Netlify will auto-detect Next.js settings
6. Click "Deploy site"

**Your portfolio will be live at: `https://YOUR-SITE-NAME.netlify.app`**

---

## Option 2: Deploy to Vercel (Free & Optimized for Next.js)

### Step 1: Push to GitHub (same as above)

### Step 2: Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Vercel auto-detects Next.js
5. Click "Deploy"

**Your portfolio will be live at: `https://YOUR-PROJECT-NAME.vercel.app`**

---

## Option 3: Manual Deployment (Any Node.js Host)

### Build the project:
```bash
npm run build
```

### Start the production server:
```bash
npm start
```

Then deploy the `.next` folder to any Node.js hosting provider.

---

## Sharing Your Portfolio

Once deployed, share the link with your friends:
- **Direct link**: `https://your-portfolio.netlify.app`
- **QR Code**: Generate one at [qr-code-generator.com](https://www.qr-code-generator.com)
- **Social Media**: Share on LinkedIn, Twitter, etc.

---

## Environment Variables (if needed)

Create a `.env.local` file for any sensitive data:
```
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

---

## Troubleshooting

**Build fails?**
- Make sure all dependencies are installed: `npm install`
- Check Node.js version: `node --version` (should be 18+)

**Site looks different after deployment?**
- Clear browser cache (Ctrl+Shift+Delete)
- Check that all images are loading correctly

**Need a custom domain?**
- Netlify: Settings → Domain Management → Add custom domain
- Vercel: Settings → Domains → Add domain

---

Enjoy sharing your portfolio! 🚀
