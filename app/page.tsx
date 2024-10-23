// "use client"

// import { useState } from "react";
// import { DarkThemeToggle } from "flowbite-react";

// export default function Home() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800">
//       <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
//         <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
//           <a
//             href="https://flowbite.com/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
//               <span className="bg-blue-700 p-0.5 text-white ">S</span>hopVerse
//             </span>
//           </a>

//           <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
//             <button
//               type="button"
//               className="rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//             >
//               Get started
//             </button>
//             <button
//               type="button"
//               onClick={toggleMenu} // Toggle menu on click
//               className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
//               aria-expanded={isMenuOpen} // ARIA attribute for accessibility
//             >
//               <span className="sr-only">Open main menu</span>
//               <svg
//                 className="h-5 w-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             </button>
//           </div>

//           {/* Mobile menu */}
//           <div
//             className={`${
//               isMenuOpen ? "block" : "hidden"
//             } w-full items-center justify-between md:order-1 md:flex md:w-auto`}
//             id="navbar-sticky"
//           >
//             <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
//               <li>
//                 <a
//                   href="#"
//                   className="mt-3 block rounded bg-blue-700 px-3 py-2 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="mt-3 block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="mt-3 block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="mt-3 block rounded px-3 py-2 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="">
//                   <DarkThemeToggle />
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </main>
//   );
// }



import Navbar from "@/components/Navbar";


export default function Home() {
 

  return (
    <main className="">
      <div>
        <Navbar />
      </div>
     
    </main>
  );
}
