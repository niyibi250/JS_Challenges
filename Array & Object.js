
function arry_to_object(arr)
{

//    cleate arrey to fold the classification based on gendle

    let male_arr=[]
    let female_arr=[]
    let male_obj={}
    let female_obj={}

    //   cleate str to hold arrey string as we aterate throught the given aarey

    let str=''

    // iterate throught arrey to and asign each element on str variable

    for(let i=0; i<arr.length; i++)
    {
        str=arr[i]

        // splite the arrey element based on symbol ',' and return the arrey of each word

        let new_arr=str.split(',')

        // asign name element on name variable
        let names=new_arr[0]

        // splite name into first name and last name

        let new_names=names.split(' ')

        //add repace element 0 with new names

        new_arr.splice(0,1,new_names[0],new_names[1])

        // classifia into male and female

        if(new_arr[new_arr.length-1]==' male')
        {
            male_arr.push(new_arr)
        }
        else{
            female_arr.push(new_arr)
        }
    }
    let combined_arrey=[female_arr,male_arr]

    // console.log(combined_arrey)

    for(let i=0;i<combined_arrey.length; i++)
    {
        for(let j=0; j<combined_arrey[i].length;j++)
        {
            // create Object arrey for male and female

            if(combined_arrey[i][j][3]==' male')
            {

                male_obj[combined_arrey[i][j][0]]=[{second_name:combined_arrey[i][j][1], age:combined_arrey[i][j][2]}]
            }
            else{

                female_obj[combined_arrey[i][j][0]]=[{second_name:combined_arrey[i][j][1], age:combined_arrey[i][j][2]}]
            }
        }
    }
    // make combine object of males and female
    let obj_comb={femeles:female_obj, males:male_obj}
    // console.log(obj_comb)

}


// let arr=["Patrick wyne, 30, male", "lil wyne, 32, male","Eric mimi, 21, female","Dodos deck, 21,male","Alian Dwine, 22, male","Patrick wyne, 33, male","Patrick wyne, 10,male0","Patrick wyne, 40,male"]
// let result=arry_to_object(arr);
