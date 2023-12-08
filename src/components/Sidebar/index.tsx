import { BASE_URL } from "@/core/constants";
import { CategoriesList } from "../CategoriesList";
import { LineSeparator } from "../LineSeparator";
import { MerchantsList } from "../MerchantsList";

export async function Sidebar() {
  const categories = await fetch(`${BASE_URL}categories`);
  const { data: categoriesList } = await categories.json();

  const merchants = await fetch(`${BASE_URL}merchants`);
  const { data: merchantsList } = await merchants.json();

  return (
    <section className="h-screen w-150 bg-white rounded-md px-4 py-2 ml-12 relative">
      <h1 className="mb-4 text-xl">فیلترها</h1>

      <CategoriesList list={categoriesList} />

      <LineSeparator />

      <MerchantsList list={merchantsList} />
    </section>
  );
}
