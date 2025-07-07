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
    const res = await fetch('http://localhost:3002/api/hot')
    const recipes: (Recipe | null)[] = await res.json()
    return { props: { recipes } }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(e.message)
    throw new Error('Fehler bei laden der Daten')
  }
}) satisfies GetStaticProps<{ recipes: (Recipe | null)[] }>

export default function HotCoffeePage(
  { recipes }: InferGetStaticPropsType<typeof getStaticProps>) {


  return <div>
    <h1>Hot Coffee</h1>
    {recipes.map(recipe => {
      if (recipe !== null) {
        return <Suspense
          key={recipe.id}
          fallback={<div>Loading...</div>}>
          <Coffee recipe={recipe} />
        </Suspense>
      }
    }
    )}
  </div>
}
