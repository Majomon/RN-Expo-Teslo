import { API_URL, productsApi } from "@/core/api/productsApi";
import { Product } from "../interfaces/product.interface";

export const getProductById = async (id: string) => {
  try {
    const { data } = await productsApi.get<Product>(`/products/${id}`);

    return {
      ...data,
      images: data.images.map((image) => `${API_URL}/files/product/${image}`),
    };
  } catch (error) {
    throw new Error(`No se encontro el producto de id: ${id}`);
  }
};
