<script setup lang="ts">
import { computed } from "vue";

const { title, imgUrl, rarity, rarityName, event, team } = defineProps<{
  title: string;
  imgUrl: string;
  rarity: string;
  rarityName: string;
  event: string;
  team: string;
}>();

const getRarityColor = (id: string): string => {
  id = id?.toLowerCase() ?? "";

  switch (id) {
    case "rarity_default":
      return "#ded6cc";
    case "rarity_legendary_character":
    case "rarity_legendary_weapon":
    case "rarity_legendary":
      return "#d32ce6";
    case "rarity_ancient_character":
    case "rarity_ancient_weapon":
    case "rarity_ancient":
      return "#eb4b4b";
    case "rarity_mythical_character":
    case "rarity_mythical_weapon":
    case "rarity_mythical":
      return "#8847ff";
    case "rarity_rare_character":
    case "rarity_rare_weapon":
    case "rarity_rare":
      return "#4b69ff";
    case "rarity_common_weapon":
    case "rarity_common":
      return "#b0c3d9";
    case "rarity_uncommon_weapon":
      return "#5e98d9";
    case "rarity_contraband_weapon":
      return "#e4ae39";
    default:
      return "#ffffff";
  }
};

const bgColor = computed(
  () =>
    `bg-[${getRarityColor(
      rarity
    )}] px-2 py-1 text-primary-foreground rounded-full text-[14px] font-medium`
);
</script>

<template>
  <div
    className="w-full bg-white max-w-sm rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl"
  >
    <div className="mt-4 ml-4 mr-4 p-2 bg-[#8d8c8c] shadow-md rounded">
      <img
        :src="imgUrl"
        alt="Item Image"
        width="{500}"
        height="{300}"
        className="w-full h-48 object-cover"
      />
    </div>
    <div className="p-4 bg-background">
      <h3 className="text-xl font-semibold line-clamp-1 min-h-[2rem]">
        {{ title }}
      </h3>
      <div className="flex space-x-2">
        <p className="text-lg text-muted-foreground line-clamp-1 max-h-[2rem]">
          {{ event }}
        </p>
        <p className="text-lg text-muted-foreground line-clamp-1 max-h-[2rem]">
          {{ team != null ? team : "-" }}
        </p>
      </div>

      <div className="flex items-centergap-2 mt-2">
        <span :class="bgColor">{{ rarityName }}</span>
      </div>
    </div>
  </div>
</template>