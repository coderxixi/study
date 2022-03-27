function showtime(){
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var s = now.getSeconds();
    var ms = now.getMilliseconds();
    // var hh = h > 12 ? h - 12 : h;
    // var hh = h < 10 ? '0' + hh : hh;
    // var mm = m < 10 ? '0' + m : m;
    // var ss = s < 10 ? '0' + s : s;
    // var ms = ms < 10 ? '0' + ms : ms;
    // var clock = hh + ':' + mm + ':' + ss + ':' + ms;
    h=checkTime(h);
    m=checkTime(m);
    s=checkTime(s);
    ms=checkTime(ms);
    return h+':'+m+':'+s+':'+ms;
}

function checkTime(x){
  if(x<10){
    x='0'+x;
  }

  return x
}

var divList=document.querySelectorAll('text');
setInterval(()=>{
  var timerStr=showtime()
  divList.forEach((item,i)=>{
    item.innerHTML=timerStr
  })
},1000)