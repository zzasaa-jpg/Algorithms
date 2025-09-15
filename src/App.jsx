import { useState } from 'react'
import './App.css'
import algorithms_obj from "./algorithms.js"
function App() {
  return (
    <>
	  {algorithms_obj.map((algorithm, index)=>(
		  <div id="algorithm_container" key={index}>
		  	<div id="algorithm_top_div">
			  <h1 id="title">{algorithm.title}</h1>
		  	<button id="edit_btn">Edit</button>
		  	</div>
			  <p id="description">{algorithm.description}</p>
		  	  <div id="code_div">
			  	<code id="code">{algorithm.code}</code>
		  	  </div>
			  <h2 id="time_complexity">Time Complexity {algorithm.complexity.time_complexity}</h2>
			  <h2 id="space_complexity">Space Complexity {algorithm.complexity.space_complexity}</h2>
		  </div>
	  ))}
    </>
  )
}

export default App
