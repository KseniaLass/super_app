<template>
   <div class="tasks-wrapper">
       <div class="tasks-new"></div>
       <div class="tasks-line"></div>
       <div class="tasks-done"></div>
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
    .tasks-wrapper{
        /* background-color: burlywood; */
        width: 100%;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1px 1fr;
    }
    .tasks-line{
        background-color: blanchedalmond;
        border: none;
    }
</style>