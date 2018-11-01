<template>
	<div class="glucose-cell" @click="onSelectedCell" >
		<text class="cell-text" >{{title}}</text>
		<text class="cell-detail">{{detail}}</text>
		<wxc-icon class="cell-img" name="more"></wxc-icon>
	</div>
</template>

<style scoped>
	.glucose-cell{
		border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
	}
	.cell-text {
		padding-top:10px;
		margin-bottom: 10px;
		width: 670px;
		lines:1;
		text-overflow:ellipsis;
	}
	.cell-detail {
		margin-top:1px;
		padding-bottom: 10px;
		width: 670px;
		lines:1;
		text-overflow:ellipsis;
	}
	.cell-img {
		position: absolute;
		left: 680;
		top: 30;
	}
</style>

<script>
	import { WxcIcon } from 'weex-ui'
	export default{
		props:["title", "detail"],

		components: { WxcIcon },
		data () {
            return {
                
            }
        },
        
        methods: {
            onSelectedCell(){
            	this.$emit('onMore')   //自定义事件，父组件中使用此事件
            }
        }

	}
</script>