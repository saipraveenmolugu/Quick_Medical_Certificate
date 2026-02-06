# 🚀 Complete Step-by-Step Guide: Publishing Your Website to GitHub Pages

## ✅ ALREADY COMPLETED (You don't need to do these again!)

### ✓ Step 1: Code Repository Setup
Your code is already on GitHub at:
**https://github.com/saipraveenmolugu/Quick_Medical_Certificate**

### ✓ Step 2: Deployment Files Added
We've already added:
- GitHub Actions workflow (`.github/workflows/deploy.yml`)
- Static export configuration (`next.config.ts`)
- 404 handling (`public/404.html`)
- Jekyll bypass (`.nojekyll`)

### ✓ Step 3: Code Pushed to GitHub
All changes have been committed and pushed to the `main` branch.

---

## 🎯 WHAT YOU NEED TO DO NOW (Only 1 Step!)

### Step 4: Enable GitHub Pages

This is the ONLY step you need to complete manually:

#### 4.1 Open GitHub Pages Settings

**Option 1: Click this link**
```
https://github.com/saipraveenmolugu/Quick_Medical_Certificate/settings/pages
```

**Option 2: Navigate manually**
1. Go to https://github.com/saipraveenmolugu/Quick_Medical_Certificate
2. Click on **"Settings"** tab (top right)
3. Click on **"Pages"** in the left sidebar

---

#### 4.2 Configure Build Source

You'll see a page that looks like this:

```
┌─────────────────────────────────────────────────┐
│  Pages                                          │
│                                                 │
│  Build and deployment                           │
│                                                 │
│  Source                                         │
│  ┌─────────────────────────────────────┐       │
│  │  Deploy from a branch         ▼     │  ← Click this dropdown
│  └─────────────────────────────────────┘       │
│                                                 │
└─────────────────────────────────────────────────┘
```

**What to do:**
1. Click on the **dropdown** that says "Deploy from a branch"
2. Select **"GitHub Actions"** from the list
3. The page will automatically save

---

#### 4.3 Verify Deployment Started

After selecting "GitHub Actions", you should see:

```
┌─────────────────────────────────────────────────┐
│  Pages                                          │
│                                                 │
│  ✓ Your site is live at                        │
│    https://saipraveenmolugu.github.io/          │
│    Quick_Medical_Certificate/                   │
│                                                 │
│  Source: GitHub Actions                         │
└─────────────────────────────────────────────────┘
```

---

### Step 5: Monitor Deployment (Optional but Recommended)

#### 5.1 Go to Actions Tab

**Click this link:**
```
https://github.com/saipraveenmolugu/Quick_Medical_Certificate/actions
```

Or manually:
1. Go to your repository
2. Click **"Actions"** tab at the top

---

#### 5.2 Watch the Deployment

You'll see a workflow running called:
```
🔄 Deploy to GitHub Pages
```

**Status indicators:**
- 🟡 **Yellow/Orange dot** = Currently running (wait 2-3 minutes)
- ✅ **Green checkmark** = Deployment successful! 🎉
- ❌ **Red X** = Failed (contact me for help)

---

### Step 6: Access Your Live Website! 🎉

Once the deployment shows a ✅ green checkmark, visit:

## 🌐 **https://saipraveenmolugu.github.io/Quick_Medical_Certificate/**

---

## 📸 Visual Checklist

### Before Enabling GitHub Pages:
- [x] Code pushed to GitHub
- [x] Repository exists at github.com/saipraveenmolugu/Quick_Medical_Certificate
- [ ] GitHub Pages enabled ← **YOU ARE HERE**
- [ ] Workflow completed
- [ ] Website live

### After Enabling GitHub Pages:
- [x] Code pushed to GitHub
- [x] Repository exists
- [x] GitHub Pages enabled with "GitHub Actions"
- [ ] Workflow completed ← **WAIT FOR THIS** (2-3 minutes)
- [ ] Website live

### After Deployment Complete:
- [x] Code pushed to GitHub
- [x] Repository exists
- [x] GitHub Pages enabled
- [x] Workflow completed ✅
- [x] Website live at https://saipraveenmolugu.github.io/Quick_Medical_Certificate/ 🎉

---

## 🔧 Troubleshooting

### Issue 1: "404 - File not found" when visiting the site

**Solution:** The base path might need to be enabled.

1. Open `next.config.ts` in VS Code
2. Find these lines (around line 7-8):
   ```typescript
   // basePath: '/Quick_Medical_Certificate',
   // assetPrefix: '/Quick_Medical_Certificate/',
   ```
3. Remove the `//` to uncomment them:
   ```typescript
   basePath: '/Quick_Medical_Certificate',
   assetPrefix: '/Quick_Medical_Certificate/',
   ```
4. Save the file
5. Run these commands:
   ```bash
   git add next.config.ts
   git commit -m "Enable base path for GitHub Pages"
   git push origin main
   ```
6. Wait for the new deployment to complete (check Actions tab)

---

### Issue 2: Workflow fails with build errors

**Common causes:**
- The `.next` folder cache issues
- TypeScript errors

**Solution:**
1. Delete the `.next` folder in your project
2. Run `npm run build` locally to test
3. If it builds successfully, commit any fixes and push again

---

### Issue 3: Some pages show 404

**This is expected!** Your dynamic routes like `/certificates/[id]` work through:
- ✅ Client-side navigation (clicking links within the app)
- ⚠️ Direct URL access (may show 404 initially, then redirect via 404.html)

Users should navigate through your home page to access certificate pages.

---

## 📞 Need Help?

If you encounter any issues:
1. Check the Actions tab for error messages
2. Look at the build logs (click on the failed workflow)
3. Verify GitHub Pages is enabled with "GitHub Actions" as the source

---

## 🎉 Success Checklist

Once everything is working, you should be able to:

- [ ] Visit https://saipraveenmolugu.github.io/Quick_Medical_Certificate/
- [ ] See your home page with certificate listings
- [ ] Click on certificate cards and navigate to detail pages
- [ ] See the About, Contact, Terms, and Privacy pages
- [ ] View sample certificates
- [ ] Fill out the application forms

**Congratulations! Your website is now live on GitHub Pages!** 🚀

---

## 📋 Quick Reference

**Repository:** https://github.com/saipraveenmolugu/Quick_Medical_Certificate

**Settings:** https://github.com/saipraveenmolugu/Quick_Medical_Certificate/settings/pages

**Actions:** https://github.com/saipraveenmolugu/Quick_Medical_Certificate/actions

**Live Site:** https://saipraveenmolugu.github.io/Quick_Medical_Certificate/

---

## 🔄 Future Updates

To update your website in the future:

1. Make changes to your code
2. Run: `git add .`
3. Run: `git commit -m "Your update message"`
4. Run: `git push origin main`
5. Wait 2-3 minutes for automatic deployment
6. Refresh your live site!

That's it! Every push to `main` automatically triggers a new deployment.
