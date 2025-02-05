const os=require('os');
function memory()
{
    console.log("total memory "+os.totalmem());

}
function getMem()
{
    console.log("free memory percent: "+(os.freemem()/os.totalmem())*100);
}
setInterval(getMem,5000);