// lib/database.ts
import sqlite3 from 'sqlite3';

let db: sqlite3.Database | null = null;

export function initializeDb() {
  db = new sqlite3.Database(':memory:', (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
}

export function getDb() {
  if (!db) {
    throw new Error('Database not initialized. Call initializeDb first.');
  }

  return db;
}
