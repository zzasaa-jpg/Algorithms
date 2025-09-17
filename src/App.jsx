import { useState } from 'react'
import './App.css'
import algorithms_obj from "./algorithms.js"
import copy_ from "./copy.js"
import search_ from "./search.js"
function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5;

	function handle_search(e) {
		let indexes = search_(e.target.value.toLowerCase());
		if (indexes == -1 || e.target.value == "") {
			setSearchResults([]);
			setCurrentPage(1)
		}
		else {
			setSearchResults(indexes);
			let firstIndex = indexes[0];
			let pageNumber = Math.floor(firstIndex / itemsPerPage) + 1;
			setCurrentPage(pageNumber);
		}
	}


	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;

	const paginatedAlgorithms = algorithms_obj.slice(startIndex, endIndex);
	const totalPages = Math.ceil(algorithms_obj.length / itemsPerPage);
	return (
		<>
			<input type="text"
				className="search_input"
				name="search_input"
				onChange={(e) => handle_search(e)}
				placeholder="Search Algorithms"
			/>
			{paginatedAlgorithms.length === 0 ? (
				<h1 id="no_algorithms">Algorithm does not here...</h1>
			) : (paginatedAlgorithms.map((algorithm, index) => (
				<div className="algorithm_container" key={index}>
					<div className="algorithm_top_div">
						<h1 className={searchResults.includes(startIndex + index) ? "title find" : "title"}>{algorithm.title}</h1>
						<button className="copy_btn" onClick={() => { copy_(algorithm.code, document.getElementsByClassName("copy_btn")[index]) }}>Copy</button>
					</div>
					<p className="description">{algorithm.description}</p>
					<div className="code_div">
						<code className="code">{algorithm.code}</code>
					</div>
					<h2 className="time_complexity">Time Complexity {algorithm.complexity.time_complexity}</h2>
					<h2 className="space_complexity">Space Complexity {algorithm.complexity.space_complexity}</h2>
				</div>
			)
			))}

			{paginatedAlgorithms.length > 0 && (
				<div className="paginated_indicator">
					<button id="Previous_btn" disabled={currentPage === 1} onClick={() => setCurrentPage((prev) => prev - 1)}>Prev</button>
					<span>page {currentPage} of {totalPages}</span>
					<button id="Next_btn" disabled={currentPage === totalPages} onClick={() => setCurrentPage((next) => next + 1)}>Next</button>
				</div>
			)}
		</>
	)
}

export default App
