function greet(name,callback){
    let msg=`hello ${name}`
    return callback(msg)
}
function display(msg){
    console.log(msg)
}
greet("goutham",display)