<script setup lang="ts">
import { onMounted } from 'vue';
import { useSkinStore } from '../store/api';
import BoxCard from '../components/BoxCard.vue';

onMounted(async () => {
    const skinStore = useSkinStore()
    await skinStore.getBoxes()
})
</script>

<template>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <BoxCard v-for="box in useSkinStore().boxes" :title="box.name" :description="box.description"  :type="box.type" :imgUrl="box.image" :contains-rare="box.contains_rare.length > 1 ? true : false" />
        </div>
    </div>
</template>