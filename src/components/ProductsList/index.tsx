"use client";

import { useScrollPercentage } from "@/core/customHooks";
import { getProducts } from "@/core/services";
import { ProductType } from "@/core/types";
import { useEffect, useState } from "react";
import { EmptyView } from "../EmptyView";
import { LoadingView } from "../LoadingView";
import { ProductCard } from "../ProductCard";

const size = 10;

function ProductsList({ merchantIds }: { merchantIds: string }) {
  const _merchantIds =
    merchantIds?.split(",").map((item) => Number(item)) || [];

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

        const result = await getProducts(size, 1, _merchantIds);
        setProducts(result.data);
        setTotalItems(result.totalItems);
      } catch (error) {
        setError("Error fetching products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [merchantIds]);

  // Infinite Loading
  const isScrolled = useScrollPercentage(0.9);
  useEffect(() => {
    const loadMoreData = async () => {
      try {
        const newData = await getProducts(size, page, _merchantIds);
        const newProducts = newData.data as ProductType[];
        setProducts((prevProducts: ProductType[]) => [
          ...prevProducts,
          ...newProducts,
        ]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        setError("Error fetching data");
      }
    };

    if (isScrolled && size * page < totalItems) {
      loadMoreData();
    }
  }, [isScrolled, page]);

  return (
    <section
      className="flex flex-1 bg-white rounded-md r-5"
      style={{ minHeight: "90vh" }}
    >
      {loading && products.length === 0 ? (
        <LoadingView />
      ) : (
        <div className="flex flex-1 justify-between">
          {products && products.length === 0 ? (
            <EmptyView />
          ) : (
            <div className="flex flex-1 flex-col p-px bg-slate-100 rounded-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-px">
                {products.map((product, index) => (
                  <ProductCard {...product} key={index} />
                ))}
              </div>
              {isScrolled && size * page < totalItems ? <LoadingView /> : false}
            </div>
          )}
        </div>
      )}
    </section>
  );
}

export { ProductsList };
