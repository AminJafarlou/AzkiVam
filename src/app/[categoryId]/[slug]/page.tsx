import { ProductsListByCatId } from "@/components/ProductListByCatId";
import { Sidebar } from "@/components/Sidebar";

export default function Page({ params, searchParams }: { params: { categoryId: number }; searchParams: { merchantIds: string } }) {

  return (
    <main className="flex p-4">
      <Sidebar />

      <ProductsListByCatId 
        categoryId={params.categoryId} 
        merchantIds={searchParams.merchantIds}
      />
    </main>
  );
}
