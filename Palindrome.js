function Palindrome(str){
    let new_str=''
    for(let i=str.length; i>0; i--)
    {
       new_str+=str[i-1]
    }

   if(new_str===str)
   {
    return true
   }
   else
   {
      return false
   }
}
let result=Palindrome('cdcdc')
console.log(result)