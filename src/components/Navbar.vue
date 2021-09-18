<template>
    <div class="header">
        <div class="header__wrapper container">
            <div class="header__logo">
                SUPERAPP
            </div>
            <div class="header__nav" v-if="$store.state.logInTrue">
                <ul class="header__navItemsList">
                    <li class="header__navItem">
                        <router-link class="navItem" to="/home">Главная</router-link>
                    </li>
                    <li class="header__navItem">
                        <router-link class="navItem" to="/todo">ToDo</router-link>
                    </li>                    
                    <li class="header__navItem">
                        <router-link class="navItem" to="/css-animate">CSS Анимация</router-link>
                    </li>
                    <li class="header__navItem">
                        <router-link class="navItem" to="/Calculate">Калькулятор</router-link>
                    </li>
                    <li class="header__navItem">
                        <router-link class="navItem btn" to="/" @click="logOut">Выйти</router-link>
                    </li>
                    <div class="header__navItem">
                        <div class="navItem user">{{user}}</div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                user: this.$store.state.user.name
            }
        },
        methods: {
            logOut(){
                this.$store.state.logInTrue = false
            }
        },
        beforeMount(){

        }
    }
</script>

<style>
    .header{
        height: 100px;
        display: flex;
        justify-content: center;
        padding-left: 10px;
        padding-right: 10px;
    }
    .header__wrapper{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .header__logo{
        align-self: center;
        color: #d6a812;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 6px;
        font-size: 29px;
    }
    .header__nav{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header__navItemsList{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .header__navItem{
        list-style-type: none;
    }
    .navItem{
        text-decoration: none;
        color: #BFBFBF;
        margin-left: 30px;
        font-family: Arial, Helvetica, sans-serif; 
        font-size: 18px;
        letter-spacing: 2px;
    }
    .active{
        transition: 0.5s;
        color: #d6a812;
    }

    .btn{
        text-decoration: none;
        padding: 5px 9px 5px 9px;
        border: 0;
        border-radius: 8px;
        background-color: #d6a812;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #1E1F1C;
    }
    .user{
        font-size: 14px;
        border-bottom: 1px solid rgb(192, 192, 192);
    }
</style>