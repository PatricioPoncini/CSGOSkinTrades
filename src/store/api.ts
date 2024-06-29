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
export interface Sticker {
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

export const useStickerStore = defineStore('stickerStore', {
    state: () => ({
        stickers: [] as Sticker[]
    }),
    actions: {
        async getStickers() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/stickers.json")
            this.stickers = response.data
            console.log("stickers: ",this.stickers)
        }
    }
});
