import Image from "next/image";
import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="mt-20 w-full h-full flex justify-center items-center gap-2">
      <Link href="/hot">
        <Image
          width={640}
          height={480}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
          alt="hot coffee"
        />
      </Link>

      <Link href="/iced">
        <Image
          height={480}
          width={640}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/ColdBrewCoffeein_Cans.png/640px-ColdBrewCoffeein_Cans.png"
          alt="hot coffee"
        />
      </Link>
    </div>
  );
}
