# 示例代码

直接上代码：

```javascript
// 首先监听input框的变动，选中一个新的文件会触发change事件
document.querySelector("#file").addEventListener("change", function () {
  // 取得文件对象
  var file = document.querySelector("#file").files[0];
  // 使用FormData保存文件数据
  var formdata = new FormData();
  formdata.append("file", file);
  var xhr = new XMLHttpRequest();
  xhr.open("post", "/upload");
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // 上传完成
    }
  }
  // 获取上传的进度
  xhr.upload.onprogress = function (event) {
    if (event.lengthComputable) {
      // 计算出百分比
      var percent = event.loaded / event.total * 100;
      // 修改进度条的宽度
      document.querySelector("#progress").style.width = percent + "%";
    }
  }
  // 由于是post方式，文件数据formdata通过send方法进行传递
  xhr.send(formdata);
});
```

<div id="gitalk-container"></div>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css">
<script src="https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js"></script>
<script>
var gitalk = new Gitalk({
    clientID: "c17498a9a9fa6e17b36a",
    clientSecret: "556df0480f8f48e142432f50273ea149cf206c07",
    repo: "https://github.com/cumt-robin/FE-learning",
    owner: "cumt-robin",
    admin: ["cumt-robin"],
    id: decodeURIComponent(location.pathname)
});
gitalk.render("gitalk-container");
</script>