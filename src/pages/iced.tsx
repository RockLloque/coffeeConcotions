import { Coffee } from "@/components/Coffe";
import { NotLoading } from "@/components/NotLoading";
import { ICED_COFFE_API, REVALIDATE } from "@/lib/constants";
import { fallbackRecipieIced } from "@/lib/fallbackRecipies";
import { Recipe } from "@/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Suspense } from "react";

export const getStaticProps = (async () => {
  try {
    const res = await fetch(ICED_COFFE_API);
    const recipes: (Recipe | null)[] = await res.json()
    return { props: { recipes, hasLoaded: true }, }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(e.message)
    return {
      props: {
        recipes: [
          fallbackRecipieIced
        ], hasLoaded: false
      }, revalidate: REVALIDATE
    }
  }
}) satisfies GetStaticProps<{ recipes: (Recipe | null)[], hasLoaded: boolean }>

export default function IcedCoffeePage(
  { recipes, hasLoaded }: InferGetStaticPropsType<typeof getStaticProps>) {


  return <div>
    <h1>Iced Coffees</h1>
    <NotLoading hasLoaded={hasLoaded} />
    {recipes.map(recipe => {
      if (recipe !== null) {
        return <Coffee recipe={recipe} key={recipe.id} />
      }
    }
    )}

  </div>
}

