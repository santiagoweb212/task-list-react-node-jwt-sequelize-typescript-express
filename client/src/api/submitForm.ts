import axios from "axios";

//las  url guardar en environment
const URL = "http://localhost:3500/api/users/register";
export interface FormValues {
    name?: string;
    lastName?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }
export const submitForm = async (formData:FormValues) => {
    
    
  try {
    const response = await axios.post(URL, formData);
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
};
