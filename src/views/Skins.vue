<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import ItemCard from "../components/ItemCard.vue"
import { useSkinStore } from "../store/api";
import { filterSkinsByStr } from "../utils/filter";
const search = ref("");

onMounted(async () => {
    const skinStore = useSkinStore()
    await skinStore.getSkins()
})
const filteredSkins = computed(() => {
    if (!search.value) {
        return useSkinStore().skins;
    }
    return filterSkinsByStr(search.value, useSkinStore().skins)
})
</script>
<template>
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold text-center">Buscador</h2>
        <div className="w-full">
            <input type="text" placeholder="Nombre de skin"
                className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                v-model="search" />
        </div>
    </div>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <ItemCard v-for="skin in filteredSkins" :title="skin.name" :description="skin.description"
                :rarity="skin.rarity.id" :rarityName="skin.rarity.name.toUpperCase().slice(2)" :imgUrl="skin.image" />
        </div>
    </div>
</template>
