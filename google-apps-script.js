/**
 * Google Apps Script for Contact Form Integration
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com/
 * 2. Create a new project
 * 3. Replace the default code with this script
 * 4. Create a new Google Sheet for storing contact data
 * 5. Update the SHEET_ID below with your Google Sheet ID
 * 6. Update the EMAIL_TO with your email address
 * 7. Deploy as Web App (Execute as: Me, Access: Anyone)
 * 8. Copy the Web App URL and update ContactForm.jsx
 */

// Configuration
const SHEET_ID = 'GOOGLE_SHEET_ID'; // Your Google Sheet ID
const EMAIL_TO = 'example@email.com'; // Your email address

function doGet(e) {
  try {
    const formData = e.parameter;
    
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID);
    
    if (formData.type === 'newsletter') {
      // Handle newsletter subscription
      handleNewsletterSubscription(sheet, formData);
    } else {
      // Handle contact form submission
      handleContactFormSubmission(sheet, formData);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error in doGet:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e) {
  try {
    const formData = e.parameter;
    
    // Open the Google Sheet
    const sheet = SpreadsheetApp.openById(SHEET_ID);
    
    if (formData.type === 'newsletter') {
      // Handle newsletter subscription
      handleNewsletterSubscription(sheet, formData);
    } else {
      // Handle contact form submission
      handleContactFormSubmission(sheet, formData);
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    console.error('Error:', error);
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function handleContactFormSubmission(sheet, formData) {
  // Get or create "Contact Forms" sheet
  let contactSheet = sheet.getSheetByName('Contact Forms');
  if (!contactSheet) {
    contactSheet = sheet.insertSheet('Contact Forms');
    // Add headers
    contactSheet.getRange(1, 1, 1, 7).setValues([
      ['Timestamp', 'First Name', 'Last Name', 'Email', 'Phone', 'Message', 'Status']
    ]);
    // Format headers
    contactSheet.getRange(1, 1, 1, 7).setBackground('#4285f4').setFontColor('white').setFontWeight('bold');
  }
  
  // Add the new submission
  const newRow = [
    new Date(formData.timestamp),
    formData.firstName,
    formData.lastName,
    formData.email,
    formData.phone,
    formData.message,
    'New'
  ];
  
  contactSheet.appendRow(newRow);
  
  // Send email notification
  try {
    sendContactFormEmail(formData);
  } catch (emailError) {
    console.error('Error sending contact form email:', emailError);
  }
}

function handleNewsletterSubscription(sheet, formData) {
  // Get or create "Newsletter" sheet
  let newsletterSheet = sheet.getSheetByName('Newsletter');
  if (!newsletterSheet) {
    newsletterSheet = sheet.insertSheet('Newsletter');
    // Add headers
    newsletterSheet.getRange(1, 1, 1, 3).setValues([
      ['Timestamp', 'Email', 'Status']
    ]);
    // Format headers
    newsletterSheet.getRange(1, 1, 1, 3).setBackground('#34a853').setFontColor('white').setFontWeight('bold');
  }
  
  // Check if email already exists
  const lastRow = newsletterSheet.getLastRow();
  let emailExists = false;
  
  if (lastRow > 1) {
    // Only check for existing emails if there are data rows (beyond the header)
    try {
      const emailColumn = newsletterSheet.getRange(2, 2, lastRow - 1, 1).getValues();
      emailExists = emailColumn.some(row => row[0] === formData.email);
    } catch (error) {
      console.error('Error checking existing emails:', error);
      emailExists = false;
    }
  }
  
  if (!emailExists) {
    // Add the new subscription
    const newRow = [
      new Date(formData.timestamp),
      formData.email,
      'Subscribed'
    ];
    
    newsletterSheet.appendRow(newRow);
    
    // Send welcome email
    try {
      sendNewsletterWelcomeEmail(formData.email);
    } catch (emailError) {
      console.error('Error sending welcome email:', emailError);
    }
  }
}

function sendContactFormEmail(formData) {
  const subject = 'New Contact Form Submission - Kaizen Marketing';
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #4285f4; padding-bottom: 10px;">
        New Contact Form Submission
      </h2>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #333; margin-top: 0;">Contact Details:</h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Name:</td>
            <td style="padding: 8px 0;">${formData.firstName} ${formData.lastName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
            <td style="padding: 8px 0;"><a href="mailto:${formData.email}">${formData.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
            <td style="padding: 8px 0;">${formData.phone || 'Not provided'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #555;">Submitted:</td>
            <td style="padding: 8px 0;">${new Date(formData.timestamp).toLocaleString()}</td>
          </tr>
        </table>
      </div>
      
      <div style="background-color: #fff; border: 1px solid #ddd; padding: 20px; border-radius: 8px;">
        <h3 style="color: #333; margin-top: 0;">Message:</h3>
        <p style="line-height: 1.6; color: #555;">${formData.message}</p>
      </div>
      
      <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
        <p style="margin: 0; color: #2e7d32;">
          <strong>Action Required:</strong> Please respond to this inquiry within 24 hours.
        </p>
      </div>
    </div>
  `;
  
  // Send email to your team
  MailApp.sendEmail({
    to: EMAIL_TO,
    subject: subject,
    htmlBody: htmlBody
  });
  
  // Send auto-reply to the customer
  const autoReplySubject = 'Thank you for contacting Kaizen Marketing';
  const autoReplyBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Thank you for reaching out!</h2>
      
      <p>Dear ${formData.firstName},</p>
      
      <p>Thank you for contacting Kaizen Marketing. We have received your message and appreciate your interest in our services.</p>
      
      <p>Our team will review your inquiry and get back to you within 24 hours. In the meantime, feel free to explore our website to learn more about our marketing solutions.</p>
      
      <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Your Message Summary:</h3>
        <p><strong>Subject:</strong> General Inquiry</p>
        <p><strong>Message:</strong> ${formData.message.substring(0, 150)}${formData.message.length > 150 ? '...' : ''}</p>
      </div>
      
      <p>Best regards,<br>
      The Kaizen Marketing Team</p>
      
      <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666;">
        <p>This is an automated response. Please do not reply to this email.</p>
      </div>
    </div>
  `;
  
  MailApp.sendEmail({
    to: formData.email,
    subject: autoReplySubject,
    htmlBody: autoReplyBody
  });
}

function sendNewsletterWelcomeEmail(email) {
  const subject = 'Welcome to Kaizen Marketing Newsletter!';
  
  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333;">Welcome to Our Newsletter!</h2>
      
      <p>Thank you for subscribing to the Kaizen Marketing newsletter. You're now part of our community!</p>
      
      <p>You'll receive:</p>
      <ul>
        <li>Latest marketing insights and trends</li>
        <li>Case studies and success stories</li>
        <li>Exclusive tips and strategies</li>
        <li>Industry news and updates</li>
      </ul>
      
      <p>We promise to deliver valuable content and respect your inbox.</p>
      
      <p>Best regards,<br>
      The Kaizen Marketing Team</p>
    </div>
  `;
  
  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody
  });
}
