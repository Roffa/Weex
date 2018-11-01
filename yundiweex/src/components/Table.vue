<template>
    <div>
        <div class="table-row" :class="[i < 1 ? 'table-top' : '' ]" v-for="(row,i) in rows">
            <div class="table-column" :class="[j < 1 ? 'table-left' : ('table-row'+j) ]" v-for="(column, j) in columns">
                <text class='tlt' :class="[i < 1 ? 'text-header' : '' ]">{{row[j]}}</text>
            </div>
        </div>
    </div>
 
</template>
<style scoped>
    
    .table-row{
        height: 90px;
        flex-direction: row;
    }
    .table-top {  
        border-top-width: 2px;
        border-top-style: solid;
        border-top-color: #ccc;    
    }
    .table-left {  /*增加左边框*/
        border-left-width: 2px;
        border-left-style: solid;
        border-left-color: #ccc;
        flex:4.5;
    }
    .table-column{
        flex:3;
        justify-content: center;
        align-items:center;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
        border-right-width: 2px;
        border-right-style: solid;
        border-right-color: #ccc;
    }
    .table-row1{
        flex:2;
    }
    .tlt{
        text-align: center;
        font-size: 32px;
        margin-bottom: 6px;
        color:#333;
        
    }
    .text-header{
        font-weight: bold;
    }
    
</style>
<script>
    
    export default {
        props:["rows", "columns"],
        data () {
            return {
                isActive: true,
            }
        },
        methods: {
            
        }
    }
</script>