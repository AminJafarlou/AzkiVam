"use client";

import { getProductsByCategoryId } from "@/core/services";
import { ProductType } from "@/core/types";
import { useEffect, useState } from "react";
import { EmptyView } from "../EmptyView";
import { LoadingView } from "../LoadingView";
import { ProductCard } from "../ProductCard";

function ProductsListByCatId({ categoryId }: { categoryId: number }) {
  const page = 1;
  const size = 10;

  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        setLoading(true);

        const result = await getProductsByCategoryId(size, page, categoryId);
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

export { ProductsListByCatId };
