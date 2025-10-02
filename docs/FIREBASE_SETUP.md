# Firebase Setup for ICD Waitlist

This guide explains how to set up Firebase for the ICD website waitlist functionality.

## Prerequisites

1. A Google account
2. Access to deploy the website to GitHub Pages

## Setup Steps

### 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Click "Add Project" or "Create a Project"
3. Enter a project name (e.g., "icd-website" or "icd-waitlist")
4. Disable Google Analytics (optional, not needed for waitlist)
5. Click "Create Project"

### 2. Enable Firestore Database

1. In your Firebase project, click "Firestore Database" in the left sidebar
2. Click "Create Database"
3. Choose "Start in production mode" for security
4. Select a location closest to your users (e.g., us-central1)
5. Click "Enable"

### 3. Configure Security Rules

1. In Firestore, click on "Rules" tab
2. Replace the default rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read access to count documents (optional, for admin)
    match /waitlist/{document=**} {
      allow read: if false; // Disable reads for security
      allow create: if request.auth == null && 
        request.resource.data.keys().hasAll(['email', 'firstName', 'lastName']) &&
        request.resource.data.email is string &&
        request.resource.data.firstName is string &&
        request.resource.data.lastName is string;
      allow update, delete: if false; // Disable updates and deletes
    }
  }
}
```

3. Click "Publish"

### 4. Create a Web App

1. In Firebase Console, click the gear icon > "Project Settings"
2. Scroll down to "Your apps"
3. Click the web icon (</>) to add a web app
4. Enter an app nickname (e.g., "ICD Website")
5. Don't check "Firebase Hosting" (we're using GitHub Pages)
6. Click "Register App"
7. Copy the configuration object shown

### 5. Set Up Environment Variables

1. Create a `.env.local` file in your project root (copy from `.env.example`)
2. Add your Firebase configuration:

```bash
NEXT_PUBLIC_FIREBASE_API_KEY=your-actual-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 6. Set Up GitHub Secrets (for GitHub Pages)

1. Go to your GitHub repository
2. Click Settings > Secrets and variables > Actions
3. Add the following secrets:
   - `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `NEXT_PUBLIC_FIREBASE_APP_ID`

### 7. Update GitHub Actions Workflow

If you're using GitHub Actions for deployment, update your workflow to include the environment variables:

```yaml
- name: Build
  env:
    NEXT_PUBLIC_FIREBASE_API_KEY: ${{ secrets.NEXT_PUBLIC_FIREBASE_API_KEY }}
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: ${{ secrets.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN }}
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: ${{ secrets.NEXT_PUBLIC_FIREBASE_PROJECT_ID }}
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: ${{ secrets.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET }}
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: ${{ secrets.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID }}
    NEXT_PUBLIC_FIREBASE_APP_ID: ${{ secrets.NEXT_PUBLIC_FIREBASE_APP_ID }}
  run: npm run build
```

## Testing Locally

1. Make sure you have `.env.local` with your Firebase config
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Navigate to `/waitlist` and test the form submission
5. Check your Firebase Console > Firestore to see the entries

## Viewing Waitlist Entries

To view waitlist entries:

1. Go to Firebase Console
2. Navigate to Firestore Database
3. Click on the "waitlist" collection
4. You'll see all submitted entries with their data

## Security Considerations

- The current setup allows anyone to submit to the waitlist
- Email validation is done client-side
- For production, consider:
  - Adding reCAPTCHA to prevent spam
  - Implementing rate limiting
  - Adding server-side validation
  - Setting up email verification

## Troubleshooting

### Form submission fails
- Check browser console for errors
- Verify all environment variables are set correctly
- Ensure Firestore is enabled in Firebase Console
- Check Firestore rules are published

### "Permission denied" errors
- Review Firestore security rules
- Make sure the rules allow creating documents
- Check that all required fields are being sent

### Build fails on GitHub Actions
- Verify all secrets are added to GitHub
- Check that secret names match exactly
- Ensure workflow file includes environment variables

## Next Steps

After successful setup:
1. Monitor waitlist growth in Firebase Console
2. Export data as needed for email campaigns
3. Consider adding email notifications
4. Implement admin dashboard for managing entries