package models

import "time"

type Company struct {
    ID        string    `db:"id"`
    Name      string    `db:"name"`
    Type      string    `db:"type"`
    CreatedAt time.Time `db:"created_at"`
}

type User struct {
    ID        string    `db:"id"`
    FullName  string    `db:"full_name"`
    Email     string    `db:"email"`
    CNIC      string    `db:"cnic"`
    Mobile    string    `db:"mobile"`
    Password  string    `db:"password"`
    Role      string    `db:"role"`
    Status    string    `db:"status"`
    CompanyID string    `db:"company_id"`
    CreatedAt time.Time `db:"created_at"`
}

type Otp struct {
    ID        string    `db:"id"`
    UserID    string    `db:"user_id"`
    Code      string    `db:"code"`
    Purpose   string    `db:"purpose"`
    ExpiresAt time.Time `db:"expires_at"`
    Consumed  bool      `db:"consumed"`
    CreatedAt time.Time `db:"created_at"`
}

type Subscription struct {
    ID         string    `db:"id"`
    CompanyID  string    `db:"company_id"`
    Package    string    `db:"package"`
    Credit     int       `db:"credit"`
    Status     string    `db:"status"`
    ExpiresAt  time.Time `db:"expires_at"`
    CreatedAt  time.Time `db:"created_at"`
}

type Document struct {
    ID             string    `db:"id"`
    Type           string    `db:"type"`
    CompanyID      string    `db:"company_id"`
    UserID         string    `db:"user_id"`
    BuyerCNIC      string    `db:"buyer_cnic"`
    SellerCNIC     string    `db:"seller_cnic"`
    WitnessCNICs   string    `db:"witness_cnic"`    // Comma-separated if multiple
    PropertyDetail string    `db:"property_details"`
    Amount         string    `db:"amount"`
    Province       string    `db:"province"`
    Status         string    `db:"status"`
    IP             string    `db:"ip"`
    CreatedAt      time.Time `db:"created_at"`
    FinalizedAt    time.Time `db:"finalized_at"`
}

type AuditLog struct {
    ID        string    `db:"id"`
    UserID    string    `db:"user_id"`
    Action    string    `db:"action"`
    Context   string    `db:"context"`
    Timestamp time.Time `db:"timestamp"`
}