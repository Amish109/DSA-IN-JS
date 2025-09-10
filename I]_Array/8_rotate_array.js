const input_data = [1,2,3,4,5,6,7];
// let k=0 , data = [1,2,3,4,5,6,7]
// let k=1 , data = [7,1,2,3,4,5,6]
// let k=2 , data = [6,7,1,2,3,4,5]
// let k=3 , data = [7,6,7,1,2,3,4]
// let k=4 , data = [4,5,6,7,1,2,3]
// let k=5 , data = [3,4,5,6,7,1,2]
// let k=6 , data = [2,3,4,5,6,7,1]
// let k=7 , data = [1,2,3,4,5,6,7]

const rotateArray=(array_data,rotate_index=1)=>{
	debugger;
	const reverseArray=(array_input)=>{
		if(array_input.length%2==0){
			for(let x=0;x<array_input.length/2;x++){
				let temp_value =  array_input[x];
				array_input[x] = array_input[(array_input.length -1) - x];
				array_input[(array_input.length -1) - x] = temp_value;
			}
		} else{
			for(let x=0;x<Math.floor(array_input.length/2);x++){
				let temp_value =  array_input[x];
				array_input[x] = array_input[(array_input.length -1) - x];
				array_input[(array_input.length -1) - x] = temp_value;
			}
		}
		return array_input;
	}
	array_data = reverseArray(array_data);
	let temp_array =  [];
	for(let i=0;i<rotate_index%array_data.length;i++){
		temp_array.push(array_data[i]);
	}
	array_data = [...temp_array,...reverseArray(array_data.slice(rotate_index%array_data.length))];
	return array_data;
}


console.log(rotateArray(input_data,12));