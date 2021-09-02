<template>
    <Navbar />
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
    body{
        background-color: #1E1F1C;
        margin: 0;
        padding: 0;
        /* color: bisque; */
    }
    .container{
        max-width: 1200px;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
