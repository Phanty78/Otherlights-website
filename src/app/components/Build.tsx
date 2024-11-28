import Image from 'next/image'

export default function BuildSection() {
  return (
    <section id="build" className="relative py-20">
      <Image
        src="/Screenshot_Loot.webp"
        alt="Character Building"
        fill
        className="object-cover opacity-30 z-10"
        loading="lazy"
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
      <div className="container mx-auto px-4 relative z-30">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500 font-parma-petit">
          Create your own build
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/Weapons.webp"
            alt="Otherlights Weapons"
            width={600}
            height={500}
            className="rounded-lg shadow-2xl order-2 md:order-1"
            loading="lazy"
          />
          <div className="space-y-6 order-1 md:order-2">
            <p className="text-3xl text-center font-parma-petit">
              Optimize your build with a large content of item, weapons and play
              style. Combine spear, staff, heavy weapon, great sword, one
              handed, dagger and shield for over 20 move set. Find the best in
              more than 300 weapons.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
