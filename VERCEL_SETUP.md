# Deploy to Vercel - Step by Step Guide 🚀

## What You'll Get:
- ✅ Free permanent URL (like `https://physics-game.vercel.app`)
- ✅ Online 24/7
- ✅ Fast and reliable
- ✅ Automatic HTTPS
- ✅ Access from any device, anywhere!

## Setup (10 minutes)

### Step 1: Install Vercel CLI

Open your terminal and run:
```bash
npm install -g vercel
```

Wait for it to finish installing...

### Step 2: Login to Vercel

```bash
vercel login
```

This will:
1. Open your browser
2. Ask you to sign up/login (use GitHub, GitLab, or email)
3. Confirm in terminal

**Note:** It's free! No credit card needed.

### Step 3: Deploy Your Game

In your project folder, run:
```bash
vercel
```

You'll be asked some questions:

**Q: Set up and deploy?**
→ Press `Y` (Yes)

**Q: Which scope?**
→ Press Enter (use your account)

**Q: Link to existing project?**
→ Press `N` (No)

**Q: What's your project's name?**
→ Type: `physics-game` (or any name you want)
→ Press Enter

**Q: In which directory is your code located?**
→ Press Enter (current directory)

**Q: Want to override the settings?**
→ Press `N` (No)

### Step 4: Wait for Deployment

Vercel will:
1. Upload your files
2. Build your project
3. Deploy it

This takes about 1-2 minutes.

### Step 5: Get Your URL!

When done, you'll see:
```
✅ Production: https://physics-game.vercel.app
```

**That's your permanent URL!** 🎉

Copy it and share with anyone!

## Testing Your Deployment

1. Open the URL in your browser
2. The game should load
3. Test all features:
   - Game works
   - Study section works
   - Questions work

## Updating Your Game

Made changes? Deploy again:

```bash
vercel --prod
```

Your URL stays the same, but the game updates!

## Troubleshooting

### Issue: "Command not found: vercel"

**Fix:** Install globally with admin rights:
```bash
npm install -g vercel --force
```

Or use npx (no installation needed):
```bash
npx vercel
```

### Issue: Database errors

Vercel uses serverless functions, so SQLite might have issues.

**Quick fix:** The game will still work, but progress might not save.

**Better fix:** Use Vercel's PostgreSQL (free tier available):
1. Go to vercel.com dashboard
2. Add PostgreSQL database
3. Update connection string in `.env`

### Issue: Environment variables

If you have `.env` file:
1. Go to vercel.com dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add your variables (like OPENAI_API_KEY)

### Issue: Build fails

Check the error message. Common fixes:
- Make sure `package.json` has all dependencies
- Run `npm install` locally first
- Check that `server.js` has no syntax errors

## Vercel Dashboard

Access your dashboard at: https://vercel.com/dashboard

Here you can:
- View deployments
- Check logs
- Add custom domain
- Configure settings
- View analytics

## Custom Domain (Optional)

Want your own domain like `mygame.com`?

1. Buy a domain (from Namecheap, GoDaddy, etc.)
2. Go to Vercel dashboard → Your project → Settings → Domains
3. Add your domain
4. Follow DNS instructions

## Commands Reference

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View logs
vercel logs

# Remove deployment
vercel rm [deployment-url]
```

## Free Tier Limits

Vercel free tier includes:
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Serverless functions

More than enough for your game!

## Alternative: Deploy via GitHub

**Easier way (no CLI needed):**

1. Push your code to GitHub
2. Go to vercel.com
3. Click "Import Project"
4. Select your GitHub repo
5. Click "Deploy"

Vercel will auto-deploy whenever you push to GitHub!

## What Gets Deployed?

Vercel deploys:
- ✅ All your code files
- ✅ `node_modules` (installed automatically)
- ✅ `public` folder (static files)
- ✅ `views` folder (EJS templates)

Vercel does NOT deploy:
- ❌ `.env` file (add variables in dashboard)
- ❌ `node_modules` folder (rebuilt on Vercel)
- ❌ Database file (use cloud database)

## Production Checklist

Before deploying:

- [ ] Test locally (`node server.js`)
- [ ] All features work
- [ ] No console errors
- [ ] `package.json` has all dependencies
- [ ] `vercel.json` exists (already created!)
- [ ] Remove any test/debug code

## After Deployment

Your game is now:
- 🌐 Online 24/7
- 🔒 Secure (HTTPS)
- ⚡ Fast (CDN)
- 📱 Accessible from any device
- 🆓 Free!

Share your URL with:
- Friends
- Family
- Classmates
- Teachers
- Anyone!

## Support

Need help?
- Vercel Docs: https://vercel.com/docs
- Vercel Discord: https://vercel.com/discord
- Vercel Support: support@vercel.com

## Quick Recap

```bash
# 1. Install
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel

# 4. Get URL and share!
```

That's it! Your game is now online! 🎮🌐

---

## Next Steps

1. Test your deployed game
2. Share the URL
3. Make updates and redeploy
4. Consider adding custom domain
5. Monitor usage in dashboard

Enjoy your online physics game! 🔥💧
