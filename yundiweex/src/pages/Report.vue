<template>
  <div class="wrapper">
    <div v-if='hasReport'>
        <scroller class="scroller" show-scrollbar="false">      
          <div class="basic-info">
            <border-text class="text" :title="basicInfo.title" imgsrc="data:image/png;base64,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" />
            <div class="user-info">
                <text class="user-info-normal user-info-bold">姓名:  </text>
                <text class="user-info-normal user-info-nick" >{{basicInfo.nickname}}</text>
                <text class="user-info-normal user-info-bold user-info-generate" >报告生成时间:  </text>
                <text class="user-info-normal user-info-time" >{{basicInfo.generateTime}}</text>
            </div>
            
          </div>
          <border-text class="text" :title="report.title" imgsrc="data:image/png;base64,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"/>
          <text class="report-info" >{{report.desc}}</text>
          <border-text class="text" :title="glucoseChart.title" imgsrc='data:image/png;base64,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'/>
          <web ref="webview" class='report-web' :src="chartUrl"></web>
          <border-text class="text" :title="glucoseTable.title" imgsrc='data:image/png;base64,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'/>
          <sctable class="sctable" :rows="arrayRows" :columns=3 /> 
        </scroller>
    </div>
    
  </div>
</template>

<script>
  import BorderBottomText from "../components/BorderBottomText.vue"
  import RFTable    from "../components/Table.vue"

  let studioEvent = weex.requireModule('studioEvent');
  export default {
    components: {
        'border-text': BorderBottomText,
        'sctable': RFTable
    },
    data () {
      return {
        baseUrl:'',
        userId:'',
        reportId:'',
        basicInfo:{
            title: '基本信息',
            nickname: '',
            generateTime: ''
        },
        glucoseChart:{
            title: '家庭血糖趋势图',
        },
        glucoseTable:{
            title: '家庭血糖表',
        },
        report:{
            title: '血糖报告小结',
            desc: '',
        },
        arrayRows:[
            ["日期和时间", "测量时段", "血糖(mmol/l)"],
        ],
        chartUrl:'',
        hasReport: false,
      }
    },
    created () {
        this.scbaseUrl = '/api'  //配置支持跨域环境下调试
        this.getGlucoseReport()
    },
    methods: {
        getGlucoseReport(){  //血糖报告
            let me = this;
              

                if (WXEnvironment.platform == 'Web' ) {
               
                    me.userId =  me.GetQueryString('userId');   //'4028808462900e0a0162a314a5880116'
                    me.baseUrl = document.location.protocol + '//' + window.location.host;
                    //me.scbaseUrl = me.baseUrl
                    
                    me.userId =  '8a100f1858294f5a01582d352b9d0003'

                    me.chartUrl = me.scbaseUrl + '/glucose/toBloodGlucoseReportPhone.mv' + '?' + 'userId=' + me.userId
           
                    me.getGlucoseReportRequest()

                       
                }else  { 
                  me.chartUrl = me.scbaseUrl + '/glucose/toBloodGlucoseReportPhone.mv' + '?' + 'userId=' + me.userId
                  studioEvent.getNativeAppInfo(ret => {
                      me.scbaseUrl = ret.baseUrl,
                      me.baseUrl = ret.baseUrl,
                      me.userId = ret.userId;
                      me.getGlucoseReportRequest()
                })
              }
            
        },
      getGlucoseReportRequest(){  //获取血糖报告
            var me = this;
            var stream = weex.requireModule('stream');
                
            var apiName =  '/glucose/getBgReportApp.mv' + '?' + 'userId=' + me.userId  //
            

            console.log('====血糖报告图url:'+ me.chartUrl)
            me.GET(apiName, succ => {
                        
                let result = JSON.parse(succ.syb_data)
                console.log('====血糖报告:'+JSON.stringify(result))
                if (succ.syb_status === '000') {
                    me.hasReport = true
                    me.basicInfo.nickname = result.userName      
                    me.report.desc = result.bgReportSummary;
                    me.basicInfo.generateTime = result.createTime;
                    me.reportId = result.reportId;
                    me.getGlucoseDataRequest();
                }else if (succ.syb_status == '303'){
                    me.showRequestError(succ.syb_info, 1.8)
                }else{
                    me.hasReport = false
                    me.showRequestError(succ.syb_info, 1.8)
                }
              }, fail =>{
                    me.showRequestError(succ.syb_info, 1.8)
              })          
        },
      getGlucoseDataRequest(){  //获取血糖测量数据
          let me = this;
            let stream = weex.requireModule('stream');
                
            let apiName =  '/glucose/getBloodGlucoseList.mv' + '?' + 'reportId=' + me.reportId  //

            me.GET(apiName, succ => {
                        
                let result = succ.syb_data
                console.log('====血糖数据列表:'+JSON.stringify(result))
                if (succ.syb_status === '000') {
                    var measureTime = ''
                    var status = ''
                    var glucoseValue = ''
                    for(let i = 0; i < result.length; i++){
                       measureTime = result[i].measureTime
                       glucoseValue = result[i].value
                       switch(Number(result[i].status)){
                          case 0:
                              status = '空腹'
                              break;
                          case 1:
                              status = '早餐后'
                              break;
                          case 2:
                              status = '午餐前'
                              break;
                          case 3:
                              status = '午餐后'
                              break;
                          case 4:
                              status = '晚餐前'
                              break;
                          case 5:
                              status = '晚餐后'
                              break;
                          case 6:
                              status = '睡前'
                              break;
                          case 7:
                              status = '凌晨'
                              break;
                          default:
                              status = '随机'

                        }
                        var item = [measureTime, status, glucoseValue]
                        me.arrayRows.push(item)
                    }     
                    
                }else if (succ.syb_status == '303'){
                    me.showRequestError(succ.syb_info, 1.8)
                }else{
                    me.showRequestError(succ.syb_info, 1.8)
                }
              }, fail =>{
                    me.showRequestError(succ.syb_info, 1.8)
              }) 
      }

    },
  }
</script>

<style scoped>
  .scroller {
    width: 700px;
    height: 1182px;
    margin-left: 25px;
    margin-right: 25px;
  }
  .basic-info {
    
  }
  .text {
    color: #666666;
    margin-top: 50px;
  }
  .user-info {
    flex-direction: row;
  }
  .user-info-normal { 
    margin-top: 30px;
    lines: 1;
  }
  .user-info-bold {
    font-weight:bold;
  }
  .user-info-nick {
    width: 200px;
  }
  .user-info-generate {
    text-align: right;
    margin-right:0px;
    width: 220px;
  }
  .user-info-time {
    text-align: right;
    margin-right:10px;
    padding-right: 15px;
    width:190px; 
  }

  .table1{
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
  }
  .table2{
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
  }
  .sctable {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .report-info {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .report-web{
    margin-top : 20px;
    width: 700px;
    height: 300px;
  }
</style>