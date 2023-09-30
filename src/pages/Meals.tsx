import { Link} from 'react-router-dom'
import ScrollToTop from "@/util/SrollToTop";
import {ImealsData} from '@/interface/mealsInterface'
import { BsCoin } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaLongArrowAltUp,FaLongArrowAltDown } from "react-icons/fa";
import { useEffect, useState} from 'react';
import {setSortState,setShowMeals,useCurrentMeal,useMealsListStore,setShowNexrPrevBtn} from '@/store/mealsStore'
import heartIcon from "@/assets/heartIcon.svg";
import heartIconSave from "@/assets/heartIconSaved.svg";
function Meals() {
      const {showMyMeals} = setShowMeals()
      const { meals } = useMealsListStore()
      const {setCurrentMeal} = useCurrentMeal()
      const {showNextPrevBtnForMeals} = setShowNexrPrevBtn()      
      // const [hideHeart,setHideHeart] = useState(true)
      const {
            saveMealsItem,setSaveMealsItem,
            price,
            setPrice,
            cookingTime,
            setCookingTime,
            health,setHealth,
            sortPriceType,
            setSortPriceType,
            sortCookingTimeType,
            setSortCookingTimeType,
            sortHealthType,
            setSortHealthType,
            // clearSortSetting,
            mealsTemp,setMealsTemp
      } = setSortState()
      const [showHeart,setShowHeart] = useState(saveMealsItem.map((e)=>{return e.id}))

      useEffect(()=>{
            setMealsTemp(meals.data)
      },[meals])

      const setMealState = (e:ImealsData)=>{
            showMyMeals()
            // console.log("current = ",e)
            setCurrentMeal(e)      
            showNextPrevBtnForMeals()
      }
      const saveMeal=(e:ImealsData)=>{
            // console.log("Savvvve")
            if(saveMealsItem.indexOf(e)<0){
            const saveItem = saveMealsItem            
                  saveItem.push(e)                  
            setSaveMealsItem(saveItem)
            setShowHeart(saveMealsItem.map((e)=>{return e.id}))
            // setTimeout(() => {
            //       console.log("heart",showHeart)
            // }, 500);
      }   
      }

      const sortByPrice=()=>{
            if(price || cookingTime || health){
                  if(price){
                        setSortPriceType(!sortPriceType)
                  }else{
                        setSortPriceType(true)
                  }
                  setSortCookingTimeType(true)
                  setSortHealthType(true)
            }
            setPrice(true)
            setCookingTime(false)
            setHealth(false)            
      }

      const sortCookingTime=()=>{
            if(price || cookingTime || health){
                  if(cookingTime){
                        setSortCookingTimeType(!sortCookingTimeType)
                  }else{
                        setSortCookingTimeType(true)
                  }
                  setSortPriceType(true)
                  setSortHealthType(true)
            }
            setPrice(false)
            setCookingTime(true)
            setHealth(false) 
      }

      const sortHealth=()=>{
            if(price || cookingTime || health){
                  if(health){
                        setSortHealthType(!sortHealthType)
                  }else{
                        setSortHealthType(true)
                  }
                  setSortPriceType(true)
                  setSortCookingTimeType(true)
            }
            setPrice(false)
            setCookingTime(false)
            setHealth(true)
      }
      
      useEffect(()=>{
            if(price && sortPriceType){
                  // console.log("price down")
                  setMealsTemp(mealsTemp.sort((a, b) => b.pricePerServing! - a.pricePerServing!))
            }
            if(price && !sortPriceType){
                  // console.log("price up")
                  setMealsTemp(mealsTemp.sort((a, b) => a.pricePerServing! - b.pricePerServing!))
            }
            if(cookingTime && sortCookingTimeType){
                  // console.log("minute down")
                  setMealsTemp(mealsTemp.sort((a, b) => b.readyInMinutes! - a.readyInMinutes!))
            }
            if(cookingTime && !sortCookingTimeType){
                  // console.log("minute up")
                  setMealsTemp(mealsTemp.sort((a, b) => a.readyInMinutes! - b.readyInMinutes!))
            }
            if(health && sortHealthType){
                  // console.log("health down")
                  setMealsTemp(mealsTemp.sort((a, b) => b.healthScore! - a.healthScore!))
            }
            if(health && !sortHealthType){
                  // console.log("health up")
                  setMealsTemp(mealsTemp.sort((a, b) => a.healthScore! - b.healthScore!))
            }
      },[price,cookingTime,health,sortPriceType,sortCookingTimeType,sortHealthType])

  return (
      <div>
            <ScrollToTop />
            <div className='flex flex-wrap w-[100vw] mt-[20px] px-[30px] items-center'>
                  <p className='font-semibold px-[10px]'>Sort By</p>
                  <button className={`flex items-center px-[10px] py-[5px] m-[5px] ${price? "bg-emerald-600":"bg-slate-400"} active:bg-emerald-700 text-[0.8em] text-white h-[28px] rounded-[5px]`}
                  onClick={()=>sortByPrice()}
                  >
                        Price &nbsp;
                        {!sortPriceType && <FaLongArrowAltUp/>}
                        {sortPriceType && <FaLongArrowAltDown/>}
                        
                  </button>
                  <button className={`flex items-center px-[10px] py-[5px] m-[5px] ${cookingTime? "bg-emerald-600":"bg-slate-400"} active:bg-emerald-700 text-[0.8em] text-white h-[28px] rounded-[5px]`}
                  onClick={()=>sortCookingTime()}
                  >
                        Cooking time &nbsp;
                        {!sortCookingTimeType && <FaLongArrowAltUp/>}
                        {sortCookingTimeType && <FaLongArrowAltDown/>}
                        </button>
                  <button className={`flex items-center px-[10px] py-[5px] m-[5px] ${health? "bg-emerald-600":"bg-slate-400"} active:bg-emerald-700 text-[0.8em] text-white h-[28px] rounded-[5px]`}
                  onClick={()=>sortHealth()}
                  >
                        Health score &nbsp;
                        {!sortHealthType && <FaLongArrowAltUp/>}
                        {sortHealthType && <FaLongArrowAltDown/>}
                        </button>
                  {/* <button className={`flex items-center px-[10px] py-[5px] mx-[5px] bg-red-500 text-[0.8em] text-white h-[28px] rounded-[5px] active:bg-red-600`}
                  onClick={()=>clearSort()}
                  >
                        Clear
                        </button> */}
            </div>
      <div className='flex flex-wrap justify-center items-center w-[100vw] mt-[10px]'>      
          {mealsTemp.map((item,index)=>{
                      return (
                        <div className='relative mx-[12px]' key={`meals name ${index}`}   >
                              {/* ------------------------heart Icon----------------------- */}
                              <div className={`hover:cursor-pointer absolute top-[25px] right-[15px] z-20 text-white`}
                                        onClick={()=>saveMeal(item)}>                                                
                                          <img src={showHeart.indexOf(item.id)<0? heartIcon:heartIconSave} className='w-[30px] transition duration-300 ease-in-out hover:scale-[1.2]'/>
                                        </div>
                              <Link
                        to={`/recipes/${item.title?.replace(/\s/g, '').replace(/\//g, '')}`}                
                        onClick={()=>setMealState(item)}
                        >
                            <div
                            className='flex flex-col w-[320px] h-[350px] my-[12px] relative drop-shadow-md rounded-[5px]
                            hover:cursor-pointer 
                            transition duration-300 ease-in-out
                            hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.4)]
                            hover:scale-[1.005] hover:ring-[3px] hover:ring-emerald-500'
                            >
                                  <div className='flex w-[320px]'>                                   
                                        <img src={item.image!} className='h-[350px] object-cover rounded-[5px]'/>
                                  </div>
                                  <div className='flex flex-col'>
                                    {/* <div className='absolute top-[0px] rounded-[5px] flex flex-col items-center justify-between w-[320px] h-[175px]                                
                                  transition duration-300 ease-in-out
                                  bg-gradient-to-b from-emerald-800 from-10% via-transparent via-25% opacity-50'></div>
                                  <div className={`absolute bottom-[0px] rounded-[5px] flex items-end justify-between w-[320px] h-[175px]                                
                                  transition duration-300 ease-in-out
                                  bg-gradient-to-t from-emerald-800 from-20% via-transparent via-60% opacity-60
                                  `}></div>  */}
                                  <div className='bg-emerald-700 w-[320px] absolute bottom-0 opacity-90 flex flex-col items-center justify-between rounded-b-[5px] py-[10px] px-[10px] text-center text-white'>
                                    <div className='flex flex-col w-[280px] items-center justify-between'>
                                    <div className='w-[100%]'>
                                          <p className={`text-[1em]`}>{item.title}</p>   
                                          <hr className='my-[3px]'/>
                                    </div>                                       
                                          <div className='flex items-center justify-center'>
                                                <div className='px-[8px] flex items-center justify-center border-r-[1px]'>
                                                      <BsCoin className="mr-[5px]"/>
                                                      {(item?.pricePerServing!/100).toFixed(2)}
                                                </div>
                                                <div className='px-[8px] flex items-center justify-center border-r-[1px]'>
                                                      <AiOutlineClockCircle className="mr-[5px]"/>
                                                      {Math.floor(item?.readyInMinutes!/60)!==0 && `${Math.floor(item?.readyInMinutes!/60)} Hr : `}
                                                      {`${item?.readyInMinutes!%60} Min`}
                                                </div>
                                                <div className='px-[8px] flex items-center justify-center'>
                                                      <MdOutlineHealthAndSafety className="mr-[5px]"/>
                                                      {item?.healthScore}
                                                </div>
                                        </div>  
                                    </div>                                                                        
                                  </div>
                                  </div>
                                  
                            </div>
                        </Link>
                        </div>
                        
                      )                
          })}
      </div>
  </div>
  )
}

export default Meals