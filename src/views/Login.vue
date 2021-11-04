<template>
    <section class="content container">
        <div class="content__text">
            <div class="text-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </div>
            <div class="text-subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolores iste odio a enim quisquam ipsa nesciunt sint numquam. Consequatur, magnam suscipit illo tempore provident placeat porro pariatur, repellat voluptate aut saepe et quis, accusamus error odio? Voluptate, dolorem voluptatum sint placeat ducimus pariatur illum, voluptatem, tenetur sequi quod iusto!<br>
                <br>
            </div>
        </div>
        <div class="content__form-wrapper">
            <form class="content__form">
                <div class="form-title">
                    Авторизация
                </div>
                <label for="login" class="input-label">{{loginInputLabel}}</label>
                <input v-model="loginInput" type="text" id="login" class="input" placeholder="Введите Ваш Email">
                <label for="password" class="input-label">{{passwordInputLabel}}</label>
                <input v-model="passwordInput" type="password" id="password" class="input" placeholder="Введите Ваш пароль">
                <div class="btns">
                    <button class="btn" @click.prevent="logIn">ВОЙТИ</button>
                    <button class="btn" @click.prevent="goToRegistration">РЕГИСТРАЦИЯ</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return{
                loginInput: '',
                loginInputLabel: 'Логин*',
                passwordInput: '',
                passwordInputLabel: 'Пароль*'
            }
        },
        methods: {
            async logIn(){
                // Запрос на сервер и получение массива с пользователями
                const {data} = await axios.get('https://superapp-boldinov-default-rtdb.firebaseio.com/users.json')
                const arreyUsers = Object.keys(data).map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                })
                // Поиск пользователя в массиве с логином из инпута
                try {
                    this.$store.state.user = arreyUsers.find(user => user.email === this.loginInput)
                    if(this.passwordInput == this.$store.state.user.password){
                        this.$store.state.superApp.logInTrue = true
                        localStorage.setItem('superApp', JSON.stringify(this.$store.state.superApp))
                        this.$router.push('/')
                    }else{
                        this.passwordInputLabel = 'Пароль не верный'
                    }
                } catch (err) {
                    this.loginInputLabel = 'Пользователь с таким логином не зарегистрирован'
                }
            },
            goToRegistration(){
                this.$router.push('/registration')
            }
        }
    }
</script>

<style scoped>

    .content{
        margin: 0 auto;
    }

    .content{
        margin-top: 50px;
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    .text-title{
        color: #BFBFBF;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 2px;
        font-weight: bold;
        font-size: 40px;
        text-transform: uppercase;
    }
    .text-subtitle{
        margin-top: 20px;
        color: #BFBFBF;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 1px;
        font-size: 18px;
        line-height: 22px;
        padding-right: 50px;
    }
    .login-info{
        color: #d6a812;
    }
    .content__form-wrapper{
        padding-left: 70px;
        padding-right: 70px;
    }
    .content__form{
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.603);
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
        align-self: flex-start;
    }
    .input{
        margin-top: 7px;
        padding: 10px;
        border: 0;
        border-radius: 8px;
        align-self: flex-start;
        width: 400px;
        height: 30px;
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 18px;
        box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.67) inset;  
    }
    .btns{
        display: flex;
        align-self: flex-start;
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
</style>
