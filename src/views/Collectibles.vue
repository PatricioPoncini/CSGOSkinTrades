<script setup lang="ts">
import { onMounted } from "vue";
import CollectibleCard from "../components/CollectibleCard.vue"
import { useCollectibleStore } from "../store/api";

onMounted(async () => {
    const collectibleStore = useCollectibleStore()
    await collectibleStore.getCollectibles()
})
</script>
<template>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <CollectibleCard v-for="collectible in useCollectibleStore().collectibles" :title="collectible.name"
                :description="collectible.description" :rarity="collectible.rarity.id"
                :rarity-name="collectible.rarity.name.toUpperCase().slice(2)" :imgUrl="collectible.image" />
        </div>
    </div>
</template>
