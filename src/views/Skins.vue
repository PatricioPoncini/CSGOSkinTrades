<script setup lang="ts">
import { onMounted } from "vue";
import ItemCard from "../components/ItemCard.vue"
import { useSkinStore } from "../store/api";

onMounted(async () => {
    const skinStore = useSkinStore()
    await skinStore.getSkins()
})
</script>
<template>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <ItemCard v-for="skin in useSkinStore().skins" :title="skin.name" :description="skin.description"
                :rarity="skin.rarity.id" :rarityName="skin.rarity.name.toUpperCase().slice(2)" :imgUrl="skin.image" />
        </div>
    </div>
</template>
