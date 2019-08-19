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
