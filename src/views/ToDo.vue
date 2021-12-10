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
                <div class="task-item-id">{{taskId}}</div>
                <div class="task-item-title">{{taskName}}</div>
                <div class="task-item-date">{{createDate}}</div>
                <button class="task-item-edit">&#9998;</button>
                <button class="task-item-delete">&otimes;</button>
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
                        value: 'Новые задачи'
                    },
                    {
                        name: 'inJob',
                        value: 'Задачи в работе'
                    },
                    {
                        name: 'done',
                        value: 'Завершенные'
                    }
                ],
                tasks: [
                    {
                        taskId: 1,
                        taskName: 'Помыть посуду',
                        taskDesсription: 'Прекрасно. Опросите водителей. Может, они что видели. Затем свяжитесь с таксомоторной компанией, перешлите им описание беглецов. А я позвоню в Интерпол.',
                        createDate: '07.12.2021'
                    },
                    {
                        taskId: 2,
                        taskName: 'Помыть посуду',
                        taskDesсription: 'Прекрасно. Опросите водителей. Может, они что видели. Затем свяжитесь с таксомоторной компанией, перешлите им описание беглецов. А я позвоню в Интерпол.',
                        createDate: '07.12.2021'
                    },
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
    /* .tasks-nav{

    } */
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
    /* .tasks-nav-item-active{

    } */
    .tasks-list{
        margin-top: 130px;
        color: blanchedalmond;
        display: flex;
        justify-content: center;
    }
    .task-item{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #1E1F1C;
        box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.603);
        border-radius: 10px;
        width: 80%;
        display: grid;
        grid-template-columns: 1fr 6fr 2fr 1fr 1fr;
        justify-content: center;
        align-items: center;
    }
    .task-item-id, 
    .task-item-title,
    .task-item-date{
        font-size: 20px;
        letter-spacing: 2px;

    }
    .task-item-edit,
    .task-item-delete{
        border-radius: 50%;
        border: none;
        width: 30px;
        height: 30px;
        justify-self: end;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #1E1F1C;
        cursor: pointer;
        transition: 0.1s;
    }
    .task-item-edit{
        font-size: 30px;
        color: rgb(59, 235, 103);
    }
    .task-item-delete{
        font-size: 38px;
        color: red;
    }
    .task-item-edit:hover,
    .task-item-delete:hover{
        transform: scale(1.2);
        transition: 0.3s;
    }
    .task-item-edit:active,
    .task-item-delete:active{
        transform: scale(1);
    }

</style>