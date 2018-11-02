
<!-- author:zrf  20181101  血糖列表页 -->
<template>
	<div class="glucose-list">
		<list v-for="(item, i) in 3">
  			<cell >
    			<glucose-cell :title="item.reportName" :detail="'生成时间: '+item.createTime" @onMore="goback"></glucose-cell>
  			</cell>
		</list>
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
                userId: '',
                arrayRows:[],
            }
    	},
    	created () {
    		this.scbaseUrl = this.$route.params.url
        	this.getGlucoseListRequest();

    	},
    	methods: {
    		goback(idx) { //点击Cell响应，将reportid传递到报告页
    			const notif = new BroadcastChannel('updateReportNotif')
		      	const reportId = '1111' //this.arrayRows[idx].reportId
		      	notif.postMessage(reportId)
    			this.pop()
    		},
    		getGlucoseListRequest(){  //获取血糖测量数据
		        let me = this;
		                       
		        let apiName =  '/glucose/BgReportList.mv' + '?' + 'userId=' + this.$route.params.userId + '&pageNo=1' + '&pageSize=100'  //
		        console.log('uid:'+me.scUserId + 'url:' + me.scbaseUrl)
		        me.GET(apiName, succ => {
		                    
		            let result = succ.data
		            
		            if (succ.success) {
		                var measureTime = ''
		                var status = ''
		                var glucoseValue = ''
		                for(let i = 0; i < result.length; i++){   
		                    me.arrayRows.push(result[i])
		                }     
		                 console.log('====血糖数据列表:'+JSON.stringify(me.arrayRows))   
		            }else{
		                me.showRequestError('获取数据失败', 1.8)
		            }
		          }, fail =>{
		                me.showRequestError(fail.syb_info, 1.8)
		          }) 
		      },
		      
    	}
	}
</script>