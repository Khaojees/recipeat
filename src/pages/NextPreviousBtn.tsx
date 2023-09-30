
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { Link} from 'react-router-dom'
import {useMealsListStore} from '@/store/mealsStore'
import {useCurrentMeal} from '@/store/mealsStore'
import { useEffect, useState } from "react";
const NextPreviousBtn = () => {
      const {meals} = useMealsListStore()
      const {currentMeal,setCurrentMeal} = useCurrentMeal()
      const nextItem = ()=>{
            for(let i=0 ; i<meals.data.length ; i++){
              if(currentMeal?.id === meals.data[i].id){
                if(i+1 === meals.data.length){
                  // console.log("nextItem  = ",i)
                  return meals.data[0]
                }else{
                  // console.log("nextItem  = ",i)
                  return meals.data[i+1]
                }
              }
            }
          }
          const previousItem = ()=>{
            for(let i=0 ; i<meals.data.length ; i++){
              if(currentMeal?.id === meals.data[i].id){
                if(i-1 === -1){
                  // console.log("previousItem  = ",i)
                  return meals.data[meals.data.length-1]
                }else{
                  // console.log("previousItem  = ",i)
                  return meals.data[i-1]
                }
              }
            }
          }
      const goPrevious=()=>{
            setCurrentMeal(previousItem()!)
          }
          const goNext=()=>{
            setCurrentMeal(nextItem()!)
          }
          const [nextTitle,setNextTitle] = useState(nextItem()?.title)
          const [previousTitle,setPreviousTitle] = useState(previousItem()?.title)
          useEffect(()=>{
            setNextTitle(nextItem()?.title)
            setPreviousTitle(previousItem()?.title)
          },[currentMeal])
  return (
    <div className="flex w-[100vw] justify-between items-start relative">
      <Link
      onClick={()=>goPrevious()}
      to={`/recipes/${previousTitle?.replace(/\s/g, '').replace(/\//g, '')}`}>
        <div className="z-10 w-[35px] absolute left-[0px]
        sm:fixed sm:left-0 sm:top-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-[100vh] sm:bg-gradient-to-t sm:from-white sm:via-purple-100 sm:to-white sm:from-20% sm:via-50% sm:to-80%
        sm:w-[2.5vw]
        hover:cursor-pointer hover:via-purple-200"
        >
          <p className="hidden
          sm:rotate-[270deg] sm:block">recipes</p>
          <div className="w-[35px] p-[10px] rounded-r-[40px] flex flex-col justify-center items-end bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white
          sm:mt-[25px] sm:mb-[30px]">
            <AiOutlineDoubleLeft className="text-[1em]
            " />
          </div>
          <p className="hidden
          sm:rotate-[270deg] sm:block">Previous</p>
        </div>
        </Link>
        
        <Link
         onClick={()=>goNext()}
         to={`/recipes/${nextTitle?.replace(/\s/g, '').replace(/\//g, '')}`}>
        <div className="z-10 w-[35px] absolute right-[0px]
        sm:fixed sm:right-0 sm:top-0 sm:flex sm:flex-col sm:justify-center sm:items-center sm:h-[100vh] sm:bg-gradient-to-t sm:from-white sm:via-purple-100 sm:to-white sm:from-20% sm:via-50% sm:to-80%
        sm:w-[2.5vw]
        hover:cursor-pointer hover:via-purple-200"
        >
          <p className="hidden
          sm:rotate-90 sm:block">Next</p>
          <div className="w-[35px] p-[10px] rounded-l-[40px] flex flex-col justify-center items-start bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white
          sm:mt-[15px] sm:mb-[25px]">
            <AiOutlineDoubleRight className="text-[1em]
            " />
          </div>
          <p className="hidden
          sm:rotate-90 sm:block">recipes</p>
        </div>
        </Link>
    </div>
  )
}

export default NextPreviousBtn