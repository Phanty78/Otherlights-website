import Image from 'next/image'

export default function DestiniesSection() {
  return (
    <section id="destinies" className="relative py-20">
      <Image
        src="/planche_destinees.webp"
        alt="Character Destinies"
        fill
        className="object-cover opacity-40 z-10"
        loading="lazy"
      />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black to-transparent z-20"></div>
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-black z-20"></div>
      <div className="container mx-auto px-4 relative z-30">
        <h2 className="text-4xl font-bold text-center mb-16 text-yellow-500 font-parma-petit">
          Choose your Destiny
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-3xl font-parma-petit">
              Choose upon more than 50 characters and 46 destinies that which
              brings you powerful passives skills
            </p>
          </div>
          <Image
            src="/Destinies.webp"
            alt="Destiny selection page"
            width={600}
            height={500}
            className="rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
