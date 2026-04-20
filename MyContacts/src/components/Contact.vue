<template>
  <div class="min-h-screen bg-gray-100">

    <header class="bg-white shadow">
      <nav class="max-w-5xl mx-auto flex justify-between items-center p-4">
        <h1 class="text-xl font-bold text-gray-800">Contact</h1>


<div class="relative w-full max-w-xl mx-auto bg-white rounded-full">
  <input
    placeholder="e.g. Blog"
    class="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-blue-500 focus:border-blue-500" type="text" name="query" id="query">

  <button
    type="submit"
    class="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-blue-600 sm:px-6 sm:text-base sm:font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
    <svg class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
    </svg>
    Search
  </button>
</div>
        <div class="flex gap-4">
          <a href="/login" class="text-blue-600 hover:underline font-medium">
            Connectez-vous
          </a>
          <a href="/inscription" class="text-blue-600 hover:underline font-medium">
            Inscrivez-vous
          </a>
        </div>
      </nav>
    </header>
    <main class="flex items-center justify-center mt-16 px-4">
      <div class="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md text-center">
        <h3 class="text-2xl font-semibold text-gray-800 mb-4">
          Nom du Contact
        </h3>
        <p class="text-gray-500 mb-6">
          CHRIST : +225 01 50 50 58 60
        </p>
        <a
          href="tel:+0150505860"
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
          Appeler
        </a>
      </div>
    </main>
  </div>
</template>
