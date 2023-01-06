import { Item } from "./item"

export type GroupData = {
    name: string,
    title: string,
    content: Item[],
    sortableFields: string[]
}