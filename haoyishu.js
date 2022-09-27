/*
好医术

***************************
QuantumultX:

[rewrite_local]
^https?:\/\/userapi2\.haoyishu\.com\/(v5\/user\/userinfo|vip/study/report) url script-response-body https://raw.githubusercontent.com/wangbo667/wangbo667/blob/main/haoyishu.js


[mitm]
hostname = userapi2.haoyishu.com

***************************

**************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/v5/user/userinfo';
const report = '/vip/study/report';

if (url.indexOf(vip) != -1) {
	obj.data["vipName"] = "案例课会员";
	obj.data["expired"] = "false";
	obj.data["vipLev"] = "82";
	obj.data["expired_text"] = "即将过期";
	obj.data["endTime"] ="2023-08-19T08:44:30.000+00:00";
	obj.data["text"] = "有限期至2023.08.19";
      obj.data["vipName"] = "心血管尊享会员";
	obj.data["expired"] = "false";
	obj.data["vipLev"] = "451";
	obj.data["expired_text"] = "即将过期";
	obj.data["endTime"] ="2023-08-19T08:44:30.000+00:00";
	obj.data["text"] = "有限期至2023.08.19";
	body = JSON.stringify(obj);
}

if (url.indexOf(report) != -1) {
	obj.data["waVipId"] = "0";
	obj.data["expireList"] = "["案例课会员：2023年08月19日到期","心血管尊享会员：2023年09月19日到期"]";
	obj.data["depId"] = "2";
	obj.data["anatomyVip"] = "false";
	obj.data["isAnatomyExpire"] ="false";
	obj.data["isCaseVip"] = "true";
        obj.data["isVip"] = "true";
	obj.data["anatomyExpire"] = "false";
	obj.data["caseExpire"] = "false";
	obj.data["isCaseExpire"] = "false";
	obj.data["expire"] ="false";
	obj.data["isExpire"] = "false";
        obj.data["CaseVip"] = "true";
        obj.data["Vip"] = "true";
	body = JSON.stringify(obj);
}

$done({body});
