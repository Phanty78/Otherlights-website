import Image from 'next/image'

export default function ExploreSection() {
  return (
    <section id="explore" className="relative py-20">
      <Image
        src="/Arbre_Temps2.webp"
        alt="Mystical Time Tree"
        fill
        className="object-cover opacity-60 z-10"
        loading="lazy"
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
      <div className="container mx-auto px-4 relative z-30">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500 font-parma-petit">
          A world of fantasy
        </h2>
        <div className="grid md:grid-cols-2 gap-16 md:gap-32 xl:gap-72 justify-between items-center">
          <div className="space-y-6">
            <p className="text-3xl font-parma-petit">
              Explore a dark fantasy univers with an unique art style. In this
              sunless world, nature, monsters and humans Evolved to survive.
              <br />
              Let yourself be taken in by the musical and luminous atmosphere.
            </p>
          </div>
          <div className="sm:w-full md:w-3/4 aspect-video flex justify-center">
            <iframe
              src="https://www.youtube-nocookie.com/embed/DpXtCg87Fp0?si=ZJFr2I0jVnAxLPez"
              className="w-full h-full"
              title="Otherlights OST - Astral Fox"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
