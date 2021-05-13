<template>
  <div class="mt-20">
    <h1 class="text-white">Hello World</h1>
    <div class="min-h-screen">
      <div class="my-4 space-y-4 overflow-x-scroll">
        <div
          class="flex py-3 px-4 bg-gray-800 text-gray-200 items-center mx-4"
          v-for="issue in issues"
          :key="issue.id"
          :class="{ 'bg-purple-700 text-gray-200': issue.checked }"
        >
          <div class="flex-1">
            <h1 class="text-xl">{{ issue.name }}</h1>
            <p class="text-sm">Student: {{ issue.student }}</p>
            <p class="text-sm">Total Time: {{ issue.days }} days</p>
            <p class="text-sm">Price: {{ issue.price }} $</p>
          </div>
          <span
            v-if="!issue.checked"
            @click="checkTheRecord(issue)"
            class="p-2 hover:bg-gray-500 hover:bg-opacity-20 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/services/firestore.js";

export default {
  data() {
    return {
      issues: [],
    };
  },
  methods: {
    async checkTheRecord(issue) {
      let dbIssue = db.collection("issues").doc(issue.id);
      let dbBook = db.collection('books').doc(issue.book);
      issue.checked = true;
      try {
        await dbIssue.set(
          {
            checked: issue.checked,
          },
          { merge: true }
        );
        await dbBook.set({
          isAvailable: false
        }, {merge: true})
      } catch (err) {
        console.error("Issued.vue :: ", err);
      }
    },
  },
  mounted() {
    // Fetch the Issues Record and Populate it.
    db.collection("issues").onSnapshot((querySnapshot) => {
      let allIssues = [];
      querySnapshot.forEach((doc) => {
        allIssues.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      this.issues = allIssues;
    });
  },
};
</script>

<style lang="postcss">
table tbody tr td {
  /* @apply inline-block; */
}
</style>