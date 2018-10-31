<!-- 用于处理带长下划线的文字格式，通常用于title -->
<template>
    <div class="border-wrapper">
        <image class = "border-image" style="width:50px;height:50px" :src="imgsrc"></image>
        <text class="tlt">{{title}}</text>
    </div>
</template>
<style scoped>
    
    .border-wrapper{
        padding-bottom: 1px;
        flex-direction: row;
        margin-left: 0px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
    }
    .border-image {
        margin-right: 15px;
        margin-top: 0px;
    }
    .tlt{
        text-align: left;
        font-size: 38px;
        margin-bottom: 6px;
        color:#333;
        font-weight: bold;
    }
    
</style>
<script>
    
    export default {
        props:["title", "imgsrc"],
        data () {
            return {
                
            }
        },
        
        methods: {
            
        }
    }
</script>