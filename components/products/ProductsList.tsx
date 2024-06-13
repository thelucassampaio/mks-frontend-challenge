"use client";

import { useProducts } from "@/lib/hooks/useProducts";
import type { Product } from "@/lib/products";

import ProductCard from "./ProductCard";
import ProductsListLoading from "./ProductsListLoading";

import "./products.scss";

export default function ProductsList() {
  const { isPending, error, data } = useProducts();

  if (isPending) return <ProductsListLoading />;

  if (error) return "Um erro ocorreu: " + error.message;

  return (
    <div className="container">
      {data.products.map((product: Product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
