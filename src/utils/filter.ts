import { Box } from "../store/api";

export const filterByStr = (str: string, arr: Box[]) => {
    return arr.filter(item => item.name.toLowerCase().includes(str.toLowerCase()));
}
