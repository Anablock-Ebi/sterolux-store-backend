// import { listCollections } from "@/lib/data/collections"
// import { getRegion } from "@/lib/data/regions"
// import { SectionContainer } from "@/modules/common/components/container"
// import ProductRail from "@/modules/home/components/featured-products/product-rail"

// export default async function FeaturedProducts({
//   countryCode,
// }: {
//   countryCode: string
// }) {
//   const { collections } = await listCollections({
//     limit: "3",
//     fields: "*products",
//   })
//   const region = await getRegion(countryCode)

//   if (!collections || !region) {
//     return null
//   }

//   return (
//     <ul className="flex flex-col gap-x-6 bg-neutral-100">
//       <SectionContainer>
//         {collections.map((collection) => (
//           <li key={collection.id}>
//             <ProductRail collection={collection} region={region} />
//           </li>
//         ))}
//       </SectionContainer>
//     </ul>
//   )
// }

"use client"

import Image from "next/image"

import { Plus } from "lucide-react"
import { SectionContainer } from "@/modules/common/components/container"

const products = [
  {
    id: "1",
    name: "Sterolux Solis",
    description:
      "Professional, high-capacity sterilizer built for demanding hospital and clinical environments.",
    price: "$200.00",
    image: "/products/product.png",
    comingSoon: false,
  },
  {
    id: "2",
    name: "Sterolux Astra",
    description:
      "Balanced, medium-capacity sterilizer designed for clinics seeking reliable performance in a compact footprint.",
    price: "$200.00",
    image: "/products/product.png",
    comingSoon: true,
  },
  {
    id: "3",
    name: "Sterolux Luna",
    description:
      "Compact sterilization solution offering efficient Class B pre-vacuum technology for small to mid-sized operations.",
    price: "$200.00",
    image: "/products/product.png",
    comingSoon: true,
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="font-sans text-4xl font-bold leading-[44px] tracking-[-0.72px]">
              Featured Products
            </h2>
          </div>
          <div className="flex items-center">
            <p className="text-sm font-normal leading-7 text-neutral-600">
              Our solutions are built to make infection control smarter, faster,
              and more reliable. From large-scale hospital sterilization units
              to compact systems for clinics and labs, Sterolux ensures that
              every environment benefits from consistent protection and
              effortless compliance tracking.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Product Image */}
              <div className="relative aspect-[4/3] bg-neutral-50">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                {product.comingSoon && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-neutral-400 text-white px-4 py-1.5 rounded-full text-sm font-medium">
                      COMING SOON
                    </span>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-sans text-xl font-bold mb-2">
                  {product.name}
                </h3>
                <p className="font-sans text-sm text-neutral-600 leading-relaxed mb-4">
                  {product.description}
                </p>

                {/* Price and Add Button */}
                <div className="flex items-center justify-between">
                  <span className="font-sans text-lg font-semibold">
                    {product.price}
                  </span>
                  <button
                    className="w-8 h-8 rounded-full border-2 border-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>
    </section>
  )
}
