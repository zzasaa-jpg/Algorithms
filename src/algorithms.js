let algorithms_obj = [
	{
		title: "Reverse the array in place",
		code: `value = 1, half_of_array = array.size / 2;
for (i = 0; i < half_of_array; i++){
	temp = array[array.size - value];
	array[array.size - value] = array[i];
	array[i] = temp;
	value++;
}
		`,
		description: "Array reverse algorithm. **IN_PLACE**.",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(1)",
		}
	}, {
		title: "Find the minimum and maximum value",
		code: `for(i = 0; i < array.size; i++){
	if(array[i] > Maximum_value) Maximum_value = array[i];
	if(array[i] < Minimum_value) Minimum_value = array[i];
}`,
		description: "findin the minimum && maximum vlaues.",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(1)",
		}
	}, {
		title: "Normal Recursion",
		code: `function Recursion(i){
	if(i == reach_condition) return i;
	return Recursion(i + 1);
}`,
		description: "Normal recursion algorithm.",
		complexity: {
			time_complexity: "o(1)",
			space_complexity: "o(1)",
		}
	}, {
		title: "ZIG ZAG String",
		code: `numsRow = 3, currentRow = 0;
bool direction = true;
vactor <string> vector_(numsRow, "");
for (auto char_ : string){
	vector_[currentRow] += char_;
	if(currentRow == 0) direction = true;
	else if (currentRow == numsRow - 1) direction = false;
	currentRow += (direction ? 1 : -1);
}
`,
		description: "Zig Zag string algorithm.",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(n)",
		}
	},{
		title: "Binary Search",
		code: `binary_search(vector<int> vec, int target){
	left = 0, right = vec.size() - 1;

	while(left <= right){
		mid = left + ((right - left) / 2);

		if (vec[mid] == target) return true;
		if (vec[mid] > target) right = mid - 1;

		else left = mid + 1;
	}
	return false;
}`,
		description: "Binary search algorithm. The algorithm work when receiving parameter of 'vec' is sorted.",
		complexity: {
			time_complexity: "o(log n)",
			space_complexity: "o(1)",
		}
	},{
		title: "Binary Search with Recursion",
		code: `binary_search_recursive(vector<int> vec, int left, int right, int target){
	if (left > right) return false;

	int mid = left + ((right - left) / 2);

	if (vec[mid] == target) return true;

	if (vec[mid] > target)return binary_search_recursive(vec, left, mid - 1, target);
	return binary_search_recursive(vec, mid + 1, right, target);

}`,
		description: "Binary search algorithm with Recursion. The algorithm work when receiving parameter of 'vec' is sorted.",
		complexity: {
			time_complexity: "o(log n)",
			space_complexity: "o(log n)",
		}
	},
]

export default algorithms_obj;
