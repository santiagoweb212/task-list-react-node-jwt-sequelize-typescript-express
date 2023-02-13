import axios from "axios";
const URL = `http://localhost:3500/api/users/check-user`;


export const checkUser = async (id:string) => {
    
  try {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
      
  }
};
