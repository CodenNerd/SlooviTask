import axios from "axios"
import config from "../../env"
import { endpoints } from "../../utils/endpoints"
import http from "../../utils/http"
import { AUTH, TASKS, USER, USERS } from "../action-types"
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
    if (res?.data?.code === 200) {
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
    console.log(res);
}

export const getTasks = () => {
    const {companyId} = store.getState().auth
    http.get(`${endpoints.TASKS}?company_id=${companyId}`)
    .then(res => {
        console.log(res)
        if ( res?.data?.code === 200 ) {
            store.dispatch({
                type: TASKS,
                payload: res?.data?.results
            })
        }
    })
}

export const getUsers = () => {
    const {companyId} = store.getState().auth
    http.get(`${endpoints.TEAM}?product=outreach&company_id=${companyId}`)
    .then(res => {
        console.log(res)
        if ( res?.data?.code === 200 ) {
            store.dispatch({
                type: USERS,
                payload: res?.data?.results?.data
            })
        }
    })
}