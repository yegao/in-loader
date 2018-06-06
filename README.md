**install**
npm install -D in-loader

**javascript**
```javascript
<in>./src/a.js</in>
export default "hello world!"
```
You can also use it for other file,for example:xxx.vue

**x.vue**
```html
<template>
  <div>
    <in>./src/tpl/a.tpl</in>
  </div>
</template>
<script></script>
<style></style>
```
**./src/tpl/a.tpl**
```html
<ul>
  <li>item1</li>
  <li>item2</li>
  <li>item3</li>
  <li>item4</li>
  <li>item5</li>
  <li>item6</li>
  <li>item7</li>
  <li>item8</li>
</ul>
```
**webpack.config.js**
```js
module: {
  rules: [
    ...
    {
      test: /\.js$/,
      use: ['babel-loader','in-loader']
    },
    {
      test: /\.vue$/,
      use: ['vue-loader','in-loader']
    }
    ...
  ]
}
```
if you want to use some other tag instead of <in></in> ,you can use option tag;
**webpack.config.js**
```js
module: {
  rules: [
    ...
    {
      test: /\.js$/,
      use: ['babel-loader',{
        loader:'in-loader',
        option:{
          tag:'aaa'
        }
      }]
    }
    ...
  ]
}
```
**javascript**
```javascript
<aaa>./src/a.js</aaa>
export default "hello world!"
```
