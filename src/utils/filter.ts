import { Box, Collectible, Collection, Skin, Sticker } from "../store/api";

export const filterByStr = (str: string, arr: Box[]) => {
    return arr.filter(item => item.name.toLowerCase().includes(str.toLowerCase()));
}

export const filterSkinsByStr = (str: string, arr: Skin[]) => {
    return arr.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
}
export const filterStickersByStr = (str: string, arr: Sticker[]) => {
    return arr.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
}
export const filterCollectionsByStr = (str: string, arr: Collection[]) => {
    return arr.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
}

export const filterCollectiblesByStr = (str: string, arr: Collectible[]) => {
    return arr.filter(item => item.name.toLowerCase().includes(str.toLowerCase()))
}