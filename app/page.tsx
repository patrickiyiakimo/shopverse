import BestSellingProducts from "@/components/BestSellingProducts";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Home() {

  return (
    <main className="font-mont dark:text-white dark:bg-gray-900">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <BestSellingProducts />
      </div>
      <ToastContainer />
    </main>
  );
}
