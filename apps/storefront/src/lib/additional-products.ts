import { type Product } from "@/modules/layout/components/product-card"

// Helper to safely get an additional product by ID with clear error message
function assertAdditionalProduct(id: string): Product {
  const product = additionalProducts.find((p) => p.id === id)
  if (!product) {
    throw new Error(
      `Additional product with id '${id}' not found in additionalProducts`
    )
  }
  return product
}

// Extended product interface for detailed pages (same as main products)
export interface AdditionalProductDetail extends Product {
  heroTitle: string
  heroDescription: string
  features: string[]
  heroSection: {
    subtitle: string
    title: string
    description: string
    image: string
    imageAlt: string
    showBookDemo?: boolean
  }
  featuresSection?: {
    title?: string
    description?: string
    details: {
      design?: string
      water?: string
      performance?: string
      [key: string]: string | undefined
    }
    icons?: {
      design?: string
      water?: string
      performance?: string
      [key: string]: string | undefined
    }
  }
  aboutSection?: {
    title: string
    description: string
    image: string
    imageAlt: string
    features: string[]
  }
  aboutSections?: Array<{
    title: string
    description: string
    image: string
    imageAlt: string
    features?: string[]
  }>
  // Add more fields as needed for additional product content
  relatedProducts?: string[] // Array of product IDs to show as related products
}

export const additionalProducts: Product[] = [
  {
    id: "foseal-1",
    name: "FoSeal-1",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/foseal-1",
    type: "additional",
  },
  {
    id: "foseal-2",
    name: "FoSeal-2",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/foseal-2",
    type: "additional",
  },
  {
    id: "foseal-2a",
    name: "FoSeal-2A",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/foseal-2a",
    type: "additional",
  },
  {
    id: "foseal-ac",
    name: "FoSeal-AC",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/foseal-ac",
    type: "additional",
  },
  {
    id: "foseal-ap",
    name: "FoSeal-AP",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/foseal-ap",
    type: "additional",
  },
  {
    id: "aqua-aqua-s",
    name: "Aqua Aqua-S",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/aqua-aqua-s",
    type: "additional",
  },
  {
    id: "foclean-25",
    name: "FoClean-25",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/foclean-25",
    type: "additional",
  },
  {
    id: "foclean-60",
    name: "FoClean-60",
    size: "",
    color: "",
    colorDescription: "",
    inspiration: "",
    image: "",
    href: "/products/foclean-60",
    type: "additional",
  },
]

// Detailed product data for additional product pages
export const additionalProductDetails: AdditionalProductDetail[] = [
  {
    ...assertAdditionalProduct("foseal-1"),
    heroTitle: "FoSeal-1",
    heroDescription: "Product description coming soon.",
    features: [],
    heroSection: {
      subtitle: "FoSeal 01",
      title: "Ultra Energy-Efficient Sealing, Built for Healthcare",
      description:
        "Professional-grade sterilization pouch sealing with industry-leading energy savings and safety features.",
      image: "/products/foseal-1.webp",
      imageAlt: "FoSeal-1 sterilization pouch sealing device",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design: "Guarantees perfect seals regardless of power fluctuations.",
        water: "Stainless steel body with surgical-grade dual-blade cutter.",
        performance: "30% more efficient with silent, cool performance.",
      },
      icons: {
        design: "/icons/fluent_temperature.svg",
        water: "/icons/mdi_shield-plus.svg",
        performance: "/icons/energy.svg",
      },
    },
    aboutSections: [
      {
        title: "Professional Grade, Trusted by Healthcare",
        description:
          "This sealer combines rock-solid reliability with sleek design. With ultra-low failure rates, medical-grade durability, and intuitive operation, it's the trusted choice for busy healthcare environments.",
        image: "/products/foseal-1-2.webp",
        imageAlt: "FoSeal-1 sterilization pouch sealing device",
        features: [
          "Consumes 80% less power than standard 500W models, with auto-standby after 30 minutes of inactivity.",
          "Auto shutoff prevents overheating and enhances long-term reliability.",
          "Auto-voltage adaptation ensures consistent sealing performance in every cycle.",
          "Trusted by hospitals and clinics nationwide for reliability and medical compliance.",
        ],
      },
    ],
  },
  {
    ...assertAdditionalProduct("foseal-2"),
    heroTitle: "FoSeal-2",
    heroDescription: "Precision Sealing, Simplified for Healthcare",
    features: [],
    heroSection: {
      subtitle: "FoSeal 02",
      title: "Precision Sealing, Simplified for Healthcare",
      description:
        "Professional-grade sterilization pouch sealing with intuitive operation, smart calibration, and consistent results for every cycle.",
      image: "/products/foseal-2.webp",
      imageAlt: "FoSeal-2 sterilization pouch sealing device",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design:
          "Micro-adjustable dial guarantees surgical-grade accuracy for perfect seals.",
        water:
          "Reliable performance on nylon/paper sterilization pouches across multiple formats.",
        performance:
          "Remembers your last temperature setting for repeat procedures, saving setup time.",
      },
      icons: {
        design: "/icons/fluent_temperature.svg",
        water: "/icons/mdi-card-multiple.svg",
        performance: "/icons/lightbulb.svg",
      },
    },
    aboutSections: [
      {
        title: "Engineered for Accuracy and Ease",
        description:
          "The Foseal-02 combines precise temperature calibration with intuitive operation, giving healthcare providers a reliable, no-friction solution for daily sterilization packaging.",
        image: "/products/foseal-2-2.webp",
        imageAlt:
          "FoSeal-2 sterilization pouch sealing device with precision dial control",
        features: [
          "Graduated dial allows 1/3 incremental adjustments for exact heat control.",
          "Turn clockwise/anticlockwise to set temperature - no programming needed.",
          "System auto-remembers your last setting for consistency with identical materials.",
          "Provides clear, consistent seals on paper-side sterilization pouches (not for tubular foil).",
        ],
      },
    ],
  },
  {
    ...assertAdditionalProduct("foseal-2a"),
    heroTitle: "FoSeal-2A",
    heroDescription: "Smart Seal. Total Protection.",
    features: [],
    heroSection: {
      subtitle: "FoSeal 02A",
      title: "Smart Seal. Total Protection.",
      description:
        "Professional sterilization pouch sealing with durable design, adaptive technology, and consistently reliable results.",
      image: "/products/foseal-2a.webp",
      imageAlt: "FoSeal-2A sterilization pouch sealing device",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design: "Guarantees consistent, high-quality seals with every use.",
        water:
          "Corrosion-resistant aluminum alloy housing, built to last & easy to clean.",
        performance: "Simple to operate with minimal maintenance needs.",
      },
      icons: {
        design: "/icons/performance-line.svg",
        water: "/icons/sparkles.svg",
        performance: "/icons/user.svg",
      },
    },
    aboutSections: [
      {
        title: "Engineered for Protection and Ease",
        description:
          "The FoSeal-02A is designed to deliver dependable sealing performance with minimal maintenance, making it a trusted choice for busy healthcare practices.",
        image: "/products/foseal-2a-2.webp",
        imageAlt:
          "FoSeal-2A sterilization pouch sealing device with protective housing",
        features: [
          "Ensures consistent sealing quality across every pouch.",
          "Rugged aluminum alloy housing resists corrosion and simplifies cleaning.",
          "Easy-to-use interface keeps workflows smooth and efficient.",
          "Auto voltage adaptation maintains perfect sealing temperature under any power condition.",
        ],
      },
    ],
  },
  {
    ...assertAdditionalProduct("foseal-ac"),
    heroTitle: "FoSeal-AC",
    heroDescription: "Seal. Print. Cut. All in One System.",
    features: [],
    heroSection: {
      subtitle: "FoSeal AC",
      title: "Seal. Print. Cut. All in One System.",
      description:
        "Professional-grade reel cutting, sealing, and labeling in a single, streamlined device - designed for precision and efficiency in busy healthcare environments.",
      image: "/products/foseal-ac.webp",
      imageAlt:
        "FoSeal-AC all-in-one reel cutting, sealing, and labeling device",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design:
          "3-step reel loading with dual-side locking and automated presets for length & quantity.",
        water:
          "Equipped with a 7-inch color panel with intuitive, modern, easy-to-use interface.",
        performance:
          "Prints expiry dates, batch numbers, and medical symbols with adjustable fonts.",
      },
      icons: {
        design: "/icons/sparkles.svg",
        water: "/icons/display-line.svg",
        performance: "/icons/plus-multiple.svg",
      },
    },
    aboutSections: [
      {
        title: "Engineered for Total Workflow Efficiency",
        description:
          "The FoSeal-AC combines cutting, sealing, and printing in one compact unit - reducing manual steps, saving time, and ensuring compliance with medical packaging standards.",
        image: "/products/foseal-ac.webp",
        imageAlt: "FoSeal-AC all-in-one cutting, sealing, and printing system",
        features: [
          "Automated reel cutting with preset configurations for speed & accuracy.",
          "Integrated printing for medical symbols and expiry labeling.",
          "Ceramic heating system ensures fast, reliable sealing and long-term durability.",
          "Real-time safeguards with overheat protection and performance monitoring.",
          "Side-access ribbon replacement for quick, hassle-free maintenance.",
        ],
      },
    ],
  },
  {
    ...assertAdditionalProduct("foseal-ap"),
    heroTitle: "FoSeal-AP",
    heroDescription: "Auto-Seal. Auto-Print. Flawless Sterility.",
    features: [],
    heroSection: {
      subtitle: "FoSeal AP",
      title: "Auto-Seal. Auto-Print. Flawless Sterility.",
      description:
        "Advanced sterilization pouch sealer with touchscreen precision, automated control, and energy-saving efficiency. Built for busy clinics and labs demanding reliability and ease.",
      image: "/products/foseal-ap.webp",
      imageAlt:
        "FoSeal-AP advanced sterilization pouch sealer with touchscreen control",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design:
          "Intuitive full-color display with auto-updating clock for precise, fingertip control.",
        water:
          "Microprocessor maintains ±0.5°C accuracy across the full sealing range with programmable presets.",
        performance:
          "Auto-adjusts sealing pressure for wrinkle-free, airtight results across all pouch types.",
      },
      icons: {
        design: "/icons/display-line.svg",
        water: "/icons/sparkles.svg",
        performance: "/icons/brake-low-pressure.svg",
      },
    },
    aboutSections: [
      {
        title: "Engineered for Precision and Sustainability",
        description:
          "The FoSeal-AP combines intelligent automation with medical-grade sealing performance. Every feature is designed to streamline workflows, ensure sterility, and reduce energy costs.",
        image: "/products/foseal-ap.webp",
        imageAlt:
          "FoSeal-AP advanced sterilization pouch sealer with precision control",
        features: [
          "7-inch LCD touchscreen with responsive, user-friendly controls.",
          "Temperature accuracy within ±0.5°C for reliable sealing across multiple materials.",
          "Constant-pressure system eliminates human error, ensuring flawless seals every time.",
          "Eco standby mode reduces energy use by 30% during idle periods, while instantly recovering operating temperature.",
        ],
      },
    ],
  },
  {
    ...assertAdditionalProduct("aqua-aqua-s"),
    heroTitle: "Aqua Aqua-S",
    heroDescription: "Ultra-Pure. Ultra-Safe. Every Drop.",
    features: [],
    heroSection: {
      subtitle: "Aqua / Aqua S",
      title: "Ultra-Pure. Ultra-Safe. Every Drop.",
      description:
        "Engineered for medical, laboratory, and household use, AQUA delivers contaminant-free water with certified safety and uncompromising purity.",
      image: "/products/aqua-aqua-s.webp",
      imageAlt: "Aqua Aqua-S water purification system",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design:
          "Meets <4 μS/cm conductivity standards for sterilization and lab use.",
        water:
          "SUS304 stainless steel chamber and faucet resist corrosion and contamination.",
        performance:
          "Flame-retardant wiring and cooling fan ensure safe, long-lasting operation.",
      },
      icons: {
        design: "/icons/water-drop-outline.svg",
        water: "/icons/mdi_shield-plus.svg",
        performance: "/icons/sparkles.svg",
      },
    },
    aboutSections: [
      {
        title: "Medical-Grade 304 Stainless",
        description:
          "The entire chamber and faucet are crafted from certified SUS304 stainless steel, verified with stamped certification. This medical-grade construction guarantees durability, resists corrosion, and eliminates the risk of metallic contamination, making it suitable for both clinical sterilization and long-term laboratory use.",
        image: "/products/aqua-1.jpg",
        imageAlt: "Aqua Aqua-S stainless steel chamber",
      },
      {
        title: "Flame-Retardant Safety",
        description:
          "Every component of the base and wiring is manufactured with high-grade flame-retardant materials. By preventing ignition and reducing fire hazards, the system ensures safe operation even in demanding environments where equipment is used continuously.",
        image: "/products/aqua-2.jpg",
        imageAlt: "Aqua Aqua-S base with flame-retardant components",
      },
      {
        title: "Ultra-Pure Water",
        description:
          "Engineered to deliver consistently clean water with conductivity levels below 4μS/cm, this system exceeds the requirements for sterilization and laboratory applications. The result is pure, reliable water that supports accurate testing, sterile processing, and critical medical workflows.",
        image: "/products/aqua-3.jpg",
        imageAlt: "Aqua Aqua-S water dispensing system",
      },
      {
        title: "Aluminum Cooling Fan",
        description:
          "The built-in aluminum alloy cooling fan is designed for optimal heat dissipation, effectively lowering the operating temperature of the unit. This not only extends the lifespan of the device but also ensures stable performance during prolonged use.",
        image: "/products/aqua-4.jpg",
        imageAlt: "Aqua Aqua-S aluminum cooling fan system",
      },
      {
        title: "Multi-Scenario Use",
        description:
          "Versatile by design, AQUA units are ideal for supplying ultra-pure water to autoclaves, sterilizers, medical devices, and laboratory equipment. They are also a premium choice for households seeking the highest standard of water purity for health and safety.",
        image: "/products/aqua-5.jpg",
        imageAlt: "Aqua Aqua-S in medical and laboratory environment",
      },
    ],
  },
  {
    ...assertAdditionalProduct("foclean-25"),
    heroTitle: "FoClean-25",
    heroDescription: "Ultrasonic Strength Made Easy.",
    features: [],
    heroSection: {
      subtitle: "FoClean 25",
      title: "Ultrasonic Strength Made Easy.",
      description:
        "Professional-grade ultrasonic cleaning with large capacity, smart controls, and durable design - built for clinics, labs, and high-demand environments.",
      image: "/products/foclean-25.jpg",
      imageAlt: "FoClean-25 professional ultrasonic cleaner",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design:
          "Built-in protection circuits and a cooling fan safeguard against overload, misuse, and extend machine lifespan.",
        water:
          "An industrial φ38 ultrasonic generator delivers powerful, uniform cleaning for consistent results.",
        performance:
          "Dual-color LED with timer and 100W ceramic heater ensures precise control and effective cleaning.",
      },
      icons: {
        design: "/icons/energy.svg",
        water: "/icons/sparkles.svg",
        performance: "/icons/mdi-card-multiple.svg",
      },
    },
    aboutSections: [
      {
        title: "Large-Capacity Cleaning",
        description:
          "The Foclean-25 is engineered for versatility, featuring a spacious 2500ml ultrasonic tank that can handle instruments and tools up to 26cm in length. This makes it an ideal solution for medical practices, dental offices, and laboratories that process larger or multiple items in a single cycle. By accommodating a wider range of instruments, the Foclean-25 reduces turnaround time and maximizes cleaning efficiency.",
        image: "/products/foclean-25-2.jpg",
        imageAlt: "FoClean-25 large capacity ultrasonic cleaning tank",
      },
      {
        title: "Smart Control & Durable Design",
        description:
          "Built with reliability in mind, the Foclean-25 integrates a capacitive sensing control panel that remains responsive even in wet or chemically harsh environments. Its detachable power cable with independent switch provides added safety and convenience during operation. Internally, a moisture-proof PCB and industrial-grade IC ensure long-lasting stability, while the 4mm reinforced engineering plastic shell delivers outstanding resistance to both water exposure and physical impact. This robust construction guarantees consistent performance in demanding healthcare and laboratory conditions.",
        image: "/products/foclean-25.jpg",
        imageAlt: "FoClean-25 smart control panel and durable construction",
      },
    ],
  },
  {
    ...assertAdditionalProduct("foclean-60"),
    heroTitle: "FoClean-60",
    heroDescription: "Defending Medicine, One Clean.",
    features: [],
    heroSection: {
      subtitle: "FoClean 60",
      title: "Defending Medicine, One Clean.",
      description:
        "Hospital-grade ultrasonic cleaning, designed to protect instruments, safeguard patients, and meet the strictest compliance standards.",
      image: "/products/foclean-60.jpg",
      imageAlt: "FoClean-60 hospital-grade ultrasonic cleaner",
      showBookDemo: true,
    },
    featuresSection: {
      details: {
        design:
          "Thoroughly cleans scalpels, forceps, syringes, endoscopes, and glassware.",
        water:
          "Timer and temperature controls with auto-stop heating for maximum safety.",
        performance:
          "3-color display, 4-key interface, and preset modes for quick, efficient use.",
      },
      icons: {
        design: "/icons/mdi_shield-plus.svg",
        water: "/icons/performance-line.svg",
        performance: "/icons/user.svg",
      },
    },
    aboutSections: [
      {
        title: "Hospital-Grade Cleaning",
        description:
          "Designed for complex surgical and diagnostic tools, the Foclean-60 delivers ultrasonic cleaning strong enough for everyday OR instruments while meeting the rigorous requirements of sterilization departments. It's effective for:",
        image: "/products/foclean-60-2.jpg",
        imageAlt: "FoClean-60 hospital-grade ultrasonic cleaner",
        features: [
          "Scalpels, forceps, and needles",
          "Endoscopic instruments",
          "Syringes and glassware",
          "Radioactive or contaminated equipment",
        ],
      },
      {
        title: "Smart, Safe, and Simple to Use",
        description:
          "The Foclean-60 delivers tailored cleaning cycles with adjustable timers (2–30 minutes) and temperature settings (20°C–80°C), while built-in safeguards like auto-stop heating protect users and instruments. Its intuitive 3-color display, 4-key control panel, and preset modes make operation fast, reliable, and effortless in demanding medical environments.",
        image: "/products/foclean-60.jpg",
        imageAlt: "FoClean-60 smart control panel and user interface",
      },
      {
        title: "Critical for Healthcare Compliance",
        description:
          "Hospitals, ORs, and central sterile supply departments (CSSDs) face strict hygiene requirements. The Foclean-60 is engineered to meet and exceed compliance standards, making it an essential tool for ensuring patient safety, supporting infection control protocols, and protecting healthcare reputations.",
        image: "/products/foclean-60-3.jpg",
        imageAlt: "FoClean-60 in healthcare compliance setting",
      },
    ],
  },
]
