<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import CollectionCard from '../components/CollectionCard.vue'
import { useCollectionStore } from "../store/api";
import { filterCollectionsByStr } from "../utils/filter";

const search = ref("");

onMounted(async () => {
    const collectionStore = useCollectionStore()
    await collectionStore.getCollections()
})

const filteredCollections = computed(() => {
    if (!search.value) {
        return useCollectionStore().collections;
    }
    return filterCollectionsByStr(search.value, useCollectionStore().collections);
});
</script>
<template>
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold text-center">Buscador</h2>
        <div className="w-full">
            <input type="text" placeholder="Nombre de colección..."
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                v-model="search" />
        </div>
    </div>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <CollectionCard v-for="collection of filteredCollections" :rarities=collection.rarities
                :imgUrl="collection.image" :title="collection.name" />
        </div>
    </div>
</template>