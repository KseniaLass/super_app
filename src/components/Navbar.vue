<template>
    <div class="header">
        <div class="header__wrapper container">
            <div class="header__logo">
                SUPERAPP
            </div>
            <div class="header__nav">
                <ul>
                    <li v-for="(nav, i) in navigationItems" :key="nav.i">
                        {{nav}}
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
                navigationItems: [
                    "Главная",
                    "Калькулятор",
                    "Пункт 3",
                    "Пункт 101"
                ]
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
        justify-content: center;
    }
    .header__logo{
        align-self: center;
        color: #d6a812;
        font-family: Arial, Helvetica, sans-serif;
        letter-spacing: 6px;
        font-size: 29px;
    }
</style>