import nodemailer from 'nodemailer';

export async function sendOtpEmail(email: string, otp: string) {
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT!),
    secure: false,
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });
  await transporter.sendMail({
    from: '"Lawza" <no-reply@lawza.pk>',
    to: email,
    subject: "Your Lawza OTP",
    text: `Your OTP is ${otp}`,
    html: `<b>Your OTP is: ${otp}</b>`,
  });
}