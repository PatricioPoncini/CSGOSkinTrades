<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import CollectibleCard from "../components/CollectibleCard.vue"
import { useCollectibleStore } from "../store/api";
import { filterCollectiblesByStr } from "../utils/filter";

const search = ref("");

onMounted(async () => {
    const collectibleStore = useCollectibleStore()
    await collectibleStore.getCollectibles()
})
const filteredCollectibles = computed(() => {
    if (!search.value) {
        return useCollectibleStore().collectibles;
    }
    return filterCollectiblesByStr(search.value, useCollectibleStore().collectibles);
});
</script>
<template>
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold text-center">Buscador</h2>
        <div className="w-full">
            <input type="text" placeholder="Colleccionables..."
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                v-model="search" />
        </div>
    </div>
    <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
        <CollectibleCard v-for="collectible in filteredCollectibles" :title="collectible.name"
            :description="collectible.description" :rarity="collectible.rarity.id"
            :rarity-name="collectible.rarity.name.toUpperCase().slice(2)" :imgUrl="collectible.image" />
    </div>
</template>
