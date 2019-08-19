# 设置超时时间

```javascript
xhr.timeout = 2000; // 超时时间，单位是毫秒
```

# 监听超时

```javascript
xhr.ontimeout = function (e) {
  // XMLHttpRequest超时，做超时的提示或其他处理。
};
```

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