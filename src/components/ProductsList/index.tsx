"use client";

import { getProducts } from "@/core/functions";
import { ProductType } from "@/core/types";
import { useEffect, useState } from "react";
import { LoadingView } from "../LoadingView";
import { ProductCard } from "../ProductCard";

// Assume that getProducts function is defined here

function ProductsList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        setLoading(true);

        const page = 1;
        const size = 10;

        const result = await getProducts(size, page);
        setProducts(result.data);
      } catch (error) {
        setError("Error fetching products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="flex flex-1 bg-white rounded-md p-8 r-5">
      {loading ? <LoadingView /> : null}
      <div className="flex flex-wrap">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </section>
  );
}

export { ProductsList };
