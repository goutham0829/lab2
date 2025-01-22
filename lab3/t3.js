function delayedMessage(msg,delay){

    setTimeout(()=>{
        console.log(msg);
        if(delay){
            delay();
        }
    },20000);
}
delayedMessage("hello , world",()=>{
    console.log("Message has been printed and delayed for 20sec");
})