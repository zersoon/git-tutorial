{   
	var numJewelsInStone = function (J, S) {
		let count = 0;
		for(let i = 0; i < S.length; i++) {
			if(J.includes(S.charAt(i))) {
				count++
			}
		}
		return count;
	}

}

{
	const numJewelsInStone = (J, S) => S.split("").filter(char => J.indexOf(char) != -1).length;
}

{
	var numJewelsInStone = function (J, S) {
		return S.replace(new RegExp(`[^${J}]`, "g"), "").length;
	}
}

{
	var numJewelsInStone = function (J, S) {
		const map = new Map();
		let cnt = 0;
		for(let i = 0; i < J.length; i++) {
			map.set(J.charAt(i), 1)
		}

		for(let i = 0; i < S.length; i++) {
			map.has(S.charAt(i)) && cnt++
		}
		return cnt;
	}
}
{
	function numJewelsInStone = function (J, S) {
		return S.split("").filter(s => J.includes(s)).length;
	}
}