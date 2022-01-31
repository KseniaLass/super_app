<template>
    <div class="container welcome animate__animated animate__fadeIn">
        <h1 class="welcome-title animate__animated animate__fadeInLeft">Привет!!!</h1>
        <p class="welcome-subtitle animate__animated animate__fadeIn animate__delay-1s">
            Эй, {{$store.state.superApp.name}}, добро пожаловать в мое первое приложение, не имеющее абсолютно никакой смысловой нагрузки, созданное исключительно ради практики и на потеху опытных разработчиков. 
        </p>
        <p class="welcome-subtitle animate__animated animate__fadeIn animate__delay-1s">
            Эй, {{$store.state.superApp.name}}, добро пожаловать в мое первое приложение, не имеющее абсолютно никакой смысловой нагрузки, созданное исключительно ради практики и на потеху опытных товарищей. 
        </p>
    </div>
    
</template>

<script>
    import Animate from 'animate.css'
    export default {
        components: {
            Animate
        }
    }
</script>

<style scoped>
    *{
        /* height: 400px; */
        color: blanchedalmond;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
    }
    .welcome{
        margin-top: 200px;
        flex-direction: column;
    }
    .welcome-subtitle{
        width: 800px;
        line-height: 1.3;
        letter-spacing: 1.1px;
        color: rgba(163, 159, 151, 0.863);
        /* margin-bottom: 50px; */
    }
</style>