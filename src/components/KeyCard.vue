<script setup lang="ts">
import { computed } from "vue";

const { title, description, imgUrl, boxCount } = defineProps<{
  title: string;
  description: string;
  imgUrl: string;
  boxCount: number;
}>();
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
    <div className="p-4 bg-background flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold line-clamp-1 min-h-[2rem]">
          {{ title }}
        </h3>
        <p
          v-html="description"
          className="text-lg text-muted-foreground line-clamp-3 max-h-[5rem]"
        ></p>
      </div>
      <div class="flex items-center mt-4">
        <p
          className="bg-[#e38720] px-2 py-1 text-primary-foreground rounded-full text-[14px] font-medium"
        >
          Cantidad de cajas compatibles: {{ boxCount }}
        </p>
      </div>
    </div>
  </div>
</template>