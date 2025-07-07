import { Coffee } from "@/components/Coffe";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Suspense } from "react";

export interface Recipe {
  title: string;
  description: string;
  image?: string;
  id: string;
}
export const getStaticProps = (async () => {
  try {
    const res = await fetch('http://localhost:3002/api/iced')
    const recipes: Recipe[] = await res.json()
    return { props: { recipes } }
  } catch (e: any) {
    console.error(e.message)
    throw new Error('Fehler bei laden der Daten')
  }
}) satisfies GetStaticProps<{ recipes: Recipe[] }>

export default function HotCoffeePage(
  { recipes }: InferGetStaticPropsType<typeof getStaticProps>) {


  return <div>
    <h1>Iced Coffees</h1>
    {recipes.map(recipe =>
      <Suspense fallback={<div>Loading...</div>}>
        <Coffee recipe={recipe} />
      </Suspense>
    )}
  </div>
}

