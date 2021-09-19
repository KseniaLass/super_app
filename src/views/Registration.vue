<template>
    <div class="content__form-wrapper">
        <form class="content__form">
            <div class="form-title">
                Регистрация
            </div>
            <label for="email" class="input-label">Логин*</label>
            <input v-model="newUser.email" type="email" id="email" class="input" placeholder="Укажите Ваш Email">
            <label for="name" class="input-label">Имя*</label>
            <input v-model="newUser.name" type="text" id="name" class="input" placeholder="Укажите Ваше имя">
            <label for="password" class="input-label">Пароль*</label>
            <input v-model="newUser.password" type="password" id="password" class="input" placeholder="Введите Ваш пароль">
            <label for="passwordСonfirm" class="input-label">Подтверждение пароля*</label>
            <input v-model="newUser.passwordСonfirm" type="password" id="passwordСonfirm" class="input" placeholder="Введите пароль ещё раз">
            <div class="btns">
                <button class="btn" @click.prevent="qqq">ОТПРАВИТЬ</button>
                <button class="btn" @click.prevent="goToLogin">ОТМЕНА</button>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                newUser: {
                    email: '',
                    name: '',
                    password: '',
                    passwordСonfirm: ''
                }

            }
        },
        methods: {
            goToLogin(){
                this.$router.push('/login')
            },
            qqq(){
                console.log(this.newUser)
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
        /* align-self: flex-start; */
    }
    .input{
        margin-top: 7px;
        padding: 10px;
        border: 0;
        border-radius: 8px;
        /* align-self: flex-start; */
        width: 400px;
        height: 30px;
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 18px;
        box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.67) inset;  
    }
    .btns{
        display: flex;
        /* align-self: flex-start; */
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

