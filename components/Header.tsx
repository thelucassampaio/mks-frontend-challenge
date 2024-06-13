import "./header.scss";

import ShoppingCart from "@/lib/icons/shoppingCart.svg";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>MKS</h1>
        <p>Sistemas</p>
      </div>
      <div className="cartButton">
        <div>
          <ShoppingCart />
        </div>
        <p>0</p>
      </div>
    </header>
  );
}
