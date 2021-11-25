<template>
    <div class="content container">
        <div class="calc__body">
            <input type="text" v-model="result" placeholder="0" class="display" disabled>
            <div class="grid">
                <div class="num-grid">
                    <button @click="input(num)" class="num-item" v-for="num of numbers" :key="num">{{num}}</button>
                </div>
                <div class="op-grid">
                    <button @click="input(op.name)" class="op-item" v-for="op of operations" :key="op">{{op.value}}</button>
                    <button @click="reset()" class="op-item">C</button>
                    <button @click="calculate()" class="op-item">=</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                result: '',
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '.'],
                operations: [
                    {name: '+', value: '+'},
                    {name: '-', value: '-'},
                    {name: '*', value: 'X'},
                    {name: '/', value: '/'},
                    {name: '(', value: '('},
                    {name: ')', value: ')'}
                ]
            }
        },
        methods: {
            input(item){
                this.result += item
            },
            calculate(){
                this.result = eval(this.result)
            },
            reset(){
                this.result = ''
            }
        }
    }
</script>

<style scoped>
    .content{
        display: flex;
        justify-content: center;
    }
    .calc__body{
        margin-top: 20px;
        width: 700px;
        height: 460px;
        background-color: rgb(49, 49, 49);
        box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.603);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .display{
        border: none;
        background-color: rgb(49, 49, 49);
        text-align: end;
        padding-right: 20px;
        color: #D7D7D7;
        width: 80%;
        font-size: 60px;
    }
    input::placeholder {
        color:#D7D7D7;
    }
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
        align-items: center;
        height: 100%;
        width: 90%;
    }
    .num-grid{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        justify-content: space-between;
    }
    .num-item{
        justify-self: center;
        border: none;
        border-radius: 50%;
        background-color: #5D5D5B;
        color: #D7D7D7;
        height: 70px;
        width: 70px;
        font-size: 30px;
        margin-bottom: 15px;
        transition: 0.2s;
    }
    .num-item:nth-last-child(2){
        grid-column-start: 1;
        grid-column-end: 3;
        width: 85%;
        border-radius: 35px;
    }
    .num-item:hover{
        background-color: #7a7a78;
        transition: 0.2s;
    }
    .num-item:active{
        background-color: #9b9b99;

    }
    .op-grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .op-item{
        justify-self: center;
        border: none;
        border-radius: 25px;
        background-color: #EC9F3A;
        color: rgb(49, 49, 49);
        height: 70px;
        width: 120px;
        font-size: 30px;
        margin-bottom: 15px;
        transition: 0.2s;
    }
    .op-item:hover{
        background-color: #f7b660;
        transition: 0.2s;
    }
    .op-item:active{
        background-color: #f8d2a1;
    }
</style>