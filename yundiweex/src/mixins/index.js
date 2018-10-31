
export default {
    data () {  //公共数据
        return {
            scbaseUrl: '',
            
            requestType: 'json',  //支持跨域
        } 
    },
    create (){

    },
    methods: {  //公共方法

        Web () {
            
            return (WXEnvironment.platform === 'Web')
        },
        push (path) {
            if (WXEnvironment.platform === 'Android') {  
                let nativeBase = 'file://assets/dist/pages/';  
                let native = nativeBase + path + ".js"; 
                weex.requireModule('navigator').push({
                    url: native,
                    animated: 'true'
                }) 
            } else if (WXEnvironment.platform === 'iOS') {  
                let nativeBase = weex.config.bundleUrl.substring(0, weex.config.bundleUrl.lastIndexOf('/') + 1);  
                let native = nativeBase + 'pages/' +path + ".js";  
                weex.requireModule('navigator').push({
                    url: native,
                    animated: 'true'
                }) 
            }else {
                let nativeBase = weex.config.bundleUrl.substring(0, weex.config.bundleUrl.lastIndexOf('/') + 1);  
                let native = nativeBase + '#/' + path;  
                weex.requireModule('navigator').push({
                    url: native,
                    animated: 'true'
                }) 
                console.log('========='+native)
                this.$router.push(path) // 使用vue-router
            }

        },

        pop () {
            if (WXEnvironment.platform === 'Web') {
                window.history.back()
            } else {
                weex.requireModule('navigator').pop({
                    animated: 'true'
                })  
            }
        },
        jump(to) {
            if (this.$router) {
                this.$router.push(to)
            }
        },
        /**
        * @brief 显示服务器返回的错误信息
        * @param 显示的文字信息
        * @param 多长时间后自动消失
        *
        */
        showRequestError(str, interval){
            if(!!str){
                weex.requireModule('modal').toast({
                    message: str,
                    duration: interval
                })

            }else{
                weex.requireModule('modal').toast({
                    message: '服务器忙，请稍后重试',
                    duration: interval
                })
            }
        },    
        GET (api, succ, fail) {
            let stream = weex.requireModule('stream');
            console.log('开始请求'+ this.scbaseUrl + api)
            stream.fetch({
                method: 'GET',
                type: this.requestType,
                url: this.scbaseUrl + api
                // url: 'http://10.242.69.181:8089/yanxuan/' + api
            }, res => {
                console.log('=====结果'+JSON.stringify(res))
                if (res.ok) {  //成功
                    succ(res.data)
                } else {
                    fail(res)
                }
            }, progress =>{
                console.log('=====进度'+JSON.stringify(progress))
            })
        },
        /*
        * @brief  post请求
        * @param api  接口名
        * @param 参数  object对象
        * @callback  成功回调
        * @callback 失败回调
        */
        POST (api, objParams, succ, fail) {  
            let me = this;
            let stream = weex.requireModule('stream');
            console.log('开始请求'+ me.scbaseUrl + api)
            return stream.fetch({
                method: 'POST',
                type: me.requestType,
                url: me.scbaseUrl + api,
                body: JSON.stringify(objParams),
                headers: {'content-type': 'application/json'}
            }, res => {
                if (res.ok) {  //成功
                    console.log('=====结果'+ JSON.stringify(res))
                    succ(res.data)
                } else {
                    console.log('=====结果失败'+ JSON.stringify(res))
                    fail(res)
                }
            })
        },
        GetQueryString: function (key){            
                var url = window.location.search;// 获取参数            
                var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");// 正则筛选地址栏            
                var result = url.substr(1).match(reg);// 匹配目标参数            
                return result ? decodeURIComponent(result[2]) : null;//返回参数值
        },
        toParams(obj) {  //object转如‘param1=p1&param2=p2’
            var param = ""
            for(const name in obj) {
                 if(typeof obj[name] != 'function') {
                  param += "&" + name + "=" + encodeURI(obj[name])
                }
            }
            return param.substring(1)
        },
    }
}