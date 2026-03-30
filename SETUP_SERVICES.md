# Contact Form & Scheduling Setup Guide

This guide helps you set up the contact form and scheduling features for your portfolio with **completely free services**.

---

## 1. Email Form Setup (Formspree) ✉️

### What is Formspree?
- **Free service** that handles form submissions without needing a backend
- 50 submissions/month on free tier (perfect for a portfolio)
- No credit card required
- Easy to set up in 2 minutes

### Steps:
1. Go to [formspree.io](https://formspree.io)
2. Click "Sign Up" (top right)
3. Use your email or GitHub to sign up
4. Click "Create" to make a new form
5. Select "No email verification required" 
6. Copy your **Form ID** (looks like: `abc123def`)
7. Open [`lib/constants.ts`](lib/constants.ts)
8. Find the line: `FORMSPREE_ID: "xyzpqrst"`
9. Replace `"xyzpqrst"` with your actual Form ID from Formspree
10. **Done!** Your form now sends emails to your inbox

**Test:** Submit the contact form and check your email. Each submission appears in your Formspree dashboard too.

---

## 2. Schedule Meetings Setup (Calendly) 📅

### What is Calendly?
- **Free service** for scheduling meetings without back-and-forths
- Up to 1 calendar connection on free tier
- Clean, professional UI
- No code needed

### Steps:
1. Go to [calendly.com](https://calendly.com)
2. Click "Sign Up" (top right)
3. Create account with email
4. Click "Get Started"
5. Follow the setup wizard:
   - Select calendar type (Google/Outlook/etc.)
   - Set your availability (when people can book you)
   - Customize how long meetings are (usually 30-60 min)
6. Get your **Calendar Link** (looks like: `calendly.com/yourname` or `calendly.com/yourname/meeting`)
7. Open [`lib/constants.ts`](lib/constants.ts)
8. Find the line: `CALENDLY_URL: "https://calendly.com"`
9. Replace it with your actual Calendly link
10. **Done!** The "Find a time" button now opens your calendar

**Test:** Click "Find a time" on the contact page and verify it opens your Calendly page.

---

## 3. What's Been Fixed ✅

### Email Link
- Fixed the email link (garvit1505@gmail.com) to use proper `mailto:` protocol
- Now opens your default email client when clicked (not `about:blank`)

### Contact Form
- Integrated with **Formspree** for free email submissions
- Shows success/error messages after submission
- Form clears after successful submission
- Loading state while submitting

### Meeting Scheduler
- Replaced "coming soon" with **Calendly** integration
- Button opens your Calendly scheduling page
- Matches your website theme perfectly
- No iframe needed - clean and simple

---

## 4. Environment & Limits

### Formspree Free Tier
- ✅ 50 submissions/month
- ✅ 1 form
- ✅ Custom redirect after submit
- ❌ No files in form submissions
- ❌ No custom emails

**If you exceed 50:** Just upgrade to Pro ($25/month) or delete old submissions

### Calendly Free Tier
- ✅ Unlimited meetings
- ✅ 1 calendar
- ✅ Custom availability
- ✅ Email confirmations
- ❌ Can't integrate multiple calendars (need Pro)

---

## 5. Troubleshooting

### Form not sending emails?
- ✅ Check Formspree ID is correct in `lib/constants.ts`
- ✅ Check browser console for errors (F12)
- ✅ Make sure it's a valid JSON response from Formspree

### Calendly link not working?
- ✅ Make sure your full Calendly link is in `lib/constants.ts`
- ✅ Format should be: `https://calendly.com/yourname` or `https://calendly.com/yourname/meeting`
- ✅ If you changed it, refresh the page (Ctrl+Shift+R)

### Email client not opening?
- ✅ The email link is fixed with `mailto:` protocol
- ✅ Works in all modern browsers
- ✅ Fallback: Users can copy-paste email (shown on page)

---

## 6. Privacy & Security

- **Formspree**: Your data is stored securely, 30-day retention by default
- **Calendly**: Only shares your availability, not your email publicly
- **No backend secrets:** Everything is public URLs (safe!)

---

## Configuration Location
Update these in [`lib/constants.ts`](lib/constants.ts):

```typescript
export const CONTACT_CONFIG = {
  FORMSPREE_ID: "YOUR_ID_HERE",      // From formspree.io
  CALENDLY_URL: "YOUR_URL_HERE",     // From calendly.com
};
```

---

Need help? Check:
- [Formspree Docs](https://formspree.io/help/)
- [Calendly Help](https://help.calendly.com/)
- Browser console (F12) for error messages
