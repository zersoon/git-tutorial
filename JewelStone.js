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