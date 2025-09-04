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

