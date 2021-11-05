import { createStore } from 'vuex'

export default createStore({
    state: {
        superApp: {
            logInTrue: false,
            name: ''
        },
        user: {
            name: '',
            email: '',
            password: ''
        },
        arreyUsers: []
    },
    mutations: {
    },
    actions: {
    },
    modules: {
    }
})
