import { Recipe } from "@/types";
import Image from "next/image";



export function Coffee({ recipe }: { recipe: Recipe }) {
  const isURL = typeof recipe?.image === 'string' && URL.canParse(recipe.image);
  return <div>
    <h2>{recipe.title}</h2>
    <p>{recipe.description}</p>
    {isURL && <Image src={recipe.image!} alt={recipe.title} width={640} height={480} />}
  </div>
}
