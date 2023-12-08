import { ProductType } from "@/core/types";
import Image from "next/image";

interface ProductCardProps extends ProductType {}

export function ProductCard({ name, minPrice, imageUrl }: ProductCardProps) {
  return (
    <div
      className="flex flex-col w-60 min-w-52 items-center m-1 p-2"
      style={{ border: "1px solid gray" }}
    >
      <div className="flex flex-1 h-40 w-52 items-center justify-center mb-4">
        <Image
          alt={name}
          width={150}
          height={200}
          src={imageUrl}
          style={{
            maxHeight: 200,
          }}
        />
      </div>

      <p>{name}</p>

      <div className="flex flex-col">
        <p>شروع قیمت از</p>
        <p>{`${minPrice} تومان`}</p>
      </div>
    </div>
  );
}
