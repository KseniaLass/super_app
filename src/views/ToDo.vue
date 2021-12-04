<template>
    <div class="container new">
        <div class="form">
            <!-- <input type="text" class="input">
            <button class="btn">Добавить</button> -->
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return { 

            }
        }
    }
</script>

<style scoped>
    *{
        font-family: Arial, Helvetica, sans-serif;
    }
    .container{
        margin-top: 10px;
        width: 100%; 
        height: 80vh;
        box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.603);
        border-radius: 20px;
    }
    .form{
        width: 100%;
    }
    .input{
        width: 400px;
        height: 40px;
        font-size: 24px;
    }
    .btn{

    }
</style>