<template>
  <ul class="w-full flex flex-col items-center justify-center">
    <li
      class="flex text-[#00A8CC] items-center justify-between w-5/6 bg-[#27496D] px-6 py-4 rounded-2xl mt-5"
      v-for="user in store.users"
      :key="user.id"
    >
      <span>Name: {{ user.name }} </span>
      <span>User Name: {{ user.username }} </span>
      <span> Email: {{ user.email }}</span>
      <div class="">
        <button
         @click="store.onEdit(user.id)"
          class="
            text-slate-50
            rounded-full
            bg-[#0C7B93]
            py-2
            px-6
            mx-3
            hover:bg-sky-700
          "
        >
          Edit
        </button>
        <button
        @click="store.onDelete(user.id)"
          class="
            text-slate-50
            rounded-full
            bg-[#0C7B93]
            py-2
            px-6
            mx-2
            hover:bg-sky-700
          "
        >
          Delete</button
        >
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import axios from "axios"
import useStore from "../store/index";
import { ref, onMounted } from 'vue'
const store = useStore();
onMounted(() => {
  axios.get(`https://jsonplaceholder.typicode.com/users`).then(response => {
      store.users = response.data;
  })
})


</script>

<style>
</style>