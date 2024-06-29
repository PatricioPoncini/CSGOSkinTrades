<script setup lang="ts">
const { title, description, imgUrl, type } = defineProps<{
  title: string,
  description?: string,
  imgUrl: string,
  type?: string,
  containsRare?: boolean
}>()
</script>

<template>
  <div className="w-full bg-white max-w-sm rounded-lg overflow-hidden shadow-lg transition-all hover:shadow-xl flex flex-col justify-between">
    <div className="mt-4 ml-4 mr-4 p-2 bg-[#8d8c8c] shadow-md rounded">
      <img :src="imgUrl" alt="Item Image" width={500} height={300} className="w-full h-48 object-cover" />
    </div>
    <div className="p-4 bg-background flex-grow flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold line-clamp-1 min-h-[2rem]">{{ title }}</h3>
        <p v-if="description" v-html="description" className="text-lg text-muted-foreground line-clamp-3 max-h-[5rem]"></p>
        <p v-else>Esta caja no posee descripción...</p>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <span v-if="type" class="bg-[#e38720] px-2 py-1 text-primary-foreground rounded-full text-[14px] font-medium">{{ type }}</span>
        <span v-else class="bg-[#e38720] px-2 py-1 text-primary-foreground rounded-full text-[14px] font-medium">No type</span>
        <span v-if="containsRare" class="multicolor px-2 py-1 text-primary-foreground rounded-full text-[14px] font-medium">Contains rare item</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes color-change {
  0% {
    background-color: #ffffff;
  }
  10% {
    background-color: #ff00ff;
  }
  20% {
    background-color: #ff0066; 
  }
  30% {
    background-color: #ff3300; 
  }
  40% {
    background-color: #ff6600; 
  }
  50% {
    background-color: #ffcc00; 
  }
  60% {
    background-color: #ccff00; 
  }
  70% {
    background-color: #99ff00; 
  }
  80% {
    background-color: #33ff00; 
  }
  90% {
    background-color: #00ff66; 
  }
  100% {
    background-color: #00ffcc;
  }
}


.multicolor {
  animation: color-change 5s infinite;
}
</style>