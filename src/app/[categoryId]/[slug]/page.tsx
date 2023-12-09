import { MobileSidebar } from "@/components/MobileSidebar";
import { ProductsListByCatId } from "@/components/ProductListByCatId";
import { Sidebar } from "@/components/Sidebar";

export default function Page({ params, searchParams }: { params: { categoryId: number }; searchParams: { merchantIds: string } }) {
  const className = "flex flex-col lg:flex-row p-4";

  return (
    <main className={className}>
      <Sidebar />
      <MobileSidebar />

      <ProductsListByCatId 
        categoryId={params.categoryId} 
        merchantIds={searchParams.merchantIds}
      />
    </main>
  );
}
