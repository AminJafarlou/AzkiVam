"use client";

import { useState } from "react";
import Drawer from "react-modern-drawer";
import { X } from "tabler-icons-react";
import { CategoriesList } from "../CategoriesList";
import { LineSeparator } from "../LineSeparator";
import { MerchantsList } from "../MerchantsList";

interface Props {
  merchantsList: any[];
  categoriesList: any[];
}

export function MobileFilterComp({ categoriesList, merchantsList }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="p-2">
      <button
        onClick={toggleDrawer}
        className="w-full flex items-start justify-start"
      >
        <h1 className="mb-4 text-xl">فیلترها</h1>
      </button>
      <Drawer
        open={isOpen}
        size={"100vh"}
        direction="bottom"
        onClose={toggleDrawer}
        className="w-screen p-4"
      >
        <div>
          <div className="flex justify-end">
            <X onClick={toggleDrawer} />
          </div>

          <CategoriesList list={categoriesList} />

          <LineSeparator />

          <MerchantsList list={merchantsList} />
        </div>
      </Drawer>
    </div>
  );
}
