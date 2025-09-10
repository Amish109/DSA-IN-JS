// const input_data = [[1,2,3],[4,5,6],[7,8,9]];
// const input_data =  [
// 	[1, 2, 3, 4],
// 	[5, 6,7 ,8] ,
// 	[9, 10, 11,12],
// 	[13,14,15,16]	
// ];
const input_data =  [
	[1, 2, 3, 4],
	[5, 6,7 ,8] ,
	[9, 10, 11,12],
	[13,14,15,16]	,
	[17,18,19,20]	,
	[21,22,23,24]	,
];

/**
top =0
right =3
bottom =3
left =0

I-1) left:0 to right:3 [1,2,3,4]
dir =1 and top =1

top:1<=bottom:3 && left:0<=right:3 ? true

I-2) iterate top to bottom 
where col will be same (right:3) row top-bottom (1-3)





 */
// [
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9]	
// ]
// [
// 	[1, 2, 3, 4],
// 	[5, 6,7 ,8] ,
// 	[9, 10, 11] 	
// 	[12,13,14,15]	
// ]
// [
// 	['0,0' ,'0,1','0,2','1,2','2,2','2,1','2.0','1,0','1.1']
// ]
const spiralMatrix=(data)=>{
	let m = data.length;
	let n = data[0].length;
	// let row = data.length;
	// let col = data[row].length;
	let left=0;
	let right=n -1;
	let top=0;
	let bottom=m -1;
	let direction=0;
	// 0--> left to right , 1--> top to bottom , 2-->right to left , 3-->bottom to top
	let output = [];
	while(left<=right && top<=bottom){
		if(direction==0){
		// left to right
		for(let i=left;i<=right;i++){
			output.push(data[top][i]);
		}
		top +=1;
		direction=1;
	} else if(direction==1){
		// top to bottom
		for(let i=top;i<=bottom;i++){
			debugger;
			output.push(data[i][right]);
		}
		right -=1;
		direction=2;
	} else if(direction==2){
		// right to left
		for(let i=right;i>=left;i--){
			output.push(data[bottom][i]);
		}
		bottom -=1;
		direction=3;
	} else if(direction==3){
		// bottom to top
		for(let i=bottom;i>=top;i--){
			output.push(data[i][left]);
		}
		left +=1;
		direction=0;
	}
	// while(row>0 || col >=0 ){
	// 	// row iteration
	// 	for(let y=0; y<col;y++){
	// 		array_output.push(data[row][y]);
	// 	}
	// 	i+=1;
	// 	// col iteration
	// 	for(let x=i; x<row;x++){
	// 		array_output.push(data[x][col]);
	// 		j++;
	// 	}
	// 	// for row backward
	// 	for(let x=i; x<row;x++){
	// 		array_output.push(data[x][col]);
  //  		}
	// 	col--;
	// 	x--;
	}
	return output;
}

console.log(spiralMatrix(input_data));