"use client";

import { Category } from "@/core/types";
import Link from "next/link";
import { useState } from "react";

interface CategoryProp extends Category {
  subCategories: Category[];
}

export function CategoryItem({ name, subCategories }: CategoryProp) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion mt-2">
      <div
        className="accordion-title flex justify-between"
        onClick={toggleAccordion}
      >
        <p className="text-slate-700 font-sans">{name}</p>
        <p className="text-slate-700 font-sans">
          {isOpen ? "\u2303" : "\u2304"}
        </p>
      </div>
      {isOpen
        ? subCategories.map((cat) => {
            return (
              <Link href={`/${cat.id}/${cat.slug}`}>
                <p className="text-slate-500 font-sans">{cat.name}</p>
              </Link>
            );
          })
        : null}
    </div>
  );
}
