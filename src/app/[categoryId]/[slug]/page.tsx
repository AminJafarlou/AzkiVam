import { ProductsListByCatId } from "@/components/ProductListByCatId";
import { Sidebar } from "@/components/Sidebar";

export default function Page({ params }: { params: { categoryId: number } }) {
  return (
    <main className="flex p-4 md:flex-col">
      <Sidebar />

      <ProductsListByCatId categoryId={params.categoryId} />
    </main>
  );
}
