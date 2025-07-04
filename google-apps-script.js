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
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 25px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h2 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600;">New Contact Form Submission</h2>
        <p style="color: #cccccc; margin: 8px 0 0 0; font-size: 14px;">Kaizen Marketing</p>
      </div>
      
      <!-- Main Content -->
      <div style="padding: 30px; background-color: #ffffff;">
        <!-- Contact Details Section -->
        <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #dc3545; margin: 20px 0;">
          <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Contact Details:</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555555; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #333333;">${formData.firstName} ${formData.lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555555;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #dc3545; text-decoration: none;">${formData.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555555;">Phone:</td>
              <td style="padding: 8px 0; color: #333333;">${formData.phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555555;">Submitted:</td>
              <td style="padding: 8px 0; color: #333333;">${new Date(formData.timestamp).toLocaleString()}</td>
            </tr>
          </table>
        </div>
        
        <!-- Message Section -->
        <div style="background-color: #ffffff; border: 1px solid #e0e0e0; padding: 25px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Message:</h3>
          <p style="line-height: 1.6; color: #555555; margin: 0; white-space: pre-wrap;">${formData.message}</p>
        </div>
        
        <!-- Action Required Section -->
        <div style="background-color: #fff5f5; border: 1px solid #fed7d7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc3545;">
          <p style="margin: 0; color: #c53030; font-weight: 600;">
            ⚡ <strong>Action Required:</strong> Please respond to this inquiry within 24 hours to maintain excellent customer service.
          </p>
        </div>
        
        <!-- Quick Actions -->
        <div style="text-align: center; margin: 25px 0;">
          <a href="mailto:${formData.email}?subject=Re: Your inquiry to Kaizen Marketing" style="display: inline-block; background-color: #dc3545; color: #ffffff; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-weight: 600; font-size: 14px; margin: 0 10px;">
            Reply via Email
          </a>
          <a href="tel:${formData.phone}" style="display: inline-block; background-color: #ffffff; color: #dc3545; text-decoration: none; padding: 12px 25px; border-radius: 6px; font-weight: 600; font-size: 14px; border: 2px solid #dc3545; margin: 0 10px;">
            Call ${formData.phone ? 'Customer' : 'N/A'}
          </a>
        </div>
      </div>
      
      <!-- Footer -->
      <div style="background-color: #f8f9fa; padding: 20px 30px; border-radius: 0 0 8px 8px; text-align: center; border-top: 1px solid #e0e0e0;">
        <p style="color: #777777; font-size: 12px; margin: 0;">
          This email was automatically generated from your website contact form.
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
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Thank You for Reaching Out!</h1>
        <p style="color: #cccccc; margin: 10px 0 0 0; font-size: 16px;">Kaizen Marketing</p>
      </div>
      
      <!-- Main Content -->
      <div style="padding: 40px 30px; background-color: #ffffff;">
        <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px; font-weight: 600;">
          Hello ${formData.firstName}!
        </h2>
        
        <p style="color: #555555; line-height: 1.6; font-size: 16px; margin-bottom: 25px;">
          Thank you for contacting Kaizen Marketing. We have received your message and truly appreciate your interest in our services.
        </p> 
        
        <p style="color: #555555; line-height: 1.6; font-size: 16px; margin-bottom: 25px;">
          Our team will review your inquiry and respond within 24 hours
        </p> 

        <!-- Call to Action -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="color: #555555; margin-bottom: 20px;">In the meantime, explore our services and success stories:</p>
          <a href="https://your-website.com/services" style="display: inline-block; background-color: #dc3545; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 16px; margin: 0 10px 10px 0;">
            Our Services
          </a>
          <a href="https://your-website.com/portfolio" style="display: inline-block; background-color: #ffffff; color: #dc3545; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 16px; border: 2px solid #dc3545; margin: 0 10px 10px 0;">
            View Portfolio
          </a>
        </div>
             
      <!-- Footer -->
      <div style="background-color: #f8f9fa; padding: 25px 30px; border-radius: 0 0 8px 8px; text-align: center;">
        <p style="color: #333333; margin: 0 0 10px 0; font-weight: 600; font-size: 16px;">
          Best regards,
        </p>
        <p style="color: #333333; margin: 0 0 15px 0; font-size: 16px;">
          <strong>The Kaizen Marketing Team</strong>
        </p>
        
        <!-- Contact Info -->
        <div style="border-top: 1px solid #dddddd; padding-top: 15px; margin-top: 15px;">
          <p style="color: #777777; font-size: 14px; margin: 5px 0;">
            📧 pooja@kaizenevents&promotionllp.com | 📞 +91 9892787127
          </p>
          <p style="color: #777777; font-size: 14px; margin: 5px 0;">
            📍 L-355, Dreams Mall, Bhandup West, Mumbai 400078
          </p>
        </div>
        
        <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #dddddd;">
          <p style="color: #999999; font-size: 12px; margin: 0;">
            This is an automated response. We'll be in touch with you personally very soon!
          </p>
        </div>
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
  const subject = 'Welcome to Kaizen Marketing - Your Journey to Excellence Begins Now';
  
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
      <!-- Header Section -->
      <div style="background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%); padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="color: #ffffff; margin: 0; font-size: 28px; font-weight: 600;">Welcome to Kaizen Marketing</h1>
        <p style="color: #cccccc; margin: 10px 0 0 0; font-size: 16px;">Transforming Businesses Through Excellence</p>
      </div>
      
      <!-- Main Content -->
      <div style="padding: 40px 30px; background-color: #ffffff;">
        <h2 style="color: #333333; margin: 0 0 20px 0; font-size: 24px; font-weight: 600; text-align: center;">
          Thank you for joining our community!
        </h2>
        
        <p style="color: #555555; line-height: 1.6; font-size: 16px; margin-bottom: 25px;">
          We're thrilled to have you on board. As a subscriber to the Kaizen Marketing newsletter, you're now part of an exclusive community dedicated to continuous improvement and marketing excellence.
        </p>
        
        <!-- What You'll Receive Section -->
        <div style="background-color: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #dc3545; margin: 25px 0;">
          <h3 style="color: #333333; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">What You'll Receive:</h3>
          <ul style="color: #555555; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li><strong>Weekly Marketing Insights:</strong> Latest trends and strategies that drive results</li>
            <li><strong>Exclusive Case Studies:</strong> Real success stories from our clients</li>
            <li><strong>Industry Analysis:</strong> Deep dives into market developments</li>
            <li><strong>Actionable Tips:</strong> Practical advice you can implement immediately</li>
            <li><strong>Early Access:</strong> Be the first to know about our new services and offerings</li>
          </ul>
        </div>
        
        <!-- Call to Action -->
        <div style="text-align: center; margin: 30px 0;">
          <p style="color: #555555; margin-bottom: 20px;">Ready to explore what we can do for your business?</p>
          <a href="https://your-website.com/contact" style="display: inline-block; background-color: #dc3545; color: #ffffff; text-decoration: none; padding: 12px 30px; border-radius: 6px; font-weight: 600; font-size: 16px;">
            Get in Touch
          </a>
        </div>
        
 
      <!-- Footer -->
      <div style="background-color: #f8f9fa; padding: 25px 30px; border-radius: 0 0 8px 8px; text-align: center;">
        <p style="color: #333333; margin: 0 0 10px 0; font-weight: 600; font-size: 16px;">
          Best regards,
        </p>
        <p style="color: #333333; margin: 0 0 15px 0; font-size: 16px;">
          <strong>The Kaizen Marketing Team</strong>
        </p>
        
        <!-- Contact Info -->
        <div style="border-top: 1px solid #dddddd; padding-top: 15px; margin-top: 15px;">
          <p style="color: #777777; font-size: 14px; margin: 5px 0;">
            📧 pooja@kaizenevents&promotionllp.com | 📞 +91 9892787127
          </p>
          <p style="color: #777777; font-size: 14px; margin: 5px 0;">
            📍 L-355, Dreams Mall, Bhandup West, Mumbai 400078
          </p>
        </div>
  `;
  
  MailApp.sendEmail({
    to: email,
    subject: subject,
    htmlBody: htmlBody
  });
}
