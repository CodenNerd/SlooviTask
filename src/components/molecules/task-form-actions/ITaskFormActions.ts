import { MouseEventHandler } from "react"

export interface ITaskFormActions {
    className?: string
    handleCloseTaskForm: MouseEventHandler<HTMLButtonElement>
}