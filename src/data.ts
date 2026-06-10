import { Project, TechnicalService, HubLocation } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'nexus-industrial-hub',
    title: 'Nexus Industrial Hub',
    type: 'industrial',
    status: 'In Progress',
    location: 'Chicago, IL',
    specs: {
      loadCapacity: '850,000 lbs',
      completion: '82% Completed',
      efficiency: '94.2% System standard',
    },
    description: 'An advanced multi-tier industrial complex emphasizing modular manufacturing floors, high-capacity structural load frames, and integrated thermal-insulating roof systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCk2K108nURfJKP1uHAvYWbgjg0B3FLT2-bQHYwypYoMI3gGlz7P1oOn-ohSpnqvULDQNBpGB07kUMyzGJWZsKJN3xxArxSY1LjIbaYriKkwOdiBb3l0yj95lQsM8VUFNkB0Ib8P53P_Cinjzascg4DS3aNYMlLQdCQrbwpzouZscWiQndR9Sd63Wm0NERlZnheg0t0SUJ4OCnjJFcrOtvfVywNGd1aEhUtUhkZp2kxuNbdnknGIm-U8FEArHIx_uhAnJ9p_4nPwAUG',
    blueprintCode: 'BLU-NEX-019',
    engineer: 'H. Vance, Lead Struct'
  },
  {
    id: 'vertex-corporate-center',
    title: 'Vertex Corporate Center',
    type: 'commercial',
    status: 'Completed',
    location: 'New York, NY',
    specs: {
      loadCapacity: '400,000 lbs',
      completion: '100% (Dec 2025)',
      efficiency: '91.8% HVAC Rating',
    },
    description: 'Corporate headquarters showcasing custom exposed steel structural elements, seismic-resilient engineering foundations, and energy-conscious architectural tappings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAkhYvtjC-iCD2p0P8gMh4CSvUpS5_coNRPEIgh4tjtgDC7G5I7cClcSIHgWNBBQHDxVV5RBaPUMe1vbFhC46QG019oySa4-e_VhKLx4RQs00YXOHpO78fgRz_cU1pC3LrjAOTMcQbLaIZEzaHIynWnZNlqx-DEksjPNcWa0Q91TXb_gHTfX86Klj5-0YMZ1e0WMcG6JoszBOZ74LgFwuW6weE0Z_13wzYo1o3T7EM6FsWg8rxFK0SoG4YBA-mG2maHPtAcR6dfixBI',
    blueprintCode: 'BLU-VTX-082',
    engineer: 'A. Chen, Principal Architect'
  },
  {
    id: 'meridian-span-bridge',
    title: 'Meridian Span Bridge',
    type: 'infrastructure',
    status: 'Completed',
    location: 'London, UK',
    specs: {
      loadCapacity: '2,400,000 lbs',
      completion: '100% (Nov 2025)',
      efficiency: '98.9% Traffic Flow',
    },
    description: 'A revolutionary cable-stayed infrastructure pipeline designed for maximum wind loading resilience and state-of-the-art telemetry control systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrKF-n1gPENvONYxfrFJXeBkT-srYBnMqvZOtQKm_-LRdWCtfHuqJ4Z2oamWpVRPHcWtA5ffGb__wtxb2enPp0ufknbagoDL3B3U8KQ1xuuLC5NqW1bkN-N1vdFawwcqj8KXQjvkMptKANUOnxXpu51MH0hl-XCunBsPnkHdy0OJgK7Q349Q7w6iGQYigkbkTq0Ux7siYA0oFpFYwvuSMK377SXBDY01crbD6l8qcGkCS1qC6awgCpDGc6hHrp3XUqVSyR6f3lrQYs',
    blueprintCode: 'BLU-MER-441',
    engineer: 'S. Rodriguez, Struct. Associate'
  },
  {
    id: 'the-zenith-tower',
    title: 'The Zenith Tower',
    type: 'commercial',
    status: 'In Progress',
    location: 'Dubai, UAE',
    specs: {
      loadCapacity: '1,200,000 lbs',
      completion: '48% Completed',
      efficiency: '97.5% Material Optim',
    },
    description: 'Super-tall commercial office framing under construction, employing ultra-high-performance steel girders and automated concrete placement techniques.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCW065z8keKFk6T3xYY4vWSI_XJpb-mzQEDxffmzrRb38KeesaDEqdmlo59ZGtlGn3tGKUDryUCtzSizCwJaVB5VKRFuEDoOQWYr2VmAg3Qu1DYJqrayjV4tN4nK4UEkNES6iD87WTWM9R8fre9vr1sZmqmLHznycrjfHIPOduz0Pfim484FN0K-PGPYGD3PXj6gnwKdEPtx5vzsu3tp-6oY5ipFzpTu_mxaVeonArOnIVSmG32vLk3D50oTeijO_118-9hjDNdBkAc',
    blueprintCode: 'BLU-ZEN-901',
    engineer: 'K. Al-Mansoori, High-Rise Civ'
  },
  {
    id: 'helios-power-station',
    title: 'Helios Power Station',
    type: 'industrial',
    status: 'Completed',
    location: 'Nevada Desert, US',
    specs: {
      loadCapacity: '950,000 lbs',
      completion: '100% (Jan 2026)',
      efficiency: '99.1% Optomechanical',
    },
    description: 'A multi-acre concentrator green energy node requiring specialized foundation vibration dampening and precision mechanical framing panels.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGsLn4EpIZQSDF2VjoL-qwlJpxYyPbu4cDrgZLYrT-gOQ3X9XZnDD9pCWB6TvuTdPwMNKR_Dk_A27vL5sxtagAV3_15p7oADtoWt9AhILdFoE4TKAa8cH6XoPXkKheGjJae5RH9G24Myn-Iscl8e0J6qgPGpi7PXg0Hb9u3IyaK9AvtHx67z5TS_ddj2pcHndSaXI6PHaq_3yk2Vsy0BvfjndwDwBg9-iPDZ8qxegU3K6vaxTcUm8IxAAi8FokolmShwXUFG8-I-30',
    blueprintCode: 'BLU-HEL-102',
    engineer: 'E. Kepler, Energy Core'
  },
  {
    id: 'prism-data-vault',
    title: 'Prism Data Vault',
    type: 'industrial',
    status: 'Completed',
    location: 'Singapore Hub',
    specs: {
      loadCapacity: '600,000 lbs',
      completion: '100% (Feb 2026)',
      efficiency: '99.99% Thermal Sink',
    },
    description: 'Deep-security subterranean server facility leveraging dual-redundant structural concrete ceilings and custom overhead utility plumbing galleries.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf53lcEuX_ayF7HG2lUJkiYLNOAb6W6xI-NLsKVbD2irQA-0jKaTO2WsVEqt7bl5gr5YE58IODDphXg8jNdrvaZE3Ce7qUOD4QDNq9J0qrpBF-E_V7c0jYCUIpFf754607Iyd-GwZnEE_O9lImZBKz14dpy9ui4YrfGI_QOZvg5XnY6FN6SjlLzqUFcGSoHe20PHGiYj46VDCH-xQZ1Se-lIZOQGW1t21Svel-6lAAP5IYEsQYGQZwSbzs41AR1WMwIXvyocZc3spi',
    blueprintCode: 'BLU-PRM-849',
    engineer: 'L. Teo, Systems Infrastruct'
  }
];

export const SERVICES: TechnicalService[] = [
  {
    id: 'roofing',
    divisionCode: 'DIVISION 07 40 00',
    name: 'Advanced Roofing Systems',
    tagline: 'Thermo-Modular Overlap Framing',
    description: 'Thermal insulation metal decking utilizing layered membrane barrier systems. Built with deep resistance to high structural wind shear loads and severe weather events.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpCeep-lXIE_j6onkjP4zZ25PCF-PK6PsngVvUGbvxMbD7TP97wmB4fOc5pF20FQdYihl29MoMSvnmAOXMaQgihtrZwP9tuiuLuWmfTir74P9pe3eWitn27dYbhGQs682uadMpwGtml3dqRjpUOFNaWTByRIFq181JEwjt4mivgqOoEwjtuve_Z1SnS7-C7qgjMuMKi2mrZU7PaY-2R_r4qmcCBXwdzbMsUdpKVDop1YkM2L1JNSbUX1bME5dYKSxdpIDIEHPAI5YZ',
    accentColor: 'border-orange-500 text-orange-400 focus:ring-orange-500',
    specs: [
      { label: 'Wind Lift Load Capacity', value: '145 MPH Rated', progress: 95 },
      { label: 'R-Value Thermal Index', value: 'R-48 Dense Barrier', progress: 90 },
      { label: 'Corrosion Shielding Index', value: 'Kynar 500 Coated', progress: 85 }
    ],
    details: [
      {
        title: 'Thermal Decking Insulation',
        description: 'Multi-layer Polyisocyanurate insulation core integrated into precision-engineered cold-rolled corrugated structural steel platforms.'
      },
      {
        title: 'Elasticized Edge Anchor systems',
        description: 'Patented perimeter structural flashing profiles that eliminate standard peeling degradation points under horizontal wind streams.'
      }
    ]
  },
  {
    id: 'foundation',
    divisionCode: 'DIVISION 03 30 00',
    name: 'Structural Foundation & Cast',
    tagline: 'Laser-Guided Heavy Geotechnical Integration',
    description: 'Monolithic concrete structural slabs reinforced with continuous multi-rod tension structures. Engineered to neutralize soil seismic anomalies and redistribute localized weight.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaXJF9yT4Xy7MVHmoq1ytLOSRxeWWhsU1hTIAdtCgnE9mADKb5BqFN_elz-fI-lAhvJSr_Ko-tgWRgxojHzKUqkXXnSHTLP_rP4AbtzOMkHy5KV3eApv2G3LikE9Ml7Ut3OtcQLoqWbFDQOMMaD_leNp7Att198gJY-Pck1RxYtG7tur1dUhI1PYcXb-Vu2mqnfAm_L1LByo5sw70KmI3YvGqY9VdqjKBubwOEzLHhTAAKiRHNRi6TbvqXx9jtpMUelo7IGEq--Qoj',
    accentColor: 'border-slate-500 text-slate-400 focus:ring-slate-500',
    specs: [
      { label: 'Compressive Load Standard', value: '8,500 PSI High-Core', progress: 98 },
      { label: 'Geo-Anchor Integration Range', value: '85 Feet Bedrock', progress: 80 },
      { label: 'Laser Levelling Plane Margin', value: '< 2.4 Millimeters', progress: 96 }
    ],
    details: [
      {
        title: 'High-Density Composite Casting',
        description: 'Self-consolidating ultra-high-density micro-silica concrete mix design delivering robust freeze-thaw and chemical resistance.'
      },
      {
        title: 'Bedrock Geo-Piles',
        description: 'Pre-stressed high-tensile steel structural cylindrical casing elements sunk deep back into geological horizons.'
      }
    ]
  },
  {
    id: 'plumbing',
    divisionCode: 'DIVISION 22 00 00',
    name: 'Industrial Plumbing Systems',
    tagline: 'Hydraulic Networks with Automated Shutoffs',
    description: 'Central distribution pipe frameworks constructed of heavy gauge stainless alloy or chemically stabilized polymer chains. Fitted with remote electronic actuators and backflow regulators.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK0B7IARGQyeximCJ3QQUsWyiXfKJqR244eQn5j1SH_8l-Te-SER2usKeO4P5AFy34p34GfFXsZhMoYROqT0h9Bt2-FecSnsNTRXxHKSpNvtt_zA3p7KxNWwQHVMPTtLO0nBGwNTuj4tWwvXlxmOMzr-MVYlpJLwzjKksdGv5uxuQffbdVgFLZ4AUyMDHzY5tnpk64qYkwuqFLpjE6QnyoXn_nKXmmcvd_n5mFNBi4FqEOljsmJSeqPYdOtRwCY6IW6fEcQmxJLIlI',
    accentColor: 'border-blue-500 text-blue-400 focus:ring-blue-500',
    specs: [
      { label: 'Peak Hydraulic Capacity', value: '3,200 GPM Continuous', progress: 92 },
      { label: 'Pressure Resilience Standard', value: '450 PSI Max Threshold', progress: 88 },
      { label: 'Automated Shutdown Response', value: '< 180ms Diagnostic', progress: 99 }
    ],
    details: [
      {
        title: 'High-Velocity Manifold Matrix',
        description: 'Vibration-isolated alloy conduit matrices designed to distribute fluid stress perfectly with minimal frictional turbulence losses.'
      },
      {
        title: 'Remote Diagnostics Panel',
        description: 'A comprehensive sensor array relaying thermal, velocity, and particulate saturation logs directly to master facility dashboards.'
      }
    ]
  },
  {
    id: 'tiling',
    divisionCode: 'DIVISION 09 30 00',
    name: 'Precision Finishing & Tile',
    tagline: 'Micro-Grout Laser Geometric Layouts',
    description: 'Heavy duty, acid-resistant industrial ceramic composite matrices designed for cleanrooms, loading terminals, and high-spec corporate lobbies.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvGY9whEnTAB-_ldLCbceXqDPcYVuVnP4yjCS72PBDevrULpfBXKN5ov5nIoaSq3setURD3v0Yc-xD7OdWKpKjtn4XezWm-YC7F3wMN8yPC170-vEnaY8B0kpTUbUrcrRo_MteQksR7TLNna1PrOCgJoRE2ENJ-_w16-WkMogtNhYix-i5hsJ89D3Z_Cc68743pmTuZCce6hMbLlGeAwDKraqar0SQzw405PmEn4ZDXR0uEazOINITvr1lveSD0_gT7Bj5OxzoKUjv',
    accentColor: 'border-amber-600 text-amber-500 focus:ring-amber-500',
    specs: [
      { label: 'Surface Friction Rating (COF)', value: '> 0.82 High Slip-Res', progress: 94 },
      { label: 'Thermal Fracture Stability', value: 'Up to 320Â°F Sudden', progress: 82 },
      { label: 'Joint Tolerance Margin', value: '< 1.0 Millimeter Laser', progress: 97 }
    ],
    details: [
      {
        title: 'Geometric Hex Tiling Options',
        description: 'Tessellating hexagonal high-density basalt configurations designed to arrest linear surface shear stresses on busy forklift routes.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbnIYI6ZjCtgl_lCw2svmMXG5YmgES7la9aMNB5NxjlrgRSUYFltyk8ZUNmIEYqnmTpfEUI3L09E_CjTnEkyW5miU0D5C9X3cTtAPUbJFsAsKc8kfVZnfw8rnCepvcPhBZbihoHXBd7R7w7SNpOxfTHxHDwQcAVS439xb9iqJ3cOiT-TQwUFeSNof_SVqg4IzEJYT4RGHPvmnpunQ0sxxuBFiD7Y4bERRGoJAEc-qXnIFRo1BmcZUVU6woCCpjyV_w8HAfWHBod3Ae'
      },
      {
        title: 'Micro-Grout Line Technology',
        description: 'Flexible epoxy grouting formulated to deflect mechanical loads back into solid porcelain centers, avoiding edge chipping.'
      }
    ]
  }
];

export const HUBS: HubLocation[] = [
  {
    id: 'ny-hub',
    name: 'New York Command',
    city: 'New York',
    address: '420 Hudson Street, Floor 11, NY 10014',
    phone: '+1 (212) 555-0182',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3KOEuPjgbqkeB1k3qIl1ZsFi_ZLrRfwQZH1g05Y4fcZ_sso0Izwzwj7RgmcFJKpTFJmcFRB_x6WvL3egLRYD0MnRgcggAkgfLvfar1HvhR8fNJPvJylCsnHOpnRKj6Xc9FbSK94wD5Xlpai5yR-obNL_SfWIqkp9CzNUn-6R2MmkOhXce17-1ymoRe52mmhzE6JXi6kb5n352iMEkjADIXO00j0e4qvdy8kCI5coQOX4wB-sCnrfv8SOXUI6TQKSOk6jneNJWoi41',
    status: 'NOMINAL',
    coords: { x: 34, y: 46, lat: '40.7282Â° N', lng: '74.0083Â° W' },
    description: 'Serves as our primary structural engineering nexus, utilizing cloud-coordinated structural modelling tools to feed instant blueprint parameters worldwide.',
    staff: '45 Structural Engineers, 12 BIM Coordinators',
    workloads: '8 Active Large Scale Projects'
  },
  {
    id: 'chicago-hub',
    name: 'Chicago Heavy Unit',
    city: 'Chicago',
    address: '1000 W Madison St, Central Loop, IL 60607',
    phone: '+1 (312) 555-3391',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK7XNdTbq6wcIkfEeDZaV1crCV7LdBCKYYGcBi8Eu5Ey4Ysp3SuRiTfi049TkIgrlqEFIneDIH6_6ibgrTSM_S0OOW6gWc7JjhgyJZ9_8opMgKPtd8zZHW4pqxJHMqI8Wn43f8ETnxy-ZqsafWdQxDPHplK-ZjSa6-zHWOuWCqvWXkU-V6V4ONzTFEZlWgofbKHx0rlr7c6zNAotFwLdFiWz1-7MzrLP_gpb55NGx5SatOKwFkCjnEOfqPCH6V0ZWEGi5ZMuVWOQy2',
    status: 'NOMINAL',
    coords: { x: 26, y: 39, lat: '41.8821Â° N', lng: '87.6510Â° W' },
    description: 'Our primary design yard focusing on high-rise stability elements, laser-guided geo-cast foundation research and physical stress testing arrays.',
    staff: '38 Materials Experts, 15 Geotechnicians',
    workloads: '11 Active Fab Pipelines'
  },
  {
    id: 'london-hub',
    name: 'London District',
    city: 'London',
    address: '88 Wood Street, Barbican, London EC2V 7QT',
    phone: '+44 (0) 20 7555 4401',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL9Z8HWwwrbJRCftvyWkjmUETZNzda3hBD7VPCLkwOa5iBb0C4emNt8VLU5yEmf41q314r0ESmsiMKV-Mr_yp4sVkuxd0YMAGy5TCKxpy4UBVJlxAxOhpw1Ufh228fT-BPSZwJwTALfla_fZ0k5A4nd9JJK74KKAUQsVYFY2HjNePATgOJdZ6JwPGGWgfmTGcvo1-cdsZEMFukUEuMgfKVpozkqhRxl7ItoWLLvVEHI14isDx2zEw5PRJFJ1I2j_PtoZSDjl12ChQL',
    status: 'NOMINAL',
    coords: { x: 52, y: 30, lat: '51.5173Â° N', lng: '0.0931Â° W' },
    description: 'European command facility blending classical infrastructure modernizations with modern high-efficiency steel modular envelope attachments.',
    staff: '30 Infrastructure Specialists, 8 Legal BIM Associates',
    workloads: '6 Active Trans-Canal projects'
  },
  {
    id: 'dubai-hub',
    name: 'Dubai Tower Spec',
    city: 'Dubai',
    address: 'Al Souq Al Kabeer, Burj District, Dubai',
    phone: '+971 4 555 9012',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqQNcJWRkOvtCyir89Y_A9bGR4_pupvDOPjK4Vg-cL4a1qnNIu9PeVzaGYkeqr432boZjemiYXCe5HeCXlYOTX2xiYf_f_7Qx_E9aMELD0uKeP9mEub7Y2rldvYVzrL_ZK8cGAYdplZBCKeyoJ2dSCqLDj81oZOkH2ywIGwSeTDVTqmTimjnzfi1NYrIbaVu0Glauw9jDhAnZShmSgHy4HaibwPdTHgEt7Ps6GjQkUB6HiE9B8OT_xqYJRyazdVhaFvOyqeXUnBU06',
    status: 'STANDBY',
    coords: { x: 74, y: 62, lat: '25.2048Â° N', lng: '55.2708Â° E' },
    description: 'Dedicated studio for super-tall buildings, solar collectors, thermal-shielding glass panels, and seismic micro-grouting layout calculations.',
    staff: '52 High-Rise Engineers, 14 Solar Energetic Spec',
    workloads: '5 Skyscraper Blueprints Active'
  }
];

export const HOMEPAGE_WIDGETS = {
  polaroids: [
    {
      id: 'polar-1',
      title: 'Vertex Corporate Hub',
      label: 'EXPOSED STRUCTURAL FRAMEWORK (DIVISION 05)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAe_2lJB5v59zKg-Ayahpov-3_-E3dKRADu17CthJDpTQjN6zT1M4bGUA9zB2C-VQzaPy2g-xg5lzEMgeyKs3-XaLyxVzxmM-eLVAGU3i61PfD_XujNIB-RSBNX9wQYnuSMq9XCFBjF5a_CdLB9eQSCU6ehp6hwwbic0sJUBBJk2CAZRJQG-BfgvduBFvX9Iz24XF3dKu6UptaDfVeAXhIUhKhSWq8tvm5-hPt8ZDy0uLvUmK8rcHSPxaPklNYy1LnQFh9XYvmz-Qg_',
      angle: -4
    },
    {
      id: 'polar-2',
      title: 'Neo-Forge Plant',
      label: 'HYDRAULIC TEMPERATURE MATRIX (DIVISION 22)',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOdaZyBWFS0BsIb7mAKhEX9Pm3izUX-CtnR0Nl1Vu7azPZOypws18wgwP-Nn16pMyGUcsj2_3A2kVQMeybRuO_M5U5TLP-nXzYVl_RgTX_StlKICvfeE6lG60XqC1Pd2E7JqnITfOkXoPljGPoHK0sgPq2Qyz8YBjaW6V9GqONlB-vEnzcbY7yvaqRyVa_qpnfC5TsYhtp_q2IJYaD9ITe2fxndPSyB4LgxeHIYjM5bu_y2tTFJyHwtrV31rNnqp8PmidJSPu6taTY',
      angle: 3
    }
  ],
  bento: {
    engineering: {
      title: 'Architectural Engineering',
      desc: 'BIM modeling, structural structural evaluation, load integrity calculation.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Ke70gThLHNib-YYaAIU5FrnKe4DKqtHu8AkoXMGAi6RIjkfoZ_1dLAQrqlb56k5bYmCDmy1fHuuPFys8Ndrt209WzPohrpV82-BwYk-nuvZL7CmWymzlA5788ODrBrAoksEItrUiOG0wNAf_KPZgtKbwqy00NfAUni2S7PPPOgUKiDK8yBulHfdl8uBI42XNNx7RsmUsdPTrln_La3a08MlrrQ7W728R3HRlxUQW18l0OYajDEGeVpSHcjavGFhFWJ3EMdP9sP3_'
    },
    infrastructure: {
      title: 'Future-Proof Infrastructure',
      desc: 'High-resilience logistics, transportation span bridges, green grids.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCYwNdMd6iKc_WNDhnV0lqEEsFfFs7pFHlC_-HO_YU0ULwg-nAmwm15-eS9KCEKOGL48FQAalFHNvyM8A1v6VfeovKOjeB1sdecBTUHEwuLw9RQpmjSD6TozkxTkqA9ajESBIrqd35DptiLsGc_aF1YHY6QBkqB5vJz3DnYGnWxAIj7IkzV526957PpjiMtXy8RXGUojX7cl09N67IjF-ouSxWsGxWcKvfxikjpv80jqjxzZ1GB8-S1TBn4ewruweqmlnql4lF_M2wn'
    },
    digitalTwins: {
      title: 'Digital Twins',
      desc: 'Telemetry tracking, structural strain mapping, real-time diagnostic feeds.'
    }
  },
  globalCommandCenters: [
    { city: 'CHICAGO', role: 'HEAVY FAB & DESIGN', lat: '41.8821Â° N', lng: '87.6510Â° W', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK7XNdTbq6wcIkfEeDZaV1crCV7LdBCKYYGcBi8Eu5Ey4Ysp3SuRiTfi049TkIgrlqEFIneDIH6_6ibgrTSM_S0OOW6gWc7JjhgyJZ9_8opMgKPtd8zZHW4pqxJHMqI8Wn43f8ETnxy-ZqsafWdQxDPHplK-ZjSa6-zHWOuWCqvWXkU-V6V4ONzTFEZlWgofbKHx0rlr7c6zNAotFwLdFiWz1-7MzrLP_gpb55NGx5SatOKwFkCjnEOfqPCH6V0ZWEGi5ZMuVWOQy2' },
    { city: 'LONDON', role: 'INFRASTRUCTURE NEXUS', lat: '51.5074Â° N', lng: '0.1278Â° W', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTfFUyzUhCfKCK8k7nXUxsZS5uY3hAZ2naBejHKt3JvFxjcwnjwlrH6TBZWWn_xTDWwFwXwaroFv18pQVL1IWH8AXuk0pfBiegvIGkhWcJNj8ekukKBTgKkZ4oswi1shRQMLOHrpN9UIGA1LxGLjDGoD34QgZ0yotTB1kAgNgB6q6QP7l3XHGHrNUxrptv5ZyDh7U4yZA3dYrSznIkxXECcEkFr61k06W3hvYg8nrQxaizvGIIkclGw4AG6lZjxA1-Q963OpZMktS2' },
    { city: 'SINGAPORE', role: 'DATA ARCHS & SEISMIC', lat: '1.3521Â° N', lng: '103.8198Â° E', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAd9YL24IkSjArfIBAjh1stXRzZdmfnh86H660QPM2hDsJPnVBuwSWzEnRKyPskz9TMMHT2VS0hBaJDsEEU5E80DBYdvKpx1Z7DlH8HZ-xfabyCY2qcJP8SX076ZBi3WHv9482ZHTOu9cg4_Q6JF26NUgDCCYJT1sXMbh2vDmrlrf5haFqWKTjmpRfIY9QvK8GAaGgyT-MJh8uYbj6aa4rdo4CIlHLdc0yJNHctkMwXaHr85PO86LsflOYNE0lYxmAULWjkUYkZL758' }
  ]
};
