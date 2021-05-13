<template>
  <div class="home">
    <!-- <navbar/> -->
    <div class="grid grid-cols-2 gap-4 mx-4 mt-20">
      <router-link :to="{name: 'Books'}" class="bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">All Books</h1>
      </router-link>
      <router-link :to="{name: 'AddBook'}" class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Add Book</h1>
      </router-link>
      <router-link :to="{name: 'Category'}" class="bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Category</h1>
      </router-link>
      <div class="bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Remove</h1>
      </div>
      <router-link :to="{name: 'Issued'}" class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Issued</h1>
      </router-link>
      <router-link :to="{name: 'Analytics'}" class="bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Analytics</h1>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>

<style>
.graph {
  height: 200px;
}
</style>