import { Link} from 'react-router-dom'
import ScrollToTop from "@/util/SrollToTop";
import {ImealsData} from '@/interface/mealsInterface'
import { BsCoin } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { FaLongArrowAltUp,FaLongArrowAltDown } from "react-icons/fa";
import { useEffect} from 'react';
import {setSortState,setShowMeals,useCurrentMeal,setShowNexrPrevBtn} from '@/store/mealsStore'
import trachIcon from "@/assets/trachIcon.svg";
function SaveMealsItems() {
      const {showMyMeals} = setShowMeals()
      const {setCurrentMeal} = useCurrentMeal()
      const {showNextPrevBtnForSaveMeals} = setShowNexrPrevBtn()
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
      } = setSortState()


      const setMealState = (e:ImealsData)=>{
            showMyMeals()
            // console.log("current = ",e)
            setCurrentMeal(e)   
            showNextPrevBtnForSaveMeals()   
      }
      const deleteMeal=(e:ImealsData)=>{
            // console.log("delete")
            const deleteTemp = saveMealsItem.filter((item)=>{
                  return item.id !== e.id
            })
            setSaveMealsItem(deleteTemp)
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
                  setSaveMealsItem(saveMealsItem.sort((a, b) => b.pricePerServing! - a.pricePerServing!))
            }
            if(price && !sortPriceType){
                  // console.log("price up")
                  setSaveMealsItem(saveMealsItem.sort((a, b) => a.pricePerServing! - b.pricePerServing!))
            }
            if(cookingTime && sortCookingTimeType){
                  // console.log("minute down")
                  setSaveMealsItem(saveMealsItem.sort((a, b) => b.readyInMinutes! - a.readyInMinutes!))
            }
            if(cookingTime && !sortCookingTimeType){
                  // console.log("minute up")
                  setSaveMealsItem(saveMealsItem.sort((a, b) => a.readyInMinutes! - b.readyInMinutes!))
            }
            if(health && sortHealthType){
                  // console.log("health down")
                  setSaveMealsItem(saveMealsItem.sort((a, b) => b.healthScore! - a.healthScore!))
            }
            if(health && !sortHealthType){
                  // console.log("health up")
                  setSaveMealsItem(saveMealsItem.sort((a, b) => a.healthScore! - b.healthScore!))
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
          {saveMealsItem.map((item,index)=>{
                      return (
                        <div className='relative mx-[12px]' key={`meals name ${index}`}>
                              <div className='hover:cursor-pointer absolute top-[25px] right-[15px] z-10 text-white'
                                        onClick={()=>deleteMeal(item)}>                                                
                                          <img src={trachIcon} className='w-[20px] transition duration-300 ease-in-out hover:scale-[1.2]'/>
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
                            hover:scale-[1.005] hover:ring-[3px] hover:ring-pink-400'
                            >
                                  <div className='flex w-[320px]'>                                   
                                        <img src={item.image!} className='h-[350px] object-cover rounded-[5px]'/>
                                  </div>
                                  <div className='flex flex-col'>
                                  <div className='bg-pink-500 w-[320px] absolute bottom-0 opacity-90 flex flex-col items-center justify-between rounded-b-[5px] py-[10px] px-[10px] text-center text-white'>
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

export default SaveMealsItems