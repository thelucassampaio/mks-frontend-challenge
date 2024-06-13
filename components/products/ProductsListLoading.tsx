import "./products.scss";

export default function ProductsListLoading() {
  return (
    <div className="container">
      {[...Array(8)].map((_, index) => (
        <div className="card skeleton" key={index} />
      ))}
    </div>
  );
}
