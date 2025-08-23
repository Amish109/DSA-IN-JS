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

	let first_row_zero = false;
	let first_col_zero = false;
	let m = array_data.length;
	let n = array_data[0].length;
	for(let i = 0 ; i<m ;i++){
		if(array_data[i][0]==0){
			first_col_zero = true;
		}
	}
	for(let j = 0 ; j<n ;j++){
		if(array_data[0][j]==0){
			first_row_zero = true;
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
const input = [[1,1,1],[1,0,1],[1,1,1]];
console.log(`input and output is `,input,convertMatrixInZero(JSON.parse(JSON.stringify(input))));



[[0,1,1],[1,0,1],[1,1,1]];