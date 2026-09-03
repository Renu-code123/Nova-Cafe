import fs from "fs";
import path from "path";
import { ReservationInput, ContactInput } from "../validations/schemas";

export interface StoredReservation extends ReservationInput {
  id: string;
  referenceCode: string;
  status: "confirmed" | "pending" | "cancelled";
  createdAt: string;
}

export interface StoredContactMessage extends ContactInput {
  id: string;
  createdAt: string;
  status: "unread" | "read" | "replied";
}

export interface StoredSubscriber {
  id: string;
  email: string;
  subscribedAt: string;
  active: boolean;
}

interface DatabaseSchema {
  reservations: StoredReservation[];
  contactMessages: StoredContactMessage[];
  newsletterSubscribers: StoredSubscriber[];
}

const DATA_DIR = path.join(process.cwd(), "data");
const DB_FILE = path.join(DATA_DIR, "db.json");

function getInitialData(): DatabaseSchema {
  return {
    reservations: [
      {
        id: "res-seed-01",
        referenceCode: "NOV-9482",
        name: "Aarav Mehta",
        email: "aarav@example.com",
        phone: "+91 98765 43210",
        date: "2026-09-12",
        time: "19:30",
        guests: 2,
        seatingArea: "Sunlit Courtyard",
        specialRequest: "Anniversary table by the olive tree if possible.",
        status: "confirmed",
        createdAt: new Date().toISOString(),
      },
    ],
    contactMessages: [],
    newsletterSubscribers: [
      {
        id: "sub-seed-01",
        email: "curator@aesthetic-journal.com",
        subscribedAt: new Date().toISOString(),
        active: true,
      },
    ],
  };
}

function readDb(): DatabaseSchema {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DB_FILE)) {
      const initial = getInitialData();
      fs.writeFileSync(DB_FILE, JSON.stringify(initial, null, 2), "utf-8");
      return initial;
    }
    const content = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading database file, using fallback", error);
    return getInitialData();
  }
}

function writeDb(data: DatabaseSchema): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing to database file", error);
  }
}

// Generate an elegant booking reference code (e.g. NOV-8392)
function generateRefCode(): string {
  const digits = Math.floor(1000 + Math.random() * 9000);
  return `NOV-${digits}`;
}

export const db = {
  getReservations: async (): Promise<StoredReservation[]> => {
    const data = readDb();
    return data.reservations;
  },

  createReservation: async (input: ReservationInput): Promise<StoredReservation> => {
    const data = readDb();
    const newReservation: StoredReservation = {
      ...input,
      id: `res-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      referenceCode: generateRefCode(),
      status: "confirmed",
      createdAt: new Date().toISOString(),
    };
    data.reservations.unshift(newReservation);
    writeDb(data);
    return newReservation;
  },

  createContactMessage: async (input: ContactInput): Promise<StoredContactMessage> => {
    const data = readDb();
    const newMessage: StoredContactMessage = {
      ...input,
      id: `msg-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      status: "unread",
      createdAt: new Date().toISOString(),
    };
    data.contactMessages.unshift(newMessage);
    writeDb(data);
    return newMessage;
  },

  addNewsletterSubscriber: async (email: string): Promise<{ success: boolean; message: string; subscriber?: StoredSubscriber }> => {
    const data = readDb();
    const existing = data.newsletterSubscribers.find(
      (s) => s.email.toLowerCase() === email.toLowerCase()
    );
    if (existing) {
      return {
        success: true,
        message: "You are already part of the Nova journal.",
        subscriber: existing,
      };
    }
    const newSubscriber: StoredSubscriber = {
      id: `sub-${Date.now()}`,
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      active: true,
    };
    data.newsletterSubscribers.unshift(newSubscriber);
    writeDb(data);
    return {
      success: true,
      message: "You're on the list. Welcome to Nova.",
      subscriber: newSubscriber,
    };
  },
};
