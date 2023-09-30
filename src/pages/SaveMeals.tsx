// import { tempData } from "@/util/data";
import NavBarForRecipes from "./NavBarForRecipes";
import ScrollToTop from "@/util/SrollToTop";
import SaveMealsItems from "./SaveMealsItems";



function SaveMeals() {

  return (
    <div className="flex flex-col relative">      
      <ScrollToTop />
      <NavBarForRecipes />
      <SaveMealsItems/>
    </div>
  );
}

export default SaveMeals;
