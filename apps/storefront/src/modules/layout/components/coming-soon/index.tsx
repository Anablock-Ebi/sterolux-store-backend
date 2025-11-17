interface ComingSoonBadgeProps {
  show?: boolean
}

export function ComingSoonBadge({ show = false }: ComingSoonBadgeProps) {
  if (!show) return null

  return (
    <div
      className="absolute -top-5 left-1/2 z-10 flex h-[40px] w-[132px] -translate-x-1/2 items-center justify-center rounded-[20px] px-[14px] py-[10px]"
      style={{
        background: "linear-gradient(95deg, #0077B6 -0.26%, #00A3FF 134.33%)",
        boxShadow:
          "0 1px 4px 0 #0c0c0d1a, 0 1px 4px 0 #0c0c0d0d, 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 8px rgba(255, 255, 255, 0.15)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[20px]"
      >
        <div className="absolute inset-0 rounded-[20px] bg-[rgba(255,255,255,0.1)] mix-blend-screen" />
      </div>
      <p className="relative z-10 shrink-0 text-center text-[14px] leading-[20px] font-bold text-nowrap whitespace-pre text-white">
        COMING SOON
      </p>
    </div>
  )
}
