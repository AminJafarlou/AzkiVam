"use client";

export interface MerchantItemProps {
  id: number;
  name: string;
  isChecked: boolean;
  onClick: () => void;
}

export function MerchantItem({
  id,
  name,
  onClick,
  isChecked,
}: MerchantItemProps) {
  return (
    <div key={id} onClick={onClick} className="flex h-6 items-center">
      <input
        type="checkbox"
        className="me-2"
        checked={isChecked}
        id={`checkbox-${id}`}
        name={`checkbox-${id}`}
      />
      <p>{name}</p>
    </div>
  );
}
