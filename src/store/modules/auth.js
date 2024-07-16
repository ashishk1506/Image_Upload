import logins from "../../api/imgur"

const state = {
    token : null
}
const getters = {
    isLoggedIn : state => !!state.token
}
const mutations = {
    setToken : (state, token) => {
        state.token = token
    }
}
const actions = {
    login : () =>{
        logins()
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}