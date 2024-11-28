import Image from 'next/image'

export default function CharactersSection() {
  return (
    <section id="characters" className="relative py-20">
      <Image
        src="/village.webp"
        alt="Village Scene"
        fill
        className="object-cover opacity-60 z-10"
        loading="lazy"
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
      <div className="ccontainer mx-auto px-4 relative z-30">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500 font-parma-petit">
          Fight as a team
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <Image
            src="/Groupe_Charas.webp"
            alt="Otherlights Characters"
            width={600}
            height={500}
            className="rounded-lg shadow-2xl order-2 md:order-1"
            loading="lazy"
          />

          <div className="space-y-6 order-1 md:order-2">
            <p className="text-3xl text-center md:pt-36 font-parma-petit">
              Unlock characters and progress in the roguelite quest completed
              secondary missions
              <br /> that take place in the past. All playable in local co-op.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
