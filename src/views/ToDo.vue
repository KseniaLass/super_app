<template>
    <div class="tasks-wrapper container">
        <div class="tasks-sidebar-wrapper">
            <div class="tasks-sidebar">
                <ul class="tasks-nav">
                    <li 
                        class="tasks-nav-item" 
                        :class="{tasks_nav_item_active: taskNav.isActive}"
                        v-for="taskNav of tasksNav" 
                        :key="taskNav"
                        @click="tasksFilter(taskNav)"
                        >{{taskNav.value}}
                    </li>
                </ul>
            </div>
        </div>
        <div class="tasks-list">
            <div class="task-item-wrapper" v-if="tasks.length">
                <div class="task-item" v-for="task of tasks" :key="task" >
                    <input
                        class="task-item-check_box" 
                        type="checkbox" 
                        v-model="task.checkbox" 
                        :checked="task.checkbox"
                    >
                    <div class="task-item-title" :class="{task_done: task.checkbox}">{{task.taskName}}</div>
                    <div class="task-item-date" :class="{task_done: task.checkbox}">{{task.createDate}}</div>
                    <button class="task-item-edit">&#9998;</button>
                    <button class="task-item-delete" @click="deleteTask(task)">&otimes;</button>
                </div>
            </div>
            <div class="task-item-if-null" v-else>
                <div v-if="!tasks.length">
                    Список задач пуст. Добавьте новую задачу!
                </div>



                <!-- В процессе!!!!!!! -->



                <div v-else-if="tasks.checkbox === false">
                    Нет активных задач.
                </div>
                <!-- <div>
                    Нет завершенных задач.
                </div> -->
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        data() {
            return { 
                toDo:[
                    {
                        checkbox: true,
                        taskName: 'Помыть посуду',
                        createDate: '07.12.2021'
                    },
                    {
                        checkbox: false,
                        taskName: 'Вынести мусор',
                        createDate: '08.12.2021'
                    },
                    {
                        checkbox: true,
                        taskName: 'Покормить кошку',
                        createDate: '09.12.2021'
                    }
                ],
                tasksNav: [
                    {
                        name: 'allTasks',
                        value: 'Все задачи',
                        isActive: ''
                    },
                    {
                        name: 'activeTasks',
                        value: 'Активные задачи',
                        isActive: ''
                    },
                    {
                        name: 'doneTasks',
                        value: 'Завершенные',
                        isActive: ''
                    }
                ],
                tasks: []
            }
        },
        methods: {
            goFilter(item){
                alert(item)
                // alert(this.tasks.length)
            },
            deleteTask(task){
                this.tasks = this.tasks.filter(item => item !== task)
            },
            tasksFilter(nav){
                this.tasks = this.toDo
                if(nav.name === 'allTasks'){
                    nav.isActive = true
                }
                if(nav.name === 'activeTasks'){
                    this.tasks = this.tasks.filter(item => item.checkbox !== true)
                    nav.isActive = true
                }
                if(nav.name === 'doneTasks'){
                    this.tasks = this.tasks.filter(item => item.checkbox !== false)
                    nav.isActive = true
                }
            },

        },
        beforeMount(){
            this.tasks = this.toDo
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
    .tasks_nav_item_active{
        color: #d6a812;
    }
    .tasks-list{
        margin-top: 130px;
        color: blanchedalmond;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .task-item-wrapper{
        width: 90%;
    }
    .task-item{
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #1E1F1C;
        box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.603);
        border-radius: 8px;
        display: grid;
        grid-template-columns: 1fr 6fr 2fr 1fr 1fr;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }
    .task-item-title,
    .task-item-date{
        font-size: 20px;
        letter-spacing: 2px;
    }
    .task_done{
        text-decoration: line-through;
        color: rgba(170, 170, 170, 0.459);
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
        font-size: 39px;
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