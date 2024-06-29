<script setup lang="ts">
import { onMounted, createApp } from "vue";
import KeyCard from "../components/KeyCard.vue";
import { useKeyStore } from "../store/api";

onMounted(async () => {
  const keyStore = useKeyStore();
  await keyStore.getKeys();
});
</script>
<template>
  <div class="flex justify-center">
    <div
      className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8"
    >
      <KeyCard
        v-for="crateKey in useKeyStore().keys"
        :title="crateKey.name"
        :description="crateKey.description"
        :imgUrl="crateKey.image"
        :box-count="crateKey.crates.length"
        :key="crateKey.name"
      />
    </div>
  </div>
</template>
