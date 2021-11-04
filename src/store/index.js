import { createStore } from 'vuex'

export default createStore({
    state: {
        superApp: {
            logInTrue: false,
        },
        user: {
            name: 'Болдинов Е.В.',
            loginUser: 'admin',
            passwordUser: 'admin'
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
