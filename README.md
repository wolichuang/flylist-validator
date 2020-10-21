# validator.js

1. 分模块引入不同的验证脚本
2. roolup 打包合并脚本
3. 构建命令

```js
"build:browser": "node --require @babel/register build-browser && npm run minify",
"build:es": "babel src -d es --env-name=es",
"build:node": "babel src -d .",
"build": "npm run build:browser && npm run build:node && npm run build:es",
```

4. 使用

```html
<script type="text/javascript" src="validator.min.js"></script>
<script type="text/javascript">
  validator.isEmail('wx@qq.com'); //=> true
</script>
```
