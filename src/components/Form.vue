<template>
  <div
    class="
      flex flex-col
      items-center
      justify-center
      bg-[#27496D]
      px-10
      py-10
      rounded-lg
      mt-20
    "
  >
    <h2 class="text-slate-50 text-3xl">Todo</h2>
    <form class="flex flex-col items-center justify-center text-slate-50 mt-6">
      <input
        class="
          text-black
          placeholder:italic placeholder:text-slate-400
          block
          bg-white
          w-full
          border border-slate-300
          rounded-md
          py-2
          pl-9
          pr-3
          shadow-sm
          focus:outline-none
          focus:border-sky-500
          focus:ring-sky-500
          focus:ring-1
          sm:text-sm
        "
        type="text "
        v-model="store.user"
        placeholder="Name"
      />
      <input
        class="
          text-black
          placeholder:italic placeholder:text-slate-400
          block
          bg-white
          w-full
          border border-slate-300
          rounded-md
          py-2
          pl-9
          mt-2
          pr-3
          shadow-sm
          focus:outline-none
          focus:border-sky-500
          focus:ring-sky-500
          focus:ring-1
          sm:text-sm
        "
        type="text "
        v-model="store.userName"
        placeholder="User Name"
      />
      <input
        class="
          text-black
          placeholder:italic placeholder:text-slate-400
          block
          bg-white
          w-full
          border border-slate-300
          rounded-md
          py-2
          pl-9
          mt-2
          pr-3
          shadow-sm
          focus:outline-none
          focus:border-sky-500
          focus:ring-sky-500
          focus:ring-1
          sm:text-sm
        "
        type="email"
        v-model="store.email"
        placeholder="Email"
      />
      <button
      v-if="store.addOrUpdate"
        @click.prevent="store.addUser()"
        class="rounded-full bg-[#0C7B93] py-2 px-6 mt-4 hover:bg-sky-700"
        type="submit"
      >
        Add
      </button>
      <button
      v-else
        @click.prevent="store.onUpdate()"
        class="rounded-full bg-[#0C7B93] py-2 px-6 mt-4 hover:bg-sky-700"
        type="submit"
      >
        Update
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref } from "vue";
import useStore from "../store/index";
const store = useStore();
</script>

<style>
</style>