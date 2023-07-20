import recipedata from "./recipe.json";

function RecipeName() {
  console.log(recipedata);
  const recipeName = recipedata.map((data) => 
    <div key={data.name}>
      <h1>{data.name}</h1>
    </div>
  );
  
  return recipeName;
}

export default RecipeName;

//import return the name of the recipe as a level 1 header