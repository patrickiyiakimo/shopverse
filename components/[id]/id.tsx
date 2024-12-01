// "use client";

// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   image: string;
//   price: number;
// }

// const fetchProduct = async (id: string): Promise<Product | null> => {
//   try {
//     const response = await fetch(`/skincare.json`);
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const products: Product[] = await response.json();

//     // Find the specific product by ID
//     const product = products.find((p) => p.id === parseInt(id, 10));
//     return product || null;
//   } catch (error) {
//     console.error("Failed to fetch:", error);
//     return null;
//   }
// };

// export default function ProductPage() {
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();
//   const { id } = router.query;

//   useEffect(() => {
//     if (id) {
//       const getProduct = async () => {
//         const fetchedProduct = await fetchProduct(id as string);
//         setProduct(fetchedProduct);
//         setLoading(false);
//       };
//       getProduct();
//     }
//   }, [id]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <div className="pt-20 font-mont">
//       <h2 className="mb-4 text-center text-2xl font-bold">{product.name}</h2>
//       <div className="mx-auto max-w-4xl rounded-lg border border-gray-300 bg-white p-6 shadow-md dark:border-gray-600 dark:bg-gray-800">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="mb-6 h-auto max-h-60 w-full rounded"
//         />
//         <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
//         <p className="mb-4 text-gray-600 dark:text-gray-400">
//           {product.description}
//         </p>
//         <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">
//           ${product.price.toFixed(2)}
//         </span>
//       </div>
//     </div>
//   );
// }









"use client"

import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

interface IdProps {
  productId: number; // Pass the product ID as a prop
}

const fetchProduct = async (id: number): Promise<Product | null> => {
  try {
    const response = await fetch(`/skincare.json`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const products: Product[] = await response.json();
    const product = products.find((p) => p.id === id);
    return product || null;
  } catch (error) {
    console.error("Failed to fetch:", error);
    return null;
  }
};

const Id: React.FC<IdProps> = ({ productId }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const fetchedProduct = await fetchProduct(productId);
      setProduct(fetchedProduct);
      setLoading(false);
    };
    getProduct();
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="pt-20 font-mont">
      <h2 className="mb-4 text-center text-2xl font-bold">{product.name}</h2>
      <div className="mx-auto max-w-4xl rounded-lg border border-gray-300 bg-white p-6 shadow-md dark:border-gray-600 dark:bg-gray-800">
        <img
          src={product.image}
          alt={product.name}
          className="mb-6 h-auto max-h-60 w-full rounded"
        />
        <h3 className="mb-2 text-xl font-semibold">{product.name}</h3>
        <p className="mb-4 text-gray-600 dark:text-gray-400">
          {product.description}
        </p>
        <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default Id;
