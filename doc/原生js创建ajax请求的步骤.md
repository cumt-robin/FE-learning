# 创建 XMLHttpRequest 对象

```javascript
// 兼容写法
if (window.XMLHttpRequest) {
 //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
 xmlhttp=new XMLHttpRequest();
} else {
 // IE6, IE5 浏览器执行代码
 xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
}
```

# 设置请求的类型，URL以及是否异步(async)

```javascript
xmlhttp.open("GET", "/article/page", true);
xmlhttp.open("POST", "/article/add", true);
```

备注：
（1）当请求类型为`GET`时，传递的参数可直接放在`URL`的查询字符串中；`POST`请求的参数需要传入`xmlhttp.send`方法
（2）推荐设置`async`为`true`，使用异步的方式进行处理，需要通过`onreadystatechange`监听请求状态；如果`async`为`false`，则请求是同步的，就不需要监听请求状态了，直接在`xmlhttp.send`方法后写处理代码就可以了，但是同步请求是会阻塞的，此时浏览器看起来就像卡死了一样，没特殊情况千万别用同步请求。

# 设置请求头

`xmlhttp.setRequestHeader(HTTP 头名称，HTTP请求头值)`，举个示例：

```javascript
xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
```

# 监听请求状态

```javascript
xmlhttp.onreadystatechange= function(){
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
     // 请求成功，进行业务处理
     // ......
  }
}
```

**备注：**

`readyState`有五种状态：

- 0: 请求未初始化
- 1: 服务器连接已建立
- 2: 请求已接收
- 3: 请求处理中
- 4: 请求已完成，且响应已就绪

我们主要关注状态4

# 发送请求

`xmlhttp.send()`，该方法可以携带`POST`请求的参数，参数写法也是查询字符串格式，示例：

```javascript
xmlhttp.send('username=Tusi&password=999999')
```

![欢迎关注](https://qncdn.wbjiang.cn/yuanchudao_poster1.png)

<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
<script>
var gitalk = new Gitalk({
    clientID: "c17498a9a9fa6e17b36a",
    clientSecret: "556df0480f8f48e142432f50273ea149cf206c07",
    repo: "FE-learning",
    owner: "cumt-robin",
    admin: ["cumt-robin"],
    id: decodeURIComponent(location.pathname)
});
gitalk.render("gitalk-container");
</script>