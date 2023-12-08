import { Category } from "@/core/types";
import { CategoryItem } from "../CategoryItem";

interface Props {
  list: Category[];
}

export function CategoriesList({ list }: Props) {
  const parentCategories = list.filter((item) => item.parent === null);
  const organizedCats = parentCategories.map((item) => {
    const subCategories = list.filter((child) => child.parent === item.id);
    return { subCategories, ...item };
  });

  return (
    <div className="flex-1">
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
    </div>
  );
}
