import { Product } from "@/core/products/interfaces/product.interface";
import React from "react";
import { FlatList } from "react-native";
import { ProductCard } from "./ProductCard";

interface Props {
  products: Product[];
  loadNextPage: () => void;
}

export const ProductList = ({ products, loadNextPage }: Props) => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};
