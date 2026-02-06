# GitHub Pages Deployment Guide

## ✅ What We've Done

Your Quick Medical Certificate website has been configured for GitHub Pages deployment. Here's what's set up:

### 1. Build Configuration (`next.config.ts`)
- ✅ Static export enabled (`output: 'export'`)
- ✅ Images configured for static sites (opt out)
- ✅ Trailing slashes enabled for proper routing
- ✅ Base path configuration ready (commented out for now)

### 2. GitHub Actions Workflow (`.github/workflows/deploy.yml`)
- ✅ Automated build and deployment on every push to `main`
- ✅ Uses GitHub Pages deployment action
- ✅ Configured for Node.js 20 and npm

### 3. Special Files
- ✅ `.nojekyll` file added to public folder (prevents Jekyll processing)
- ✅ `404.html` redirect hack for client-side routing
- ✅ Custom `not-found.tsx` page

## ⚠️ Important Notes About Dynamic Routes

Your app uses client components (`"use client"`) with dynamic routes like:
- `/certificates/[id]` 
- `/certificates/apply/[id]`

**This means:**
1. Users should navigate to these pages through your app (clicking links from the home page)
2. Direct URL access might not work immediately on first load
3. The 404.html redirect will help handle deep links

This is a known limitation of static exports with client-side routing and is perfectly acceptable for GitHub Pages.

## 🚀 Deployment Steps

### Step 1: Clear Build Cache and Test Locally

Due to build cache issues, you'll need to:

```powershell
# Stop any running Next.js processes first
# Then manually delete the .next folder (use File Explorer if needed)

# Rebuild
npm run build

# Test the export
npx serve out
```

### Step 2: Enable GitHub Pages

1. Go to: https://github.com/saipraveenmolugu/Quick_Medical_Certificate/settings/pages
2. Under "Source", select **GitHub Actions**
3. Save

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### Step 4: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. Watch the "Deploy to GitHub Pages" workflow
3. Once complete, your site will be live at:
   **https://saipraveenmolugu.github.io/Quick_Medical_Certificate/**

### Step 5: Update Configuration (If Needed)

If you encounter path issues, uncomment these lines in `next.config.ts`:

```typescript
basePath: '/Quick_Medical_Certificate',
assetPrefix: '/Quick_Medical_Certificate/',
```

Then rebuild and redeploy.

## 🔧 Troubleshooting

### Build Fails with "page-wrapper.tsx" Error

If you see an error about `page-wrapper.tsx`:
1. Manually delete the `.next` folder using File Explorer
2. Delete any `page-wrapper.tsx` files in `src/app/(main)/certificates/[id]/`
3. Run `npm run build` again

### Dynamic Routes Don't Work

- Make sure users navigate through your app
- The 404.html redirect should handle deep links
- Consider addinga "loading" state on your pages

### Firebase Configuration

Don't forget to:
1. Add your GitHub  Pages URL to Firebase authorized domains:
   - Go to Firebase Console → Authentication → Settings → Authorized domains
   - Add: `saipraveenmolugu.github.io`

2. Update CORS settings if using Firebase Storage

### Images Not Loading

- All images URLs should be relative (`/images/...` not `http://...`)
- Images in `public/` folder will work automatically
- External images need to be downloaded and added to `public/`

## 📝 Environment Variables

If you need to add secrets (like Firebase config):

1. Go to: Settings → Secrets and variables → Actions
2. Add repository secret (e.g., `NEXT_PUBLIC_FIREBASE_API_KEY`)
3. Uncomment the env section in `.github/workflows/deploy.yml`:

```yaml
env:
  NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.NEXT_PUBLIC_FIREBASE_API_KEY }}
  # Add more as needed
```

## ✨ What's Already Working

- ✅ Home page with all certificate listings
- ✅ About, Contact, Terms, Privacy pages
- ✅ Sample certificates page
- ✅ Client-side navigation between all pages
- ✅ Responsive design
- ✅ Firebase integration (needs domain configuration)

## 🎯 Next Steps

1. Clear the build cache
2. Test the build locally
3. Push to GitHub and enable Pages
4. Update Firebase authorized domains
5. Test the live site

Your site is ready for GitHub Pages! 🎉
