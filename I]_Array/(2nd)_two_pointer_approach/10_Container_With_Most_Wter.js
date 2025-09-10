// SUm Link :- https://leetcode.com/problems/container-with-most-water/description/
// Input: height = [1,8,6,2,5,4,8,3,7]
// height --> minimum of left height and right height
// width --> (right-left-1)
var maxArea = function(height) {
	debugger;
  let max_area = 0;
	let pointer_left = 0; // 0,1
	let pointer_right = height.length - 1;  // 9-1=8, 8

	while(pointer_left<pointer_right){
		// 1<7 h --> 1 , 8<7 h --> 7 ,
		max_area = Math.max(max_area,Math.min(height[pointer_left],height[pointer_right])*(pointer_right-pointer_left));
		// max_area = 1*7 = 7 , 7*6 = 42
		// pointer_right-pointer_left means calculating the distance between them bacially width
		if(height[pointer_left] > height[pointer_right] ){
			pointer_right--;
		} else{
			pointer_left++;
		}
	}

	return max_area;
};