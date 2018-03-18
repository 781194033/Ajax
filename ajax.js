/*
* @Author: cewei
* @Date:   2018-03-18 14:44:13
* @Last Modified by:   cewei
* @Last Modified time: 2018-03-18 14:52:03
*/
(function(window){
	function ajax(params){
		var method = param.method || 'GET',
			url    = param.url    || '',
			async  = param.async  || true,
			data   = param.data   || '';
			
		var xhr = null;
		//创建XHR对象，ie和非ie
		if(typeof XMLHttpRequest !== "undefined"){
			xhr = new XMLHttpRequest();
		}else if(typeof ActiveXObject !== "undefined"){
			xhr = new ActiveXObject("Microsoft.XMLHTTP")
		}

		//区分post和get
		if(method === "POST"){
			xhr.open(method,url,async);
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xhr.send(toStr(data));
		}else if(method === "GET"){
			url = url +"?"+ toStr(data);
			xhr.open(method,url,async);
			xhr.send(null);
		}
		
		xhr.onload = function(){
			if(xhr.readyState === 4){
				if((xhr.status >= 200 && xhr.status<300) || xhr.status ==304){
					var res = JSON.parse(xhr.responseText);
					//请求成功后，您在这里写代码


				}else{
					//请求失败，您在这里写代码


				}
			}
		};
		//拼接Url
		function toStr(obj){
			if(obj===null){
					return obj;
			}
			var arr = [];
			for(var i in obj){
				var str = encodeURIComponent(i)+'='+encodeURIComponent(obj[i]);
				arr.push(str);
			}
			return arr.join('&');
		};
	};
	window.ajax = ajax;
})(window)