import axios from "axios";
const url = "http://localhost:5000/";
export const Content = async () => {
  try {
    let response = await axios.get(`http://localhost:3000/api/product`);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPosts API ", error);
  }
};
