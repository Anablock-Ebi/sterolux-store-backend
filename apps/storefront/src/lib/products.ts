import { type Product } from "@/modules/layout/components/product-card"

// Helper to safely get a product by ID with clear error message
function assertProduct(id: string): Product {
  const product = defaultProducts.find((p) => p.id === id)
  if (!product) {
    throw new Error(`Product with id '${id}' not found in defaultProducts`)
  }
  return product
}

// Extended product interface for detailed pages
export interface ProductDetail extends Product {
  heroTitle: string
  heroDescription: string
  features: string[]
  featureSection?: {
    title: string
    description: string
    details: {
      design?: string
      water?: string
      performance?: string
      [key: string]: string | undefined
    }
  }
  efficiencySection?: {
    title: string
    description: string
    features: Array<{
      icon?: string
      title: string
      description?: string
    }>
  }
  advancedFeaturesSection?: {
    title: string
    description: string
    features: Array<{
      title: string
      description: string
    }>
  }
  relatedProducts?: string[] // Array of product IDs to show as related products
}

export const defaultProducts: Product[] = [
  {
    id: "luna",
    name: "Sterolux Luna",
    size: "Medium",
    color: "Lunar Silver",
    colorDescription: "Lunar Silver (Sleek Silver or Pearl White)",
    inspiration:
      "The moon's balance and precision, ideal for everyday sterilization needs.",
    image: "/company/2.png",
    href: "/products/luna",
    comingSoon: true,
    type: "standard",
  },
  {
    id: "solis",
    name: "Sterolux Solis",
    size: "Large",
    color: "Solar Gold",
    colorDescription: "Solar Gold (Metallic Gold/Deep Amber)",
    inspiration:
      "Represents the sun's power, aligning with its strength and reliability in high-volume sterilization.",
    image: "/company/1.png",
    href: "/products/solis",
    type: "standard",
  },
  {
    id: "astra",
    name: "Sterolux Astra",
    size: "Small",
    color: "Nebula Blue",
    colorDescription: "Nebula Blue (Deep Navy or Space Blue)",
    inspiration:
      "The stars symbolize innovation and compact efficiency in small sterilization units.",
    image: "/company/3.png",
    href: "/products/astra",
    comingSoon: true,
    type: "standard",
  },
]

// Detailed product data for product pages
export const productDetails: ProductDetail[] = [
  {
    ...assertProduct("solis"),
    heroTitle: "Powerful Sterilization for High-Volume Needs",
    heroDescription:
      "Sterolux Solis is built for hospitals and large healthcare facilities that demand consistent, high-capacity sterilization. With its Solar Gold design, Solis represents strength, reliability, and unmatched performance.",
    features: [
      "High-volume capacity for busy sterilization departments",
      "Advanced steam technology with 99% effectiveness",
      "Durable build for long-term reliability",
      "Optimized for continuous operation",
    ],
    featureSection: {
      title: "Smarter Sterilization at a Glance",
      description:
        "From compact design to certified performance, discover what makes Foster Plus a trusted choice for clinics worldwide.",
      details: {
        design: "Available in 17L and 22L capacity for clinics of all sizes.",
        water: "400ml minimum reservoir charge, 750ml reminder level.",
        performance:
          "EC compliant, built to meet international sterilization standards.",
      },
    },
    efficiencySection: {
      title: "Engineered for Efficiency and Safety",
      description:
        "From reducing downtime to ensuring regulatory compliance, every feature of the Sterolux Solis steam sterilizer is designed for hospitals and large healthcare facilities. Its robust construction and advanced features maximize performance in demanding healthcare environments.",
      features: [
        {
          icon: "/icons/efficiency-1.svg",
          title: "Less Downtime, More Productivity",
        },
        {
          icon: "/icons/efficiency-2.svg",
          title: "Easy Compliance, Effortless Records",
        },
        {
          icon: "/icons/efficiency-3.svg",
          title: "Maximum Infection Control",
        },
        {
          icon: "/icons/efficiency-4.svg",
          title: "Compact, High-Performance Design",
        },
      ],
    },
    advancedFeaturesSection: {
      title: "Advanced Features, Real-World Reliability",
      description:
        "The Sterolux Solis sterilizer combines advanced safety features with an intuitive interface, making it an ideal choice for hospitals and large healthcare facilities. Its efficient sterilization cycles, high-volume capacity, and smart water management system ensure consistent performance with minimal downtime.",
      features: [
        {
          title: "Smart Water Management",
          description:
            "Built-in reminder system that alerts you at 750ml and ensures a minimum 400ml reservoir charge for safe operation.",
        },
        {
          title: "Reliable Cycle Documentation",
          description:
            "Every sterilization cycle is recorded and printed with legibility guaranteed for at least one year.",
        },
        {
          title: "Temperature Precision",
          description:
            "Dual temperature monitoring at both the steam injection port and door area ensures uniform sterilization performance.",
        },
        {
          title: "Compact & Powerful",
          description:
            "Optimized for dental practices, clinics, and labs with limited space but high sterilization needs.",
        },
      ],
    },
    relatedProducts: ["luna", "astra"],
  },
  {
    ...assertProduct("luna"),
    heroTitle: "Precision and Balance for Everyday Use",
    heroDescription:
      "Sterolux Luna brings sleek performance to daily sterilization workflows. Designed in Lunar Silver, it combines balance and accuracy, making it ideal for facilities that need precision without sacrificing speed.",
    features: [
      "Medium-capacity chamber for flexible workflows",
      "Precision steam delivery for reliable results",
      "Compact footprint, ideal for labs and clinics",
      "User-friendly controls and automation",
    ],
    featureSection: {
      title: "Smarter Sterilization, Built for Clinics of All Sizes",
      description:
        "Sterolux Luna delivers advanced Class B pre-vacuum technology, intuitive controls, and certified performance - designed for dental, medical, and laboratory use",
      details: {
        design: "Available in 17L and 22L capacity for clinics of all sizes.",
        water: "Simple manual fill system for efficient operation.",
        performance: "Built to meet international sterilization standards.",
      },
    },
    efficiencySection: {
      title: "Engineered for Efficiency and Safety",
      description:
        "From reducing downtime to ensuring regulatory compliance, every feature of the Sterolux Luna Steam Sterilizer is designed to deliver reliable sterilization, safeguard instruments, and maximize performance in any healthcare setting.",
      features: [
        {
          icon: "/icons/efficiency-1.svg",
          title: "Less Downtime, More Productivity",
        },
        {
          icon: "/icons/efficiency-2.svg",
          title: "Easy Compliance, Effortless Records",
        },
        {
          icon: "/icons/efficiency-3.svg",
          title: "Maximum Infection Control",
        },
        {
          icon: "/icons/efficiency-4.svg",
          title: "Compact, High-Performance Design",
        },
      ],
    },
    advancedFeaturesSection: {
      title: "Advanced Features, Real-World Reliability",
      description:
        "The Sterolux Luna sterilizer combines advanced safety features with an intuitive interface, making it an ideal choice for dental offices, small clinics, and laboratories. Its efficient sterilization cycles, compact footprint, and smart water management system ensure consistent performance with minimal downtime.",
      features: [
        {
          title: "Efficient Water Use",
          description:
            "Designed with a straightforward water system that ensures reliable operation without unnecessary complexity.",
        },
        {
          title: "Consistent Sterilization Cycles",
          description:
            "Provides repeatable, dependable sterilization performance for instruments of all types.",
        },
        {
          title: "Temperature Monitoring",
          description:
            "Monitors chamber temperature throughout the cycle to maintain effective sterilization conditions.",
        },
        {
          title: "Compact & Practical",
          description:
            "Ideal for smaller practices or labs requiring professional sterilization in a reduced footprint.",
        },
      ],
    },
    relatedProducts: ["solis", "astra"],
  },
  {
    ...assertProduct("astra"),
    heroTitle: "Compact Innovation, Maximum Efficiency",
    heroDescription:
      "Sterolux Astra is the small but powerful sterilization solution. Finished in Nebula Blue, it symbolizes innovation and agility — delivering efficient sterilization for smaller-scale operations.",
    features: [
      "Space-saving design with powerful sterilization performance",
      "Rapid cycle times for faster turnaround",
      "Energy-efficient and eco-friendly operation",
      "Perfect for low-volume but high-frequency sterilization",
    ],
    featureSection: {
      title: "Smarter Sterilization, Built for Clinics of All Sizes",
      description:
        "Compact yet powerful, Sterolux Astra steam sterilizers deliver Class B pre-vacuum technology, real-time monitoring, and certified performance - designed for dental offices, small clinics, and labs where space is limited but sterilization standards can’t be compromised.",
      details: {
        design:
          "8L and 12L capacity, optimized for practices with limited space.",
        water: "Simple manual fill system for efficient operation.",
        performance:
          "EC compliant, built to meet international sterilization standards.",
      },
    },
    efficiencySection: {
      title: "Engineered for Daily Reliability",
      description:
        "The Sterolux Astra sterilizer combines advanced safety features with an intuitive interface, making it an ideal choice for dental offices, small clinics, and laboratories. Its efficient sterilization cycles, compact footprint, and smart water management system ensure consistent performance with minimal downtime.",
      features: [
        {
          icon: "/icons/efficiency-1.svg",
          title: "Less Downtime, More Productivity",
        },
        {
          icon: "/icons/efficiency-2.svg",
          title: "Easy Compliance, Effortless Records",
        },
        {
          icon: "/icons/efficiency-3.svg",
          title: "Maximum Infection Control",
        },
        {
          icon: "/icons/efficiency-4.svg",
          title: "Space-Saving, High-Performance Design",
        },
      ],
    },
    advancedFeaturesSection: {
      title: "Advanced Features, Real-World Reliability",
      description:
        "The Sterolux Astra sterilizer combines advanced safety features with an intuitive interface, making it an ideal choice for dental offices, small clinics, and laboratories. Its efficient sterilization cycles, compact footprint, and smart water management system ensure consistent performance with minimal downtime.",
      features: [
        {
          title: "Efficient Water Use",
          description:
            "Designed with a straightforward water system that ensures reliable operation without unnecessary complexity.",
        },
        {
          title: "Consistent Sterilization Cycles",
          description:
            "Provides repeatable, dependable sterilization performance for instruments of all types.",
        },
        {
          title: "Temperature Monitoring",
          description:
            "Monitors chamber temperature throughout the cycle to maintain effective sterilization conditions.",
        },
        {
          title: "Compact & Practical",
          description:
            "Ideal for smaller practices or labs requiring professional sterilization in a reduced footprint.",
        },
      ],
    },
    relatedProducts: ["solis", "luna"],
  },
]
