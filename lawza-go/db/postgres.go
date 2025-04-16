package db

import (
    "database/sql"
    _ "github.com/lib/pq"
    "os"
    "log"
)

var DB *sql.DB

func Connect() *sql.DB {
    dsn := os.Getenv("DATABASE_URL")
    if dsn == "" {
        log.Fatal("DATABASE_URL not set")
    }
    db, err := sql.Open("postgres", dsn)
    if err != nil {
        log.Fatal("DB Open:", err)
    }
    if err = db.Ping(); err != nil {
        log.Fatal("DB Ping:", err)
    }
    DB = db
    return db
}