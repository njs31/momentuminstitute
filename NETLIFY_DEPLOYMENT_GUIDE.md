# Netlify Deployment Guide - Momentum Institute

## 🚨 **Current Issue: 404 Page Not Found**

Your website is showing "Page not found" because Netlify doesn't know how to handle React Router's client-side routing. This guide will fix this issue.

## 🔧 **Quick Fix Steps**

### 1. **Redeploy with New Configuration**

After adding the configuration files, you need to redeploy:

1. **Commit and push** your changes to Git
2. **Trigger a new deployment** on Netlify
3. **Wait for build completion**

### 2. **Verify Configuration Files**

Make sure these files are in your project root:

- ✅ `netlify.toml`
- ✅ `public/_redirects`

## 📁 **Required Files Added**

### 1. **`public/_redirects`**

```
# Netlify redirects for SPA routing
/*    /index.html   200

# Specific redirects for admin routes
/admin    /index.html   200
/admin-login    /index.html   200

# API routes
/api/*    /api/*   200

# Handle 404s gracefully
/404    /index.html   200
```

### 2. **`netlify.toml`**

```toml
[build]
  command = "npm run build"
  publish = "dist"
  functions = "api"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. **`netlify/functions/request-call.js`**

- Netlify serverless function for your API
- Handles form submissions and admin dashboard data

## 🚀 **Deployment Process**

### **Step 1: Build Locally (Test)**

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Test locally
npm run preview
```

### **Step 2: Deploy to Netlify**

#### **Option A: Git Integration (Recommended)**

1. **Connect your Git repository** to Netlify
2. **Set build settings**:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Functions directory: `api`
3. **Deploy automatically** on every push

#### **Option B: Manual Deploy**

1. **Build locally**: `npm run build`
2. **Upload `dist` folder** to Netlify
3. **Upload `netlify/functions`** to Netlify functions

### **Step 3: Configure Netlify**

#### **Build Settings**

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Functions directory**: `api`

#### **Environment Variables**

```
NODE_VERSION=18
NPM_FLAGS=--legacy-peer-deps
```

## 🔍 **Troubleshooting**

### **Issue 1: Still Getting 404s**

**Solution**: Check if `_redirects` file is in `public/` folder and redeploy

### **Issue 2: Admin Dashboard Not Working**

**Solution**: Verify Netlify functions are properly deployed

### **Issue 3: API Calls Failing**

**Solution**: Check Netlify functions logs and ensure CORS is enabled

## 📱 **Testing Your Deployment**

### **Test URLs**

1. **Homepage**: `https://momentuminstitute.in/`
2. **About**: `https://momentuminstitute.in/about`
3. **Courses**: `https://momentuminstitute.in/courses`
4. **Contact**: `https://momentuminstitute.in/contact`
5. **Admin Login**: `https://momentuminstitute.in/admin-login`
6. **Admin Dashboard**: `https://momentuminstitute.in/admin`

### **Test Admin Dashboard**

1. **Go to**: `/admin-login`
2. **Login with**:
   - Username: `admin`
   - Password: `momentum2024`
3. **Access dashboard**: `/admin`

## 🛠️ **Advanced Configuration**

### **Custom Domain Setup**

1. **Add custom domain** in Netlify
2. **Configure DNS** records
3. **Enable HTTPS** (automatic on Netlify)

### **Performance Optimization**

- **Enable asset optimization**
- **Configure CDN settings**
- **Enable image optimization**

### **Security Headers**

Already configured in `netlify.toml`:

- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer-Policy

## 📊 **Monitoring & Analytics**

### **Netlify Analytics**

- **Page views**
- **Form submissions**
- **Performance metrics**

### **Function Logs**

- **API call logs**
- **Error tracking**
- **Performance monitoring**

## 🔄 **Continuous Deployment**

### **Automatic Deploys**

- **Deploy on push** to main branch
- **Preview deployments** for pull requests
- **Branch deployments** for testing

### **Deploy Previews**

- **Test changes** before merging
- **Share preview URLs** with team
- **Validate functionality** in staging

## 📋 **Post-Deployment Checklist**

- [ ] **Homepage loads** without 404 errors
- [ ] **All routes work** (About, Courses, Contact, Results)
- [ ] **Admin login** accessible at `/admin-login`
- [ ] **Admin dashboard** works at `/admin`
- [ ] **Form submissions** are working
- [ ] **API endpoints** respond correctly
- [ ] **Mobile responsive** design works
- [ ] **Images load** properly
- [ ] **Performance** is acceptable

## 🆘 **Support & Help**

### **Netlify Support**

- **Documentation**: [docs.netlify.com](https://docs.netlify.com)
- **Community**: [community.netlify.com](https://community.netlify.com)
- **Status**: [status.netlify.com](https://status.netlify.com)

### **Common Issues & Solutions**

#### **Build Failures**

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### **Function Errors**

- Check Netlify function logs
- Verify function syntax
- Test locally with Netlify CLI

#### **Routing Issues**

- Ensure `_redirects` file is in `public/`
- Check `netlify.toml` configuration
- Redeploy after configuration changes

## 🎯 **Next Steps**

1. **Deploy the updated configuration**
2. **Test all routes** work properly
3. **Verify admin dashboard** functionality
4. **Monitor performance** and errors
5. **Set up monitoring** and analytics

---

**Note**: After deploying these changes, your website should work properly on Netlify without 404 errors. The admin dashboard will be accessible and fully functional.
