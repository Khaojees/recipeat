import weblogo from "@/assets/Recipeat-white.svg";
import MiniSearchFormRecipes from '@/SearchForm/MiniSearchFormRecipes'
import NextPreviousBtn from "./NextPreviousBtn";
import {setShowMeals,setShowNexrPrevBtn,setSortState,useMealsListStore,setShowFilter} from '@/store/mealsStore'
import { Link } from "react-router-dom";
import NextPreviousBtnForSaveMeals from "./NextPreviousBtnForSaveMeals";
function NavBarForRecipes() {
  const {toggleFilterOff} = setShowFilter()
  const {fetchMeals} = useMealsListStore()
  const {setMealsTemp,setClearSortState} = setSortState() 
  const {myMeals} = setShowMeals()
  const {nextPrevBtn} = setShowNexrPrevBtn()
  return (
    <div className="flex flex-wrap justify-center items-center w-[100vw] sticky top-0 z-20">
            <div className='flex flex-wrap justify-between items-center bg-[#1b1b1bff] z-20 w-[100vw] px-[30px]'>
              <Link
              to={"/homepage"}
              onClick={()=>{setMealsTemp(fetchMeals.data)
                setClearSortState()
                toggleFilterOff()}}>
              
              <img
                        src={weblogo}
                        className="min-w-[120px] my-[15px] mr-[40px]"
                  />
              </Link>  
              <MiniSearchFormRecipes/>                            
            </div>        
            {(myMeals&&nextPrevBtn)&& <NextPreviousBtn />}
            {(myMeals&&!nextPrevBtn)&&  <NextPreviousBtnForSaveMeals />}
    </div>
      
  );
}

export default NavBarForRecipes;
