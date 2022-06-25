import { MouseEventHandler } from "react"

export interface ITask {
    imageUrl: string,
    title: string,
    date: string,
    id: string,
    handleEdit: MouseEventHandler<HTMLDivElement>
    key: any
}
