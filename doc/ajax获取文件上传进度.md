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

