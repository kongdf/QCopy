<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {

    /* text-align: center; */
    height: 100%;
    width: 100%;
    background-color: #fbfbfb;
  }

  #app {
    font-family: Helvetica, Tahoma, Arial, "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
    font-family: Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50;
    width: 100%;
    height: 100%;
  }

  .tc {
    text-align: center;
  }

  .tl {
    text-align: left;
  }

  .cp {
    cursor: pointer;
  }
  .corred{
    color: red;
  }
</style>