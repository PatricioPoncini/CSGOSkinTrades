import axios from "axios";
import { defineStore } from "pinia";

export interface Skin {
    name: string;
    description: string;
    image: string;
    rarity: {
        id: string;
        name: string;
    }
}

export interface Box {
    name: string;
    description?: string;
    image: string;
    type?: string;
    contains_rare: object[];
}

export const useSkinStore = defineStore('skinStore', {
    state: () => ({
        skins: [] as Skin[],
        boxes: [] as Box[]
    }),
    actions: {
        async getSkins() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/skins.json")
            this.skins = response.data;
        },
        async getBoxes() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/crates.json")
            this.boxes = response.data;
        }
    }
});
