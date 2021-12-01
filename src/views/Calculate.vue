<template>
    <div class="content container">
        <div class="calc__body">
            <input type="text" v-model="result" placeholder="0" class="display" disabled>
            <div class="grid">
                <div class="num-grid">
                    <button @click="inputNum(num)" class="num-item" v-for="num of numbers" :key="num">{{num}}</button>
                </div>
                <div class="op-grid">
                    <button @click="reset()" class="op-item op-top">C</button>
                    <button @click="percent()" class="op-item op-top">%</button>
                    <button @click="getOp(op.name)" class="op-item" v-for="op of operations" :key="op" v-html="op.value"></button>
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
                numbers: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.'],
                operations: [
                    {name: '-', value: '&minus;'},
                    {name: '*', value: '&times;'},
                    {name: '/', value: '&divide;'},
                    {name: '+', value: '+'}
                ],
                numA: '',
                numB: '',
                operationValue: ''
            }
        },
        methods: {
            inputNum(item){
                if(this.numB === '' && this.operationValue === ''){
                    this.numA += item
                    this.result = this.numA
                    this.result = this.result.toString().replace(/^0+/, '0');
                }else{
                    this.numB += item
                    this.result = this.numB
                    this.result = this.result.toString().replace(/^0+/, '0');
                }
            },
            getOp(item){
                this.operationValue = item
            },
            calculate(){
                if(this.operationValue === '+'){
                    this.result = (+this.numA) + (+this.numB)
                }
                if(this.operationValue === '-'){
                    this.result = (+this.numA) - (+this.numB)
                }
                if(this.operationValue === '*'){
                    this.result = (+this.numA) * (+this.numB)
                }
                if(this.operationValue === '/'){
                    this.result = (+this.numA) / (+this.numB)
                }
                this.numA = this.result
                this.numB = ''
            },
            reset(){
                this.result = ''
                this.numA = ''
                this.numB = ''
                this.operationValue = ''
            },
            percent(){
                this.result = (+this.numB) * (+this.numA) / 100
                this.numA = this.result
                this.numB = ''
                this.operationValue = ''
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
        width: 500px;
        height: 500px;
        background-color: rgb(49, 49, 49);
        box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.603);
        border-radius: 10px;
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
        width: 90%;
        font-size: 90px;
        margin-top: 20px;
    }
    input::placeholder {
        color:#D7D7D7;
    }
    .grid{
        display: grid;
        grid-template-columns: 3fr 2fr;
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
        width: 90%;
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
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }
    .op-item{
        justify-self: center;
        border: none;
        border-radius: 50%;
        background-color: #ffa024;
        color: rgb(49, 49, 49);
        height: 70px;
        width: 70px;
        font-size: 30px;
        margin-bottom: 15px;
        transition: 0.2s;
    }
    .op-item:nth-last-child(2){
        grid-row-start: 3;
        grid-row-end: 5;
        height: 90%;
        border-radius: 35px;
    }
    .op-top{
        background-color: #eb5d0b;
        color: #D7D7D7;
    }

    .op-item:hover{
        background-color: #f7b660;
        transition: 0.2s;
    }
    .op-item:active{
        background-color: #f8d2a1;
    }
    .op-top:hover{
        background-color: #e76f2a;
    }
    .op-top:active{
        background-color: #e68046;
    }
</style>