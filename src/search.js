import algorithms_obj  from "./algorithms.js";

function search_(input_value){
	let found = false;
	let matches = [];
	for (let i = 0; i < algorithms_obj.length; i++){
		let title = algorithms_obj[i].title.toLowerCase();
		if(title.includes(input_value)){
			found = true;
			matches.push(i);
		} 
	}
	return matches;
	if(!found) {
			return -1;
	}
}
export default search_;
