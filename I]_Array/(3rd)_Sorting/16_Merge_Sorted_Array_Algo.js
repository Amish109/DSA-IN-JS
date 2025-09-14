// Two sorted arrray as input , aspection sorted array as op which should be merge  of both inp array
// two pointer method
// function merge(array1=[1, 3, 5],array2= [2, 4, 6, 8, 10]){
// function merge(array1=[1, 3, 5 ,7,9],array2= [2, 4, 6, 8, 10]){
// function merge(array1=[1, 3, 5],array2= [3,20, 40, 60, 80, 100]){
function merge(array1=[1, 3, 5],array2= [3,20, 40, 60, 80, 100]){
    debugger;
    // ascending input
    let output_array = [];
    let from_index_to_sort_of_array1=0;
    let from_index_to_sort_of_array2=0;
    let index_to_add_of_output_array=0;
    
    while(from_index_to_sort_of_array1 < array1.length || from_index_to_sort_of_array2 < array2.length){
        if(array1[from_index_to_sort_of_array1] < array2[from_index_to_sort_of_array2]){
            output_array.push(array1[from_index_to_sort_of_array1]);
            from_index_to_sort_of_array1 ++;
            console.log();
            continue;
        } else if(array2[from_index_to_sort_of_array2] < array1[from_index_to_sort_of_array1]){
            output_array.push(array2[from_index_to_sort_of_array2]);
            from_index_to_sort_of_array2 ++;
            continue;
        } else if(array2[from_index_to_sort_of_array2] == array1[from_index_to_sort_of_array1]){
            output_array.push(array2[from_index_to_sort_of_array2]);
            output_array.push(array1[from_index_to_sort_of_array1]);
            from_index_to_sort_of_array1 ++;
            from_index_to_sort_of_array2 ++;
            continue;
        }

        if(!isNaN(array2[from_index_to_sort_of_array2])){
            output_array.push(array2[from_index_to_sort_of_array2]);
            from_index_to_sort_of_array2 ++;
            continue;
        }
        if(!isNaN(array1[from_index_to_sort_of_array1])){
            output_array.push(array1[from_index_to_sort_of_array1]);
            from_index_to_sort_of_array1 ++;
            continue;

        }
        
    }

    return output_array;
}

// console.log(merge());
// console.log(merge([1,3,5], [100,200,300]));
// console.log(merge([0, 1, 2], [3, 4, 5]));
// console.log(merge([1,2,3,4], [2]));
// console.log(merge([-5, -1, 3], [-2, 4]));
// console.log(merge([0, 2, 4], []));
module.exports={
    merge:merge
}