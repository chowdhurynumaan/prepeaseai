# PrepEase AI - Manual Firebase Deployment Guide

## Status: Code Complete & Ready for Deployment

All PrepEase AI code is built, tested, and ready to deploy. Due to local authentication constraints, follow these manual steps to complete deployment.

## Prerequisites
- Google Account with Firebase project access
- Firebase Console URL: https://console.firebase.google.com/project/apps-e1163

---

## Step 1: Deploy Firestore Security Rules

1. Open Firebase Console: https://console.firebase.google.com/project/apps-e1163/firestore
2. Go to **Rules** tab
3. Copy the entire content from `firestore.rules` (in this directory)
4. Replace the existing rules in the editor
5. Click **Publish**

**File to copy:** [firestore.rules](firestore.rules)

**Rules include:**
- User authentication verification
- Role-based access control (admin/user/pending)
- Namespace isolation for multi-app support
- Audit logging permissions
- Profile sharing restrictions

---

## Step 2: Deploy to Firebase Hosting

### Option A: Using Firebase CLI (Recommended)

```bash
cd "g:\My Drive\00 Engagements\Apps\prepease-ai"

# Login to Firebase
firebase login

# Deploy hosting
firebase deploy --project=apps-e1163 --only hosting

# Deploy rules
firebase deploy --project=apps-e1163 --only firestore:rules
```

**Expected output:**
```
✔ Deploy complete!

Project Console: https://console.firebase.google.com/project/apps-e1163
Hosting URL: https://apps-e1163.web.app
```

### Option B: Manual Hosting Upload (If CLI auth fails)

1. Go to Firebase Hosting: https://console.firebase.google.com/project/apps-e1163/hosting
2. Click **Connect another site** or use existing `prepease-ai` site
3. Drag and drop the `dist/` folder, or:
   - Click **Upload files**
   - Select all files from `dist/` folder (index.html, assets/*)

---

## Step 3: Environment Configuration

Firestore collections will be auto-created on first user signup.

**Expected collections after deployment:**
```
lesson_planner_app/
├── users/              (auto-created on signup)
├── profiles/           (auto-created when user creates profile)
├── lessons/            (auto-created when user generates lesson)
└── audit/              (auto-created when first action logged)
```

---

## Step 4: Test Live Application

### 4.1 Access Deployed App
- **URL:** https://apps-e1163.web.app/

### 4.2 Test User Approval Flow

1. **Sign In:**
   - Click "Sign in with Google"
   - Use any Google account
   - Verify you're redirected to "Awaiting Approval"

2. **Verify User Created:**
   - Open Firebase Console → Firestore
   - Navigate to: `lesson_planner_app` → `users`
   - Find your email
   - Verify status: `pending`

3. **Admin Approval:**
   - In Firestore, click your user document
   - Change `status` field from `pending` to `approved`
   - Click Save

4. **Refresh App:**
   - Go back to app and refresh
   - Verify badge now shows "✓ Approved"
   - See full interface (Profiles & Lessons tabs)

### 4.3 Test Profile Creation

1. Click **Profiles** tab
2. Fill form:
   - School Level: `Elementary`
   - Cohorts/Sections: `3`
   - Class Size: `25`
   - Resources: `Smartboards, projectors`
   - Time Blocks: `45 minutes`
3. Click **Create Profile**
4. Verify success message
5. In Firestore, check:
   - `lesson_planner_app/profiles/{profileId}`
   - Verify all fields saved

### 4.4 Test Audit Logging

1. After creating profile, go to Firestore
2. Navigate to: `lesson_planner_app/audit`
3. Verify entry created with:
   - `userId`: Your Firebase UID
   - `userEmail`: Your email
   - `action`: "create_profile"
   - `timestamp`: Current time
   - `changes`: Profile data before/after

---

## Step 5: GitHub Repository (Optional)

Code already committed locally. To push to GitHub:

```bash
cd "g:\My Drive\00 Engagements\Apps\prepease-ai"

# Create repo at: https://github.com/new
# Name: prepease-ai
# Description: Universal AI-Powered Lesson Planning App

# Then push:
git remote add origin https://github.com/chowdhurynumaan/prepease-ai.git
git branch -M main
git push -u origin main
```

---

## Build Artifacts

### Production Build
```
dist/
├── index.html              476 bytes
├── assets/
│   ├── index-DZgjUunO.js   587 KB (minified React app + Firebase SDK)
│   └── index-eZzIxN2g.css  11 KB  (Tailwind CSS)
```

### Build Stats
- **Total Size:** 599 KB
- **Gzipped:** 152 KB
- **React Modules:** 54 compiled
- **Build Time:** 8.60s
- **Bundle:** Optimized for production

---

## Application Architecture

### Frontend Components
```
App.jsx (Main router)
├── AuthGuard (Auth state protection)
├── Header (User info + sign-out)
├── LessonTab (Lesson generation UI)
└── ProfileTab (Profile management UI)
```

### Backend Services
```
src/services/
├── authService.js        (Google Sign-In + approval workflow)
├── profileService.js     (School structure CRUD)
├── lessonService.js      (AI lesson generation - Gemini ready)
└── auditService.js       (Complete audit trail)
```

### Firestore Schema
```
lesson_planner_app/
├── users/{userId}
│   ├── email: string
│   ├── status: "pending" | "approved" | "rejected"
│   ├── displayName: string
│   ├── photoUrl: string
│   └── createdAt: timestamp
│
├── profiles/{profileId}
│   ├── userId: string
│   ├── schoolLevel: string
│   ├── cohorts: number
│   ├── classSize: number
│   ├── resources: string
│   ├── timeBlocks: string
│   └── createdAt: timestamp
│
├── lessons/{lessonId}
│   ├── userId: string
│   ├── profileId: string
│   ├── topic: string
│   ├── standards: string
│   ├── notes: string
│   ├── content: string (Gemini response)
│   └── createdAt: timestamp
│
└── audit/{auditId}
    ├── userId: string
    ├── userEmail: string
    ├── action: string
    ├── resourceType: string
    ├── resourceId: string
    ├── before: object
    ├── after: object
    └── timestamp: timestamp
```

---

## Troubleshooting

### Issue: "Invalid credentials" on deploy
**Solution:** Run `firebase login` to authenticate, then retry deploy

### Issue: "Site not found" error
**Solution:** Use Firebase Console to manually upload dist/ files to Hosting

### Issue: User creation failing
**Solution:** Check Firestore rules are deployed - navigate to Firestore Rules tab

### Issue: Audit logs not appearing
**Solution:** Check browser console for errors - look for JavaScript exceptions

---

## Next Phase: AI Integration

Once deployment confirmed working:

1. **Integrate Gemini API:**
   - Add API key to `.env.local`: `VITE_GEMINI_API_KEY=xxx`
   - Uncomment Gemini call in `lessonService.js`
   - Test lesson generation from LessonTab

2. **Add Email Notifications:**
   - Deploy Cloud Function for email on user approval
   - Send welcome email to approved users

3. **Build Admin Dashboard:**
   - Create admin view for user management
   - Bulk user approval
   - Audit log export

---

## Production Checklist

- [x] Code compiled and bundled
- [x] Firestore rules written
- [x] Environment configuration ready
- [x] Authentication flow complete
- [x] Approval workflow implemented
- [x] Audit logging configured
- [ ] Firestore rules deployed
- [ ] App deployed to Hosting
- [ ] Live testing completed
- [ ] Gemini API integrated
- [ ] Email notifications added

---

## Support

For issues during deployment:
1. Check `firebase-debug.log` in project root
2. Verify Firebase project: apps-e1163
3. Confirm billing enabled on Firebase project
4. Check browser console for JavaScript errors

