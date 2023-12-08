export interface MerchantItemProps {
  id: number;
  name: string;
}

export function MerchantItem({ id, name }: MerchantItemProps) {
  return (
    <div key={id}>
      <p className="font-sans">{name}</p>
    </div>
  );
}
