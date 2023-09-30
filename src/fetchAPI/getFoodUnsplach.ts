
import axios from "axios"
const apiKey = import.meta.env.VITE_UNSPLACH_API_KEY
const webUrl = import.meta.env.VITE_UNSPLACH_LINK
import { handleResponse,IResponse } from '@/util/handleResponse'
import {UnsplachImage} from '@/interface/unsplachInterface'

export interface IGetUnsplachImage extends IResponse{
      status: number | undefined
      data?: UnsplachImage
    }

export const getUnsplachImageServeices={
      getUnsplachImage:async():Promise<IGetUnsplachImage>=>{
            try{
                  const response = await axios.get(`${webUrl}?orientation=landscape&client_id=${apiKey}&query=food`)
                  return handleResponse.success(response)
            }catch(err:any){
                  return handleResponse.error(err)
            }
      }
}






