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
  }
];

export const SERVICES: TechnicalService[] = [
  {
    id: 'water-remediation',
    divisionCode: 'PRIMARY SERVICE',
    name: 'Water Remediation',
    tagline: 'Rapid Response Restoration Matrix',
    description: '24/7 emergency response to dry and restore your home. We utilize heavy-duty extraction and dehydration systems to neutralize moisture and prevent long-term structural degradation.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdaZyBWFS0BsIb7mAKhEX9Pm3izUX-CtnR0Nl1Vu7azPZOypws18wgwP-Nn16pMyGUcsj2_3A2kVQMeybRuO_M5U5TLP-nXzYVl_RgTX_StlKICvfeE6lG60XqC1Pd2E7JqnITfOkXoPljGPoHK0sgPq2Qyz8YBjaW6V9GqONlB-vEnzcbY7yvaqRyVa_qpnfC5TsYhtp_q2IJYaD9ITe2fxndPSyB4LgxeHIYjM5bu_y2tTFJyHwtrV31rNnqp8PmidJSPu6taTY',
    accentColor: 'border-emerald-500 text-emerald-400 focus:ring-emerald-500',
    specs: [
      { label: 'Response Latency', value: '< 30 Minutes', progress: 99 },
      { label: 'Moisture Neutralization', value: '100% Efficiency', progress: 95 },
      { label: 'Recovery Rate', value: 'Rapid Dehydration', progress: 90 }
    ],
    details: [
      {
        title: 'Industrial Extraction',
        description: 'High-volume fluid extraction units designed for rapid removal of standing water from foundations.'
      },
      {
        title: 'Insurance Coordination',
        description: 'We handle the paperwork and coordinate directly with your insurance provider.'
      }
    ]
  },
  {
    id: 'roofing',
    divisionCode: 'DIVISION 07',
    name: 'Roofing Services',
    tagline: 'High-Resilience Barrier Systems',
    description: 'Reliable roof repairs and full replacements using top-tier materials. Engineered to withstand high wind-uplift and localized thermal expansion.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpCeep-lXIE_j6onkjP4zZ25PCF-PK6PsngVvUGbvxMbD7TP97wmB4fOc5pF20FQdYihl29MoMSvnmAOXMaQgihtrZwP9tuiuLuWmfTir74P9pe3eWitn27dYbhGQs682uadMpwGtml3dqRjpUOFNaWTByRIFq181JEwjt4mivgqOoEwjtuve_Z1SnS7-C7qgjMuMKi2mrZU7PaY-2R_r4qmcCBXwdzbMsUdpKVDop1YkM2L1JNSbUX1bME5dYKSxdpIDIEHPAI5YZ',
    accentColor: 'border-emerald-600 text-emerald-500 focus:ring-emerald-500',
    specs: [
      { label: 'Wind Uplift Rating', value: '135 MPH Confirmed', progress: 94 },
      { label: 'Impact Resistance', value: 'Class 4 Shingle Spec', progress: 92 },
      { label: 'Thermal Refraction', value: 'Energy Star Compliant', progress: 88 }
    ],
    details: [
      {
        title: 'Expert Installation',
        description: 'Full roof replacements with high-durability shingles or metal panels.'
      },
      {
        title: 'Leak Prevention',
        description: 'Precision flashing and boot replacements at all critical nodes.'
      }
    ]
  },
  {
    id: 'concrete',
    divisionCode: 'DIVISION 03',
    name: 'Concrete & Foundation',
    tagline: 'Structural Integrity & Stabilization',
    description: 'Expert foundation leveling and concrete repair tailored for volatile Texas soil. We deploy precision leveling units to neutralize structural shifts and prevent masonry failure.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaXJF9yT4Xy7MVHmoq1ytLOSRxeWWhsU1hTIAdtCgnE9mADKb5BqFN_elz-fI-lAhvJSr_Ko-tgWRgxojHzKUqkXXnSHTLP_rP4AbtzOMkHy5KV3eApv2G3LikE9Ml7Ut3OtcQLoqWbFDQOMMaD_leNp7Att198gJY-Pck1RxYtG7tur1dUhI1PYcXb-Vu2mqnfAm_L1LByo5sw70KmI3YvGqY9VdqjKBubwOEzLHhTAAKiRHNRi6TbvqXx9jtpMUelo7IGEq--Qoj',
    accentColor: 'border-emerald-500 text-emerald-400 focus:ring-emerald-500',
    specs: [
      { label: 'Compressive Strength', value: '8,500 PSI High-Density', progress: 98 },
      { label: 'Shift Compensation', value: 'Millimetric Precision', progress: 96 },
      { label: 'Structural Durability', value: 'Lifetime Guarantee', progress: 94 }
    ],
    details: [
      {
        title: 'Foundation Leveling',
        description: 'Hydraulic driving of steel or concrete piers deep into stable strata for permanent structural stability.'
      },
      {
        title: 'Concrete Repair',
        description: 'Injection of high-performance polymers into structural voids to restore monolithic integrity.'
      }
    ]
  },
  {
    id: 'plumbing',
    divisionCode: 'SPECIALIZED',
    name: 'Concrete Plumbing',
    tagline: 'Structural Hydraulic Networks',
    description: 'Specialized hydraulic plumbing solutions integrated into concrete foundations. We handle the complex infrastructure underneath your slabs to ensure zero-leak integrity.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvGY9whEnTAB-_ldLCbceXqDPcYVuVnP4yjCS72PBDevrULpfBXKN5ov5nIoaSq3setURD3v0Yc-xD7OdWKpKjtn4XezWm-YC7F3wMN8yPC170-vEnaY8B0kpTUbUrcrRo_MteQksR7TLNna1PrOCgJoRE2ENJ-_w16-WkMogtNhYix-i5hsJ89D3Z_Cc68743pmTuZCce6hMbLlGeAwDKraqar0SQzw405PmEn4ZDXR0uEazOINITvr1lveSD0_gT7Bj5OxzoKUjv',
    accentColor: 'border-emerald-600 text-emerald-500 focus:ring-emerald-500',
    specs: [
      { label: 'Pressure Rating', value: 'Industrial Strength', progress: 97 },
      { label: 'Joint Integrity', value: 'Zero-Tolerance Leak Spec', progress: 95 },
      { label: 'Flow Efficiency', value: 'High Performance', progress: 90 }
    ],
    details: [
      {
        title: 'Foundation Pumping',
        description: 'Integrated plumbing networks designed specifically for heavy-duty structural concrete slabs.'
      },
      {
        title: 'Under-Slab Drainage',
        description: 'Critical drainage systems to prevent water pooling and foundation erosion.'
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
    coords: { x: 45, y: 55, lat: '30.5788', lng: '-97.8531' },
    description: 'Our primary command center serving Leander, Cedar Park, and the North Austin metropolitan area. Specialized in rapid 24/7 water remediation and structural restoration.',
    staff: '12 Technicians, 8 Specialists',
    workloads: 'Active Local Pipeline: High'
  }
];

export const HOMEPAGE_WIDGETS = {
  polaroids: [
    {
      id: 'polar-1',
      title: 'Structural Plumbing',
      label: 'HYDRAULIC NETWORKS',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvGY9whEnTAB-_ldLCbceXqDPcYVuVnP4yjCS72PBDevrULpfBXKN5ov5nIoaSq3setURD3v0Yc-xD7OdWKpKjtn4XezWm-YC7F3wMN8yPC170-vEnaY8B0kpTUbUrcrRo_MteQksR7TLNna1PrOCgJoRE2ENJ-_w16-WkMogtNhYix-i5hsJ89D3Z_Cc68743pmTuZCce6hMbLlGeAwDKraqar0SQzw405PmEn4ZDXR0uEazOINITvr1lveSD0_gT7Bj5OxzoKUjv',
      angle: -4
    },
    {
      id: 'polar-2',
      title: 'Water Restoration Core',
      label: '24/7 EMERGENCY RECOVERY',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdaZyBWFS0BsIb7mAKhEX9Pm3izUX-CtnR0Nl1Vu7azPZOypws18wgwP-Nn16pMyGUcsj2_3A2kVQMeybRuO_M5U5TLP-nXzYVl_RgTX_StlKICvfeE6lG60XqC1Pd2E7JqnITfOkXoPljGPoHK0sgPq2Qyz8YBjaW6V9GqONlB-vEnzcbY7yvaqRyVa_qpnfC5TsYhtp_q2IJYaD9ITe2fxndPSyB4LgxeHIYjM5bu_y2tTFJyHwtrV31rNnqp8PmidJSPu6taTY',
      angle: 3
    }
  ],
  bento: {
    engineering: {
      title: 'Water Remediation',
      desc: '24/7 rapid response for water damage and structural drying.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdaZyBWFS0BsIb7mAKhEX9Pm3izUX-CtnR0Nl1Vu7azPZOypws18wgwP-Nn16pMyGUcsj2_3A2kVQMeybRuO_M5U5TLP-nXzYVl_RgTX_StlKICvfeE6lG60XqC1Pd2E7JqnITfOkXoPljGPoHK0sgPq2Qyz8YBjaW6V9GqONlB-vEnzcbY7yvaqRyVa_qpnfC5TsYhtp_q2IJYaD9ITe2fxndPSyB4LgxeHIYjM5bu_y2tTFJyHwtrV31rNnqp8PmidJSPu6taTY'
    },
    infrastructure: {
      title: 'Roofing Services',
      desc: 'Reliable roof repairs and full replacements.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpCeep-lXIE_j6onkjP4zZ25PCF-PK6PsngVvUGbvxMbD7TP97wmB4fOc5pF20FQdYihl29MoMSvnmAOXMaQgihtrZwP9tuiuLuWmfTir74P9pe3eWitn27dYbhGQs682uadMpwGtml3dqRjpUOFNaWTByRIFq181JEwjt4mivgqOoEwjtuve_Z1SnS7-C7qgjMuMKi2mrZU7PaY-2R_r4qmcCBXwdzbMsUdpKVDop1YkM2L1JNSbUX1bME5dYKSxdpIDIEHPAI5YZ'
    },
    digitalTwins: {
      title: 'Concrete & Plumbing',
      desc: 'Foundation repair and specialized concrete plumbing.'
    }
  },
  globalCommandCenters: [
    { city: 'LEANDER', role: 'HQ & RESTORATION', lat: '30.5788', lng: '-97.8531', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KOEuPjgbqkeB1k3qIl1ZsFi_ZLrRfwQZH1g05Y4fcZ_sso0Izwzwj7RgmcFJKpTFJmcFRB_x6WvL3egLRYD0MnRgcggAkgfLvfar1HvhR8fNJPvJylCsnHOpnRKj6Xc9FbSK94wD5Xlpai5yR-obNL_SfWIqkp9CzNUn-6R2MmkOhXce17-1ymoRe52mmhzE6JXi6kb5n352iMEkjADIXO00j0e4qvdy8kCI5coQOX4wB-sCnrfv8SOXUI6TQKSOk6jneNJWoi41' }
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
  }
];
