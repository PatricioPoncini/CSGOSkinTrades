<script setup lang="ts">
import { onMounted } from "vue";
import CollectionCard from '../components/CollectionCard.vue'
import { useCollectionStore } from "../store/api";
onMounted(async () => {
    const collectionStore = useCollectionStore()
    await collectionStore.getCollections()
})
</script>
<template>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <CollectionCard v-for="collection of useCollectionStore().collections" :rarities=collection.rarities
                :imgUrl="collection.image" :title="collection.name" />
        </div>
    </div>
</template>