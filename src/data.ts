import { Project, TechnicalService, HubLocation } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'leander-water-remediation',
    title: 'Emergency Water Remediation',
    type: 'infrastructure',
    status: 'Completed',
    location: 'Leander, TX',
    specs: {
      loadCapacity: '24/7 Response',
      completion: '100% Restored',
      efficiency: 'Rapid Dry Technology',
    },
    description: "Critical response for burst pipes. We arrived within 30 minutes, handled water remediation, and managed the entire insurance coordination process for our Leander neighbors.",
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdaZyBWFS0BsIb7mAKhEX9Pm3izUX-CtnR0Nl1Vu7azPZOypws18wgwP-Nn16pMyGUcsj2_3A2kVQMeybRuO_M5U5TLP-nXzYVl_RgTX_StlKICvfeE6lG60XqC1Pd2E7JqnITfOkXoPljGPoHK0sgPq2Qyz8YBjaW6V9GqONlB-vEnzcbY7yvaqRyVa_qpnfC5TsYhtp_q2IJYaD9ITe2fxndPSyB4LgxeHIYjM5bu_y2tTFJyHwtrV31rNnqp8PmidJSPu6taTY',
    blueprintCode: 'CASE-WAT-001',
    engineer: 'Sarah M. (Client)'
  },
  {
    id: 'crystal-falls-foundation',
    title: 'Structural Foundation Leveling',
    type: 'industrial',
    status: 'Completed',
    location: 'Crystal Falls, TX',
    specs: {
      loadCapacity: 'Heavy Soil Reinforcement',
      completion: '100% Levelled',
      efficiency: 'High-Core PSI Concrete',
    },
    description: 'Expert foundation repair addressing Texas soil shifts. We implemented structural leveling and crack repair with professional precision and clear communication.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaXJF9yT4Xy7MVHmoq1ytLOSRxeWWhsU1hTIAdtCgnE9mADKb5BqFN_elz-fI-lAhvJSr_Ko-tgWRgxojHzKUqkXXnSHTLP_rP4AbtzOMkHy5KV3eApv2G3LikE9Ml7Ut3OtcQLoqWbFDQOMMaD_leNp7Att198gJY-Pck1RxYtG7tur1dUhI1PYcXb-Vu2mqnfAm_L1LByo5sw70KmI3YvGqY9VdqjKBubwOEzLHhTAAKiRHNRi6TbvqXx9jtpMUelo7IGEq--Qoj',
    blueprintCode: 'CASE-FND-042',
    engineer: 'James R. (Client)'
  },
  {
    id: 'cedar-park-remodel',
    title: 'Custom Kitchen & Tile Remodel',
    type: 'commercial',
    status: 'Completed',
    location: 'Cedar Park, TX',
    specs: {
      loadCapacity: 'Full Aesthetic Overhaul',
      completion: '100% Delivered',
      efficiency: 'Precision Tile Matrix',
    },
    description: 'A complete home transformation including a full kitchen remodel and intricate flooring. Focused on high-detail tile work and modern aesthetic transitions.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvGY9whEnTAB-_ldLCbceXqDPcYVuVnP4yjCS72PBDevrULpfBXKN5ov5nIoaSq3setURD3v0Yc-xD7OdWKpKjtn4XezWm-YC7F3wMN8yPC170-vEnaY8B0kpTUbUrcrRo_MteQksR7TLNna1PrOCgJoRE2ENJ-_w16-WkMogtNhYix-i5hsJ89D3Z_Cc68743pmTuZCce6hMbLlGeAwDKraqar0SQzw405PmEn4ZDXR0uEazOINITvr1lveSD0_gT7Bj5OxzoKUjv',
    blueprintCode: 'CASE-RMD-108',
    engineer: 'Elena G. (Client)'
  }
];

export const SERVICES: TechnicalService[] = [
  {
    id: 'water-remediation',
    divisionCode: 'DIVISION 24/7 EMERGENCY',
    name: 'Water Remediation',
    tagline: 'Rapid Response Restoration Matrix',
    description: '24/7 emergency response to dry and restore your home. We utilize heavy-duty extraction and dehydration systems to neutralize moisture and prevent long-term structural degradation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdaZyBWFS0BsIb7mAKhEX9Pm3izUX-CtnR0Nl1Vu7azPZOypws18wgwP-Nn16pMyGUcsj2_3A2kVQMeybRuO_M5U5TLP-nXzYVl_RgTX_StlKICvfeE6lG60XqC1Pd2E7JqnITfOkXoPljGPoHK0sgPq2Qyz8YBjaW6V9GqONlB-vEnzcbY7yvaqRyVa_qpnfC5TsYhtp_q2IJYaD9ITe2fxndPSyB4LgxeHIYjM5bu_y2tTFJyHwtrV31rNnqp8PmidJSPu6taTY',
    accentColor: 'border-blue-500 text-blue-400 focus:ring-blue-500',
    specs: [
      { label: 'Response Latency', value: '< 30 Minutes', progress: 99 },
      { label: 'Moisture Neutralization', value: '100% Efficiency', progress: 95 },
      { label: 'Dehydration Standard', value: 'ISO-RESTORE V2', progress: 90 }
    ],
    details: [
      {
        title: 'Industrial Extraction',
        description: 'High-volume fluid extraction units designed for rapid removal of standing water from residential and commercial foundations.'
      },
      {
        title: 'Insurance Coordination',
        description: 'Integrated administrative support to streamline remediation claims directly with major insurance registries.'
      }
    ]
  },
  {
    id: 'foundation',
    divisionCode: 'DIVISION 03 30 00',
    name: 'Foundation Repair',
    tagline: 'Structural Integrity & Soil Stabilization',
    description: 'Expert foundation leveling and crack repair tailored for volatile Texas soil. We deploy precision-calibrated leveling units to neutralize structural shifts and prevent masonry failure.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaXJF9yT4Xy7MVHmoq1ytLOSRxeWWhsU1hTIAdtCgnE9mADKb5BqFN_elz-fI-lAhvJSr_Ko-tgWRgxojHzKUqkXXnSHTLP_rP4AbtzOMkHy5KV3eApv2G3LikE9Ml7Ut3OtcQLoqWbFDQOMMaD_leNp7Att198gJY-Pck1RxYtG7tur1dUhI1PYcXb-Vu2mqnfAm_L1LByo5sw70KmI3YvGqY9VdqjKBubwOEzLHhTAAKiRHNRi6TbvqXx9jtpMUelo7IGEq--Qoj',
    accentColor: 'border-orange-500 text-orange-400 focus:ring-orange-500',
    specs: [
      { label: 'Core Compressive PSI', value: '8,500 High-Density', progress: 98 },
      { label: 'Shift Compensation', value: 'Millimetric Precision', progress: 96 },
      { label: 'Structural Resilience', value: 'Lifetime Transferable', progress: 94 }
    ],
    details: [
      {
        title: 'Deep-Pier Stabilization',
        description: 'Hydraulic driving of steel or concrete piers deep into stable strata to arrest vertical soil movement.'
      },
      {
        title: 'Crack Matrix Sealing',
        description: 'Injection of high-performance epoxy polymers into structural voids to restore monolithic integrity.'
      }
    ]
  },
  {
    id: 'remodeling',
    divisionCode: 'DIVISION 09 00 00',
    name: 'Full Home Remodeling',
    tagline: 'Complete Design-Build Transformations',
    description: 'Total kitchen, bathroom, and interior transformations. We synthesize architectural design with high-end finishing to reconstruct your living environment from the studs up.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk2K108nURfJKP1uHAvYWbgjg0B3FLT2-bQHYwypYoMI3gGlz7P1oOn-ohSpnqvULDQNBpGB07kUMyzGJWZsKJN3xxArxSY1LjIbaYriKkwOdiBb3l0yj95lQsM8VUFNkB0Ib8P53P_Cinjzascg4DS3aNYMlLQdCQrbwpzouZscWiQndR9Sd63Wm0NERlZnheg0t0SUJ4OCnjJFcrOtvfVywNGd1aEhUtUhkZp2kxuNbdnknGIm-U8FEArHIx_uhAnJ9p_4nPwAUG',
    accentColor: 'border-amber-400 text-amber-300 focus:ring-amber-300',
    specs: [
      { label: 'Build Quality Metric', value: 'Zero-Defect Standard', progress: 97 },
      { label: 'Aesthetic Alignment', value: 'Custom Specification', progress: 92 },
      { label: 'Project Throughput', value: 'Milestone Optimized', progress: 88 }
    ],
    details: [
      {
        title: 'Kitchen & Bath Matrix',
        description: 'Complete mechanical, electrical, and plumbing reconfiguration to support modern high-performance appliances and fixtures.'
      },
      {
        title: 'Structural Alterations',
        description: 'Removal of non-load bearing partitions and installation of structural beams to create expansive, open-concept nodes.'
      }
    ]
  },
  {
    id: 'painting',
    divisionCode: 'DIVISION 09 90 00',
    name: 'Painting & Drywall',
    tagline: 'Flawless Finishing & Color Envelopment',
    description: 'Professional interior and exterior painting with millimetric drywall finishing. We use high-pigment industrial coatings designed for longevity in the central Texas climate.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkhYvtjC-iCD2p0P8gMh4CSvUpS5_coNRPEIgh4tjtgDC7G5I7cClcSIHgWNBBQHDxVV5RBaPUMe1vbFhC46QG019oySa4-e_VhKLx4RQs00YXOHpO78fgRz_cU1pC3LrjAOTMcQbLaIZEzaHIynWnZNlqx-DEksjPNcWa0Q91TXb_gHTfX86Klj5-0YMZ1e0WMcG6JoszBOZ74LgFwuW6weE0Z_13wzYo1o3T7EM6FsWg8rxFK0SoG4YBA-mG2maHPtAcR6dfixBI',
    accentColor: 'border-slate-400 text-slate-300 focus:ring-slate-300',
    specs: [
      { label: 'Surface Preparation', value: 'Level 5 Smooth Finish', progress: 96 },
      { label: 'Coating Durability', value: 'High-Scrub Ceramic', progress: 90 },
      { label: 'UV Resilience', value: 'Texas Grade Shield', progress: 85 }
    ],
    details: [
      {
        title: 'Seamless Drywall Mesh',
        description: 'Multi-stage taping and sanding sequences ensuring undetectable transitions across expansive ceiling and wall planes.'
      },
      {
        title: 'Exterior Envelopment',
        description: 'Weather-resistant barrier coatings applied with airless spray precision to protect against high-heat oxidation.'
      }
    ]
  },
  {
    id: 'roofing',
    divisionCode: 'DIVISION 07 40 00',
    name: 'Roofing Services',
    tagline: 'High-Resilience Barrier Systems',
    description: 'Reliable roof repairs and full replacements using top-tier materials. Engineered to withstand high wind-uplift and localized thermal expansion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpCeep-lXIE_j6onkjP4zZ25PCF-PK6PsngVvUGbvxMbD7TP97wmB4fOc5pF20FQdYihl29MoMSvnmAOXMaQgihtrZwP9tuiuLuWmfTir74P9pe3eWitn27dYbhGQs682uadMpwGtml3dqRjpUOFNaWTByRIFq181JEwjt4mivgqOoEwjtuve_Z1SnS7-C7qgjMuMKi2mrZU7PaY-2R_r4qmcCBXwdzbMsUdpKVDop1YkM2L1JNSbUX1bME5dYKSxdpIDIEHPAI5YZ',
    accentColor: 'border-orange-600 text-orange-500 focus:ring-orange-500',
    specs: [
      { label: 'Wind Uplift Rating', value: '135 MPH Confirmed', progress: 94 },
      { label: 'Impact Resistance', value: 'Class 4 Shingle Spec', progress: 92 },
      { label: 'Thermal Refraction', value: 'Energy Star Compliant', progress: 88 }
    ],
    details: [
      {
        title: 'Heavy-Duty Decking',
        description: 'Reinforced substrate inspection and replacement to ensure structural load-bearing under heavy asphalt or metal arrays.'
      },
      {
        title: 'Vulnerability Patching',
        description: 'Precision flashing and boot replacements at all penetration nodes to eliminate liquid ingress vectors.'
      }
    ]
  },
  {
    id: 'flooring',
    divisionCode: 'DIVISION 09 30 00',
    name: 'Flooring & Tile',
    tagline: 'Custom Geometric Tile & Floor Matrices',
    description: 'Intricate tile work and custom flooring installations including hardwood and laminate. We focus on laser-level layouts and zero-tolerance joint alignment.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvGY9whEnTAB-_ldLCbceXqDPcYVuVnP4yjCS72PBDevrULpfBXKN5ov5nIoaSq3setURD3v0Yc-xD7OdWKpKjtn4XezWm-YC7F3wMN8yPC170-vEnaY8B0kpTUbUrcrRo_MteQksR7TLNna1PrOCgJoRE2ENJ-_w16-WkMogtNhYix-i5hsJ89D3Z_Cc68743pmTuZCce6hMbLlGeAwDKraqar0SQzw405PmEn4ZDXR0uEazOINITvr1lveSD0_gT7Bj5OxzoKUjv',
    accentColor: 'border-amber-600 text-amber-500 focus:ring-amber-500',
    specs: [
      { label: 'Layout Precision', value: '< 1.5mm Tolerance', progress: 97 },
      { label: 'Adhesive Bond Strength', value: 'Industrial Grade', progress: 95 },
      { label: 'Surface Friction (COF)', value: '> 0.75 Anti-Slip', progress: 90 }
    ],
    details: [
      {
        title: 'Precision Tile Matrix',
        description: 'Large-format and intricate mosaic tile installations utilizing multi-axis laser alignment for perfect geometric symmetry.'
      },
      {
        title: 'Hardwood Integration',
        description: 'Mechanically fastened or polymer-bonded hardwood floor sequences with custom-milled transition profiles.'
      }
    ]
  }
];

export const HUBS: HubLocation[] = [
  {
    id: 'leander-hq',
    name: 'Leander HQ Node',
    city: 'Leander',
    address: '1101 Halsey Drive, Leander, TX 78641',
    phone: '(512) 595-2332',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KOEuPjgbqkeB1k3qIl1ZsFi_ZLrRfwQZH1g05Y4fcZ_sso0Izwzwj7RgmcFJKpTFJmcFRB_x6WvL3egLRYD0MnRgcggAkgfLvfar1HvhR8fNJPvJylCsnHOpnRKj6Xc9FbSK94wD5Xlpai5yR-obNL_SfWIqkp9CzNUn-6R2MmkOhXce17-1ymoRe52mmhzE6JXi6kb5n352iMEkjADIXO00j0e4qvdy8kCI5coQOX4wB-sCnrfv8SOXUI6TQKSOk6jneNJWoi41',
    status: 'NOMINAL',
    coords: { x: 45, y: 55, lat: '30.5788Â° N', lng: '97.8531Â° W' },
    description: 'Our primary command center serving Leander, Cedar Park, and the North Austin metropolitan area. Specialized in rapid 24/7 water remediation and structural restoration.',
    staff: '12 Restoration Techs, 8 Master Carpenters',
    workloads: 'Active Local Pipeline: High'
  }
];

export const HOMEPAGE_WIDGETS = {
  polaroids: [
    {
      id: 'polar-1',
      title: 'Kitchen Remodel Matrix',
      label: 'INTERIOR RECONSTRUCTION (DIVISION 09)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe_2lJB5v59zKg-Ayahpov-3_-E3dKRADu17CthJDpTQjN6zT1M4bGUA9zB2C-VQzaPy2g-xg5lzEMgeyKs3-XaLyxVzxmM-eLVAGU3i61PfD_XujNIB-RSBNX9wQYnuSMq9XCFBjF5a_CdLB9eQSCU6ehp6hwwbic0sJUBBJk2CAZRJQG-BfgvduBFvX9Iz24XF3dKu6UptaDfVeAXhIUhKhSWq8tvm5-hPt8ZDy0uLvUmK8rcHSPxaPklNYy1LnQFh9XYvmz-Qg_',
      angle: -4
    },
    {
      id: 'polar-2',
      title: 'Structural Foundation Core',
      label: 'GEOTECHNICAL STABILIZATION (DIVISION 03)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaXJF9yT4Xy7MVHmoq1ytLOSRxeWWhsU1hTIAdtCgnE9mADKb5BqFN_elz-fI-lAhvJSr_Ko-tgWRgxojHzKUqkXXnSHTLP_rP4AbtzOMkHy5KV3eApv2G3LikE9Ml7Ut3OtcQLoqWbFDQOMMaD_leNp7Att198gJY-Pck1RxYtG7tur1dUhI1PYcXb-Vu2mqnfAm_L1LByo5sw70KmI3YvGqY9VdqjKBubwOEzLHhTAAKiRHNRi6TbvqXx9jtpMUelo7IGEq--Qoj',
      angle: 3
    }
  ],
  bento: {
    engineering: {
      title: 'Custom Remodeling',
      desc: 'Complete kitchen, bathroom, and full home structural transformations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Ke70gThLHNib-YYaAIU5FrnKe4DKqtHu8AkoXMGAi6RIjkfoZ_1dLAQrqlb56k5bYmCDmy1fHuuPFys8Ndrt209WzPohrpV82-BwYk-nuvZL7CmWymzlA5788ODrBrAoksEItrUiOG0wNAf_KPZgtKbwqy00NfAUni2S7PPPOgUKiDK8yBulHfdl8uBI42XNNx7RsmUsdPTrln_La3a08MlrrQ7W728R3HRlxUQW18l0OYajDEGeVpSHcjavGFhFWJ3EMdP9sP3_'
    },
    infrastructure: {
      title: 'Water Remediation',
      desc: '24/7 emergency response to dry and restore residential foundations.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdaZyBWFS0BsIb7mAKhEX9Pm3izUX-CtnR0Nl1Vu7azPZOypws18wgwP-Nn16pMyGUcsj2_3A2kVQMeybRuO_M5U5TLP-nXzYVl_RgTX_StlKICvfeE6lG60XqC1Pd2E7JqnITfOkXoPljGPoHK0sgPq2Qyz8YBjaW6V9GqONlB-vEnzcbY7yvaqRyVa_qpnfC5TsYhtp_q2IJYaD9ITe2fxndPSyB4LgxeHIYjM5bu_y2tTFJyHwtrV31rNnqp8PmidJSPu6taTY'
    },
    digitalTwins: {
      title: 'Technical Specs',
      desc: 'Precision leveling, thermal barrier painting, and Class 4 roofing standards.'
    }
  },
  globalCommandCenters: [
    { city: 'LEANDER', role: 'HQ & RESTORATION', lat: '30.5788Â° N', lng: '97.8531Â° W', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KOEuPjgbqkeB1k3qIl1ZsFi_ZLrRfwQZH1g05Y4fcZ_sso0Izwzwj7RgmcFJKpTFJmcFRB_x6WvL3egLRYD0MnRgcggAkgfLvfar1HvhR8fNJPvJylCsnHOpnRKj6Xc9FbSK94wD5Xlpai5yR-obNL_SfWIqkp9CzNUn-6R2MmkOhXce17-1ymoRe52mmhzE6JXi6kb5n352iMEkjADIXO00j0e4qvdy8kCI5coQOX4wB-sCnrfv8SOXUI6TQKSOk6jneNJWoi41' },
    { city: 'CEDAR PARK', role: 'REMODELING UNIT', lat: '30.5063Â° N', lng: '97.8297Â° W', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTfFUyzUhCfKCK8k7nXUxsZS5uY3hAZ2naBejHKt3JvFxjcwnjwlrH6TBZWWn_xTDWwFwXwaroFv18pQVL1IWH8AXuk0pfBiegvIGkhWcJNj8ekukKBTgKkZ4oswi1shRQMLOHrpN9UIGA1LxGLjDGoD34QgZ0yotTB1kAgNgB6q6QP7l3XHGHrNUxrptv5ZyDh7U4yZA3dYrSznIkxXECcEkFr61k06W3hvYg8nrQxaizvGIIkclGw4AG6lZjxA1-Q963OpZMktS2' },
    { city: 'NORTH AUSTIN', role: 'FOUNDATION SQUAD', lat: '30.3674Â° N', lng: '97.7333Â° W', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd9YL24IkSjArfIBAjh1stXRzZdmfnh86H660QPM2hDsJPnVBuwSWzEnRKyPskz9TMMHT2VS0hBaJDsEEU5E80DBYdvKpx1Z7DlH8HZ-xfabyCY2qcJP8SX076ZBi3WHv9482ZHTOu9cg4_Q6JF26NUgDCCYJT1sXMbh2vDmrlrf5haFqWKTjmpRfIY9QvK8GAaGgyT-MJh8uYbj6aa4rdo4CIlHLdc0yJNHctkMwXaHr85PO86LsflOYNE0lYxmAULWjkUYkZL758' }
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    location: "Leander, TX",
    quote: "Solid State saved us when our pipes burst. They were here in 30 minutes for the water remediation and handled everything with the insurance. Truly the best in Leander!"
  },
  {
    name: "James R.",
    location: "Crystal Falls",
    quote: "Extremely professional foundation repair. I was worried about the Texas soil shifts, but these guys explained the whole process and did a flawless job. Highly recommend."
  },
  {
    name: "Elena G.",
    location: "Cedar Park, TX",
    quote: "We used them for a full kitchen remodel and flooring. The attention to detail in the tile work is incredible. Our home looks brand new!"
  }
];

