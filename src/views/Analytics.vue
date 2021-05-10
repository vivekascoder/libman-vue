<template>
  <div class="grid grid-cols-2 gap-4 mx-4 mt-20">
    <div class="bg-gradient-to-r from-pink-500 to-red-400 items-center justify-center rounded-sm p-4 text-white cursor-pointer">
      <span class="flex justify-between items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        <h1 class="text-2xl font-medium uppercase">Vistors</h1>
      </span>
      <div class="border-b-2 border-pink-800 border-opacity-20 my-2"></div>
      <h1 class="text-6xl text-center text-gray-100">131K</h1>
    </div>
    <div class="bg-gradient-to-r from-purple-400 to-blue-500 items-center justify-center rounded-sm p-4 text-white cursor-pointer">
      <span class="flex justify-between items-start">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-9 w-9" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
        <h1 class="text-2xl font-medium uppercase">Vistors</h1>
      </span>
      <div class="border-b-2 border-blue-700 border-opacity-20 my-2"></div>
      <h1 class="text-6xl text-center text-gray-100">131K</h1>
    </div>
    <area-chart class="col-span-2 " :data="info" :dataset="config" :library="options" :download="true"></area-chart>
    <div class="col-span-2 flex overflow-hidden rounded-sm">
      <div class="bg-pink-700 text-white p-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      </div>
      <div class="flex-1 bg-gray-300 flex items-center justify-center">
        <h1 class="text-gray-700 text-6xl">234$</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config: {
        tension: 0,
        label: 'My First Dataset',
        showLine: true,
        display: false,
        borderColor: '#db2777',
        backgroundColor: '#db27771a',
        // backgroundColor: '#333'
        pointBackgroundColor: '#db2777',
        pointHoverBackgroundColor: '#db2777',

      },
      options: {
        scales:{
            x: {
              display: false
            },
            y: {
              display: false
            }
        }
      },
      info: [
		[
			"10-08-2021",
			374
		],
		[
			"04-13-2021",
			390
		],
		[
			"04-10-2021",
			28
		],
		[
			"01-07-2021",
			189
		],
		[
			"01-19-2021",
			222
		],
		[
			"11-03-2021",
			183
		],
		[
			"01-03-2021",
			272
		],
		[
			"10-17-2020",
			115
		],
		[
			"12-13-2020",
			500
		],
		[
			"06-29-2021",
			129
		],
		[
			"04-10-2021",
			309
		],
		[
			"09-13-2021",
			207
		],
		[
			"03-11-2021",
			472
		],
		[
			"06-29-2020",
			13
		],
		[
			"05-25-2021",
			406
		],
		[
			"10-11-2021",
			309
		],
		[
			"04-06-2022",
			34
		],
		[
			"03-05-2022",
			139
		],
		[
			"10-08-2020",
			243
		],
		[
			"05-26-2021",
			120
		],
		[
			"08-11-2020",
			32
		],
		[
			"07-18-2021",
			33
		],
		[
			"12-23-2021",
			134
		],
		[
			"01-01-2021",
			363
		],
		[
			"12-10-2020",
			120
		],
		[
			"03-11-2021",
			494
		],
		[
			"02-04-2022",
			135
		],
		[
			"10-17-2020",
			398
		]
      ]
    }
  }
}
</script>

<style>

</style>