# 📸 Nature Photography Portfolio

Professional nature photography portfolio with Decap CMS integration.

## 🚀 Features

- **React + Vite** - Modern, fast frontend
- **Decap CMS** - Easy content management (no technical knowledge required)
- **Cloudflare R2** - Scalable image storage with CDN
- **GitHub Pages** - Free static hosting
- **Automatic Image Processing** - Generates multiple sizes, WebP format, blur placeholders
- **Responsive Design** - Works on all devices

## 🛠️ Tech Stack

- React 18
- Vite 5
- Decap CMS
- Cloudflare R2 (S3-compatible storage)
- Sharp (image processing)
- GitHub Actions (CI/CD)

## 📦 Installation

```bash
# Clone repository
git clone https://github.com/Smyku6/photos.git
cd photos

# Install dependencies
pnpm install

# Start dev server
pnpm run dev
```

## 🔧 Configuration

### 1. Environment Variables

Copy `.env.example` to `.env.local` and add your Cloudflare R2 bucket URL:

```env
VITE_R2_BUCKET_URL=https://pub-xxxxxxxxxxxxx.r2.dev
```

### 2. GitHub Secrets

Add these secrets to your GitHub repository (Settings → Secrets → Actions):

- `VITE_R2_BUCKET_URL` - Your R2 bucket public URL
- `R2_ENDPOINT` - R2 endpoint (for image processing)
- `R2_ACCESS_KEY` - R2 access key
- `R2_SECRET_KEY` - R2 secret key
- `R2_BUCKET_NAME` - R2 bucket name

### 3. Vite Base Path

Update `vite.config.js` if your GitHub repo name is different:

```javascript
export default defineConfig({
  base: '/photos/', // Change to your repo name
})
```

## 📝 Usage

### For Photographers

1. Go to `https://yourusername.github.io/photos/admin/`
2. Login with GitHub
3. Click "New Photo"
4. Upload image and fill form
5. Click "Publish"
6. Wait 3-5 minutes for automatic processing

### For Developers

```bash
# Development
pnpm run dev

# Build
pnpm run build

# Preview build
pnpm run preview

# Process images manually
pnpm run process-images
```

## 🏗️ Project Structure

```
photos/
├── .github/workflows/    # CI/CD workflows
├── public/
│   ├── admin/           # Decap CMS panel
│   └── uploads/         # Temporary uploads (auto-cleaned)
├── src/
│   ├── components/      # React components
│   ├── data/photos/     # Photo metadata (.md files)
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│   └── styles/          # CSS files
├── scripts/
│   └── processImages.js # Image processing script
└── package.json
```

## 🔄 Workflow

1. Photographer uploads photo via Decap CMS (`/admin/`)
2. Decap CMS commits to GitHub
3. GitHub Actions triggers:
   - Resizes images (4 sizes)
   - Generates blur placeholder
   - Converts to WebP
   - Uploads to Cloudflare R2
   - Builds React app
   - Deploys to GitHub Pages
   - Cleans temporary files

## 📄 License

MIT

## 🤝 Contributing

Contributions welcome! Please open an issue first.

## 📧 Contact

For questions or support, please open an issue.
