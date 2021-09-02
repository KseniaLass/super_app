<template>
    <div class="header">
        <div class="header__wrapper container">
            <div class="header__logo">
                SUPERAPP
            </div>
            <div class="header__nav" v-if="$store.state.logIn == true">
                <ul class="header__navItemsList">
                    <li class="header__navItem">
                        <router-link to="/">Главная</router-link>
                        <router-link to="/Calculate">Калькулятор</router-link>
                        <router-link to="/login">Пункт 3</router-link>
                        <router-link to="">Пункт 101</router-link>
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
        display: flex;
        justify-content: space-between;
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
</style>