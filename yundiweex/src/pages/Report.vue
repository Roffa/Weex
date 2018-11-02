<template>
  <div class="wrapper">
    <div v-if = "hasReport == '2'">
        <scroller class="scroller" show-scrollbar="false">      
          <div class="basic-info">
            <border-text class="text" :title="basicInfo.title" more="血糖报告列表" imgsrc="data:image/png;base64,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"  @onMore="onOpenGlucoseList"/>
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
          <web ref="webview" class='report-web' :style="webStyle" :src="chartUrl"></web>
          <border-text class="text" :title="glucoseTable.title" imgsrc='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAAEgBckRAAAABGdBTUEAALGPC/xhBQAACHhJREFUaAXFWn2MXFUVv+e+N7t02xUx24QWS0QhQf9Agd1ZgimdQYEYoBQSjDF+UBtRgiagQGwE0gRDgiZoGo3RRtRIjJEQVyiBKHRmJWK7uzFiABsqavhoG7ZBy+52ZnfmvevvvDfnzX1v3rx5s7OEm2zvvef7vnvuuefcqVJWK89Ul2VKPCgdqhgBSK9lkOy1za4V3SAE/YsSTlWaqT5Zmpn+vgBSRVUny0RtU+mIUuY84YjMxeDbAuQ+QvjK/JYU3S/I7jqEgvu2PhsajtkgHqVKUkRPK2M+2cFGdEzzejsQhh6GfS91ws0mLIIOJxFE5kNGmY+IGTY+1SRXqysg6XjD0BPGmLOFgbT+SsAgAJh3FLZvkrn0TFiZ2PZTnscYGFCend6ujP+QMfTfjZuHLnhky6U1hkuLGCB9FtLHBWH3enj4/Qc+dukbDGutoQop5jSbKDkmx72kMr71kL52bm4kSaxJ7awUS5EbMLPxmge5t7yJp+2mSX/cN/6f2xAe0VRMiiCJ1LI7rI7JvN2bHakMxqjh092xYJFt4nCUwqC/xaj5xTejQ2szdTBUJ7c9IATwpwMyDnt9U+uzxk/8xmLJfYTIS7p7cOaY8xMzlc95Rv0qLi0+E0eMdvpGY5z5mWozThbOhJhnEUOSkDd00Vs8Bjd/TxKXnGOj7zlQLH8nCed5h4LSod5ulSZIYA6pzz9TLD8s80hBlnMLsdbqAUVD+4y3Mo24e5bA03rZmEABrH4b3juaRtiG0T9A82GeEzklY7xqG5c+Wr/OfZ8Ozm9P4RxQzYMQvciiXOMtpYuMQ5dqzbfA5z8UB6fPjNKncKZGFOnPnOOMPp9O1QnVHHk6wSkQcp5H/GODfvMvU9uCU4LP2rtpDmu9yNivjWm8IHRNv/kKIvU+rCgRToQi7InoVLDJl89U7vaNui+Obs9I011G0QeV739VoKw0eXQFJz3TRG56+d+eO8tfXn5dkAP1uNGqxdJmlhEpEIHluWcnJdwKLHdvCRaeDgWC4P7qvz97xlLNg5eZHTZcxuE3NrciTPxCYMk+UwET3/jac+vmjzXuxxV2DT4oblGzgP2YhfAf43J8LCkwOe+qoNfGiyB21w3Ohk2Pj4+fEpjddyhY9WYTzWFjJ2zhPI5dOXwxrNqTkAWEkTiuIlrBQN4Tk0n16mRpnYCCFfDt1Ns1qVlQagKZzxeFOb03pwWhv4UMFMzPTr+WTtyGwqoC7seDOM2fhpJdbUzKCJ8rTHGwB+zraTlakg1p9fdwyTj4u9p1nKeS+OScr1uG6fAgJdFpczMmUE8RvlZ2k7scnyj9lCbZ4YI7I5iv3GicMeDLLOamGbRtFNGTrlrpuQJmwP1xS98KtC583SNnqK2x+4iUmcitYA/fZmiamkN+jj0I1dJoLgUIcidffP0vw8zUbPovEekToYDsf5HmvppLQaVYfu/80eUomJlmYxeyud3Z4oEl2k+oRpewGcj70xvfu4gnB3GlftOmyHNlbtw8PAJDzK02Y3KM2F9D5pGanCdpk3OukXTWbRQwoIqsTJZiVS1fNuXZ6u1JgfacE2KeB3vApZuNTI4RvF7lT+K4zkdLRYUzoB81Pmd63Ztk21G4hpDUurG7iO4YuxKMvEjSjO5s+TCcvkuZyRzRCoR9kJVIOSqyUhUwEEHqZuP7P7EJM8fIhzZObNvChVqSrmMFNgEyi5vgpj/qfk5oav0650tPXLC1awKdqcBWlhyHSZm/ncM9DuOV3Y1IcoZzTtoQSv6AXYKR+rEsI9MltORkIW0c5wUn5v60C4buyXPD2ry5x9hKLGzP2PhlP0vbzjQ5PXcgyJZ873fvmNFpVjGMF6Od6/kNphtJQNYNmedxoRvvWsOTlb0tv2MHgsx6ZYWfszbZhO/6GDuih4Ym7BjHNkWBlCccfoLMfUDj+Q2Yrw5dGPoA58r82uaokTH491HWs6oGm9g2ttHmj3Ygb7FkM6eNYeR9MPhelCEvI0KdJzQFUheSVvUVT+E5ZbBmv0wFC+B4jHzk54OJzeZ2HbW1UFD/qdVVzyIkW1KIxSJ2cqaiuf7lyyQPUy4arb/GLoO7IfaW5Cm34SmdKxvPo4dtZts1F+/9XkJZCrClNbgRRMJh0PjLl4olh8OhV1/DBSDLZdvxbmWuyTKoXxwy3EaLJ/janq/unp6d/mEQ3ah3RdeXPtjuYqvPxpW+Zq29ABNUh5B9FQ6zKjSX90JNQVa3FgrZdmyzWVgLYSLDV07j5rm5tq8TPY7nzx943sh8/npOpPXqzYLGYZjtRZYPT3VX64sqE5c9esRfvCPiMeZaPK/e5lH9tmeKpVly3XHkCfUIP8CAbSdcDNuRO/9+ADlgpZqLhzTyF85pKPorzlV0v8Tk4nDDZy/e4Pr/PtlQx+FeQTEco+ljglrsOh0+FdJUH3wdpLB2/9Pj4yebinZ3NZ65sDDPN7unLiz/D7P9HYL6AtAU2x6EOi4a8BUHOQtXBX5Pei+yyMyQ4Dhm76eOHBnGWq7sy16LmJ9OQ5tbuRAXE6POhjM5hbXocg/5Metlb/Ft7dN8aWKbi1vyTvsi4zHD+GccfLETtbfewA70+gWni3rYyO++UgDFfJWLFrw3HsRW46CtsoU78EukwL92DB32tUO+8s7HOfssDt0XMl2sl0q8JaN2vcQudmILEP7wyder4itl/ugr9O98T3VynFJacZO6ADEoLGpo37u3EKo7ZL5s/0wptkmfuQAhahU5UwO5lgjL08NVULzsSBYvaay5FmAz8vv5kr/wDd/QXas+iLbAYEwLmsx31+vRB7v9KNPB0gL0vYA0QZzWnjjeuAIXUxmLOh+pz7k4y2cgNLd+K8ZPVPzjKKl/AnYYUakydmbhj8n/opEmuxfs/+FPWj3Z0VkFAAAAAElFTkSuQmCC'/>
          <sctable class="sctable" :rows="arrayRows" :columns=3 /> 
        </scroller>
    </div>
    <div class='nonreport-container' v-else-if="hasReport == '1'" > 
        <image class = "border-image" style="width:200px;height:200px; margin-left:50px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOUAAADkCAYAAABnleOzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoxMzZhYzUxNy01ZDBlLWYxNGQtYjgyZC1kMzhiYzU5MDUxZjgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODlDMEUyRkMyMDkwMTFFNUIzRTJERjdCMDQwQjI4ODIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODlDMEUyRkIyMDkwMTFFNUIzRTJERjdCMDQwQjI4ODIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTM2YWM1MTctNWQwZS1mMTRkLWI4MmQtZDM4YmM1OTA1MWY4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzNmFjNTE3LTVkMGUtZjE0ZC1iODJkLWQzOGJjNTkwNTFmOCIv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"></image>
        <text class='nonreport-container-text'>暂无家庭血糖报告</text>
    </div>
    <div v-else>
        <wxc-loading :show='showLoading'
                     type='trip'
        ></wxc-loading>
    </div>
  </div>
</template>

<script>
  import BorderBottomText from "../components/BorderBottomText.vue"
  import RFTable    from "../components/Table.vue"
  import {  WxcLoading } from 'weex-ui';

  let studioEvent = weex.requireModule('studioEvent');
  export default {
    components: {
        'border-text': BorderBottomText,
        'sctable': RFTable,
        WxcLoading, 
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
            title: '家庭血糖列表',
        },
        report:{
            title: '血糖报告小结',
            desc: '',
            rid: '',   //报告id
        },
        arrayRows:[
            ["日期和时间", "测量时段", "血糖(mmol/l)"],
        ],
        chartUrl:'',
        hasReport: '0',   //‘1’：无数据   ‘2’：有数据
        showLoading: true,
        webStyle: {
          
        }
      }
    },
    created () {
        this.scbaseUrl = '/api'  //配置支持跨域环境下调试

        const notif = new BroadcastChannel('updateReportNotif')
        notif.onmessage = function(event){  //接受到列表传值
           console.log('页面传值中:', event.data)
           report.rid = event.data
        }

        console.log('调用了created')
        this.getGlucoseReport()
        
    },
    compiled (){
      console.log('调用了compiled')
    },
    ready (){
      console.log('调用了ready')
    },
    attached (){
      console.log('调用了attached')
    },
    detached (){
      console.log('调用了detached')
    },
    beforeDestroy (){
      console.log('调用了beforeDestroy')
    },
    destroyed (){
      console.log('调用了destroyed')
    },

    methods: {
        getGlucoseReport(){  //血糖报告
            let me = this;
              

                if (WXEnvironment.platform == 'Web' ) {
               
                    me.userId =  me.GetQueryString('userId');   //'4028808462900e0a0162a314a5880116'
                    me.baseUrl = document.location.protocol + '//' + window.location.host;
                    // me.scbaseUrl = me.baseUrl
                    me.scUserId = me.userId;
                    
                    me.userId =  '4028808462900e0a0162a314a5880116'//'8a100f1858294f5a01582d352b9d0003'

                    me.chartUrl = me.scbaseUrl + '/glucose/toBloodGlucoseReportPhone.mv' + '?' + 'userId=' + me.userId + '&reportId=' + me.report.rid
           
                    me.hasReport = '2'
                    //me.getGlucoseReportRequest()
                       
                }else  { 
                  this.webStyle = {'height': 300 + 'wx','background-color': 'white',}  //单位使用wx,处理各个机型高度不改变
                  me.hasReport = '2'
                  studioEvent.getNativeAppInfo(ret => {
                      me.scbaseUrl = ret.baseUrl,
                      me.baseUrl = ret.baseUrl,
                      me.userId = ret.userId;
                      me.chartUrl = me.scbaseUrl + '/glucose/toBloodGlucoseReportPhone.mv' + '?' + 'userId=' + me.userId + '&reportId=' + me.report.rid
                      me.scUserId = me.userId;
                      me.getGlucoseReportRequest()
                })
              }
            
        },
      getGlucoseReportRequest(){  //获取血糖报告
            var me = this;
            var stream = weex.requireModule('stream');
                
            var apiName =  '/glucose/getBgReportApp.mv' + '?' + 'userId=' + me.userId + '&reportId=' + me.report.rid  //
            me.hasReport = '0'

            
            //console.log('====血糖报告图url:'+ me.chartUrl)
            me.GET(apiName, succ => {

                let result = JSON.parse(succ.syb_data)
                console.log('====血糖报告:'+JSON.stringify(result))
                if (succ.syb_status === '000') {
                    me.hasReport = '2'
                    me.basicInfo.nickname = result.userName      
                    me.report.desc = result.bgReportSummary;
                    me.basicInfo.generateTime = result.createTime;
                    me.reportId = result.reportId;
                    me.getGlucoseDataRequest();
                }else if (succ.syb_status == '303'){
                    me.hasReport = '2'
                    me.showRequestError(succ.syb_info, 1.8)
                }else if (succ.syb_status == '201'){  //不显示文字弹框
                    me.hasReport = '1'
                }else{
                    me.hasReport = '2'
                    me.showRequestError(succ.syb_info, 1.8)
                }

              }, fail =>{
                    me.hasReport = '2'
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
      },
      onOpenGlucoseList() {  //进入血糖报告列表
          this.$router.push({name:'list', params:{userId: this.userId, url:this.scbaseUrl}}) 
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
    height: 700px;
  }
  .nonreport-container{
      margin-left:250px; 
      margin-top: 500px;
  }
  .nonreport-container-text{
    color:gray;
    margin-top: 5px;
  }
</style>