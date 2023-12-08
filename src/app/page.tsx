import { ProductsList } from "@/components/ProductsList";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="flex p-4">
      <Sidebar />

      <ProductsList />
    </main>
  );
}
