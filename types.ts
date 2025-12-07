export enum Language {
  UZ = 'uz',
  RU = 'ru',
  EN = 'en'
}

export interface CreditCard {
  id: string;
  number: string; // Masked
  holder: string;
  expiry: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  balance: number; // in EcoCoins (1 EC = 1 UZS)
  totalRecycledKg: number;
  level: number;
  joinDate: string;
  role?: 'user' | 'admin';
  cards?: CreditCard[];
}

export interface WasteAnalysisResult {
  material: string;
  weightEstimateKg: number;
  isRecyclable: boolean;
  confidence: number;
  explanation: string;
  ecoValue: number; // Value in EcoCoins
  isAuthentic: boolean; // Is it a real photo?
  rejectionReason?: string; // Why it was rejected (AI, Screen capture, etc)
}

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  type: 'earn' | 'spend';
  description: string;
  provider?: string; // e.g., 'Elektr', 'Suv'
}

export interface GlobalStats {
  totalUsers: number;
  totalWasteCollected: number;
  totalPayouts: number;
  co2Saved: number;
}