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
    }),
    actions: {
        async getSkins() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/skins.json")
            this.skins = response.data;
        },
    }
});

export const useBoxesStore = defineStore('boxesStore', {
    state: () => ({
        boxes: [] as Box[]
    }),
    actions: {
        async getBoxes() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/crates.json")
            this.boxes = response.data;
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
            console.log("stickers: ", this.stickers)
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


interface CollectionContains {
    rarity: Rarity
}
export interface Collection {
    name: string;
    contains: CollectionContains[]
    image: string;
    rarities: Record<string, number>

}
interface Rarity {
    id: string,
    name: string,
}

export const useCollectionStore = defineStore('collectionStore', {
    state: () => ({
        collections: [] as Collection[],
    }),
    actions: {
        async getCollections() {
            const response = await axios.get("https://bymykel.github.io/CSGO-API/api/es-MX/collections.json")
            this.collections = response.data
            await this.getCollectionRarities(this.collections)
            console.log(this.collections)
        },
        async getCollectionRarities(collections: Collection[]) {
            for (let collection of collections) {
                let rarities: Record<string, number> = {}
                for (let contain of collection.contains) {
                    if (rarities[contain.rarity.id] == undefined) {

                        rarities[contain.rarity.id] = 1;
                    } else {
                        rarities[contain.rarity.id] += 1;
                    }

                }
                collection.rarities = rarities

            }
        }
    }
});