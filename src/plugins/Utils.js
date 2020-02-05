// import md5 from 'js-MD5';
const MD5 = require('js-md5')
const SHA512 = require("js-sha512").sha512
export default {
  setCookie (cname, cvalue, exminutes) {
    let d = new Date();
    d.setTime(d.getTime() + (exminutes*60*1000));
    let expires = "expires="+ d.toUTCString();
    if(exminutes===0){
      document.cookie = cname + "=" + cvalue + ";path=/";
    }else{
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
  },
  getCookie (cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },
  deleteCookie:function (cname) {
    if(this.getCookie(cname)){
      document.cookie = cname+"="+";expires=Thu,01-Jan-1970 00:00:01 GMT";
    }
  },
  // 加密字符
  shamdive:function(s) {
    s=s.toString();
    let str=s.toString();
    // 获取首字符和末尾字符的编码
    let foo=Number(s.slice(0,1).charCodeAt(0).toString(16));
    let bar=Number(s.slice(-1).charCodeAt(0).toString(16));
    // 根据字符长度加密字符串
    for(let i=0;i<Math.floor(s.length/2);i++){
        str = SHA512(str);
        str = MD5(str);
    }
    for(let i=0;i<Math.floor(foo/4);i++){
        str = SHA512(str);
        str = MD5(str);
    }
    for(let i=0;i<Math.floor(bar/4);i++){
        str = SHA512(str);
        str = MD5(str);
    }
    // 进行最低限度加密
    str = SHA512(str);
    str = MD5(str);

        return str;
  }
}