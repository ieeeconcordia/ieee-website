import Link from "next/link";
import { BsDiscord, BsInstagram } from "react-icons/bs";

export const SocialButtons = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center mt-6">
      <Link
        href="https://discord.gg/DECBMmcT3P"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-2 items-center text-white bg-discord px-5 py-2.5 rounded-lg hover:opacity-90 transition font-raleway font-medium"
      >
        <BsDiscord size={18} />
        Discord
      </Link>
      <Link
        href="https://instagram.com/ieeeconcordia"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row gap-2 items-center text-white bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 px-5 py-2.5 rounded-lg hover:opacity-90 transition font-raleway font-medium"
      >
        <BsInstagram size={18} />
        Instagram
      </Link>
      <Link
        href="/contact#sponsorship"
        className="flex flex-row gap-2 items-center text-primary-foreground bg-primary px-5 py-2.5 rounded-lg hover:opacity-90 transition font-raleway font-medium"
      >
        Interested in sponsorship?
      </Link>
    </div>
  );
};
