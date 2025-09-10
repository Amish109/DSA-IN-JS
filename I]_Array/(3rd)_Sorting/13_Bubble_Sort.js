const numbers = [34, 12, 89, 45, 23, 7, 56, 91]; //length 8 0-->6,0,5

function bubbleSort(data = numbers){
	debugger;
// Make the data which is high at the end and keep on doin it until it gets sort
for(let i=0; i<data.length-1;i++){
	for(let j=0;j<data.length-1 -(i+1);j++){
		if(data[j]>data[j+1]){
			let temp = data[j+1];
			data[j+1]=data[j];
			data[j]=temp;
		}
	}
}
	return data;	
}


// function bubbleSort(data = numbers){
// // Make the data which is high at the end and keep on doin it until it gets sort
// let sorted=0;
// while(sorted < data.length){
// 	for(let i=0; i<data.length-1-sorted-1;i++){
// 		if(data[i]>data[i+1]){
// 			let temp = data[i];
// 			data[i] = data[i+1];
// 			data[i+1] = temp;
// 		}
// 	}
// 	sorted++;
// }
// 	return data;	
// }

console.log('bubbleSort();',bubbleSort());