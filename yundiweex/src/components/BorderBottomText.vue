<!-- 用于处理带长下划线的文字格式，通常用于title -->
<template>
    <div class="border-wrapper" @click="onSelectedCell">
        <image class = "border-image" style="width:50px;height:50px" :src="imgsrc"></image>
        <text class="tlt">{{title}}</text>
        <text class="dtl" v-if="more.length > 0">{{more}}</text>
        <wxc-icon name="more" v-if="more.length > 0"></wxc-icon>
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
        lines: 1;
        width:300px;
    }
    .dtl {
        padding-top: 5px;
        margin-left: 80px;
    }
    
</style>
<script>
    import { WxcIcon } from 'weex-ui'
    export default {
        props:{
            title: String, imgsrc: String, more: {type:String, default:''}
        },

        components: { WxcIcon },
        data () {
            return {
                moreInfo: this.more
            }
        },
        
        methods: {
            onSelectedCell(){  
                if (this.moreInfo.length > 0) {
                    this.$emit('onMore')   //自定义事件，父组件中使用此事件
                    console.log('点点点----')
                }
            }
        }
    }
</script>