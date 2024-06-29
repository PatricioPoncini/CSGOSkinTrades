<script setup lang="ts">
import { onMounted } from "vue";
import ItemCard from "../components/ItemCard.vue"
import { useStickerStore } from "../store/api";

onMounted(async () => {
    const stickerStore = useStickerStore()
    await stickerStore.getStickers()
})
</script>
<template>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <ItemCard v-for="sticker in useStickerStore().stickers" :title="sticker.name"
                :description="sticker.description" :rarity="sticker.rarity.id"
                :rarityName="sticker.rarity.name.toUpperCase()" :imgUrl="sticker.image" />
        </div>
    </div>
</template>
