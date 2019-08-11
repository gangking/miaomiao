import Vue from "vue";

Vue.filter('setWH',(url,arg)=>{
  // 正则替换，将w.h替换成指定的arg
  return url.replace(/w\.h/,arg);
})