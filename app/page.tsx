import BestSelling from "@/components/BestSelling";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";


export default function Home() {
 

  return (
    <main className="">
      <div>
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <BestSelling />
      </div>
    </main>
  );
}
