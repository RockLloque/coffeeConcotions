import { Recipe } from "@/types";
import Image from "next/image";



export function Coffee({ recipe }: { recipe: Recipe }) {
  const isURL = typeof recipe?.image === 'string' && URL.canParse(recipe.image);
  return <div className="border border-white px-6 py-3" >
    <h2 className="text-center font-bold text-xl">{recipe.title}</h2>
    <div className="flex gap-3">
      {isURL && <Image src={recipe.image!} alt={recipe.title} width={640} height={480} />}
      <div>
        <p className="mb-6">{recipe.description}</p>
        {recipe.ingridients.length > 0 &&
          <>
            <h3 className="font-bold text-l"> Ingredients</h3>
            <ul>
              {recipe.ingridients.map(ingr => <li key={ingr}>{ingr}</li>)}
            </ul>
          </>
        }
      </div>
    </div>
  </div >
}
