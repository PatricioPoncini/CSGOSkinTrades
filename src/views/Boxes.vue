<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useBoxesStore } from '../store/api';
import BoxCard from '../components/BoxCard.vue';
import { filterByStr } from '../utils/filter';

const search = ref("");

onMounted(async () => {
    const boxesStore = useBoxesStore();
    await boxesStore.getBoxes();
});

const filteredBoxes = computed(() => {
    if (!search.value) {
        return useBoxesStore().boxes;
    }
    return filterByStr(search.value, useBoxesStore().boxes);
});
</script>

<template>
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto p-4">
        <h2 className="text-2xl font-bold text-center">Buscador</h2>
        <div className="w-full">
            <input
            type="text"
            placeholder="Caja de armas..."
            className="w-full rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            v-model="search"
            />
        </div>
    </div>
    <div class="flex justify-center">
        <div className="grid grid-cols-1 gap-12 py-8 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 lg:px-6 xl:px-8">
            <BoxCard v-for="box in filteredBoxes" :title="box.name" :description="box.description"  :type="box.type" :imgUrl="box.image" :contains-rare="box.contains_rare.length > 1 ? true : false" />
        </div>
    </div>
</template>