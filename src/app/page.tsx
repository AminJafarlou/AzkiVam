import { ProductsList } from "@/components/ProductsList";
import { Sidebar } from "@/components/Sidebar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"]
})



export default function Home() {
  const className = `${roboto.className} flex p-4`
  return (
    <main className={className}>
      <Sidebar />

      <ProductsList />
    </main>
  );
}
