// import { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  useMealsListStore,
  setShowSearch,
} from "@/store/mealsStore";
import { ImealsData } from "@/interface/mealsInterface";

export const useSearchForm = () => {
  const { hideSearch } = setShowSearch();

  const { setMealsList, fetchMeals } = useMealsListStore();
  const { register, handleSubmit } = useForm();
  const filterData = (
    fmeals: ImealsData[],
    cuisinesValue: string,
    dietsValue: string,
    mealsValue: string,
    searchValue: string
  ): Promise<ImealsData[]> => {
    let huhuhu = fmeals
      .filter((item) => {
        let fmealsTemp = item.title || "abcdefghhhhhhhh";
        if (
          fmealsTemp
            .toLowerCase()
            .replace(/\s/g, "")
            .indexOf(searchValue.toLowerCase().replace(/\s/g, "")) >= 0
        ) {
          return item;
        }
      })
      .filter((item) => {
        let cuisinesTemp = item.cuisines || [];
        let cuisinesValuee
        if(typeof cuisinesValue === "undefined"){
            // console.log("DEFAULT")
            cuisinesValuee ="DEFAULT"
        }else{
            // console.log("cuisinesValue")
            cuisinesValuee = cuisinesValue
        }
        
        if (cuisinesValuee === "DEFAULT") {
          return item;
        } else if (cuisinesTemp.indexOf(cuisinesValue) >= 0) {
          // console.log(cuisinesTemp, " and ", cuisinesValue);
          return item;
        }
      })
      .filter((item) => {
        let dietsTemp = item.diets || [];
        let dietsValuee
        if(typeof dietsValue === "undefined"){
            // console.log("DEFAULT")
            dietsValuee ="DEFAULT"
        }else{
            // console.log("dietsValue")
            dietsValuee = dietsValue
        }
        for (let i = 0; i < dietsTemp.length; i++) {
          dietsTemp[i] = dietsTemp[i].toLowerCase().replace(/\s/g, "");
        }
        let dietsValueLowerCase = (
            dietsValuee.slice(0, 1).toLowerCase() + dietsValuee.slice(1)
        ).replace(/\s/g, ""); //Lowercase 1st letter        
        if (dietsValuee === "DEFAULT") {
          return item;
        } else if (dietsTemp.indexOf(dietsValueLowerCase) >= 0) {
          // console.log(dietsTemp, " and ", dietsValueLowerCase);
          return item;
        }
      })
      .filter((item) => {
        let mealsTemp = item.dishTypes || [];
        let mealsValuee
        if(typeof mealsValue === "undefined"){            
            // console.log("DEFAULT")
            mealsValuee ="DEFAULT"
        }else{            
            // console.log("mealsValue")
            mealsValuee = mealsValue
        }
        for (let i = 0; i < mealsTemp.length; i++) {
          mealsTemp[i] = mealsTemp[i].toLowerCase().replace(/\s/g, "");
        }
        let mealsValueLowerCase = (
            mealsValuee.slice(0, 1).toLowerCase() + mealsValuee.slice(1)
        ).replace(/\s/g, ""); //Lowercase 1st letter        
        if (mealsValuee === "DEFAULT") {
          return item;
        } else if (mealsTemp.indexOf(mealsValueLowerCase) >= 0) {
          // console.log(mealsTemp, " and ", mealsValueLowerCase);
          return item;
        }
      });
    return Promise.resolve(huhuhu);
  };

  const onSubmit = async (e: any) => {
    setMealsList({
      data: [],
      loading: true,
      error: null,
    });
    let cuisinesValue = e.cuisinesValue;
    let dietsValue = e.dietsValue;
    let mealsValue = e.mealsValue;
    let searchValue = e.searchValue;
    hideSearch();
    // console.log(cuisinesValue, dietsValue, mealsValue, searchValue);
    // const filterMeals = await filterData(fetchMeals.data,cuisinesValue,dietsValue,mealsValue,searchValue);

    setMealsList({
      data: await filterData(
        fetchMeals.data,
        cuisinesValue,
        dietsValue,
        mealsValue,
        searchValue
      ),
      loading: false,
      error: null,
    });
  };

  return {
    fieldSearchValue: register("searchValue"),
    fieldMealsValue: register("mealsValue"),
    fieldCuisinesValue: register("cuisinesValue"),
    fieldDietsValue: register("dietsValue"),
    submit: handleSubmit(onSubmit),
  };
};
