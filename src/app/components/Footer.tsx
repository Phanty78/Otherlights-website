import Image from 'next/image'
import Link from 'next/link'
import {
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa'

export default function FindUsSection() {
  return (
    <footer className="py-12 bg-gblack" id="find-us">
      <div className="container mx-auto px-4 text-center flex flex-col gap-4 items-center justify-center">
        <h2 className="text-4xl font-bold text-center text-yellow-500">
          Find us
        </h2>
        <Image
          src="/logo_entreprise_300.webp"
          alt="Soleil artificel studio logo"
          width={300}
          height={200}
          className="rounded-lg shadow-2xl"
          loading="lazy"
        />
        <div className="flex justify-center flex-wrap gap-4 mb-8">
          <Link
            href="https://www.instagram.com/otherlights_official/"
            className="p-3 bg-yellow-500 rounded-lg hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Soleil Artificiel on Instagram (open in a new tab)"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61568828963619"
            className="p-3 bg-yellow-500 rounded-lg hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Soleil Artificiel on Facebook (open in a new tab)"
          >
            <FaFacebook className="w-6 h-6" />
          </Link>
          <Link
            href="https://x.com/SolArtificiel"
            className="p-3 bg-yellow-500 rounded-lg hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Soleil Artificiel on X (open in a new tab)"
          >
            <FaTwitter className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.tiktok.com/@otherlights_game"
            className="p-3 bg-yellow-500 rounded-lg hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Soleil Artificiel on TikTok (open in a new tab)"
          >
            <FaTiktok className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.youtube.com/@Otherlights"
            className="p-3 bg-yellow-500 rounded-lg hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Soleil Artificiel on YouTube (open in a new tab)"
          >
            <FaYoutube className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/soleil-artificiel/"
            className="p-3 bg-yellow-500 rounded-lg hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow Soleil Artificiel on LinkedIn (open in a new tab)"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>
          <Link
            href="https://discord.gg/4kstZMUrAt"
            className="p-3 bg-yellow-500 rounded-lg hover:bg-gray-700 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Join the Otherlights Discord server (open in a new tab)"
          >
            <FaDiscord className="w-6 h-6" />
          </Link>
        </div>
        <p className="text-gray-400">
          © 2024 Otherlights. All rights reserved.
        </p>
        <p className="text-gray-400">
          Website by Maël Donnart, hire me on{' '}
          <Link
            href="https://www.malt.fr/profile/maeldonnart?overview=true"
            target="_blank"
            className="text-yellow-500 hover:underline"
            rel="noopener noreferrer"
            aria-label="Hire Mael Donnart on Malt as a freelancer (open in a new tab)"
          >
            Malt
          </Link>
          .
        </p>
      </div>
    </footer>
  )
}
