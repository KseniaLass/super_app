<template>
    <section class="content container">
        <div class="content__text">
            <div class="text-title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </div>
            <div class="text-subtitle">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore dolores iste odio a enim quisquam ipsa nesciunt sint numquam. Consequatur, magnam suscipit illo tempore provident placeat porro pariatur, repellat voluptate aut saepe et quis, accusamus error odio? Voluptate, dolorem voluptatum sint placeat ducimus pariatur illum, voluptatem, tenetur sequi quod iusto!<br>
                <br>
                <div class="login-info">
                    Login: admin<br>
                    Password: admin
                </div>
            </div>
        </div>
        <div class="content__form-wrapper">
            <form class="content__form">
                <div class="form-title">
                    Авторизация
                </div>
                <label for="login" class="input-label">Введите Ваш логин*</label>
                <input v-model="loginInput" type="text" id="login" class="input">
                <label for="password" class="input-label">Введите Ваш пароль*</label>
                <input v-model="passwordInput" type="password" id="password" class="input">
                <div class="btns">
                    <button class="btn" @click.prevent="logIn">ВОЙТИ</button>
                    <button class="btn" @click.prevent="registration">РЕГИСТРАЦИЯ</button>
                </div>
                <!-- <button class="btn" @click.prevent="logIn">ВОЙТИ</button>
                <button class="btn" @click.prevent="logIn">РЕГИСТРАЦИЯ</button> -->
            </form>
        </div>
    </section>
</template>

<script>
    export default {
        data(){
            return{
                loginInput: '',
                passwordInput: ''
            }
        },
        methods: {
            logIn(){
                if(this.loginInput == this.$store.state.user.loginUser && this.passwordInput == this.$store.state.user.passwordUser){
                    this.$store.state.logInTrue = true
                    this.$router.push('/home')
                }else{
                    alert('Логин или пароль не верны')
                }
            },
            registration(){
                alert('Регистрация')
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
