"use client";

import { getProducts } from "@/core/services";
import { ProductType } from "@/core/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { EmptyView } from "../EmptyView";
import { LoadingView } from "../LoadingView";
import { ProductCard } from "../ProductCard";

function ProductsList() {
  const page = 1;
  const size = 10;

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();
  const merchantIds = searchParams.get("merchantIds");
  console.log({ merchantIds });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        setLoading(true);

        const result = await getProducts(size, page, merchantIds);
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
      {loading ? (
        <LoadingView />
      ) : (
        <div className="flex flex-wrap justify-between">
          {products && products.length === 0 ? (
            <EmptyView />
          ) : (
            products.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))
          )}
        </div>
      )}
    </section>
  );
}

export { ProductsList };
