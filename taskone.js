function merge_arr(...arr)
{
    return [].concat(...arr);
}
let res=merge_arr([1,2],[3,4],[5,6]);
console.log(res);