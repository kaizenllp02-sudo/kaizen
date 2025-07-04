# Google Sheets Integration Setup Guide

## Overview
The ContactForm now integrates with Google Sheets to store form submissions and send email notifications. This setup requires deploying a Google Apps Script.

## Step-by-Step Setup

### 1. Create Google Apps Script
1. Go to [script.google.com](https://script.google.com/)
2. Click "New project"
3. Delete the default code
4. Copy and paste the code from `google-apps-script.js`

### 2. Create Google Sheet
1. Go to [sheets.google.com](https://sheets.google.com/)
2. Create a new blank spreadsheet
3. Rename it to "Kaizen Contact Forms" (or any name you prefer)
4. Copy the Sheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
   ```

### 3. Configure the Script
In your Google Apps Script:
1. Replace `YOUR_GOOGLE_SHEET_ID` with your actual Sheet ID
2. Replace `your-email@example.com` with your email address

### 4. Deploy as Web App
1. In Google Apps Script, click "Deploy" → "New deployment"
2. Click the gear icon and select "Web app"
3. Configure:
   - **Description**: "Kaizen Contact Form Handler"
   - **Execute as**: "Me"
   - **Who has access**: "Anyone"
4. Click "Deploy"
5. Copy the Web App URL (it looks like: `https://script.google.com/macros/s/[SCRIPT_ID]/exec`)

### 5. Update Environment Variables
1. Open the `.env` file in your project root
2. Update the `VITE_GOOGLE_SCRIPT_URL` with your actual Web App URL:

```bash
# Google Apps Script Configuration
VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/AKfycbz.../exec
```

**Important:** 
- Make sure to restart your development server after updating the `.env` file
- Never commit your actual `.env` file to version control
- Use `.env.example` as a template for other developers
- See `ENVIRONMENT_SETUP.md` for detailed environment variable documentation

## What This Integration Provides

### ✅ Contact Form Features:
- Stores all form submissions in Google Sheets
- Sends email notification to admin
- Sends auto-reply confirmation to customer
- Organized data with timestamp, status, and contact details
- Uses environment variables for secure configuration

### ✅ Newsletter Features:
- Separate sheet for newsletter subscriptions
- Prevents duplicate email subscriptions
- Sends welcome email to new subscribers
- Clean data management

### ✅ Email Notifications:
- Professional HTML email templates
- Admin notifications with contact details
- Customer auto-reply confirmations
- Newsletter welcome emails

### ✅ Environment Configuration:
- Google Apps Script URL stored in `.env` file
- Secure configuration management
- Easy deployment across different environments

## Data Structure

### Contact Forms Sheet:
| Timestamp | First Name | Last Name | Email | Phone | Message | Status |
|-----------|------------|-----------|-------|-------|---------|---------|
| Auto | Form Data | Form Data | Form Data | Optional | Form Data | New |

### Newsletter Sheet:
| Timestamp | Email | Status |
|-----------|-------|--------|
| Auto | Form Data | Subscribed |

## Testing

1. After setup, test the contact form on your website
2. Check your Google Sheet for new entries
3. Verify you receive email notifications
4. Test the newsletter subscription

## Troubleshooting

### Common Issues:
1. **CORS Error**: The script now uses GET requests to avoid CORS issues
2. **Form not submitting**: Check the Web App URL in your `.env` file
3. **"Google Apps Script URL not configured" error**: Ensure `VITE_GOOGLE_SCRIPT_URL` is set in your `.env` file
4. **No emails received**: Verify EMAIL_TO address in script
5. **Sheet not updating**: Ensure Sheet ID is correct
6. **Permission errors**: Re-deploy the script with proper permissions
7. **Environment variables not working**: Restart your development server after updating `.env`

### CORS Solution:
If you encounter CORS errors, the script has been updated to use GET requests with URL parameters instead of POST requests, which avoids browser CORS restrictions.

### Debug Mode:
For debugging issues, you can temporarily add console.log statements to the Google Apps Script and check the execution logs in the Google Apps Script editor (View → Executions).

## Security Notes
- The Web App is set to "Anyone" access but only accepts POST requests
- Email addresses are validated on the frontend
- The script includes error handling and logging
- No sensitive data is exposed in the frontend code

---

**Need Help?** 
- Check the Google Apps Script logs for errors
- Verify all IDs and URLs are correctly copied
- Ensure Google Sheets and Gmail APIs are enabled
