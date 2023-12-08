"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

export interface MerchantItemProps {
  id: number;
  name: string;
  initialCategoryId?: number;
}

export function MerchantItem({
  id,
  name,
  initialCategoryId,
}: MerchantItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleClick = () => {
    const _id = String(id);
    const current = new URLSearchParams(Array.from(searchParams.entries()));

    const value = _id.trim();
    if (!value) {
      current.delete("merchantIds");
    } else {
      current.set("merchantIds", _id);
    }

    const search = current.toString();
    const query = search ? `?${search}` : "";

    router.push(`${pathname}${query}`);
  };

  return (
    <div key={id} onClick={handleClick} className="flex h-6 items-center">
      <input
        type="checkbox"
        className="me-2"
        id={`checkbox-${id}`}
        name={`checkbox-${id}`}
      />
      <p>{name}</p>
    </div>
  );
}
