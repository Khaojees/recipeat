// import { tempData } from "@/util/data";
import NavBarForRecipes from "./NavBarForRecipes";
import ScrollToTop from "@/util/SrollToTop";
import RecipesItem from "./RecipesItem";
import Meals from "./Meals";
import {setShowMeals} from '@/store/mealsStore'


function Recipes() {
const {myMeals} = setShowMeals()

  return (
    <div className="flex flex-col relative">      
      <ScrollToTop />
      <NavBarForRecipes />
      
      {myMeals? <RecipesItem/>:<Meals/>}
    </div>
  );
}

export default Recipes;
