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

export const useSkinStore = defineStore('skinStore', {
    state: () => ({
        skins: [] as Skin[]
    }),
    actions: {
        async getSkins() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/skins.json")
            this.skins = response.data
            console.log(this.skins)
        }
    }
});
interface Rarity {
    id: string,
    name: string,
}
export interface Collectible {
    name: string;
    description: string;
    image: string;
    rarity: Rarity;
}
export const useCollectibleStore = defineStore('collectibleStore', {
    state: () => ({
        collectibles: [] as Collectible[]
    }),
    actions: {
        async getCollectibles() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/collectibles.json")
            this.collectibles = response.data
            console.log("Collectibles: ", this.collectibles)
        },

    }
})