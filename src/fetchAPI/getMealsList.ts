
import axios from "axios"
const apiKey = import.meta.env.VITE_REACT_APP_API_KEY
const webUrl = import.meta.env.VITE_SEARCH_RANDOM_URL
import {Root} from '@/interface/mealsInterface'
import { handleResponse,IResponse } from '@/util/handleResponse'

interface IGetMyMealsData extends IResponse{
      status: number | undefined
      data?: Root
    }

export const getMealsListServeices={
      getMealsList:async():Promise<IGetMyMealsData>=>{
            try{
                  const response = await axios.get(`${webUrl}?apiKey=${apiKey}&number=100`)
                  return handleResponse.success(response)
            }catch(err:any){
                  return handleResponse.error(err)
            }
      }
}






