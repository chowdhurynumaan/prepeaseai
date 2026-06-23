# PrepEase AI - Universal Modular School Planner

[![Firebase](https://img.shields.io/badge/Firebase-Firestore-FFCA28?logo=firebase)](https://firebase.google.com/)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)](https://tailwindcss.com/)
[![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?logo=google)](https://ai.google.dev/)

AI-powered lesson planning app that generates customized lessons based on your school's structure, schedule, and student needs.

## 🎯 Features

- **Custom School Profiles** - Define your school structure (timetables, levels, cohorts)
- **AI Lesson Generation** - Generate detailed lesson plans using Google Gemini API
- **User Approval Workflow** - Secure sign-in with Google, admin approval required
- **Complete Audit Trail** - Every action logged for compliance and tracking
- **Multi-level Support** - Grade levels, class cohorts, and custom configurations
- **Print & Export** - Export lessons as formatted documents
- **Responsive Design** - Works on desktop and tablets

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm
- Firebase project (`apps-e1163`)
- Google Gemini API key
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/chowdhurynumaan/prepease-ai.git
cd prepease-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your Firebase credentials:
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

4. **Start development server**
```bash
npm run dev
```

App runs at `http://localhost:5173`

## 📦 Build & Deploy

### Build for production
```bash
npm run build
```

### Deploy to Firebase Hosting
```bash
npm run deploy:hosting
```

### Deploy security rules
```bash
firebase deploy --only firestore:rules
```

## 📚 Usage

### For Teachers

1. **Sign In**
   - Click "Sign in with Google"
   - Wait for admin approval

2. **Create School Profile**
   - Go to "School Structure" tab
   - Add time blocks, define levels/cohorts
   - Save profile

3. **Generate Lesson Plan**
   - Select your profile
   - Enter lesson topic and objectives
   - Click "Generate"
   - Review and print

### For Administrators

Access admin dashboard to:
- Approve/reject new users
- View audit logs of all actions
- Monitor app usage
- Manage user roles

(Admin dashboard is separate app in shared Firebase project)

## 🗂️ Project Structure

```
prepease-ai/
├── src/
│   ├── components/       # React components
│   ├── services/         # Firebase & API services
│   ├── hooks/            # Custom React hooks
│   ├── styles/           # CSS and styling
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── public/               # Static files
├── firestore.rules       # Firestore security rules
├── package.json          # Dependencies
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS config
└── .env.example          # Environment variables template
```

## 🔐 Security

### Authentication
- Google Sign-In via Firebase Auth
- User approval required before access
- Role-based access control (user/admin)

### Database
- Firestore with granular security rules
- User documents isolated
- Profiles shareable only by creator
- Audit logs admin-only

### API
- API keys stored in `.env.local` (never committed)
- Gemini API key optional (user can provide via UI)
- All requests have proper error handling

## 🔧 Configuration

### Firestore Collections

```
lesson_planner_app/
├── users/{uid}           # User profiles & approval status
├── profiles/{profileId}  # School structure definitions
├── lessons/{lessonId}    # Generated lesson plans
└── audit/{auditId}       # Audit trail
```

### Environment Variables

See `.env.example` for complete list:
- Firebase credentials
- API keys (optional)

## 🐛 Troubleshooting

### "Waiting for approval" message
- Contact admin to approve your account
- Check email for approval notification

### Gemini API errors
- Ensure API key is valid
- Check API quota hasn't exceeded
- Verify billing is enabled

### Lessons not saving
- Check Firestore rules are deployed
- Ensure you're approved user
- Check browser console for errors

### Build errors
- Run `npm install` to ensure all dependencies
- Clear `node_modules` and reinstall if needed
- Check Node.js version (16+)

## 📖 Documentation

- [Firestore Setup](../PREPEASE_AI_APP_SETUP.md) - Database schema
- [Workspace Bible](../WORKSPACE_BIBLE.md) - System overview
- [App Generator System](../APP_GENERATOR_SYSTEM.md) - Architecture

## 🤝 Contributing

This is a custom school management app. For contributions:
1. Follow existing code patterns
2. Add audit logging for new actions
3. Test security rules changes
4. Update documentation

## 📄 License

Proprietary - School use only

## 👨‍💼 Support

For issues or questions:
- Check documentation in `../PREPEASE_AI_APP_SETUP.md`
- Contact admin dashboard team
- Check audit logs for troubleshooting

## 🎉 Features Coming Soon

- Lesson templates library
- Lesson history and versioning
- Collaborative planning
- Email notifications
- Mobile app
- Export to PDF
- Integration with Google Classroom

---

**Status:** Production Ready (June 2026)  
**Last Updated:** 2026-06-21  
**Maintainer:** Numaan Chowdhury
