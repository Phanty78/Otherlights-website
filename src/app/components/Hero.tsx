import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <Image
        src="/store_capsule_main2.webp"
        alt="Otherlights Hero"
        fill
        className="object-cover opacity-60"
      />
      <div className="relative z-10 container mx-auto pb-80 xl:pb-96 text-center flex flex-col items-center justify-start gap-4">
        <p className="text-4xl md:text-2xl mb-8 max-w-2xl mx-auto font-parma-petit">
          An Action/RPG Roguelite designed
          <br /> for 1 to 4 players in local co-op.
        </p>
        <Link
          href="https://store.steampowered.com/app/2666000/Otherlights/"
          className="inline-flex items-center px-8 py-3 text-3xl font-bold text-black bg-yellow-500 rounded-full hover:bg-yellow-300 transition-colors font-parma-petit"
          target="_blank"
          rel="noopener noreferrer"
        >
          Play Now
        </Link>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black"></div>
    </section>
  )
}
