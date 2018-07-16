(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{203:function(t,a,s){"use strict";s.r(a);var n=s(0),_=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"_4-ios-客户端接入步骤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-ios-客户端接入步骤","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.iOS 客户端接入步骤")]),s("h2",{attrs:{id:"_4-1-接入说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-接入说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.1. 接入说明")]),s("p",[t._v("启动支付控件的接口，接口定义如下:")]),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AllPaySDK pay"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("diction objectForKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{attrs:{class:"token string"}},[t._v('"tn"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mode"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO scheme"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{attrs:{class:"token string"}},[t._v('"com.xxx.xxx"')]),t._v(" ViewController"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("self onResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("^")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSDictionary "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("resultDic"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("//此处处理同步支付结果")]),t._v("\n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("参数说明")]),s("p",[t._v("tn: 是从服务器端获取的流水号; mode:测试环境:NO; 生产环境:YES。")]),s("p",[t._v('Scheme: 可以为任意值推荐填写成"com.xxx.xxx" 等形式, 有特殊配置的渠道会在渠道专属配置里面说明')]),s("p",[t._v("ViewController: 调用 SDK 时的 ViewController;")]),s("p",[t._v("onResult: 接收同步结果通知")])]),s("h2",{attrs:{id:"_4-2-添加-sdk-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-添加-sdk-包","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.2. 添加 SDK 包")]),s("ol",[s("li",[t._v("将  allpaysdk 下的 AllPaySDK.h,libAllPaySDK.a文件add到项目中")]),s("li",[t._v('在 APPDelegate.m 类中导入头文件: #import "allpaysdk/AllPaySDK.h" 并添加如下方法')])]),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIApplication "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application openURL"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSURL "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("url sourceApplication"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSString "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("sourceApplication annotation"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("annotation"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AllPaySDK openURL"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIApplication "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application handleOpenURL"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSURL "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AllPaySDK openURL"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n\n"),s("span",{attrs:{class:"token operator"}},[t._v("-")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BOOL"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("application"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UIApplication "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("app openURL"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSURL "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("url options"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSDictionary"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("NSString "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("id"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("options"),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AllPaySDK openURL"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("url"),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" YES"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("根据要使用的渠道的专属配置，对项目进行配置")])]),s("h2",{attrs:{id:"_4-3-同步结果通知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-同步结果通知","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.3 同步结果通知")]),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("AllPaySDK pay"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("diction objectForKey"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{attrs:{class:"token string"}},[t._v('"tn"')]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" mode"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("NO scheme"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("@"),s("span",{attrs:{class:"token string"}},[t._v('"com.xxx.xxx"')]),t._v(" ViewController"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("self onResult"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("^")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NSDictionary "),s("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v("resultDic"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n\n  "),s("span",{attrs:{class:"token comment"}},[t._v("//此处处理同步支付结果")]),t._v("\n\n "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("resultDic,转为 json 字符串,格式如下:")]),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n  "state": "cancel",\n  "paymentSchema": "YL",\n  "orderNum": "604337497032",\n  "errorDetail": "user cancel operation"\n}\n')])])]),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("报文说明")]),s("ul",[s("li",[t._v('state: "success"代表成功, "cancel"代表用户取消操作, "fail"代表失败')]),s("li",[t._v('paymentSchema: 支付渠道, 印度本地支付:"EB", "APMP"代表支付宝,  "WX"代表微信,"APP"代表ApplePay')]),s("li",[t._v("orderNum: 订单号")]),s("li",[t._v("errorDetail: 错误详情")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),s("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),s("tbody",[s("tr",[s("td",[t._v("state")]),s("td",{staticStyle:{"text-align":"center"}},[t._v('"success"代表成功, "cancel"代表用户取消操作, "fail"代表失败')])]),s("tr",[s("td",[t._v("paymentSchema")]),s("td",{staticStyle:{"text-align":"center"}},[t._v('印度本地支付:"EB", "APMP"代表支付宝,  "WX"代表微信,"APP"代表ApplePay')])]),s("tr",[s("td",[t._v("orderNum")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("订单号")])]),s("tr",[s("td",[t._v("errorDetail")]),s("td",{staticStyle:{"text-align":"center"}},[t._v("错误详情")])])])]),s("h2",{attrs:{id:"_4-5-异步结果通知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-异步结果通知","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.5. 异步结果通知")]),s("p",[t._v("商户需要提供一个 http 协议的接口，包含在参数里传递给 SDK，即 backURL。AllPay\n服务器在支付完成后，会以 Get 方式调用 backURL，通知支付结果。")]),s("p",[t._v("参数如下表:")]),s("table",[s("thead",[s("tr",[s("th",[t._v("序号")]),s("th",[t._v("名称")]),s("th",[t._v("长度")]),s("th",[t._v("类型")]),s("th",[t._v("参数名称")]),s("th",[t._v("备注")])])]),s("tbody",[s("tr",[s("td",[t._v("1")]),s("td",[t._v("版本号")]),s("td",[t._v("12")]),s("td",[t._v("文本")]),s("td",[t._v("version")]),s("td",[t._v("统一填写为“VER000000002”")])]),s("tr",[s("td",[t._v("2")]),s("td",[t._v("字符集编码")]),s("td",[t._v("6")]),s("td",[t._v("文本")]),s("td",[t._v("charSet")]),s("td",[t._v("统一填写为“UTF-8”")])]),s("tr",[s("td",[t._v("3")]),s("td",[t._v("交易类型")]),s("td",[t._v("4")]),s("td",[t._v("文本")]),s("td",[t._v("transType")]),s("td",[t._v("消费交易填写“PURC”")])]),s("tr",[s("td",[t._v("4")]),s("td",[t._v("订单号")]),s("td",[t._v("60")]),s("td",[t._v("文本")]),s("td",[t._v("orderNum")]),s("td",[t._v("商户自行定义，需保证同一商户号下订单号不能重复")])]),s("tr",[s("td",[t._v("5")]),s("td",[t._v("订单金额")]),s("td",[t._v("12")]),s("td",[t._v("文本")]),s("td",[t._v("orderAmount")]),s("td",[t._v("如 100 元，表示为 100 或 100.00")])]),s("tr",[s("td",[t._v("6")]),s("td",[t._v("订单币种")]),s("td",[t._v("3")]),s("td",[t._v("文本")]),s("td",[t._v("orderCurrency")]),s("td",[t._v('人民币填写“CNY”,美元填写"USD"')])]),s("tr",[s("td",[t._v("7")]),s("td",[t._v("清算金额")]),s("td",[t._v("12")]),s("td",[t._v("文本")]),s("td",[t._v("settAmount")]),s("td",[t._v("如 100 元，表示为 100 或 100.00")])]),s("tr",[s("td",[t._v("8")]),s("td",[t._v("清算币种")]),s("td",[t._v("3")]),s("td",[t._v("文本")]),s("td",[t._v("settCurrency")]),s("td",[t._v("符合 ISO 标准，填写数字类型")])]),s("tr",[s("td",[t._v("9")]),s("td",[t._v("清算汇率")]),s("td",[t._v("7")]),s("td",[t._v("文本")]),s("td",[t._v("rate")]),s("td",[t._v("实际汇率，7 位有效数字")])]),s("tr",[s("td",[t._v("10")]),s("td",[t._v("商户预留字段")]),s("td",[t._v("1024")]),s("td",[t._v("文本")]),s("td",[t._v("merReserve")]),s("td",[t._v("商户预留内容，可传任意内容，如购买商品信息、员号等，但不要传特殊符号，如逗号。")])]),s("tr",[s("td",[t._v("11")]),s("td",[t._v("GW 交易 ID")]),s("td",[t._v("32")]),s("td",[t._v("文本")]),s("td",[t._v("transID")]),s("td",[t._v("GW 系统生成的交易 ID，每笔交易保持唯一")])]),s("tr",[s("td",[t._v("12")]),s("td",[t._v("商户代码")]),s("td",[t._v("15")]),s("td",[t._v("文本")]),s("td",[t._v("merID")]),s("td",[t._v("商户 ID，由AllPay 分配")])]),s("tr",[s("td",[t._v("13")]),s("td",[t._v("收单行 ID")]),s("td",[t._v("11")]),s("td",[t._v("文本")]),s("td",[t._v("acqID")]),s("td",[t._v('收单行 ID "99020344"')])]),s("tr",[s("td",[t._v("14")]),s("td",[t._v("支付渠道代码")]),s("td",[t._v("10")]),s("td",[t._v("文本")]),s("td",[t._v("paymentSchema")]),s("td",[t._v('支付宝:"APMP"; 微信:"WX"; 境外银联:"UP";  ApplePay 支付:"APP" ;印度本地支付:"EB"')])]),s("tr",[s("td",[t._v("15")]),s("td",[t._v("交易应答码")]),s("td",[t._v("2")]),s("td",[t._v("文本")]),s("td",[t._v("RespCode")]),s("td",[t._v("应答码 00-成功")])]),s("tr",[s("td",[t._v("16")]),s("td",[t._v("应答文字信息")]),s("td",[t._v("20")]),s("td",[t._v("文本")]),s("td",[t._v("RespMsg")]),s("td",[t._v("应答消息，全部为英文字符")])]),s("tr",[s("td",[t._v("17")]),s("td",[t._v("交易时间")]),s("td",[t._v("14")]),s("td",[t._v("文本")]),s("td",[t._v("transTime")]),s("td",[t._v('交易时间,格式:"yyyyMMddHHmmss"')])]),s("tr",[s("td",[t._v("18")]),s("td",[t._v("GW 处理时间")]),s("td",[t._v("14")]),s("td",[t._v("文本")]),s("td",[t._v("GWTime")]),s("td",[t._v("YYYYMMDDHHMMSS，为 GW 时间，目前为本地交易时间")])]),s("tr",[s("td",[t._v("19")]),s("td",[t._v("签名类型")]),s("td",[t._v("3")]),s("td",[t._v("文本")]),s("td",[t._v("signType")]),s("td",[t._v("MD5")])]),s("tr",[s("td",[t._v("20")]),s("td",[t._v("签名")]),s("td",[t._v("32")]),s("td",[t._v("文本")]),s("td",[t._v("signature")]),s("td",[t._v("采用 MD5 签名")])])])])])}],!1,null,null,null);a.default=_.exports}}]);