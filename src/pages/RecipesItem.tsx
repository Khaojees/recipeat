import { useEffect, useState } from "react";
import { BsCoin } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import {mealsTypesIcon,dietOptionIcon,cuisineOptionIcon} from '@/util/optionListIcon'
import {findVulgarFraction} from '@/util/ToFraction'
import {useCurrentMeal} from '@/store/mealsStore'


const equipmentLink = import.meta.env.VITE_EQUIPMENT_LINK;
const ingredientsLink = import.meta.env.VITE_INGREDIENTS_LINK;
function RecipesItem() {
  const {currentMeal} = useCurrentMeal()

  const setServingsFunction = () =>{
    return currentMeal?.servings || 0
}

 const analyzedInstructionsFunction =() => {
  // console.log("hahah ",currentMeal!.analyzedInstructions)
  if(!currentMeal!.analyzedInstructions){    
    return []
  }
  if(currentMeal!.analyzedInstructions?.length===0){
    return []
  }
const allSteps:any[] = []
for(let i=0; i<currentMeal!.analyzedInstructions.length ; i++){
  const temp = [];

  for (let k = 0; k < currentMeal!.analyzedInstructions![i].steps!.length; k++) {
    temp.push({
      number: currentMeal?.analyzedInstructions![i].steps![k].number,
      step: currentMeal?.analyzedInstructions![i].steps![k].step,
    });
  }

  allSteps.push({
    name:currentMeal?.analyzedInstructions![i].name,
    steps:temp
  })
}
return allSteps;

}


const equipmentFunction = () => {
  // console.log("hahah ",currentMeal!.analyzedInstructions)
  if(!currentMeal!.analyzedInstructions){    
    return []
  }
  if(currentMeal!.analyzedInstructions?.length===0){
    return []
  }
  const temp:any[] = [];
  for(let m=0;m< currentMeal!.analyzedInstructions.length; m++){
  for (let k = 0; k < currentMeal!.analyzedInstructions![m].steps!.length; k++) {
    for (
      let i = 0;
      i < currentMeal!.analyzedInstructions![m].steps![k].equipment!.length;
      i++
    ) {
      if (temp.length === 0) {
        temp.push({
          id: currentMeal?.analyzedInstructions![m].steps![k].equipment![i].id,
          image:
          currentMeal?.analyzedInstructions![m].steps![k].equipment![i].image,
          name: currentMeal?.analyzedInstructions![m].steps![k].equipment![i].name,
        });
      } else {
        let count = 0;
        for (let j = 0; j < temp.length; j++) {
          if (
            temp[j].id ===
            currentMeal?.analyzedInstructions![m].steps![k].equipment![i].id
          ) {
            count++;
            break;
          }
        }
        if (count == 0) {
          temp.push({
            id: currentMeal?.analyzedInstructions![m].steps![k].equipment![i].id,
            image:
            currentMeal?.analyzedInstructions![m].steps![k].equipment![i].image,
            name: currentMeal?.analyzedInstructions![m].steps![k].equipment![i]
              .name,
          });
        }
      }
    }
  }
}
  return temp;

}

//  const equipmentFunction = () => {
//   console.log("hahah ",currentMeal!.analyzedInstructions)
//   if(!currentMeal!.analyzedInstructions){    
//     return []
//   }
//   if(currentMeal!.analyzedInstructions?.length===0){
//     return []
//   }
//   const temp:any[] = [];
//   for (let k = 0; k < currentMeal!.analyzedInstructions![0].steps!.length; k++) {
//     for (
//       let i = 0;
//       i < currentMeal!.analyzedInstructions![0].steps![k].equipment!.length;
//       i++
//     ) {
//       if (temp.length === 0) {
//         temp.push({
//           id: currentMeal?.analyzedInstructions![0].steps![k].equipment![i].id,
//           image:
//           currentMeal?.analyzedInstructions![0].steps![k].equipment![i].image,
//           name: currentMeal?.analyzedInstructions![0].steps![k].equipment![i].name,
//         });
//       } else {
//         let count = 0;
//         for (let j = 0; j < temp.length; j++) {
//           if (
//             temp[j].id ===
//             currentMeal?.analyzedInstructions![0].steps![k].equipment![i].id
//           ) {
//             count++;
//             break;
//           }
//         }
//         if (count == 0) {
//           temp.push({
//             id: currentMeal?.analyzedInstructions![0].steps![k].equipment![i].id,
//             image:
//             currentMeal?.analyzedInstructions![0].steps![k].equipment![i].image,
//             name: currentMeal?.analyzedInstructions![0].steps![k].equipment![i]
//               .name,
//           });
//         }
//       }
//     }
//   }
//   return temp;
// }

// filterIcon----------
 
const mealsTypeIconFilterFunction =()=>{
  const tempIcon:any[] = []
  Object.keys(mealsTypesIcon).map((e)=>{
    for(let i =0 ; i<currentMeal!.dishTypes!.length ; i++){
      if(e.toLowerCase().replace(/\s/g, '') === currentMeal?.dishTypes![i].toLowerCase().replace(/\s/g, '')){
        return tempIcon.push(e)
      }
    }
  })  
  // console.log(tempIcon)  
  return tempIcon
}

 const cuisineTypeIconFilterFunction = ()=>{
  const tempIcon:any[] = []
  Object.keys(cuisineOptionIcon).map((e)=>{
    for(let i =0 ; i<currentMeal!.cuisines!.length ; i++){
      if(e.toLowerCase().replace(/\s/g, '') === currentMeal?.cuisines![i].toLowerCase().replace(/\s/g, '')){
        return tempIcon.push(e)
      }
    }
  })  
  // console.log(tempIcon)  
  return tempIcon
}

 const dietsTypeIconFilterFunction=()=>{
  const tempIcon:any[] = []
  Object.keys(dietOptionIcon).map((e)=>{
    for(let i =0 ; i<currentMeal!.diets!.length ; i++){
      if(e.toLowerCase().replace(/\s/g, '') === currentMeal?.diets![i].toLowerCase().replace(/\s/g, '')){
        return tempIcon.push(e)
      }
    }
  })  
  // console.log(tempIcon)  
  return tempIcon
}

  const [servings, setServings] = useState(setServingsFunction());
  const [btnState, setBtnState] = useState(true); //
  const [analyzedInstructions,setAnalyzedInstructions] = useState(analyzedInstructionsFunction());
  const [equipment,setEquipment] = useState(equipmentFunction());

  // filterIcon----------
  const [mealsTypeIconFilter,setMealsTypeIconFilter] = useState(mealsTypeIconFilterFunction())
  const [cuisineTypeIconFilter,setCuisineTypeIconFilter] = useState(cuisineTypeIconFilterFunction())
  const [dietsTypeIconFilter,setDietsTypeIconFilter] = useState(dietsTypeIconFilterFunction())

useEffect(()=>{
  setServings(setServingsFunction())
  setAnalyzedInstructions(analyzedInstructionsFunction())
  setEquipment(equipmentFunction())
  setMealsTypeIconFilter(mealsTypeIconFilterFunction())
  setCuisineTypeIconFilter(cuisineTypeIconFilterFunction())
  setDietsTypeIconFilter(dietsTypeIconFilterFunction())
  // setTimeout(() => {
  //   console.log("all steps = ",analyzedInstructions)
  // }, 200);
},[currentMeal])
  
  function createMarkup(item:any):{ __html: any}{
    return { __html: item || "" };
  }

  return (
    <div>      
      <div className="flex flex-col justify-center items-center w-[100vw]">
        {/* ---------------------------title+img+icon----------------------------- */}
        <div className="flex flex-col justify-center items-center w-[90vw] relative">
          <div className="flex flex-col justify-center items-center mt-[20px] text-[1.4em] font-semibold w-[80vw] text-center">
            {currentMeal?.title}
          </div>

          <div className="flex justify-center items-center flex-col w-[90vw]
          sm:flex-row">
            {/* ---------------------------icon--------------------------------- */}
            <div className="flex flex-row justify-center items-center">  
              <div className="flex justify-center items-center flex-wrap max-h-[60vh] 
               sm:flex-col sm:items-start sm:mr-[5px] sm:flex-wrap-reverse">
                  {mealsTypeIconFilter.length>0 && mealsTypeIconFilter.map((item,index)=>{
                    return <div key={index} className="m-[5px]">
                      <img className="w-[60px] rounded-[50%] border-2 border-dashed border-green-400 bg-white
                      " 
                      src={mealsTypesIcon[item]}/>                  
                    </div>                  
                  })}
                  {cuisineTypeIconFilter.length>0 && cuisineTypeIconFilter.map((item,index)=>{
                    return <div key={index} className="m-[5px]">
                      <img className="w-[60px] rounded-[50%] border-2 border-dashed border-orange-400 bg-white
                      " 
                      src={cuisineOptionIcon[item]}/>                  
                    </div>                  
                  })}
                  {dietsTypeIconFilter.length>0 && dietsTypeIconFilter.map((item,index)=>{
                    return <div key={index} className="m-[5px]">
                      <img className="w-[60px] rounded-[50%] border-2 border-dashed border-pink-400 bg-white
                      " 
                      src={dietOptionIcon[item]}/>                  
                    </div>                  
                  })}
                     
              </div>
            </div>
            {/* ------------------------------img--------------------------------- */}
            <div className="flex justify-center items-center my-[10px]">              
              <img src={currentMeal?.image!} className="max-w-[650px] min-w-[200px] min-h-[45vh] w-[70vw] rounded-[10px] drop-shadow-lg object-cover
              sm:w-[55vw]" />              
            </div>
            
            {/* --------------------------side detail--------------------------  */}
            <div className="flex flex-wrap justify-center items-center text-center w-[100vw] px-[30px] 
            sm:w-[150px] sm:px-[15px] sm:flex-col">

                <div className="flex flex-col text-[0.9em] m-[10px]
                sm:m-0 sm:py-[10px] sm:border-b-[1px] sm:border-black">
                  <p>Estimated price</p>
                  <div className="flex justify-center items-center text-[1.5em] font-semibold">
                    <BsCoin className="text-orange-600"/>
                    <p className="pl-[5px] text-orange-600">{(currentMeal?.pricePerServing!/100).toFixed(2)}</p>
                  </div>
                  <p>per serving</p>                  
                </div>

                <div className="flex flex-col text-[0.9em] m-[10px]
                sm:m-0 sm:py-[10px] sm:border-b-[1px] sm:border-black">
                  <p>Ready in</p>
                  <div className="flex justify-center items-center text-[1.5em]">                    
                    {Math.floor(currentMeal?.readyInMinutes!/60)===0
                    ? <div className="">  
                        <div className="flex justify-center items-center text-green-600">
                        <AiOutlineClockCircle className="pr-[5px] text-[1.3em]"/>
                        <span className="font-semibold">{`${currentMeal?.readyInMinutes}`}</span>
                      </div>                        
                        <p className="text-[0.6em]">Minutes</p>
                    </div> 
                    :
                    <div className="flex flex-col justify-center items-center">
                      <div className="flex justify-center items-center">
                        <AiOutlineClockCircle className="pr-[5px] text-[1.3em] text-green-600"/>
                        <p className="font-semibold pr-[5px] text-green-600">{`${Math.floor(currentMeal?.readyInMinutes!/60)}`}</p>
                        <p className="text-[0.6em]">Hour</p>
                      </div>
                      <div className="flex justify-center items-center">
                        {currentMeal?.readyInMinutes!%60!==0 && 
                        <p className="font-semibold pr-[5px] text-green-600">{`${currentMeal?.readyInMinutes!%60}`}</p>}
                        {currentMeal?.readyInMinutes!%60!==0 && 
                        <p className="text-[0.6em]">Minutes</p>}
                      </div>                     
                    </div>
                  }
                    
                  </div>
                                 
                </div>

                <div className="flex flex-col text-[0.9em] m-[10px]
                sm:m-0 sm:py-[10px]">
                  <div className="flex justify-center items-center text-[1.5em] font-semibold">
                    <MdOutlineHealthAndSafety className="text-pink-600"/>
                    <p className="pl-[5px] text-pink-500">{currentMeal?.healthScore}</p>                    
                  </div>    
                  <p>Health score</p>                                
                </div>
                
              </div>                     
          </div>
        </div>
        {/* ----------------------------------------summary------------------------------------    */}
        <div className="w-[85vw] py-[20px] border-b-2">
                <p className="text-[1.2em] font-semibold">Summary</p>
                <div className="px-[20px]" dangerouslySetInnerHTML={createMarkup(currentMeal?.summary)} />
            </div>
        
        {/* ---------------------------Ingredients----------------------------- */}
        <div className="w-[85vw] py-[20px] border-b-2">
          <p className="text-[1.2em] font-semibold">Ingredients</p>
          <div className="flex flex-col justify-between items-center
          sm:flex-row">
            <div className="drop-shadow-md">
              <label className="h-[30px] w-[70px] bg-sky-500/100 px-[10px] py-[5px] rounded-l-[15px] text-white">Servings:</label>
              <input
              className="h-[30px] w-[95px] bg-slate-100 px-[15px] py-[5px] rounded-r-[15px]
              focus:outline-none focus:ring-1 focus:ring-slate-300 focus:ring-inset"
                type="number"
                value={servings}
                onChange={(e) => setServings(parseInt(e.target.value))}
              />
            </div>
            <div className="flex my-[10px] drop-shadow-md">
              <button
                className={
                  btnState
                    ? "h-[30px] w-[70px] bg-sky-500 px-[10px] rounded-l-[15px] text-white"
                    : "h-[30px] w-[70px] bg-slate-100 px-[10px] rounded-l-[15px] text-black"
                }
                onClick={() => setBtnState(true)}
              >
                metric
              </button>
              <button
                className={
                  btnState
                    ? "h-[30px] w-[70px] bg-slate-100 px-[10px] rounded-r-[15px] text-black"
                    : "h-[30px] w-[70px] bg-sky-500 px-[10px] rounded-r-[15px] text-white"
                }
                onClick={() => setBtnState(false)}
              >
                US
              </button>
            </div>
          </div>
          <div className="flex flex-wrap w-[100%]">
            {currentMeal?.extendedIngredients!.map((item, index) => {
              return (
                  // {findVulgarFraction(0.6666).left!==0 && findVulgarFraction(7.6666).left}
                  // <span dangerouslySetInnerHTML={createMarkup(findVulgarFraction(7.6666).entityCode)} />
                <div
                  key={index}
                  className="m-[20px] flex flex-col justify-between items-center"
                >
                  <p>{item.nameClean}</p>
                  <img src={`${ingredientsLink}/${item.image}`} className="max-w-[200px]"/>
                  <div className="text-[1.2em]">
                  {item.measures!.metric!.unitShort === "servings"
                  ? <p>some</p>
                  :
                  <p>
                    {btnState
                      ?<span dangerouslySetInnerHTML={createMarkup(findVulgarFraction((servings! * item.measures!.metric!.amount!)/currentMeal?.servings!))} />
                      : <span dangerouslySetInnerHTML={createMarkup(findVulgarFraction((servings! * item.measures!.us!.amount!)/currentMeal?.servings!))} />
                      }
                        {" "}
                    {btnState
                      ? item.measures!.metric!.unitShort
                      : item.measures!.us!.unitShort}
                  </p>
                  }  
                  </div>                                  
                </div>
              );
            })}
          </div>
        </div>
        {/* ---------------------------Equipments----------------------------- */}
        <div className="w-[85vw] py-[20px] border-b-2">
          <p className="text-[1.2em] font-semibold">Equipments</p>
          <div className="flex flex-wrap w-[100%]">
            {equipment.map((item, index) => {
              return (
                <div
                  key={index}
                  className="m-[20px] flex flex-col justify-end items-center"
                >                  
                  <img src={`${equipmentLink}/${item.image}`} className="max-w-[200px]"/>
                  <p>{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
        {/* ---------------------------Instructions----------------------------- */}
        <div className="w-[85vw] py-[20px] border-b-2">
          
          <p className="text-[1.2em] font-semibold">Instructions</p>
          <ul className="px-[20px]">
            {analyzedInstructions.map((item, index) => {
              return <div key={index}>
                  {item.name && <span className="font-semibold pr-[5px]">{`Main Step ${index+1}.`}</span>}
                  {item.name}
                  {item.steps.map((e:any,i:any)=>{
                    return <div key={i}>
                      <span className="font-semibold pr-[5px]">{e.number}.</span>
                      {e.step}
                    </div>
                  })}
              </div>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default RecipesItem;
