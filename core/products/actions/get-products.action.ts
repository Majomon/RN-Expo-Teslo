import { API_URL, productsApi } from "@/core/api/productsApi";
import { type Product } from "../interfaces/product.interface";

export const getProducts = async (limit = 20, offSet = 0) => {
  try {
    const { data } = await productsApi.get<Product[]>("/products", {
      params: {
        limit,
        offSet,
      },
    });

    return data.map((product) => ({
      ...product,
      images: product.images.map(
        (image) => `${API_URL}/files/product/${image}`
      ),
    }));
  } catch (error) {
    throw new Error("No se pudieron obtener los productos");
  }
};
