"use client";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { isPending, error, data } = useQuery({
    queryKey: ["productData"],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?page=1&rows=5&sortBy=id&orderBy=DESC`
      ).then((res) => res.json()),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(data);

  return (
    <main>
      <h1>Main section</h1>
    </main>
  );
}
