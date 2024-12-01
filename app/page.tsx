import BestSellingProducts from "@/components/BestSellingProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



export default function Home() {

  return (
    <main className="bg:text-white dark:bg-gray-900 font-mont">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <BestSellingProducts />
      </div>
      <div>
        <Footer />
      </div>
      <ToastContainer />
    </main>
  );
}
