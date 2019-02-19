{
	var singleNumber = function (nums) {
		let output = {};
		for(let n of nums) {
			if(!output[n]) {
				output[n] = 1;
			} else {
				output[n]++;
			}
		}
		for(let key in output) {
			if(output[key] === 1) {
				return parseInt(key);
			}
		}
	}
}
{
	/*
	* @params {Array}
	* @return {Number}
	*/
	var singleNumber = function (nums) {
		if (!nums.length) return;
		if (nums.length == 1) return nums[0];
		let arrList = [];
		for (let i = 0; i < nums.lenght; i++) {
			let temp = nums[i];
			let res = nums.filter(n => n == temp);
			if(res.length == 1) {
				arrList.push(res);
			}
		}
		return arrList[0][0];
	}
}

{
	var singleNumber = function (nums) {
		for (let i = 0; i < nums.length; i++) {
			if (nums.indexOf(num[i]) === nums.lastIndexOf(nums[i])) return nums[i];
		}
	}
}