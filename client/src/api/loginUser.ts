import axios from "axios";
interface UIlogin {
  email: string;
  password: string;
}
const URL = "http://localhost:3500/api/users/login";
export const loginUser = async (dataForm: UIlogin) => {
  try {
    const response = await axios.post(URL, dataForm);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
