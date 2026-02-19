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
		description: "findin the minimum && maximum values.",
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
	}, {
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
	}, {
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
	}, {
		title: "Palindrome Number checker from scratch",
		code: `isPalindrome(x) {
    //negative value return false
    if(x < 0) return false;

    length = 0;
    n = x;

    //Counting the number length
    if(n == 0) length = 1; // special case
    else length = length_of_number(0, n);

    //if number length is less than one return false
    if (length < 1) return false;
    
    palindrome = true;
    //power value calculating via recursion
    power_value = power_recursion(1, 1, length);
    
    //checking palindrome for every digit
    for(i = 0; i < length / 2; i++){
        first_value = x / power_value;
        last_value = x % 10;
            if(first_value != last_value){
                palindrome = false;
                break;
            }
            
            x = (x % power_value) / 10;
            power_value /= 100;
        }
    return palindrome;
}
power_recursion(power_value, count, length){
    if (count == length) return power_value;
        return power_recursion(power_value * 10, count+1, length);
}

length_of_number(length,n){
    if (n == 0) return length;
    return length_of_number(length + 1, n / 10);
}`,
		description: "Palindrome checker from scratch and Math. Checking the every digit.",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(1)",
		}
	}, {
		title: "Reverse Integer",
		code: `reverse_integer(x) {
	reverse_digit = 0;
	
	while (x != 0) {
		last_digit = x % 10;
		x = x / 10;
		reverse_digit = reverse_digit * 10 + last_digit;
		if (reverse_digit > INT_MAX || reverse_digit < INT_MIN) return 0;
	}
	return (int)reverse_digit;
};`,
		description: "Reverse the integer from Math calculation. First get the last digit; after than remove the that digit from integer. In the reverse digit, multiply the reverse digit by 10 and add the last digit. Add the reverse number.",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(1)",
		}
	},{
		title: "Triangle",
		code: `int minimumTotal(vector<vector<int>>& triangle) {
        int n = triangle.size();
        for(int i = n - 2; i >= 0; i--)
        {
            for (int j = 0; j <=  i; j++)
            {
                triangle[i][j] += min(
                    triangle[i + 1][j],
                    triangle[i + 1][j + 1]
                );
            }
        }
        return triangle[0][0];
}`,
		description: "This solution uses bottom-up dynamic programming. Starting from the second-last row, each element is updated by adding the minimum of its two children from the row below. This way, every cell stores the minimum path sum from that point to the bottom.",
		complexity: {
			time_complexity: "o(n2)",
			space_complexity: "o(1)",
		}
	},{
		title: "Sum Of Digits",
		code: `long long sumOfDigits(long long n) {
	if(n < 0) return -1;
    long long right_digit = 0; // Least significant digit
    while(n > 0)
    {
        right_digit += n % 10;
        n /= 10;
    }
    return right_digit;
}`,
		description: "This algorithm is math based. LSD(Least Significant Digit) using: n % 10 extracts the least significant digit, and n / 10 removes the least significant digit. No string conversion.",
		complexity: {
			time_complexity: "o(d)",
			space_complexity: "o(1)",
		}
	},{
		title: "First Unique or Non-Repeating Character",
		code: `int firstUniqChar(string s) {
    vector<int> freq(26, 0);
    // Count the frequency of each character
    for (char ch : s)
    {
        freq[ch - 'a']++;
    }
    // Find the Unique or Non-Repeating charcter of index
    for (int i = 0; i < s.size(); i++)
    {
        if(freq[s[i] - 'a'] == 1)
        {
            return i;
        }
    }
	return -1;
}`,
		description: "Two-pass frequency counting using a fixed-size array. First loop count the frequency of each character, second loop find the Unique or Non-Repeating character of index. if condition true return index else return -1.",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(1)",
		}
	},{
		title: "Log Analyzer",
		code: `std::string LogAnalyzer::analyze(const std::vector<std::string>& logs) {   
    if(logs.empty()) return ""; // if logs is empty
    int INFO_count, WARNING_count, ERROR_count = 0;
	
    for(const std::string& log : logs)
    {
		size_t colon_pos = log.find(":");
	
		// Safety check in case format is invalid
		if(colon_pos == std::string::npos)
		{
			continue;
		}
	
		std::string level =log.substr(0, colon_pos);
		
		if(level == "INFO") INFO_count++;
		else if(level == "WARNING") WARNING_count++;
		else if(level == "ERROR") ERROR_count++;
    }
	
    std::string results;
    results += "INFO=" + std::to_string(INFO_count) + "/n";
    results += "WARNING=" + std::to_string(WARNING_count) + "/n";
    results += "ERROR=" + std::to_string(ERROR_count) + "/n";

    return results;
}`,
		description: "First Checked logs are empty. 3 variables created for state management. Iterate over each log. Find colon_pos for parse before content of colon. String level variable stores all parse content. The states are increament according to conditions. After loop. Results variable append steps using to_string method. Final results are returned.",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(1)",
		}
	}
]

export default algorithms_obj;
