// ====== SERVICE LANDING PAGE DATA ======
// Each entry powers a real route: /services/:slug
// Title, description, and canonical are injected into <head> at build time.

export interface ServicePageMeta {
  slug: string;
  title: string;
  description: string;
  h1: string;
  subheadline: string;
  keywords: string;
}

export const SERVICE_PAGES: ServicePageMeta[] = [
  {
    slug: 'water-remediation',
    title: 'Water Remediation & Restoration — Leander, TX | Solid State Construction',
    description: '24/7 emergency water remediation in Leander, Cedar Park & North Austin. Rapid extraction, drying & full restoration. Insurance claims handled. Free estimates — call (512) 595-2332.',
    h1: 'Water Remediation & Restoration — Leander, TX',
    subheadline: '24/7 emergency response. On-site within 1 hour. We dry, clean, and restore your home.',
    keywords: 'water remediation Leander TX, water damage restoration, emergency water extraction, flood cleanup Leander, water restoration company, 24/7 water removal',
  },
  {
    slug: 'plumbing',
    title: 'Plumbing Services — Leander, TX | Solid State Construction',
    description: 'Licensed plumber in Leander, TX. 24/7 emergency plumbing, slab leak detection, drain cleaning, water heater installs & pipe replacement. Free estimates — call (512) 595-2332.',
    h1: 'Plumbing Services — Leander, TX',
    subheadline: 'Emergency plumbing, slab leaks, drain cleaning & water heater installation. Same-day service.',
    keywords: 'plumber Leander TX, emergency plumber, slab leak detection, drain cleaning Leander, water heater install, pipe repair plumber near me',
  },
  {
    slug: 'roofing',
    title: 'Roofing Contractor — Leander, TX | Solid State Construction',
    description: 'Expert roof repair & replacement in Leander, Cedar Park & North Austin. Storm damage, leak repair, full roof replacements. Free roof inspections — call (512) 595-2332.',
    h1: 'Roofing Contractor — Leander, TX',
    subheadline: 'Roof repairs, storm damage restoration & full replacements. Built to withstand Texas weather.',
    keywords: 'roofing contractor Leander TX, roof repair, roof replacement Austin, storm damage roof, residential roofer Leander',
  },
  {
    slug: 'concrete',
    title: 'Concrete & Foundation Repair — Leander, TX | Solid State Construction',
    description: 'Foundation leveling, concrete slab repair & structural stabilization in Leander, TX. Specialized in Texas soil conditions. Free inspections — call (512) 595-2332.',
    h1: 'Concrete & Foundation Repair — Leander, TX',
    subheadline: 'Foundation leveling, concrete repair & structural stabilization for shifting Texas soil.',
    keywords: 'foundation repair Leander TX, concrete contractor, slab foundation repair, house leveling, concrete driveway Leander, foundation inspection',
  },
  {
    slug: 'excavation',
    title: 'Excavation & Site Work — Leander, TX | Solid State Construction',
    description: 'Professional excavation, grading, trenching & site preparation in Leander, TX. Residential & commercial. Free estimates — call (512) 595-2332.',
    h1: 'Excavation & Site Work — Leander, TX',
    subheadline: 'Grading, trenching, site preparation & earthwork for residential and commercial projects.',
    keywords: 'excavation Leander TX, site grading, trenching services, land clearing, site preparation contractor',
  },
];

export function getServicePage(slug: string): ServicePageMeta | undefined {
  return SERVICE_PAGES.find((p) => p.slug === slug);
}