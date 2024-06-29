<script setup lang="ts">
import { computed } from 'vue';
const { title, rarities, imgUrl } = defineProps<{
    title: string,
    imgUrl: string,
    rarities: Record<string, number>
}>()
const getRarityColor = (id: string): string => {
    id = id?.toLowerCase() ?? "";
    switch (id) {
        case "rarity_default_weapon":
            return "#ded6cc";
        case "rarity_legendary_weapon":
            return "#d32ce6";
        case "rarity_ancient_weapon":
            return "#eb4b4b";
        case "rarity_mythical_weapon":
            return "#8847ff";
        case "rarity_rare_weapon":
            return "#4b69ff";
        case "rarity_common_weapon":
            return "#b0c3d9";
        case "rarity_uncommon_weapon":
            return "#5e98d9";
        case "rarity_contraband_weapon":
            return "#e4ae39";
        default:
            return "#ffffff";
    }
};
// Mapeo de rarezas a nombres legibles
const rarityNames: Record<string, string> = {
    "rarity_default_weapon": "Normal",
    "rarity_common_weapon": "De grado de consumidor",
    "rarity_uncommon_weapon": "De grado industrial",
    "rarity_rare_weapon": "De grado militar",
    "rarity_mythical_weapon": "De tipo restringido",
    "rarity_legendary_weapon": "De tipo clasificado",
    "rarity_ancient_weapon": "De aspecto encubierto",
    "rarity_contraband_weapon": "De contrabando"
};
// Computed property to get the keys of the rarities object
const rarityKeys = computed(() => Object.keys(rarities));
</script>

<template>
    <div class="w-full bg-white max-w-sm rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl">
        <div class="mt-4 ml-4 mr-4 p-2 bg-[#8d8c8c] shadow-md rounded">
            <img :src="imgUrl" alt="Item Image" width="500" height="300" class="w-full h-48 object-cover" />
        </div>
        <div class="p-4 bg-background">
            <h3 class="text-xl font-semibold line-clamp-1 min-h-[2rem]">{{ title }}</h3>
            <div class="grid grid-cols-2 gap-2">
                <span v-for="rarity in rarityKeys" :key="rarity" :style="{ backgroundColor: getRarityColor(rarity) }"
                    class="px-2 py-1 text-primary-foreground rounded-full text-[14px] font-medium">
                    {{ rarityNames[rarity.toLowerCase()] || rarity }}
                </span>
            </div>
        </div>
    </div>
</template>