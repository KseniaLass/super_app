<template>
    <div class="content container">
        <div class="calc__body">
            <input type="text" v-model="result" placeholder="0" class="display">
            <div class="grid">
                <div class="num-grid">
                    <button class="num-item" v-for="num of numbers" :key="num">{{num}}</button>
                </div>
                <div class="op-grid">
                    <button class="op-item" v-for="op of operations" :key="op">{{op}}</button>
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
                numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                operations: ['+', '-', '*', '/', '(', ')']

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
        margin-top: 50px;
        width: 700px;
        height: 500px;
        background-color: rgb(49, 49, 49);
        box-shadow: 0px 0px 8px 1px rgba(0, 0, 0, 0.603);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .display{
        text-align: end;
        padding-right: 20px;
        border-radius: 10px;
        width: 95%;
        height: 70px;
        border: none;
        box-shadow: 0px 0px 22px 1px rgba(0, 0, 0, 0.5) inset;
        font-size: 30px;
    }
    .num-grid{
        /* margin-top: 20px;
        width: 100%;
        height: 200px; */
        display: grid;
        grid-area: num;
        /* grid-template-columns: 1fr 1fr 1fr; */
    }
    .op-grid{
        /* margin-top: 20px;
        width: 100%;
        height: 200px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr; */
        display: grid;
        grid-area: op;
    }
    /* .num-item:last-child{
        grid-column: 1 / span 2;
    } */
    /* .num-item{
        grid-area: num;
    }
    .op-item{
        grid-area: op;
    } */
</style>