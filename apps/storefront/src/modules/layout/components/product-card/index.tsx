import { ComingSoonBadge } from "../coming-soon"

// Product data type
export interface Product {
  id: string
  name: string
  size: string
  color: string
  colorDescription: string
  inspiration: string
  image: string
  ctaText?: string
  href?: string
  comingSoon?: boolean
  type?: "standard" | "additional" // Product template type
}

// Product card component
interface ProductCardProps {
  product: Product
  onLearnMore?: (productId: string) => void
  isMiddleCard?: boolean
}

export function ProductCard({
  product,
  onLearnMore,
  isMiddleCard = false,
}: ProductCardProps) {
  const handleClick = () => {
    onLearnMore?.(product.id)
  }

  return (
    <div
      className={`group relative overflow-visible rounded-[12px] border border-[#0077B6]/40 bg-white transition-all duration-300 ease-out shadow-lg hover:shadow-2xl ${
        isMiddleCard
          ? "xl:border-[#0077B6] xl:scale-105 xl:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25),0_0_0_1px_rgba(0,119,182,0.1)]"
          : ""
      }`}
    >
      <ComingSoonBadge show={product.comingSoon} />

      <div className="p-4 pb-7">
        {/* Product Image */}
        <div className="relative mb-6 overflow-hidden rounded-lg">
          <img
            src={product.image}
            alt={product.name}
            className="h-[260px] w-full object-cover transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-1 px-4">
          <h3 className="font-sans text-xl leading-7 font-bold text-[#111928]">
            {product.name}
          </h3>

          <p className="font-sans text-sm leading-5 font-medium text-[#637381]">
            {product.size}
          </p>

          <div className="space-y-1 pt-1">
            <p className="font-sans text-base leading-6 text-[#1f2a37]">
              <span className="font-medium">Color: </span>
              <span className="font-normal">{product.colorDescription}</span>
            </p>

            <p className="font-sans text-base leading-6 text-[#1f2a37]">
              <span className="font-medium">Inspiration: </span>
              <span className="font-normal">{product.inspiration}</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-6">
          <button
            onClick={handleClick}
            className="w-full cursor-pointer rounded-[8px] px-6 py-3 font-sans text-base leading-6 font-semibold text-white transition-all duration-200 hover:opacity-90"
            style={{
              background:
                "linear-gradient(0deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.10) 100%), linear-gradient(95deg, #0077B6 -0.26%, #00A3FF 134.33%)",
              backgroundBlendMode: "screen, normal",
            }}
          >
            {product.ctaText || "Learn More"}
          </button>
        </div>
      </div>
    </div>
  )
}

export type { ProductCardProps }
