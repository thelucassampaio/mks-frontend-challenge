import Image from "next/image";
import type { Product } from "@/lib/products";
import ShoppingBag from "@/lib/icons/shoppingBag.svg";

import "./products.scss";

export default function ProductCard({ product }: { product: Product }) {
  const formattedPrice = parseFloat(product.price).toString();

  return (
    <div className="card">
      <div className="imageContainer">
        <Image
          src={product.photo}
          alt={product.name}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="productInfo">
        <div className="nameAndPrice">
          <h3>{product.name}</h3>
          <div className="priceTag">
            <p>R${formattedPrice}</p>
          </div>
        </div>
        <p className="description">{product.description}</p>
      </div>
      <div className="addToCartButton" role="button">
        <ShoppingBag />
        Comprar
      </div>
    </div>
  );
}
