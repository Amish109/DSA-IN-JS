/**
 * Given an m x n integer matrix if an element is 0 set its entire row and column 0
 * 
 * example [[1,1,1],[1,0,1],[1,1,1]]
 * output = [[101].[0,0,0],[1,0,1]] 
 * 
 */

// Input 
// [1,1,1]
// [1,0,1]
// [1,1,1]

// Output
// [1,0,1]
// [0,0,0]
// [1,1,1]






const convertMatrixInZero = (array_data)=>{
/*
- What are we doing here

- In this method , we iterating from row 1 and col 1 , and if we see 0 then we make the 0th item of row and 0th item of col as 0
- and we are storing a flog if 0th row and 0th col has 0 ,  so tht we know if the og array has 0th row/col has 0 or we have updated it
- then we make whole ro and col where ever were seeing 0 on 0th row or col
- then if the first row has zero variable is 0 then we make whole row 0 and if 1st col variable is true then we make whole first col as 0 too
*/
	let first_row_zero = false;
	let first_col_zero = false;
	let m = array_data.length;
	let n = array_data[0].length;
	for(let i = 0 ; i<m ;i++){
		if(array_data[i][0]==0){
			first_col_zero = true;
			break;
		}
	}
	for(let j = 0 ; j<n ;j++){
		if(array_data[0][j]==0){
			first_row_zero = true;
			break;
		}
	}

	for(let row =1; row<m; row++){
		for(let col =1; col<n; col++){
			if(array_data[row][col]==0){
				array_data[row][0] = 0;
				array_data[0][col] = 0;
			}
		}	
	}
	
	for(let row =1; row<m; row++){
		for(let col =1; col<n; col++){
			if(array_data[row][0]==0 || array_data[0][col]==0){
				array_data[row][col] = 0;
			}
		}	
	}
	if(first_row_zero){
		for(let i =0; i<array_data[0].length; i++){
			array_data[0][i]=0;
		}	
	}
	if(first_col_zero){
		for(let i =0; i<array_data.length; i++){
			array_data[i][0]=0;
		}	
	}
	return array_data;
}	






// Use set instead of include because Set.has is O(1) time complexity to improve performance so time complexiy will be O(mn)

// Slow method takes 0(m*n(m+n))
// const convertMatrixInZero = (array_data)=>{
// 	const array_of_rows_columns_containing_zeros ={
// 		rows:[],
// 		col:[],
// 	}
// 	for(let i =0;i<array_data.length;i++){
// 		for(let j =0;j<array_data[i].length;j++){
// 			if(array_data[i][j]==0){
// 				if(!array_of_rows_columns_containing_zeros.rows.includes(i)){
// 					array_of_rows_columns_containing_zeros.rows.push(i);
// 				}
// 				if(!array_of_rows_columns_containing_zeros.col.includes(j)){
// 					array_of_rows_columns_containing_zeros.col.push(j);
// 				}
// 			}
// 		}	
// 	}
// 	for(let i =0;i<array_data.length;i++){
// 		for(let j =0;j<array_data[i].length;j++){
// 			if(array_of_rows_columns_containing_zeros.rows.includes(i) || array_of_rows_columns_containing_zeros.col.includes(j) ){
// 				array_data[i][j]=0;
// 			}
// 		}	
// 	}
// 	return array_data;
// }
// const input = [[1,1,1],[1,0,1],[1,1,1]];
const input = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(`input and output is `,input,convertMatrixInZero(JSON.parse(JSON.stringify(input))));



[[0,1,1],[1,0,1],[1,1,1]];