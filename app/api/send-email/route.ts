import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465, // Using Mailtrap's alternative port
    secure: true, // Set to false for port 2525
    auth: {
      user: 'admin@fasttopupku.com',
      pass: 'fasttopupku123!',
    },
});

export async function POST(request: Request) {
  try {
    const { to, productName, itemName, price, playerId } = await request.json();

    const mailOptions = {
      from: 'admin@fasttopupku.com',
      to,
      subject: 'Purchase Confirmation - fasttopupku',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="text-align: center; margin-bottom: 30px;">
            <img src="https://fasttopupku.com/app_icon.png" alt="fasttopupku Logo" style="width: 150px; height: auto; margin-bottom: 20px;">
          </div>
          
          <h2 style="color: #2563eb; text-align: center;">Thank You For Your Purchase!</h2>
          <p style="text-align: center;">Your purchase has been confirmed and is being processed.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937;">Order Details:</h3>
            <p><strong>Game:</strong> ${productName}</p>
            <p><strong>Item:</strong> ${itemName}</p>
            <p><strong>Price:</strong> Rp ${price.toLocaleString('id-ID')},-</p>
            <p><strong>Player ID:</strong> ${playerId}</p>
          </div>
          
          <p>We'll notify you once your purchase is completed. If you have any questions, please contact our support team.</p>
          
          <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
            Best regards,<br>
            fasttopupku Team
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
} 