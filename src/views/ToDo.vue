<template>
    <div class="tasks-wrapper container">
        <div class="tasks-sidebar-wrapper">
            <div class="tasks-sidebar">
                <ul class="tasks-nav">
                    <li class="tasks-nav-item">Новые</li>
                    <li class="tasks-nav-item">В работе</li>
                    <li class="tasks-nav-item">Завершенные</li>
                </ul>
            </div>
        </div>
        
        <div class="tasks-list">
            jfjfjfjfjfjfjfjf
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
    .tasks-wrapper{
        width: 100%;
        height: 1000px;
        display: grid;
        grid-template-columns: 2fr 6fr;
    }
    .tasks-sidebar-wrapper{
        background-color: rgba(105, 105, 105, 0.541);
        position: relative;
    }
    .tasks-sidebar{
        position: fixed;
        top: 100px;
    }
    .tasks-list{
        background-color: rgb(182, 118, 22);
        margin-top: 100px;
    }

</style>