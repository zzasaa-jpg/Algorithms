let algorithms_obj = [
	{
		title: "Hello in C++",
		code: `#include <iostream>
using namespace std;
int main() {
	cout << "helllo";
	return 0;
}`,
		description: "This hello code in C++",	
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(n)",
		}
	},{
		title: "loop in JacaScript",
		code: `for (let i = 0; i < 10; i++){
	for (let j = 0; j < 10; j++)
		console.log(j, i);
	}
}`,
		description: "this is nested loop in javascript",
		complexity: {
			time_complexity: "o(n)",
			space_complexity: "o(n)",
		}
	},
]

export default algorithms_obj;
