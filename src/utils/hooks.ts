import { useEffect } from "react"
import { useSelector } from "react-redux"

export const useGlobalFetchData = (globalStateEntity: string, entityAction?: Function) => {
    const entity = useSelector((state: any) => state[globalStateEntity])
    const auth = useSelector((state: any) => state.auth )

    useEffect(() => {
        entityAction?.()
    }, [auth.isAuthenticated, entityAction])

    return entity;
}