<template>
    <div v-if="isLoadFinish">
        <div v-if="lists.length != 0">
            <list :class="[isShowExitBtn ? 'list' : 'list1']">
                <cell class="cell" v-for="(dict, i) in lists">
                    <div v-if="i==0">
                        <div class="organ_detail_01">
                            <div class="bd_01">
                                <div class="left_img">
                                    <image :src="logo" class="left_img"/>
                                </div>

                                <div class="right_description">
                                    <text class="roomName">{{romeName}}</text>
                                    <text class="duty">{{department}} | {{duty}}</text>
                                    <div v-if="isShowJoinBtn">
                                        <text class="joinBtn" :style="[mainColor]" @click="didClickjoinBtn">{{addStudioBtnTitle}}</text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sepline"></div>
                        <div class="organ_detail_02">
                            <div class="header">
                                <div class="flag":style="[mainColor]" ></div>
                                <text class="headerName">简介</text>
                            </div>
                            <div class="content" v-if="isWeb == false">
                                <richText class="richTextStyle" :style="[richTextHeight]" :text='contentDetail' @mapLoaded="onMapLoaded"></richText>
                            </div>
                            <div class="content" v-else>      
                                <div  class="richTextStyle" v-html="contentDetail"></div>                          
                            </div>
                        </div>
                        <div class="header">
                            <div class="flag" :style="[mainColor]"></div>
                            <text class="headerName">健康服务</text>
                        </div>
                        <div class="sepline"></div>
                    </div>

                    <div v-if="dict.price != 0">
                        <div class="cellbg">
                            <div class="cellHeader">
                                <div class="cellTitle">
                                    <div class=" circleIcon" :style="[mainColor]"></div>
                                    <text class="goodsName">{{dict.goodsName}}</text>
                                </div>
                                <text class="price" :style="[mainTextColor]">{{dict.price}}元</text>
                            </div>
                            <div class="serviceContent">
                                <text class="brief">{{dict.goodsDescribe}}</text>
                                <div class="purchaseBtnDiv">
                                    <text class="purchaseBtn" :style="[mainColor]" @click="didClickPurchaseBtn(dict.goodsUrl)">购买</text>
                                </div>
                            </div>
                            <div class="sepline"></div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="cellbg">
                            <div class="cellHeader">
                                <div class="cellTitle">
                                    <div class=" circleIcon" :style="[mainColor]"></div>
                                    <text class="goodsName">{{dict.goodsName}}</text>
                                </div>
                            </div>
                            <div class="serviceContent">
                                <text class="brief" style="flex: 1">{{dict.goodsDescribe}}</text>
                            </div>
                            <div class="sepline"></div>
                        </div>
                    </div>
                </cell>
            </list>
            <div v-if="isShowExitBtn">
                <text class="exitBtn" :style="[mainColor]" @click="didClickExitBtn">退出工作室</text>
            </div>
        </div>
        <div v-else>
            <scroller :class="[isShowExitBtn ? 'list' : 'list1']">
                <div class="organ_detail_01">
                    <div class="bd_01">
                        <div class="left_img">
                            <image :src="logo" class="left_img"/>
                        </div>

                        <div class="right_description">
                            <text class="roomName">{{romeName}}</text>
                            <text class="duty">{{department}} | {{duty}}</text>
                            <div v-if="isShowJoinBtn">
                                <text class="joinBtn" :style="[mainColor]" @click="didClickjoinBtn">{{addStudioBtnTitle}}</text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="sepline"></div>
                <div class="organ_detail_02">
                    <div class="header">
                        <div class="flag" :style="[mainColor]"></div>
                        <text class="headerName">简介</text>
                    </div>
                    <div class="content" v-if="isWeb == false">
                        <richText class="richTextStyle" :style="[richTextHeight]" :text='contentDetail' @mapLoaded="onMapLoaded"></richText>
                    </div>
                    <div  class="content" v-else>      
                        <div class="richTextStyle" v-html="contentDetail"></div>                          
                    </div>
                </div>
            </scroller>
            <div v-if="isShowExitBtn">
                <text class="exitBtn" :style="[mainColor]" @click="didClickExitBtn">退出工作室</text>
            </div>
        </div>
        <wxc-dialog :title="dialogTitle"
                    :content="dialogContent"
                    :confirm-text="confirmText"
                    :cancel-text="cancelText"
                    :show="showDialog"
                    :single="single"
                    :is-checked="isChecked"
                    :show-no-prompt="showNoPrompt"
                    :main-btn-color="confirmColor"
                    @wxcDialogCancelBtnClicked="dialogCancelBtnClick"
                    @wxcDialogConfirmBtnClicked="dialogConfirmBtnClick">
        </wxc-dialog>
        <wxc-mask height="420"
              width="702"
              border-radius="20"
              duration="200"
              mask-bg-color="#F1F1F1"
              :has-animation="true"
              :has-overlay="true"
              :show-close="true"
              :show="showAdd"
              @wxcMaskSetHidden="wxcMaskSetHidden">
            <div class="add-studio-content" >
                <div class="add-studio-title">
                    <text class="title">加入工作室</text>
                </div>
                <div>
                    <text class="add-studio-text"  :style="addStudioInfoStyle">{{addStudioInfo}}</text>
                </div>
                <text v-if="showCancelBtn" class="add-studio-btn" :style="cancelStyle" @click="cancelApply">取消申请</text>
                <text v-if="bWeb" class="add-studio-btn" :style="downloadStyle" @click="downloadAppClicked">马上下载App</text>
                 <wxc-loading :show = "showHubLoading"
                            :type='loadingType'
                            interval='1000'
                ></wxc-loading> 
            </div>

        </wxc-mask>
    </div>
    <div v-else>  
        <wxc-loading :show='showLoading'
                     :type='loadingType'
                     :loading-text="loadingText"
                     :interval='loadingInterval'
        ></wxc-loading>
    </div>
</template>

<script>
    import {  WxcLoading, WxcPartLoading, WxcDialog, WxcMask } from 'weex-ui';

    var navigator = weex.requireModule('navigator')
    var modal = weex.requireModule('modal')
    const storage = weex.requireModule('storage')
    var stream = weex.requireModule('stream');

    var studioEvent = weex.requireModule('studioEvent');

    var globalEvent = weex.requireModule('globalEvent');

    export default {
        components: { WxcLoading, WxcPartLoading, WxcDialog, WxcMask},
        data () {
            return {
                //点击加入工作室  
                showAdd:false,
                addStudioInfo: '',
                showHubLoading: false,   //加入工作室面板否出现正在加载视图
                showCancelBtn: false,       //是否显示取消申请按钮
                bWeb : false,
                downloadAppUrl: '',
                addStudioInfoStyle: {},
                cancelStyle:{},
                downloadStyle:{},
                themeColorHexStr:'#6ee4a9',   //颜色值字符串


                isLoadFinish:false,
                romeName: '',
                department: '',
                duty: '',
                logo: '',
                contentDetail:'',
                lists: [],
                baseUrl:'',
                userId:'',
                studioId:'',
                phone:'',
                getResult:'',//数据源

                addStudioBtnTitle: '加入工作室',

                //native themeColor
                mainColor:{'background-color':'#6e1419'},
                mainTextColor:{'color':'#6e1419'},

                //按钮显隐
                isShowJoinBtn:false,
                isShowExitBtn:false,

                //------加载提示相关
                loadingType:'trip',
                loadingText:'加载中...',
                showLoading:true,
                loadingInterval:0,

                //------弹窗相关
                showDialog:false,
                dialogTitle:'提示',
                dialogContent:'是否退出该工作室',
                confirmText:'确认',
                cancelText:'取消',
                single: false,
                showNoPrompt: false,
                isChecked: false,
                confirmColor:'#FF0000',
                isWeb: false,

                //------简介富文本高度
                richTextHeight:{'height': '200px'}
            }
        },
        computed: {  //计算属性
            
        },
        created: function() {
            var me = this;
            this.scbaseUrl = '/api'  //配置支持跨域
            this.bWeb = this.Web()
            me.getStudioInfo();
            if (WXEnvironment.platform == 'android') {
                globalEvent.addEventListener("geolocation", function (e) {
                    console.log('geolocationheight:'+e.height);
                    me.richTextHeight = {'height':e.height + 'px'};
                });
             }
        },

        methods: {
            getStudioInfoRequest (){
                var me = this;
                var GET_URL = me.scbaseUrl + '/studio/serviceCfgInfo.mv?' + 'userId=' + me.userId + '&studioId=' + me.studioId;
                   
                   
                    stream.fetch({
                        method: 'GET',
                        url: GET_URL,
                        type:'json'
                    }, function(ret) {
                        if(!ret.ok){
                            me.getResult = "request failed";
                            console.log(me.getResult);
                        }else{
                            console.log('get:'+ret);
                            me.isLoadFinish = true;
                            me.getResult = ret.data.syb_data;
                            me.downloadAppUrl =  me.getResult.appDownloadUrl;
                            if (me.getResult.styleType == '0') {  //蓝色
                                me.themeColorHexStr = '#0765e1'
                            }else{  //红
                                me.themeColorHexStr = '#6e1419'
                            }

                            me.logo = me.baseUrl + me.getResult.logo;
                            //console.log('========='+ me.logo)
                            me.romeName = me.getResult.comCName;
                            me.department = me.getResult.department;
                            me.duty = me.getResult.professionalTitle;
                            me.contentDetail = me.getResult.remark;
                            me.lists = me.getResult.services;                           
                            var buttenType = me.getResult.buttenType;  //0-显示退出工作室 1-显示加入工作室 2-取消申请加入工作室
                            if (!!me.userId){
                                me.phone = me.getResult.phone;
                                if (buttenType == '0'){
                                    me.isShowExitBtn = true;
                                    me.isShowJoinBtn = false;
                                }else if (buttenType == '1' ){
                                    me.isShowExitBtn = false;
                                    me.isShowJoinBtn = true;
                                    me.addStudioBtnTitle = '加入工作室';
                                }else if (buttenType == '2' ){ 
                                    me.addStudioBtnTitle = '加入审核中';
                                    me.isShowJoinBtn = true;
                                    me.isShowExitBtn = false;
                                }
                            }else{
                                 me.isShowJoinBtn = true;
                                 me.addStudioBtnTitle = '加入工作室';
                                 me.isShowExitBtn = false;
                            }

                        }
                    },function(response){
                        console.log('get in progress:'+response.length);
                        me.getResult = "bytes received:"+response.length;
                    });
            },
            getStudioInfo: function (){  //获取工作室信息
                var me = this;
                if (WXEnvironment.platform == 'Web' ) {
                    me.isWeb = true;

                    // 处理老的链接地址解析 如：https://jkbtest.sybercare.com//attached/000100010001/lixia/index.html
                    // let bundleUrl = weex.config.bundleUrl
                    // let stdId = bundleUrl.match(/\d+(?=\/)/g);  //获取工作室id
                    me.userId =  me.GetQueryString('userId');   //'4028808462900e0a0162a314a5880116'
                    me.studioId =  me.GetQueryString('studioId');  //'000100010001'
                    me.baseUrl = document.location.protocol + '//' + window.location.host;
                    me.scbaseUrl = me.baseUrl
                    
                    // me.userId =  '4028808462900e0a0162a314a5880116'
                    // me.studioId =  '000100010001'

                    me.mainColor = {'background-color':'#6e1419'},
                    me.mainTextColor = {'color':'#6e1419'};
                    me.themeColorHexStr = '#6e1419'

                    me.getStudioInfoRequest(); 
                                   
                }else  {
                    studioEvent.getNativeAppInfo(ret=>{
                        me.scbaseUrl = ret.baseUrl,
                        me.baseUrl = ret.baseUrl,
                        me.studioId = ret.studioId,
                        me.userId = ret.userId;
                        me.mainColor = {'background-color':'#'+ret.mainColorValue }, //
                        me.mainTextColor = {'color':'#'+ ret.mainColorValue};  //
                        storage.setItem("baseUrl",ret.baseUrl, event=>{})
                        me.themeColorHexStr = '#'+ret.mainColorValue

                        me.getStudioInfoRequest()
                    })                  
              }
              
            },
            
            //加入工作室
            didClickjoinBtn: function () {
                var me = this;
                me.showAdd = true;
                me.addStudioRequest()
                
                // if (WXEnvironment.platform == 'Web'){
                //     var joinUrl = me.baseUrl + '/health/joinStudioJumpPhone.do?' + 'comcode=' + me.studioId + '&phone=' + me.phone;
                //      window.open(joinUrl,'_blank');
                // }else{
                //     var joinUrl = me.baseUrl + '/health/joinStudioJumpPhone.do?' + 'comcode=' + me.studioId + '&phone=' + me.phone;
                //     weex.requireModule("studioEvent").pushWebViewController(joinUrl);
                // }
            },
            //点击加入工作室后响应
            addStudioRequest: function (){
                //初始化配置
                this.showHubLoading = true;
                this.showCancelBtn = false
                this.addStudioInfoStyle = {'margin-top': '30px'}
                                                                       
                //000 - 申请加入工作室成功 0001-不经过审核加入工作室成功 101和105 - 按照syb_info里的提示显示 900-提示该工作室在暂不支持加入
                // {"status":200,"ok":true,"statusText":"OK","data":{"syb_status":"105","syb_info":"您有丽霞工作室未完成的申请。如需取消该工作室的申请，请点击下方的取消申请按钮。","syb_providerSeqNo":"76329a2f-f0f5-4e83-b1dc-640826af4fe7","syb_consumerSeqNo":"","syb_sessionToken":"","syb_data":[{"comcode":"000100010001","pageConfig":"0","tabList":[],"phone":"18200000001","name":"张瑜0001","chainComCname":"丽霞工作室","liveness":1,"comCodeUrl":"https://jkbtest.sybercare.com//userManage/jumpUserJoinInCompanyPhone.do?comcode=000100010001&phone=18200000001"}]},"headers":{"Vary":"Accept-Encoding","X-Powered-By":"Express","connection":"close","content-length":"540","content-type":"application/json","date":"Wed, 24 Oct 2018 03:09:54 GMT","server":"nginx/1.15.0"}}
                this.POST('/services/RestServices/yundihealth/users/joinInWorkroom', {
                        comcode : this.studioId,
                        phone : this.phone,
                    }, succ => {
                        this.showHubLoading = false
                        if (succ.syb_status !== '900' && succ.syb_status !== '103') {
                            this.addStudioInfo = succ.syb_info
                            
                            if (succ.syb_status === '105' || succ.syb_status == '000') {
                                this.showCancelBtn = true
                            }
                            
                        }else{
                            
                            if (succ.syb_info.length < 1) {
                                this.addStudioInfo = '该工作室暂不支持加入'
                            }else{
                                this.addStudioInfo = succ.syb_info
                            }
                            
                            this.showCancelBtn = false
                        }
                        if (this.showCancelBtn) {  //显示取消申请按钮
                            if (this.Web()) {  //显示取消申请与下载APP按钮
                                this.addStudioInfoStyle = {'margin-top': '20px'}
                                this.cancelStyle = {'margin-top': '20px', 'background-color':this.themeColorHexStr}
                                this.downloadStyle = {'margin-top': '20px', 'background-color':this.themeColorHexStr}
                            }else{  //只显示取消申请按钮
                                this.addStudioInfoStyle = {'margin-top': '80px'}
                                this.cancelStyle = {'margin-top': '70px', 'background-color':this.themeColorHexStr}
                            }
                        }else{
                            if (this.Web()) {  //显示下载APP按钮
                                
                                this.addStudioInfoStyle = {'margin-top': '80px'}
                                this.downloadStyle = {'margin-top': '70px', 'background-color':this.themeColorHexStr}
                            }else{  //不显示按钮
                                this.addStudioInfoStyle = {'margin-top': '120px'}
                            }
                        }
                    }, fail => {
                        this.showHubLoading = false
                        this.addStudioInfo = fail
                        this.showCancelBtn = false
                        this.addStudioInfoStyle = {'margin-top': '100px'}
                    })
                
            },
            //跳转商城
            didClickPurchaseBtn: function (arg) {
                
                if(WXEnvironment.platform == 'Web'){
                    window.open(arg,'_blank');
                }else{
                    weex.requireModule("studioEvent").pushStoreWebViewController(arg);
                }
            },

            //退出工作室
            didClickExitBtn: function () {
                var me = this;
                me.showDialog = true;
            },

            dialogConfirmBtnClick() {
                var me = this;
                this.showDialog = false;
                var GET_URL = me.baseUrl + '/services/RestServices/yundihealth/users/userQuitStudio?' + 'userId=' + me.userId + '&comCode=' + me.studioId;
                stream.fetch({
                    method: 'GET',
                    url: GET_URL,
                    type:'json'
                }, function(ret) {
                    if(ret.ok){
                        console.log('get:'+ret);
                        if (WXEnvironment.platform == 'Web'){
                            window.location.reload();
                        }else {
                            weex.requireModule("studioEvent").popWeexViewController();
                        }
                    }
                },function(response){
                    console.log('get in progress:'+response.length);
                });
            },
            dialogCancelBtnClick () {
                this.showDialog = false
            },

            //richText内容填充完成后，修改高度
            onMapLoaded:function(e) {
//                console.log("map loaded"+JSON.stringify(e));
                var me = this;
                var height = e.height * 2;
                me.richTextHeight = {'height':height + 'px'};
            },
            wxcMaskSetHidden () {
                this.showAdd = false;
                this.getStudioInfo();
            },
            cancelApply (){  //取消申请按钮响应
                console.log('lllllll')
                this.showHubLoading = true
                var apiName =  '/services/RestServices/yundihealth/users/cancleApply' + '?' + 'phone=' + this.phone
                this.GET(apiName, succ => {
                    this.showHubLoading = false
                    if (succ.syb_status === '000') {
                        this.showCancelBtn = false
                        this.addStudioInfo = '取消申请加入工作室成功'
                        this.addStudioInfoStyle = {'margin-top': '100px'}
                    }else if (succ.syb_status == '303'){
                        weex.requireModule('modal').toast({
                            message: succ.syb_info,
                            duration: 1.6
                        })
                    }else{
                        if(succ.syb_info.length > 0){
                              weex.requireModule('modal').toast({
                                  message: succ.syb_info,
                                  duration: 1.8
                              })

                        }else{
                              weex.requireModule('modal').toast({
                                  message: '服务器忙，请稍后重试',
                                  duration: 1.8
                              })
                        }
                    }
                }, fail => {
                    this.showHubLoading = false
                })
            }, 
            downloadAppClicked (){  //下载APP
                if (this.downloadAppUrl.length > 0) {
                    var downloadUrl = this.downloadAppUrl;
                    window.open( downloadUrl,"_self");
                }else{
                    weex.requireModule('modal').toast({
                                  message: '下载链接异常',
                                  duration: 1.8
                              })
                }
                
            }
        },
    }

</script>

<style scoped>

    .organ_detail_01 {
        /*background-color: lightgray;*/
    }

    .bd_01 {
        margin-top: 20px;
        margin-bottom: 20px;
        border-bottom: 1px;
        solid-color: #dcdcdc;
        flex-direction: row;
        justify-content: space-around;
    }

    .left_img {
        width: 200px;
        height: 200px;
        border-radius: 100px;
        margin-left: 0px;
        margin-top: 12px;
    }
    .right_description {
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-right: 15px;
    }

    .roomName {
        font-size: 36px;
        color: black;
        font-weight: bold;
        margin-top: 40px;
    }
    .duty {
        margin-top: 20px;
        font-size: 28px;
        color: black;
    }

    .joinBtn {
        margin-top: 50px;
        margin-left: 50px;
        background-color: #6e1419;
        color: white;
        text-align: center;
        padding-left: 25px;
        padding-right: 25px;
        padding-top: 12px;
        padding-bottom: 12px;
        border-radius: 8px; 
        font-weight:bold;
    }
    .sepline {
        margin-top: 20px;
        margin-left: 10px;
        margin-right: 10px;
        height: 1px;
        background-color: #dddddd;
    }

    .header {
        flex-direction: row;
        justify-content:flex-start;
        align-items: center;
        margin-top: 40px;
    }

    .flag {
        margin-left: 60px;
        width: 6px;
        height: 28px;
        background-color: #6e1419;
    }

    .headerName {
        font-size: 32px;
        font-weight: bold;
        margin-left: 20px;
    }
    .content {
        margin-top: 20px;
        margin-left: 20px;
    }

    .richTextStyle{
        margin-left: 50px;
        margin-right: 20px;
        margin-top: 10px;
    }

    .cell {

    }
    .cellbg {

    }

    .cellHeader{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 40px;
    }

    .cellTitle{
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .circleIcon{
        width: 14px;
        height: 14px;
        border-radius: 7px;
        margin-left: 50px;
        background: #6e1419;
    }

    .goodsName {
        margin-left: 16px;
        font-size: 30px;
        font-weight: bold;
    }

    .price {
        margin-right: 50px;
        font-size: 30px;
    }

    .serviceContent{
        flex-direction: row;
        justify-content: space-between;
        align-items: stretch;
        margin-top: 30px;
        margin-left: 70px;
        margin-right: 30px;
    }

    .brief {
        font-size: 28px;
        color: gray;
        flex: 4;
    }

    .purchaseBtnDiv{
        flex: 1;
        justify-content: center;
        align-items: center;
    }

    .purchaseBtn{
        color: white;
        padding: 6px 20px 6px 20px;
        border-radius: 4px;
        background-color: #6e1419;
    }

    .list {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;;
        bottom: 90px;
    }

    .list1 {
        position: fixed;
        top: 0px;
        left: 0px;
        right: 0px;;
        bottom: 0px;
    }

    .exitBtn {
        position: fixed;
        left: 0px;
        right: 0px;
        bottom: 0px;
        height: 90px;
        font-size: 36px;
        background-color: #6e1419;
        color: white;
        text-align: center;
        padding: 20px 20px 20px 20px;
    }
    .title {
        font-size: 42px;
        text-align: center;
        padding-top: 15px;
        padding-bottom: 18px;
        border-bottom-width: 2px;
        border-bottom-style: solid;
        border-bottom-color: #ccc;
    }
    .add-studio-text {
        margin-top: 30px;
        margin-left: 5px;
        color: #333333;
        text-align: center;
        lines:1;
    }
    
    .add-studio-btn {
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 20px;
        text-align: center;
        background-color: #6e1419;
        padding-top: 15px;
        padding-bottom: 15px;
        color: white;
        font-weight: bold;
        border-radius:8px
    }
</style>