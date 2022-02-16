import { createStore } from 'vuex'

export default createStore({
    state: {
        // Информацию о пользователе и служебную информацию приложения лучше разделить
        superApp: {
            name: '',
            id: '',
            name: '',
            email: '',
            password: '',
            toDo: []
        },
        logInTrue: false,
    },
    mutations: {
        setSuperApp (state, user) {
            state.superApp = user
        },
        setLogin (state, status) {
            state.logInTrue = status
        }
    },
    actions: {
    },
    modules: {
    }
})
