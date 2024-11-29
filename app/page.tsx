import BestSellingProducts from "@/components/BestSellingProducts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {

  return (
    <main className="dark:bg-gray-900 bg:text-white">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <BestSellingProducts />
      </div>
    </main>
  );
}
