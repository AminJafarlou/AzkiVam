import { ScaleLoader } from "react-spinners";

export function LoadingView() {
  return (
    <div className="flex h-full items-center justify-center">
      <ScaleLoader width={12} height={24} color="#007aff" />
    </div>
  );
}
