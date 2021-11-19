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
            <div class="loader" v-if="loading === true">
                <img src="../assets/gifs/wait-load.gif" alt="gif">
                <p>Загрузка...</p>
            </div>
            <form class="content__form" @submit.prevent="logIn" v-else>
                <div class="form-title">
                    Авторизация
                </div>
                <label for="login" class="input-label" :class="{label_error: errors.login == true}">{{loginInputLabel}}</label>
                <input v-model="loginInput" type="email" id="login" class="input" :class="{input_error: errors.login == true}" placeholder="Введите Ваш Email">
                <label for="password" class="input-label" :class="{label_error: errors.password == true}">{{passwordInputLabel}}</label>
                <input v-model="passwordInput" type="password" id="password" class="input" :class="{input_error: errors.password == true}" placeholder="Введите Ваш пароль">
                <div class="btns">
                    <button class="btn">ВОЙТИ</button>
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
                passwordInputLabel: 'Пароль*',
                errors: {
                    login: null,
                    password: null
                },
                loading: false
            }
        },
        methods: {
            async logIn(){
                this.loading = true
                // Запрос на сервер и получение массива с пользователями
                const {data} = await axios.get('https://superapp-boldinov-default-rtdb.firebaseio.com/users.json')
                const arreyUsers = Object.keys(data).map(key => {
                    return {
                        id: key,
                        ...data[key]
                    }
                })
                // Поиск пользователя в массиве с логином из инпута и запись объекта во vuex
                this.$store.state.user = arreyUsers.find(user => user.email === this.loginInput)
                console.log(this.$store.state.user)
                this.loading = false
                // ================= Валидация EMAIL =====================
                // Проверка введено ли что нибудь в поле email
                if(this.loginInput.length === 0){  
                    // Записываем ошибку     
                    this.errors.login = true  
                    // Выводим в лейбле сообщение об ошибке
                    this.loginInputLabel = 'Поле не может быть пустым*'
                }else{
                    // Отменяем ошибку     
                    this.errors.login = null  
                    // Возвращаем лейбл в исходное состояние
                    this.loginInputLabel = 'Логин*'
                    // Проверка есть ли данный пользователь на сервере
                    if(this.$store.state.user === undefined){   
                        // Записываем ошибку     
                        this.errors.login = true            
                        // Выводим в лейбле сообщение об ошибке
                        this.loginInputLabel = 'Пользователь не найден. Зарегистрируйтесь*'
                    }
                }

                // ================= Валидация PASSWORD =====================
                // Проверка введено ли что нибудь в поле password
                if(this.passwordInput.length === 0){
                    // Записываем ошибку     
                    this.errors.password = true  
                    // Выводим в лейбле сообщение об ошибке
                    this.passwordInputLabel = 'Поле не может быть пустым*'
                }else{
                    // Отменяем ошибку     
                    this.errors.password = null  
                    // Возвращаем лейбл в исходное состояние
                    this.passwordLabel = 'Пароль*'
                    if(this.$store.state.user.password !== this.passwordInput){
                        // Записываем ошибку     
                        this.errors.password = true  
                        // Выводим в лейбле сообщение об ошибке
                        this.passwordInputLabel = 'Пароль неверный*'
                    }else{
                        // Обозначение во vuex, что авторизация произведена
                        this.$store.state.superApp.logInTrue = true
                        this.$store.state.superApp.name = this.$store.state.user.name
                        // Обозначение в localstorage, что авторизация произведена
                        localStorage.setItem('superApp', JSON.stringify(this.$store.state.superApp))
                        // Переход на главную страницу
                        this.$router.push('/')
                    }
                }


            },
            goToRegistration(){
                this.$router.push('/registration')
            }
        },
        watch: {
            loginInput(){
                // Отменяем ошибку     
                this.errors.login = null  
                // Возвращаем лейбл в исходное состояние
                this.loginInputLabel = 'Логин*'
            },
            passwordInput(){
                // Отменяем ошибку     
                this.errors.password = null  
                // Возвращаем лейбл в исходное состояние
                this.passwordInputLabel = 'Пароль*'
            }
        }
    }
</script>


<style scoped>
    .loader{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    .loader img {
        width: 500px;
    }
    .loader p {
        color: #BFBFBF;
        position: absolute;
        margin: 0 auto;
    }
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
    .label_error{
        color: red;
    }
    .input_error{
        border: 2px solid red;
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
