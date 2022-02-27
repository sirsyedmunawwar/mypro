import axios from "axios";
const url = "https://ishopserver22.herokuapp.com/product/product";
export const Content = async () => {
  try {
    let response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log("Error while calling getPosts API ", error);
  }
};
