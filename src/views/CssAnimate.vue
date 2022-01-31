<template>
    <div class="container animate__animated animate__fadeIn">
        <div class="content animation-one">
            <img class="background-image-grass" src="../img/pngegg.png" alt="background-image">
            <img class="background-image-horse" src="../img/pngegg-3.png" alt="background-image">
        </div>
        <div class="content animation-two">
            <div class="ball-jump" v-for="ball of animationTwo.sumBalls" :key="ball"></div>
        </div>
        <div class="content animation-three">
            <div class="ball-pendulum" v-for="ball of animationThree.sumBalls" :key="ball"></div>
        </div>
    </div>
</template>

<script>
    import Animate from 'animate.css'
    export default {
        components: {
            Animate
        },
        data(){
            return {
                animationTwo: {
                    sumBalls: 15
                },
                animationThree: {
                    sumBalls: 7
                }
                
            }
        }
    }
</script>

<style scoped>
    .content{
        height: 90vh;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .background-image-grass{
        position: absolute;
        bottom: 0;
        height: 80%;
        animation: grassAnimate 2s infinite;
    }
    .background-image-horse{
        position: absolute;
        bottom: 120px;
        height: 60%;
        animation: horseAnimate 2s infinite;
    }
    @keyframes horseAnimate{
        from{
            transform: translateY(0);
        }
        25%{
            transform: translateY(0);
        }
        50%{
            transform: translateY(20px);
        }
        75%{
            transform: translateY(0);
        }
        to{
            transform: translateY(0);
        }
    }
    @keyframes grassAnimate{
        from{
            transform: translateX(-10px);
        }
        50%{
            transform: translateX(10px);
        }
        to{
            transform: translateX(-10px);
        }    
    }
    .animation-two{
        margin-top: 100px;
        height: 400px;
        align-items: center;
    }
    .ball-jump{
        margin-right: 10px;
        margin-left: 10px;
        transform: translateY(65px);
        background-color: #fff;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        animation: jump 1.5s infinite ease-in-out;
    }
    .ball-jump:nth-child(2) {
        animation-delay: 100ms;
    }
    .ball-jump:nth-child(3) {
        animation-delay: 200ms;
    }
    .ball-jump:nth-child(4) {
        animation-delay: 300ms;
    }
    .ball-jump:nth-child(5) {
        animation-delay: 400ms;
    }
    .ball-jump:nth-child(6) {
        animation-delay: 500ms;
    }
    .ball-jump:nth-child(7) {
        animation-delay: 600ms;
    }
    .ball-jump:nth-child(8) {
        animation-delay: 700ms;
    }
    .ball-jump:nth-child(9) {
        animation-delay: 800ms;
    }
    .ball-jump:nth-child(10) {
        animation-delay: 900ms;
    }
    .ball-jump:nth-child(11) {
        animation-delay: 1000ms;
    }
    .ball-jump:nth-child(12) {
        animation-delay: 1100ms;
    }
    .ball-jump:nth-child(13) {
        animation-delay: 1200ms;
    }
    .ball-jump:nth-child(14) {
        animation-delay: 1300ms;
    }
    .ball-jump:nth-child(15) {
        animation-delay: 1400ms;
    }
    @keyframes jump {
        0% {
            transform: translateY(65px);
        }
        25% {
            transform: translateY(65px);
        }
        50% {
            transform: translateY(-65px);
        }
        75% {
            transform: translateY(65px);
        }
        100% {
            transform: translateY(65px);
        }
    }
    .animation-three {
        height: 500px;
        border-radius: 50%;
        align-items: center;
        margin-left: -350px;
    }
    .ball-pendulum {
        background-color: rgb(236, 0, 0);
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;

        transform-origin: 500% center;
        position: absolute;
        animation: pendulum 3.5s infinite ease-in-out;
        
    }
    .ball-pendulum:nth-child(2) {
        animation-delay: 250ms;
    }
    .ball-pendulum:nth-child(3) {
        animation-delay: 500ms;
    }
    .ball-pendulum:nth-child(4) {
        animation-delay: 750ms;
    }
    .ball-pendulum:nth-child(5) {
        animation-delay: 1000ms;
    }
    .ball-pendulum:nth-child(6) {
        animation-delay: 1250ms;
    }
    .ball-pendulum:nth-child(7) {
        animation-delay: 1500ms;
    }
    @keyframes pendulum {
        to {
            transform: rotate(1turn);
        }
    }
</style>