import { BASE_URL } from "@/core/constants";
import { MobileFilterComp } from "../MobileFilterComp";


export async function MobileSidebar() {
  const categories = await fetch(`${BASE_URL}categories`);
  const { data: categoriesList } = await categories.json();

  const merchants = await fetch(`${BASE_URL}merchants`);
  const { data: merchantsList } = await merchants.json();


  return (
    <section className="block lg:hidden w-full bg-white mb-2 h-10 rounded-md">
      <MobileFilterComp categoriesList={categoriesList} merchantsList={merchantsList} />
    </section>
  );
}
