import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="mt-20">
      <h1 className="font-extrabold text-center text-3xl ">Coffe Concotions</h1>
      <div className="mt-20 w-full h-full flex sm:flex-col flex-row justify-center items-center gap-2">
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
    </main>
  );
}
