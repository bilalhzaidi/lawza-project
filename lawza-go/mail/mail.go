package mail

import (
    "gopkg.in/gomail.v2"
    "os"
)

func SendOtpEmail(to string, otp string) error {
    m := gomail.NewMessage()
    m.SetHeader("From", os.Getenv("SMTP_USER"))
    m.SetHeader("To", to)
    m.SetHeader("Subject", "Your Lawza OTP")
    m.SetBody("text/plain", "Your OTP code is "+otp)
    d := gomail.NewDialer(os.Getenv("SMTP_HOST"), 587, os.Getenv("SMTP_USER"), os.Getenv("SMTP_PASS"))
    return d.DialAndSend(m)
}