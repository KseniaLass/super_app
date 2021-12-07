<template>
    <div class="tasks-wrapper container">
        <div class="tasks-sidebar-wrapper">
            <div class="tasks-sidebar">
                <ul class="tasks-nav">
                    <li 
                        class="tasks-nav-item" 
                        v-for="task of tasksNav" 
                        :key="task"
                        @click="goFilter(task.name)"
                        >{{task.value}}
                    </li>
                </ul>
            </div>
        </div>
        
        <div class="tasks-list">
            <div class="task-item">
                <div class="task-item-id">1</div>
                <div class="task-item-title">Помыть посуду</div>
                <div class="task-item-date">07.12.2021</div>
                <button class="task-item-edit">&#9998; Редактировать</button>
                <button class="task-item-delete">&otimes; Удалить</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                tasksNav: [
                    {
                        name: 'new',
                        value: 'Новые'
                    },
                    {
                        name: 'inJob',
                        value: 'В работе'
                    },
                    {
                        name: 'done',
                        value: 'Завершенные'
                    }
                ]
            }
        },
        methods: {
            goFilter(item){
                alert(item)
            }
        }
    }
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700&display=swap');
    *{
        font-family: 'Montserrat', sans-serif;
    }
    .tasks-wrapper{
        width: 100%;
        height: 1000px;
        display: grid;
        grid-template-columns: 2fr 6fr;
    }
    .tasks-sidebar-wrapper{
        position: relative;
    }
    .tasks-sidebar{
        position: fixed;
        top: 130px;
    }
    .tasks-nav{
        margin-left: 20px;
    }
    .tasks-nav-item{
        color: blanchedalmond;
        list-style-type: none;
        cursor: pointer;
        margin-bottom: 15px;
        font-size: 24px;
        font-weight: 200;
        letter-spacing: 1px;
    }
    .tasks-nav-item:hover{
        color: #d6a812;
        transition: 0.2s;
    }
    .tasks-nav-item-active{

    }
    .tasks-list{
        margin-top: 130px;
        color: blanchedalmond;
    }
    .task-item{
        background-color: rgb(238, 16, 16);
        width: 100%;
        height: 80px;
        display: grid;
        grid-template-columns: 1fr 5fr 2fr 2fr 2fr;
        justify-content: center;
        align-items: center;
    }

</style>