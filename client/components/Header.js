import Link from 'next/link';
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {

  const [searchQuery, setSearchQuery] = useState("");
const router = useRouter();

// Handle form submission
const handleSearch = async (e) => {
  e.preventDefault();
  if (searchQuery.trim() !== "") {
    router.push(`/recipes?query=${searchQuery.trim()}`); // Rediriger vers la page de recherche
  }
};
  return (
    <header class="bg-white">
  <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
    <div class="flex lg:flex-1">
      <a href="#" class="-m-1.5 p-1.5">
        <span class="sr-only">Your Company</span>
        
      </a>
    </div>
    <div class="flex lg:hidden">
      <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
        <span class="sr-only">Open main menu</span>
        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>
    <div class="hidden lg:flex lg:gap-x-12">
     

      <a href="/" class="text-sm/6 font-semibold text-gray-900">Homes</a>
      <a href="/about" class="text-sm/6 font-semibold text-gray-900">About</a>
      <a href="/contacts" class="text-sm/6 font-semibold text-gray-900">Contacts</a>
      <a href="/recipes" class="text-sm/6 font-semibold text-gray-900">Recettes</a>
    </div>
    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <form onSubmit={handleSearch} className="flex space-x-2 ml-4"> {/* Ajout de `ml-4` */}
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="rounded-md border px-2 py-1"
    />
    <button
      type="submit"
      className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Search
    </button>
  </form>
</div>
    <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      <a href="/login" class="text-sm/6 font-semibold text-gray-900">Log in <span aria-hidden="true">&rarr;</span></a>
    </div>
  </nav>
 
  <div class="lg:hidden" role="dialog" aria-modal="true">
   
    <div class="fixed inset-0 z-10"></div>
    <div class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
      <div class="flex items-center justify-between">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          
        </a>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
          <span class="sr-only">Close menu</span>
          <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <div class="space-y-2 py-6">
            
            <a href="/" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Home</a>
            <a href="/about" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">About</a>
            <a href="/contacts" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Contacts</a>
            <a href="/recipes" class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Recettes</a>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  <form onSubmit={handleSearch} className="flex space-x-2 ml-4"> {/* Ajout de `ml-4` */}
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search..."
      className="rounded-md border px-2 py-1"
    />
    <button
      type="submit"
      className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Search
    </button>
  </form>
</div>
          <div class="py-6">
            <a href="/login" class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log in</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
    
  );
}
