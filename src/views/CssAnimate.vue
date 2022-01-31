<template>
    <div class="container animate__animated animate__fadeIn">
        <div class="content animation-one">
            <img class="background-image-grass" src="../img/pngegg.png" alt="background-image">
            <img class="background-image-horse" src="../img/pngegg-3.png" alt="background-image">
        </div>
        <div class="content animation-two">
            <div class="ball" v-for="ball of sumBalls" :key="ball"></div>
        </div>
    </div>

    <!-- <div class="content container">
        <img class="background-image-grass" src="../img/pngegg.png" alt="background-image">
        <img class="background-image-horse" src="../img/pngegg-3.png" alt="background-image">
    </div>
    <div class="content container">
        <img class="background-image-grass" src="../img/pngegg.png" alt="background-image">
        <img class="background-image-horse" src="../img/pngegg-3.png" alt="background-image">
    </div> -->
</template>

<script>
    import animate from 'animate.css'

    export default {
        components: {
            animate
        },
        data(){
            return {
                sumBalls: 20
            }
        }
    }
</script>

<style scoped>
    .content{
        height: 80vh;
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
    .animation-two{
        margin-top: 100px;
        height: 400px;
        justify-content: space-around;
        align-items: center;
    }
    .ball{
        background-color: #fff;
        height: 20px;
        width: 20px;
        border-radius: 50%;
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





</style>