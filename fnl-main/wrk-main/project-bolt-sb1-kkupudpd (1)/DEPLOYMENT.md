# Deployment Guide

This guide provides comprehensive instructions for deploying your React + Vite application to production.

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- A server with SSH access (for traditional hosting)
- Or a modern hosting platform account (Vercel, Netlify, etc.)

## Quick Start

### 1. Build the Application

```bash
npm install
npm run build
```

This creates an optimized production build in the `dist/` directory.

### 2. Test the Production Build Locally

```bash
npm run preview
```

Visit `http://localhost:4173` to verify the production build works correctly.

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts. Vercel automatically detects Vite configuration.

4. For production deployment:
```bash
vercel --prod
```

**Environment Variables on Vercel:**
- Go to your project settings on vercel.com
- Navigate to "Environment Variables"
- Add your variables (e.g., `VITE_API_URL`)

### Option 2: Netlify

1. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Build and deploy:
```bash
npm run build
netlify deploy --prod --dir=dist
```

**Or use the web interface:**
1. Push your code to GitHub
2. Connect your repository on netlify.com
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Option 3: Traditional Server (VPS/Dedicated)

#### Using Nginx

1. **Build the application:**
```bash
npm run build
```

2. **Copy files to server:**
```bash
scp -r dist/* user@yourserver.com:/var/www/yourapp/
```

3. **Configure Nginx** (`/etc/nginx/sites-available/yourapp`):
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    root /var/www/yourapp;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript
               application/x-javascript application/xml+rss
               application/javascript application/json;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **Enable the site:**
```bash
sudo ln -s /etc/nginx/sites-available/yourapp /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### Using Apache

1. **Configure Apache** (`.htaccess` or VirtualHost config):
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache static assets
<FilesMatch "\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$">
  Header set Cache-Control "max-age=31536000, public, immutable"
</FilesMatch>
```

### Option 4: Docker Deployment

1. **Create `Dockerfile`:**
```dockerfile
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Create `nginx.conf`:**
```nginx
server {
    listen 80;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. **Build and run:**
```bash
docker build -t yourapp .
docker run -p 80:80 yourapp
```

### Option 5: PM2 with Node.js Server

1. **Install PM2:**
```bash
npm install -g pm2
```

2. **Create `server.js`:**
```javascript
const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

3. **Start with PM2:**
```bash
npm run build
pm2 start server.js --name yourapp
pm2 save
pm2 startup
```

## SSL/HTTPS Setup

### Using Let's Encrypt (Free SSL)

1. **Install Certbot:**
```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
```

2. **Obtain certificate:**
```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

3. **Auto-renewal is configured automatically. Test with:**
```bash
sudo certbot renew --dry-run
```

## Environment Variables

### Development
Create `.env.local`:
```
VITE_API_URL=http://localhost:3000
VITE_SUPABASE_URL=your_dev_supabase_url
VITE_SUPABASE_ANON_KEY=your_dev_key
```

### Production
Set these on your hosting platform or server:
```
VITE_API_URL=https://api.yourdomain.com
VITE_SUPABASE_URL=your_prod_supabase_url
VITE_SUPABASE_ANON_KEY=your_prod_key
```

**Note:** Environment variables must be prefixed with `VITE_` to be exposed to your application.

## CDN Setup (Optional)

### Using Cloudflare CDN

1. Sign up at cloudflare.com
2. Add your domain
3. Update nameservers at your domain registrar
4. Enable "Always Use HTTPS" in SSL/TLS settings
5. Enable "Auto Minify" for JS, CSS, and HTML
6. Configure caching rules for static assets

### Using AWS CloudFront

1. Create S3 bucket and upload `dist/` contents
2. Create CloudFront distribution pointing to S3
3. Configure error pages (404, 403 → /index.html)
4. Set up custom domain with Route 53
5. Enable gzip compression

## Performance Optimization

### Build Optimizations

1. **Enable gzip compression** in your server config
2. **Set proper cache headers** for static assets
3. **Use a CDN** for faster global delivery
4. **Enable HTTP/2** in your server configuration

### Monitoring Build Size

```bash
npm run build -- --report
```

This generates a visual bundle size report.

## Application Features

### Recent Updates

1. **Page Navigation**: All page transitions now scroll to the top for better UX
2. **Internet Plans**: Plan cards now lead directly to checkout page (no trial signup)
3. **Free Trial Page**: Upsell button navigates to full plan selection page showing all 4 internet plans
4. **Checkout Forms**: Installation address section removed from all forms
5. **Payment Methods**:
   - Credit/Debit card option is disabled with "Coming Soon" banner
   - Cryptocurrency is the active payment method
6. **Channel List Modal**: IPTV channel list now displays in a modal popup instead of a separate page
   - Includes Base, Ascend, and Peak packages
   - Organized by channel number and name
   - Features prominent "Many More Channels" notice highlighting this is just a preview
7. **Support Pages**: Full functional support pages added
   - Contact Us page with contact form and support information
   - Terms of Service page with comprehensive terms
   - Privacy Policy page with detailed privacy information
   - Help Center with FAQs and help guides
8. **Footer Navigation**: All footer links now work properly and navigate to their respective pages
9. **Header Navigation**: Navigation links in header work correctly from all pages
   - Home, Free Trial, Plans, and Bundles buttons function properly
   - Smooth scrolling implemented for anchor links
10. **Carousel Updates**: Hero carousel text aligned more to the left for better visual balance

### Form Data Collection

All forms collect data client-side and are ready for your backend integration:
- Free trial signups → POST to `/api/trial-signup`
- Internet plans → POST to `/api/internet-purchase`
- Streaming packages → POST to `/api/streaming-purchase`
- Bundle purchases → POST to `/api/bundle-purchase`

## Backend Integration

Your frontend is configured to work with a separate backend API. Update these environment variables:

```
VITE_API_URL=https://your-backend-api.com
```

## Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check browser console for errors. Usually caused by incorrect base path or missing environment variables.

### Issue: 404 on page refresh
**Solution:** Configure your server to redirect all routes to `index.html` (see server configs above).

### Issue: Environment variables not working
**Solution:**
- Ensure variables are prefixed with `VITE_`
- Rebuild after changing environment variables
- Check platform-specific environment variable configuration

### Issue: Styles not loading
**Solution:** Clear browser cache or do a hard refresh (Ctrl+Shift+R / Cmd+Shift+R)

### Issue: Slow initial load
**Solution:**
- Enable gzip compression on server
- Use CDN for static assets
- Check network tab for large bundle sizes
- Consider code splitting for larger applications

## Health Checks

### Verify Deployment

```bash
# Check if site is accessible
curl -I https://yourdomain.com

# Check specific routes work
curl https://yourdomain.com/trial
curl https://yourdomain.com/streaming
curl https://yourdomain.com/bundle
curl https://yourdomain.com/contact
curl https://yourdomain.com/terms
curl https://yourdomain.com/privacy
curl https://yourdomain.com/help

# Check SSL certificate
curl -vI https://yourdomain.com 2>&1 | grep -i "SSL certificate"
```

## Rollback Procedure

If something goes wrong:

1. **Keep previous builds:**
```bash
mv dist dist-backup-$(date +%Y%m%d)
```

2. **Quick rollback:**
```bash
cp -r dist-backup-20240117 dist
```

## Security Checklist

- [ ] HTTPS enabled with valid SSL certificate
- [ ] Environment variables secured and not exposed in client code
- [ ] CORS configured properly on backend
- [ ] Security headers configured (CSP, X-Frame-Options, etc.)
- [ ] Regular dependency updates (`npm audit`)
- [ ] Rate limiting on backend API
- [ ] Input validation on all forms

## Support

For deployment issues:
- Check server logs: `sudo journalctl -u nginx` or `pm2 logs`
- Verify DNS propagation: `dig yourdomain.com`
- Test SSL: https://www.ssllabs.com/ssltest/

## Additional Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Deployment](https://reactrouter.com/web/guides/deployment)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Let's Encrypt Documentation](https://letsencrypt.org/docs/)
