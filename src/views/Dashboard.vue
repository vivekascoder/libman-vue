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
      <div class="bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Search</h1>
      </div>
      <div class="bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Remove</h1>
      </div>
      <div class="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Issued</h1>
      </div>
      <div class="bg-gradient-to-r from-purple-400 to-blue-500 flex flex-col items-center justify-center rounded-lg p-4 text-white cursor-pointer">
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </span>
        <h1 class="text-2xl uppercase">Update</h1>
      </div>
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
