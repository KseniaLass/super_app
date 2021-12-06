<template>
    <Navbar class="navbar"/>
    <router-view/>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    export default {
        data(){
            return{

            }
        },
        methods: {

        },
        components: {
            Navbar
        }
    }
</script>

<style>
    
    .navbar{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        background-color: #1E1F1C;
        z-index: 99;
    }
    
    body{
        background-color: #1E1F1C;
        margin: 0;
        padding: 0;
    }
    .container{
        margin: 0 auto;
        max-width: 1200px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
