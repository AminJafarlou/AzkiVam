import { ScaleLoader } from "react-spinners";

export function LoadingView() {
  return (
    <div
      className="flex h-full items-center justify-center"
      //   style={{ height: "100%" }}
    >
      <ScaleLoader width={12} height={24} color="" />
    </div>
  );
}
