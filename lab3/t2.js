function mul(num,callback){
    callback(num*2);
}
function add(num,callback){
   callback(num+10);
}
function sub(num,callback){
    callback(num-3);
}
mul(10,(res)=>{
   sub(res,(sres)=>{
       add(sres,(ares)=>{
      console.log(ares) })
   })
})