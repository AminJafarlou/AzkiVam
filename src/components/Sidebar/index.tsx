import { BASE_URL } from "@/core/constants";
import { Category } from "@/core/types";
import { CategoryItem } from "../CategoryItem";
import { LineSeparator } from "../LineSeparator";
import { MerchantsList } from "../MerchantsList";

export async function Sidebar() {
  const categories = await fetch(`${BASE_URL}categories`);
  const data = await categories.json();
  const categoriesList = data.data as Category[];
  const parentCategories = categoriesList.filter(
    (item) => item.parent === null
  );
  const organizedCats = parentCategories.map((item) => {
    const subCategories = categoriesList.filter(
      (child) => child.parent === item.id
    );
    return { subCategories, ...item };
  });

  const merchants = await fetch(`${BASE_URL}merchants`);
  const { data: merchantsList } = await merchants.json();

  return (
    <section className="w-150 bg-white rounded-md px-4 py-2 ml-12">
      <h1 className="mb-4 text-xl">فیلترها</h1>

      <h2 className="mb-2 text-lg">دسته‌بندی‌ها</h2>
      {organizedCats.map((item) => (
        <CategoryItem
          id={item.id}
          key={item.id}
          name={item.name}
          slug={item.slug}
          parent={item.parent}
          mapped={item.mapped}
          enabled={item.enabled}
          priority={item.priority}
          subCategories={item.subCategories}
        />
      ))}

      <LineSeparator />

      <MerchantsList
        list={merchantsList}
      />
    </section>
  );
}
