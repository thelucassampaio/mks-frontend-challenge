"use client";

import { fetchProducts } from "@/lib/products";
import type { Product } from "@/lib/products";

import ProductCard from "./ProductCard";

import "./products.scss";
import ProductsListLoading from "./ProductsListLoading";

export default function ProductsList() {
  const { isPending, error, data } = fetchProducts();

  if (isPending) return <ProductsListLoading />;

  if (error) return "Um erro ocorreu: " + error.message;

  console.log(data.products);

  return (
    <div>
      <ProductsListLoading />
      {data.products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
