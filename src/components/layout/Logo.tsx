import Image from 'next/image'

export default function Logo({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/images/logo-mark.png"
      alt="Espallo"
      width={size}
      height={size}
      unoptimized
      className="rounded-full"
      style={{ width: size, height: size }}
    />
  )
}
