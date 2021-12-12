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
            password: '',
            toDo: []
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
