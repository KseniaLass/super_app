import { createStore } from 'vuex'

export default createStore({
    state: {
        superApp: {
            logInTrue: false,
            name: ''
        },
        user: {
            id: '',
            name: '',
            email: '',
            password: '',
            toDo:[
                {
                    checkbox: true,
                    taskName: 'Помыть посуду',
                    createDate: '07.12.2021'
                },
                {
                    checkbox: false,
                    taskName: 'Вынести мусор',
                    createDate: '08.12.2021'
                },
                {
                    checkbox: true,
                    taskName: 'Покормить кошку',
                    createDate: '09.12.2021'
                }
            ]
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
