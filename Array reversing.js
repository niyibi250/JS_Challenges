function Array_reversing(arr){
  let reversed_arr=[]
  for(let i=arr.length; i>0; i--)
  {
    reversed_arr.push(arr[i-1])
  }
  return reversed_arr;
}

// let result=Array_reversing([1,2,3,4,5,6,7,8,9])
// console.log(result)