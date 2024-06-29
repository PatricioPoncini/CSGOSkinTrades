<script setup lang="ts">
import { onMounted } from "vue";
import StickerCard from "../components/StickerCard.vue"
import { useStickerStore } from "../store/api";

onMounted(async () => {
    const stickerStore = useStickerStore()
    await stickerStore.getStickers()
})
</script>
<template>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <StickerCard v-for="sticker in useStickerStore().stickers" :title="sticker.name" :event="sticker.tournament_event"
                :team="sticker.tournament_team" :rarity="sticker.rarity.id" :rarityName="sticker.rarity.name.toUpperCase()" :imgUrl="sticker.image" />
        </div>
    </div>
</template>
