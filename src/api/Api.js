// import axios from "axios";

// export async function productsData() {
//   const products = await axios.get(
//     "https://fakestoreapiserver.reactbd.com/products"
//   );
//   return products;
// }
import axios from "axios";

export async function productsData() {
  try {
    const response = await axios.get(
      "https://fakestoreapiserver.reactbd.com/products"
      // "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch (error) {
    console.error("Error retrieving products:", error);
    throw error; // Rethrow the error to handle it in the calling code
  }
}
