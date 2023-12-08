"use client";

import { useScrollPercentage } from "@/core/customHooks";
import { getProducts } from "@/core/services";
import { ProductType } from "@/core/types";
import { useEffect, useState } from "react";
import { EmptyView } from "../EmptyView";
import { LoadingView } from "../LoadingView";
import { ProductCard } from "../ProductCard";

function ProductsList() {
  const size = 10;

  const [page, setPage] = useState<number>(1);
  const [totalItems, setTotalItems] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setError(null);
        setLoading(true);

        const result = await getProducts(size, page);
        setProducts(result.data);
        setTotalItems(result.totalItems);
      } catch (error) {
        setError("Error fetching products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const isScrolled = useScrollPercentage(0.9);
  useEffect(() => {
    const loadMoreData = async () => {
      try {
        const newData = await getProducts(size, page);
        const newProducts = newData.data as ProductType[];
        setProducts((prevProducts: ProductType[]) => [
          ...prevProducts,
          ...newProducts,
        ]);
        setPage((prevPage) => prevPage + 1);
        setLoading(true);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    if (isScrolled && size * page < totalItems) {
      loadMoreData();
    }
  }, [isScrolled, page]);

  return (
    <section className="flex flex-1 bg-white rounded-md p-8 r-5">
      {loading ? (
        <LoadingView />
      ) : (
        <div className="flex flex-wrap justify-between">
          {products && products.length === 0 ? (
            <EmptyView />
          ) : (
            <>
              {products.map((product) => (
                <ProductCard {...product} key={product.id} />
              ))}
              {loading ? <LoadingView /> : false}
            </>
          )}
        </div>
      )}
    </section>
  );
}

export { ProductsList };
