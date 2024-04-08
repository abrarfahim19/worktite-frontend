import { apiGet } from "@/config/common/api"

export const getProfile = async ()=>{
    try{
        return await apiGet('/me')
    } catch (e){
        console.log(e);
        
    }

}