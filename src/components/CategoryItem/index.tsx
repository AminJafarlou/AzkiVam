import { Category } from "@/core/types";
import Link from "next/link";

interface CategoryProp extends Category {
  subCategories: Category[];
}

export function CategoryItem({ name, subCategories }: CategoryProp) {
  return (
    <div className="mt-2">
      <p className="text-slate-700 font-sans">{name}</p>
      {subCategories.map((cat) => {
        return (
          <Link href={`${cat.id}`}>
            <p className="text-slate-500 font-sans">{cat.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
