import axios from "axios"
import config from "../../env"
import { endpoints } from "../../utils/endpoints"
import http from "../../utils/http"
import { AUTH, LOADING, TASKS, USERS } from "../action-types"
import store from "../store"

export const getAuthCredentials = async () => {
   const res = await axios.post(config.API_HOST + endpoints.LOGIN, {
                        email : "smithwills1989@gmail.com",
                        password : "12345678"
                    },
                    {headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }}
                )
    if (res?.data?.status === "success") {
        store.dispatch({
            type: AUTH,
            payload: {
                isAuthenticated: true,
                accessToken: res?.data?.results?.token,
                userId: res?.data?.results?.user_id,
                companyId: res?.data?.results?.company_id,
            }
        })
    }
}

export const getTasks = () => {
    store.dispatch({ type: LOADING, payload: true })
    const {companyId} = store.getState().auth
    http.get(`${endpoints.TASKS}?company_id=${companyId}`)
    .then(res => {
        if ( res?.data?.status === "success" ) {
            store.dispatch({
                type: TASKS,
                payload: res?.data?.results
            })
        }
    })
    .catch(() => {})
    .then(() => {
        store.dispatch({ type: LOADING, payload: false })
    })
}

export const getUsers = () => {
    store.dispatch({ type: LOADING, payload: true })
    const {companyId} = store.getState().auth
    http.get(`${endpoints.TEAM}?product=outreach&company_id=${companyId}`)
    .then(res => {
        if ( res?.data?.status === "success" ) {
            store.dispatch({
                type: USERS,
                payload: res?.data?.results?.data
            })
        }
    })
    .catch(() => {})
    .then(() => {
        store.dispatch({
            type: LOADING,
            payload: false
        })
    })
}

export const createNewTask = ( payload: any, successCallback?:Function) => {
    store.dispatch({ type: LOADING, payload: true })
    const {companyId} = store.getState().auth
    http.post(`${endpoints.TASKS}?company_id=${companyId}`, payload)
    .then(res => {
        if ( res?.data?.status === "success" ) {
            successCallback?.()
            getTasks()
        }
    })
    .catch(() => {})
    .then(() => {
        store.dispatch({
            type: LOADING,
            payload: false
        })
    })
}

export const updateTask = (payload: any, taskId: string, successCallback?:Function) => {
    store.dispatch({ type: LOADING, payload: true })
    const {companyId} = store.getState().auth
    http.put(`${endpoints.TASKS}/${taskId}?company_id=${companyId}`, payload)
    .then(res => {
        if ( res?.data?.status === "success" ) {
            successCallback?.()
            getTasks()
        }
    })
    .catch(() => {})
    .then(() => {
        store.dispatch({
            type: LOADING,
            payload: false
        })
    })
}

export const deleteTask = (taskId: string, successCallback?:Function) => {
    // eslint-disable-next-line no-restricted-globals
    const proceed = confirm('Are you sure you want to delete this task?')
    if (!proceed) return
    store.dispatch({ type: LOADING, payload: true })
    const {companyId} = store.getState().auth
    http.delete(`${endpoints.TASKS}/${taskId}?company_id=${companyId}`)
    .then(res => {
        if ( res?.data?.status === "success" ) {
            successCallback?.()
            getTasks()
        }
    })
    .catch(() => {})
    .then(() => {
        store.dispatch({
            type: LOADING,
            payload: false
        })
    })
}

