"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { MerchantItem, MerchantItemProps } from "../MerchantItem";

interface Props {
  list: MerchantItemProps[];
}

export function MerchantsList({ list }: Props) {
  const [searchTerm, setSearchTerm] = useState("");
  const getSearchedMerchants = () =>
    list.filter((item) => item.name.includes(searchTerm));

  const router = useRouter();
  const pathname = usePathname();
  const { get } = useSearchParams();
  const paramIds = get("merchantIds");
  const merchantIds = paramIds?.split(",").map((item) => Number(item)) || [];
  const [activeMerchantIds, setActiveMerchantIds] =
    useState<number[]>(merchantIds);

  const getIsChecked = (inputId: number) => {
    return activeMerchantIds?.includes(inputId);
  };

  const handleClick = (clickedId: number) => {
    let newIdList = [];
    if (activeMerchantIds.includes(clickedId)) {
      newIdList = activeMerchantIds.filter((id) => id !== clickedId);
    } else {
      newIdList = [...activeMerchantIds, clickedId];
    }

    setActiveMerchantIds(newIdList);

    const query =
      newIdList.length > 0 ? `?merchantIds=${newIdList.join(",")}` : "";
    router.push(`${pathname}${query}`);
  };

  return (
    <div className="flex-1">
      <h2 className="mb-2">فروشگاه‌ها</h2>
      <input
        type="text"
        value={searchTerm}
        placeholder="جستجوی فروشگاه‌ها"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border-2 border-stale-500 rounded-md w-full h-8 p-1 mb-2 text-sm"
      />
      {getSearchedMerchants().map((item: MerchantItemProps) => (
        <MerchantItem
          id={item.id}
          key={item.id}
          name={item.name}
          isChecked={getIsChecked(item.id)}
          onClick={() => handleClick(item.id)}
        />
      ))}
    </div>
  );
}
