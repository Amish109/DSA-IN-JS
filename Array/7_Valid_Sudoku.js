/*

Determine if a 9x9 suduko board is valid  only  the filled cells need to be validated  according to the following rules
1) Each row must contain the digit 1-9 without repetitation.
2) Each col must contain the digit 1-9 without repetitation.
3) Each of the nine 3x3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// partially filled will be valid but not necessary solvable
// only filled cells need to be validated  according to the  mentioned rules

*/






const test_data = [["5","3",".",".","7",".",".",".","."]
									,["6",".",".","1","9","5",".",".","."]
									,[".","9","8",".",".",".",".","6","."]
									,["8",".",".",".","6",".",".",".","3"]
									,["4",".",".","8",".","3",".",".","1"]
									,["7",".",".",".","2",".",".",".","6"]
									,[".","6",".",".",".",".","2","8","."]
									,[".",".",".","4","1","9",".",".","5"]
									,[".",".",".",".","8",".",".","7","9"]];



const isValidSudoku = (data)=>{
let is_sudoku_valid = true;

for(let row=0; row<data.length && is_sudoku_valid == true; row++){
		let hash ={
				
			}
		for(col=0;col<data[row].length && is_sudoku_valid == true;col++){
			let value = data[row][col];
			if(value!=='.'){
				if(hash[`${value}`]){
					is_sudoku_valid = false;
					break;
				}
				hash[`${value}`]=1;
			}
		}
}

for(let col=0; col<data.length && is_sudoku_valid == true; col++){
		let hash ={
				
			}
		for(row=0;row<data[col].length && is_sudoku_valid == true;row++){
			let value = data[row][col];
			if(value!=='.'){
				if(hash[`${value}`]){
					is_sudoku_valid = false;
					break;
				}
				hash[`${value}`]=1;
			}
		}
}

let data_in_block = [];
for(let i=0;i<9;i++){
	if(i%3==0){
		data_in_block.push([]);
		data_in_block.push([]);
		data_in_block.push([]);
	}
	for(let j=0;j<9;j++){
		let start = data_in_block.length-3;
		let floor = Math.floor(j/3);
		let index = start + floor;
		data_in_block[index].push(data[i][j]);
	}
}
 console.log('data_in_block',data_in_block);

 for(let row=0; row<data_in_block.length && is_sudoku_valid == true; row++){
		let hash ={
				
			}
		for(col=0;col<data_in_block[row].length && is_sudoku_valid == true;col++){
			let value = data_in_block[row][col];
			if(value!=='.'){
				if(hash[`${value}`]){
					is_sudoku_valid = false;
					break;
				}
				hash[`${value}`]=1;
			}
		}
}

return is_sudoku_valid;

}


console.log(
	isValidSudoku(test_data)
)

// const sudokuIsValid = ()=>{
// 	// thinking as block wise

// // 	5 3 . | 6 . . | . 9 8
// // . 7 . | 1 9 5 | . . .
// // . . . | . . . | . 6 .
// // ------+-------+------
// // 8 . . | 4 . . | 7 . .
// // . 6 . | 8 . 3 | . 2 .
// // . . 3 | . . 1 | . . 6
// // ------+-------+------
// // . 6 . | . . . | . . .
// // . . . | 4 1 9 | . 8 .
// // 2 8 . | . . 5 | . 7 9

// // for row
// // 012 012 012 012 012 012 012 012 012 
// // 345 345 345 345 345 345 345 345 345
// // 678 678 678 678 678 678 678 678 678

// // col
// // 0,3,6
// // 1,4,7
// // 2,5,8

// // [[[0,0],[[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]],
// //  [[0,3],[[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]],
// //  [[0,6],[[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]],
// // ]]]]
//     //  0=>0,1,2
//     //  1=>3,4,5
//     //  2=>6,7,8
//     //  3=>

// 			// if we considee data is bloock wise 1st array is top left yen middle yhen righgt
// 	const data = [["5","3",".",".","7",".",".",".","."]
// 							 ,["6",".",".","1","9","5",".",".","."]
// 							 ,[".","9","8",".",".",".",".","6","."]
// 							 ,["8",".",".",".","6",".",".",".","3"]
// 							 ,["4",".",".","8",".","3",".",".","1"]
// 							 ,["7",".",".",".","2",".",".",".","6"]
// 							 ,[".","6",".",".",".",".","2","8","."]
// 							 ,[".",".",".","4","1","9",".",".","5"]
// 							 ,[".",".",".",".","8",".",".","7","9"]];
// 	const is_sudoku_valid = true;
// 	// validate each sub cells
	// for(let row=0; row<data.length && is_sudoku_valid == true; row++){
	// 	let hash ={
				
	// 		}
	// 	for(col=0;col<data[row].length && is_sudoku_valid == true;col++){
	// 		let value = data[row][col];
	// 		if(value!=='.'){
	// 			if(hash[`${value}`]){
	// 				is_sudoku_valid = false;
	// 				break;
	// 			}
	// 			hash[`${value}`]=1;
	// 		}
	// 	}
	// }
// 	let arr_of_rows =[];
// 	for(let i =0;i<=6;i=i+3){ //0,3,6 --> new array of 3
// 	arr_of_rows.push([]);
// 	arr_of_rows.push([]);
// 	arr_of_rows.push([]);
// 	for(let j =i;j<=i+2;j++){ // 0,1,2 --> pushing array
// 		for(let k =0;k<data[i].length;k++){
// 			let start = arr_of_rows.length -3;
// 			let num = Math.floor(k/3);
// 			let index = num+start;
// 			arr_of_rows[index].push(data[j][k]);	
// 		}
// 		// let start = arr_of_rows.length -3;
// 		// let num = Math.floor(j/3);
// 		// let index = num+start;
// 		// arr_of_rows[index].push(data[i][j]);
// 	}
// }
// 	return is_sudoku_valid;

// }