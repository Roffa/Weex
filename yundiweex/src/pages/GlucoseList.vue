
<!-- author:zrf  20181101  血糖列表页 -->
<template>
	<div class="glucose-list">
		<!-- <recycle-list v-for="(item, i) in 30">
  			<cell-slot> -->
    			<glucose-cell title="报告名称: 家庭血糖报告20181101" detail="生成时间: 2018-11-01" @onMore="goback"></glucose-cell>
  			<!-- </cell-slot>
		</recycle-list> -->
	</div>
</template>

<style scoped>

</style>

<script>
	import RFGlucoseCell   from "../components/GlucoseListCell.vue";
	import {  WxcLoading } from 'weex-ui';

	export default{
		components: {
        	'glucose-cell': RFGlucoseCell,
        	WxcLoading, 
    	},
    	data(){
    		return {
                
            }
    	},
    	created () {
        
    	},
    	methods: {
    		goback() {
    			this.pop()
    		}
    	}
	}
</script>