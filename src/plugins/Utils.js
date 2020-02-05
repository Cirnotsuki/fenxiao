import crypto from 'crypto'
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
  md5:function (code) {
    let content = code.toString();//加密的明文；
    let md5 = crypto.createHash('md5');//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
    md5.update(content);
    return md5.digest('hex');  //加密后的值
  },
  sha512:function (code) {
    let content = code.toString();//加密的明文；
    let sha512 = crypto.createHash('sha512');//定义加密方式:md5不可逆,此处的md5可以换成任意hash加密的方法名称；
    sha512.update(content);
    return sha512.digest('hex');  //加密后的值
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
        str = this.sha512(str);
        str = this.md5(str);
    }
    for(let i=0;i<Math.floor(foo/4);i++){
        str = this.sha512(str);
        str = this.md5(str);
    }
    for(let i=0;i<Math.floor(bar/4);i++){
        str = this.sha512(str);
        str = this.md5(str);
    }
    // 进行最低限度加密
    str = this.sha512(str);
    str = this.md5(str);

    return str;
  }
}