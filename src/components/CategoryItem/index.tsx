import { Category } from "@/core/types";

interface CategoryProp extends Category {
  subCategories: Category[];
}

export function CategoryItem({ name, subCategories }: CategoryProp) {
  return (
    <div>
      <p className="text-slate-700 font-sans">{name}</p>
      {subCategories.map((cat) => {
        return <p className="text-slate-500 font-sans">{cat.name}</p>;
      })}
    </div>
  );
}
