// Just like bubble the big ones goes first then small one follows back

// - so in this we will first make the highest number at the end and then the last item will be sorted ,  -then we will leave that alone and then will take the next highest num and make it at the end agaain o this way array will be sorted
// basically if left side num is greater than right side we will swap and make greater number on right nd by doin this we will make the highest num reach end


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