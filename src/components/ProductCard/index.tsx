import { ProductType } from "@/core/types";
import { convertToCurrency } from "@/core/utilities";
import Image from "next/image";

interface ProductCardProps extends ProductType {}

export function ProductCard({ name, minPrice, imageUrl }: ProductCardProps) {
  return (
    <div
      className="flex flex-1 flex-col h-96 min-w-60 items-center p-4 cursor-pointer bg-white"
    >
      <div className="flex flex-1 h-40 w-52 items-center justify-center">
        <Image alt={name} width={150} height={200} src={imageUrl} />
      </div>

      <div className="my-3 flex w-full flex-col justify-start">
        <p>{name}</p>
      </div>

      <div className="flex w-full flex-col justify-start">
        <p className="text-sm text-slate-500">شروع قیمت از</p>
        <p>{`${convertToCurrency(String(minPrice))} تومان`}</p>
      </div>
    </div>
  );
}
