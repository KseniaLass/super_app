<template>
    <div class="content__form-wrapper">
        <form class="content__form" @submit.prevent="setNewUser" v-if="!registrationDone">
            <div class="form-title">
                Регистрация
            </div>
            <label for="email" class="input-label" :class="{label_error: errors.email == true}">{{user.emailLabel}}</label>
            <input v-model="user.email" type="email" id="email" class="input" :class="{input_error: errors.email == true}" placeholder="Укажите Ваш Email">
            <label for="name" class="input-label" :class="{label_error: errors.name == true}">{{user.nameLabel}}</label>
            <input v-model="user.name" type="text" id="name" class="input" :class="{input_error: errors.name == true}" placeholder="Укажите Ваше имя">
            <label for="password" class="input-label" :class="{label_error: errors.password == true}">{{user.passwordLabel}}</label>
            <input v-model="user.password" type="password" id="password" class="input" :class="{input_error: errors.password == true}" placeholder="Введите Ваш пароль">
            <label for="passwordСonfirm" class="input-label" :class="{label_error: errors.passwordСonfirm == true}">{{user.passwordСonfirmLabel}}</label>
            <input v-model="user.passwordСonfirm" type="password" id="passwordСonfirm" class="input" :class="{input_error: errors.passwordСonfirm == true}" placeholder="Введите пароль ещё раз">
            <div class="btns">
                <button class="btn">ОТПРАВИТЬ</button>
                <button class="btn" @click.prevent="goToLogin">ОТМЕНА</button>
            </div>
        </form>
        <div class="response" v-else>
            <h1>Регистрация успешно выполнена. Перейти на страницу авторизации.</h1>
            <button class="btn" @click.prevent="goToLogin">ПЕРЕЙТИ</button>

        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return{
                user: {
                    email: '',
                    emailLabel: 'Логин*',
                    name: '',
                    nameLabel: 'Имя*',
                    password: '',
                    passwordLabel: 'Пароль*',
                    passwordСonfirm: '',
                    passwordСonfirmLabel: 'Подтверждение пароля*'
                },
                errors: {
                    email: false,
                    name: false,
                    password: false,
                    passwordСonfirm: false
                },
                registrationDone: false

            }
        },
        methods: {
            goToLogin(){
                this.$router.push('/login')
            },
            async setNewUser(){
                // Запрос на сервер и получение массива с пользователями
                const {data} = await axios.get('https://superapp-boldinov-default-rtdb.firebaseio.com/users.json')
                const arreyUsers = Object.keys(data).map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                })


                if(arreyUsers.find(user => user.email === this.user.email)){
                    this.errors.email = true
                    this.user.emailLabel = 'Пользователь с таким именем уже существует'
                }else{
                    
                    if(this.user.password === this.user.passwordСonfirm){
                        const response = await fetch('https://superapp-boldinov-default-rtdb.firebaseio.com/users.json', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                email: this.user.email,
                                name: this.user.name,
                                password: this.user.password
                            })
                        })
                        await response.json()
                        this.user.email = ''
                        this.user.name = ''
                        this.user.password = ''
                        if(response){
                            this.registrationDone = true
                        }
                    }else{
                        this.errors.passwordСonfirm = true
                        this.user.passwordСonfirmLabel = 'Пароли не совпадают'
                        this.user.passwordСonfirm = ''
                    }



                }


















                // if(this.user.password === this.user.passwordСonfirm){
                //     const response = await fetch('https://superapp-boldinov-default-rtdb.firebaseio.com/users.json', {
                //         method: 'POST',
                //         headers: {
                //             'Content-Type': 'application/json'
                //         },
                //         body: JSON.stringify({
                //             email: this.user.email,
                //             name: this.user.name,
                //             password: this.user.password
                //         })
                //     })
                //     await response.json()
                //     this.user.email = ''
                //     this.user.name = ''
                //     this.user.password = ''
                //     if(response){
                //         this.registrationDone = true
                //     }
                // }else{
                //     alert('Пароли не совпадают')
                //     this.user.passwordСonfirm = ''
                // }
            }
        }
    }
</script>

<style scoped>
    .content__form-wrapper{
        padding-left: 70px;
        padding-right: 70px;
    }
    .content__form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.603); */
        border-radius: 10px;
        padding: 20px;
    }
    .form-title{
        color: #BFBFBF;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 2px;
        font-size: 26px;
        text-transform: uppercase;
    }
    .input-label{
        margin-top: 30px;
        color: #BFBFBF;
        font-family: Arial, Helvetica, sans-serif;
    }
    .input{
        margin-top: 7px;
        padding: 10px;
        border: 0;
        border-radius: 8px;
        width: 400px;
        height: 30px;
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 18px;
        box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.67) inset;  
    }
    .label_error{
        color: red;
    }
    .input_error{
        border: 2px solid red;
    }
    .btns{
        display: flex;
    }
    .btn{
        text-decoration: none;
        margin-top: 30px;
        border: 0;
        border-radius: 8px;
        background-color: #d6a812;
        width: 150px;
        height: 40px;
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 16px;
        letter-spacing: 1px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1E1F1C;
        margin-right: 30px;
    }
    .btn:hover{
        background-color: #f8e003;
    }
</style>>

