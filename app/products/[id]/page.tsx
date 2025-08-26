"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface CartItem {
  id: number;
  image: string;
  name: string;
  price: number;
  quantity: number;
}

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProductById = async () => {
      const response = await fetch("/skincare.json");
      const data: Product[] = await response.json();
      const selectedProduct = data.find((p) => p.id === Number(id));
      setProduct(selectedProduct || null);
    };

    fetchProductById();

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;

    const exists = cart.find((item) => item.id === product.id);
    if (exists) {
      alert(`${product.name} is already in the cart.`);
      return;
    }

    const newCartItem: CartItem = {
      id: product.id,
      image: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
    };

    const updatedCart = [...cart, newCartItem];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.name} added to cart.`);
  };

  if (!product) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="p-8 max-w-4xl pt-40 min-h-screen mx-auto font-mont">
      <h1 className="text-4xl font-bold mb-4 text-center">{product.name}</h1>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2 max-w-md mx-auto">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="rounded mb-6 w-full h-auto object-contain max-h-[400px]"
          />
        </div>

        <div className="md:w-1/2">
          <p className="mb-4 text-lg">{product.description}</p>
          <p className="text-2xl font-semibold mb-6">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
