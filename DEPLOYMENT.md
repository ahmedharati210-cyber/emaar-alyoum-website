# Step-by-Step Deployment Guide

## Step 1: Initialize Git Repository

```bash
cd /Users/macbookpro/the-right-way-company
git init
```

## Step 2: Add All Files to Git

```bash
git add .
```

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Professional static website for ALTAREQ ALSAHEH"
```

## Step 4: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Repository name: `altareq-alsaheh-website` (or any name you prefer)
5. Description: `Professional static website for ALTAREQ ALSAHEH company`
6. Set to **Private** or **Public** (your choice)
7. **DO NOT** initialize with README, .gitignore, or license (we already have these)
8. Click **"Create repository"**

## Step 5: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/altareq-alsaheh-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username.**

## Step 6: Deploy to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign in (use GitHub to sign in)
2. Click **"Add New..."** → **"Project"**
3. Import your GitHub repository (`altareq-alsaheh-website`)
4. Vercel will auto-detect Next.js settings:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (leave as is)
   - **Build Command:** `npm run build` (auto-detected)
   - **Output Directory:** `.next` (auto-detected)
5. Click **"Deploy"**
6. Wait for deployment to complete (usually 1-2 minutes)

## Step 7: Add Custom Domain (altareq-alsaheh.ly)

1. In your Vercel project dashboard, go to **"Settings"** → **"Domains"**
2. Enter your domain: `altareq-alsaheh.ly`
3. Click **"Add"**
4. Vercel will show you DNS records to add:
   - **Type:** A or CNAME
   - **Name:** @ or www (or both)
   - **Value:** Vercel's IP address or CNAME value

5. **Configure DNS at your domain registrar:**
   - Log in to your domain registrar (where you bought altareq-alsaheh.ly)
   - Go to DNS settings
   - Add the DNS records Vercel provided:
     - For root domain (@): Add A record pointing to Vercel's IP
     - For www: Add CNAME record pointing to `cname.vercel-dns.com`
   - Save the DNS changes

6. **Wait for DNS propagation** (can take a few minutes to 48 hours, usually 5-30 minutes)

7. **Verify in Vercel:** Once DNS propagates, Vercel will automatically detect and configure SSL certificate

## Step 8: Verify Deployment

1. Visit `https://altareq-alsaheh.ly` (or the Vercel-provided URL)
2. Check that all pages work:
   - Homepage: `https://altareq-alsaheh.ly`
   - About: `https://altareq-alsaheh.ly/about`
   - Contact: `https://altareq-alsaheh.ly/contact`

## Important Notes

- The website is **fully static**, so it will be very fast
- All changes pushed to GitHub will automatically trigger a new deployment on Vercel
- SSL certificate is automatically provided by Vercel (HTTPS)
- The site is optimized for production automatically

## Future Updates

To update the website:
1. Make changes to files
2. Run: `git add .`
3. Run: `git commit -m "Your update message"`
4. Run: `git push`
5. Vercel will automatically deploy the changes


