function sorting(arr)
{
    let big_number_index=0
    let big_number=arr[0]; 
    let temp=0

    for(let i=0; i<arr.length; i++)
    {
         temp=arr[i]
        for(let j=i+1;j<arr.length; i++)
        {
            if(arr[j]>big_number)
            {
                big_number=arr[j]
                big_number_index=j
            }
        }
        arr[i]=arr[big_number_index]
        arr[big_number_index]=temp
        console.log(1)
    }
}



let arr = [1, 3, 6, 4];
let sortedArr = sorting(arr);
