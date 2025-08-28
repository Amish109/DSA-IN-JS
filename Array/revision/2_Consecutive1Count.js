// https://leetcode.com/problems/max-consecutive-ones/description/

let nums = [1,1,0,1,1,1]; // 3
let consecutiveOneCount =(data = nums)=>{
	let highest_consecutive_count = 0;
	let count = 0;
	for(let i=0; i<data.length; i++){
		if(data[i] ==1){
			count +=1;
			highest_consecutive_count = Math.max(highest_consecutive_count,count );
		} else{
			count =0;
		}
	}

	return highest_consecutive_count;
}