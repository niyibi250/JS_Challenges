function prime_number(arr){
    let prime_number_arr=[]
  for(let i=0; i< arr.length; i++)
  {
    for(let j=2; j<=arr[i]; j++)
    {
        if(arr[i]%j==0)
        {
            if(arr[i]==j)
            {
                prime_number_arr.push(arr[i])
            }
            else
            {
                break;
            }
        }
        else
        {
            continue;
        }
    }

  }
  return prime_number_arr;
}
// let old_arr=[2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,19,20]
// let new_arr=prime_number(old_arr)
// console.log(new_arr)