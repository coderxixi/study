const Ws=require('ws');
;((Ws)=>{
  const server=new Ws.Server({port:8000});
  const init=()=>{

  }
function bindEvent(){
  server.on('open',handleOpen);
  server.on('close',handleClose);
  server.on('error',handleError);
  server.on('connection',handleClonnection)
}
function handleOpen(){
  console.log('');
}
function handleClose(){
   console.log();
}
function handleError(){
console.log();
}
function handleClonnection(ws){
  ws.on('message',handleMessage)
console.log();
}
function handleMessage(mag){
  console.log('msg',msg)
}
})(Ws)