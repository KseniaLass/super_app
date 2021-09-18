<template>
    <div class="header">
        <div class="header__wrapper container">
            <div class="header__logo">
                SUPERAPP
            </div>
            <div class="header__nav" v-if="$store.state.logInTrue == true">
                <ul class="header__navItemsList">
                    <li class="header__navItem">
                        <router-link class="navItem" to="/home">Главная</router-link>
                    </li>
                    <li class="header__navItem">
                        <router-link class="navItem" to="/Calculate">Калькулятор</router-link>
                    </li>
                    <li class="header__navItem">
                        <router-link class="navItem" to="/" @click="logOut">Выйти</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods: {
            logOut(){
                this.$store.state.logInTrue = false
            }
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
</style>