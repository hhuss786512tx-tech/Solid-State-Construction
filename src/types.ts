/**
 * Solid State Construction TypeScript Definitions
 */

export interface Project {
  id: string;
  title: string;
  type: 'industrial' | 'infrastructure' | 'commercial';
  status: 'In Progress' | 'Completed';
  location: string;
  specs: {
    loadCapacity?: string;
    completion?: string;
    efficiency?: string;
    security?: string;
    [key: string]: string | undefined;
  };
  description: string;
  image: string;
  blueprintCode: string;
  engineer: string;
}

export interface ServiceDetail {
  title: string;
  description: string;
  image?: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
  avatar?: string;
}

export interface TechnicalService {
  id: string;
  divisionCode: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  details: ServiceDetail[];
  specs: { label: string; value: string; progress?: number }[];
  accentColor: string;
}

export interface HubLocation {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  image: string;
  status: 'NOMINAL' | 'MAINTENANCE' | 'STANDBY';
  coords: { x: number; y: number; lat: string; lng: string }; // x and y represent visual position % on the tactical grid blueprint map
  description: string;
  staff: string;
  workloads: string;
}

export interface QuoteRequest {
  id: string;
  clientName: string;
  email: string;
  projectType: string;
  dimensions: string;
  materialGrade: string;
  safetyLevel: string;
  notes: string;
  estimatedCost: number;
  date: string;
  status: 'PENDING' | 'APPROVED';
}
