function calculate_total(...num)
{
    let total = 0;
    for(let i of num)
    {
        total += i;
    }
    return total;
}
let res=calculate_total(10,10,10);
console.log(res);