import axios from "../axios";
import { API_URLS } from '../constants/config';

export const HealthyDietsWeightLoss=async()=>{
    try {
        const response=await axios.get(API_URLS.WEIGHT_LOSS);
        console.log(response.data,"sghfvsgdvgf");
        return response.data;
    } catch (error) {
        console.error("Error fetching meal plans weightloss");
        throw error;
    }
}
export const HealthyDietsWeightGain=async()=>{
    try {
        const response=await axios.get(API_URLS.WEIGHT_GAIN);
        return response.data;
    } catch (error) {
        console.error("Error fetching meal plans weight gain");
        throw error;
    }
}
export const HealthyDietPcod=async()=>{
    try {
        const response=await axios.get(API_URLS.PCOD);
        return response.data;
    } catch (error) {
        console.error("Error fetching meal plans weight gain");
        throw error;
    }
}