// 🔹 Bubble Sort Logic
// Loop through the array.
// Compare adjacent elements.
// If they’re in the wrong order → swap immediately.
// Repeat until sorted.
// 👉 It swaps many times per pass because it reacts immediately on each comparison.
// 🔹 Selection Sort Logic
// Loop through the array.
// In each pass, find the min (or max) in the unsorted part.
// After scanning the whole unsorted part → swap only once (putting min/max in its correct place).
// 👉 It delays swapping until it has identified the best candidate.

// [34, 12, 89, 45, 23, 7, 56, 91];

function selectionSort(array_data = [34, 12, 89, 45, 23, 7, 56, 91]){
    for(let i=0; i<array_data.length-1; i++){
        let small_vale_index = i; 
        for(let j=i+1;j<array_data.length -1; j++){
            if((array_data[i] > array_data[j]) && (array_data[small_vale_index] > array_data[j] ) ){
              small_vale_index = j;  
            }
        }
        if(i!==small_vale_index){
            let temp = array_data[i];
            array_data[i] = array_data[small_vale_index];
            array_data[small_vale_index] = temp;
        }
    }
    return array_data;
}

console.log(selectionSort());