import { Coffee } from "@/components/Coffe";
import { NotLoading } from "@/components/NotLoading";
import { HOT_COFFE_API, REVALIDATE } from "@/lib/constants";
import { fallbackRecipieHot } from "@/lib/fallbackRecipies";
import { Recipe } from "@/types";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { Suspense } from "react";

export const getStaticProps = (async () => {
  try {
    const res = await fetch(HOT_COFFE_API)
    const recipes: (Recipe | null)[] = await res.json()
    return { props: { recipes, hasLoaded: true } }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    console.error(e.message)
    return {
      props: {
        recipes: [
          fallbackRecipieHot
        ],
        hasLoaded: false
      }, revalidate: REVALIDATE
    }
  }
}) satisfies GetStaticProps<{ recipes: (Recipe | null)[], hasLoaded: boolean }>

export default function HotCoffeePage(
  { recipes, hasLoaded }: InferGetStaticPropsType<typeof getStaticProps>) {


  return <div>
    <h1>Hot Coffee</h1>
    <NotLoading hasLoaded={hasLoaded} />
    {recipes.map(recipe => {
      if (recipe !== null) {
        return <Coffee recipe={recipe}
          key={recipe.id}
        />
      }
    }
    )}
  </div>
}
