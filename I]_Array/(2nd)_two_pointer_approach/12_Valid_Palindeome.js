// https://leetcode.com/problems/valid-palindrome/description/
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
//  after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,

var isPalindrome = function(s) {
	s = s.replace(/[^a-zA-Z0-9]/g, '')?.toLowerCase();
	let left_pointer = 0;
	let right_pointer = s.length-1;
	let is_palindrome = true;
	while(left_pointer<right_pointer){
		if(s[left_pointer] != s[right_pointer]){
			is_palindrome = false;
			break;
		}
		left_pointer++;
		right_pointer--;
	}
	return is_palindrome;
};
// 'amanaplanacanalpanama'
// "A man, a plan, a canal: Panama".replace(/[^a-zA-Z0-9]/g, '')
// This will only match if the entire string is non-alphanumeric.
// But "A man, a plan, a canal: Panama" contains letters and spaces — so the regex never matches → nothing replaced.


// If you want to remove all non-alphanumeric characters (like spaces, commas, colons, etc.), you should drop the ^ and $, and just match every non-alphanumeric globally: