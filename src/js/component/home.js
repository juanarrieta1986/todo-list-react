import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	const [todoList, setList] = useState(["Add Task"]);
	const [todoInput, setInput] = useState("");
	let listElement;
	let listCopy = [];

	const handleRemoveItem = e => {
		const liElement = e.target;
		const index = liElement.parentElement.getAttribute("data-index");
		//const elementText = liElement.innerText;

		listCopy = todoList;
		listCopy = todoList.splice(index, 1);
		setList(todoList.filter(item => item.name !== listCopy));
		console.log(todoList.length);
		/*if (todoList.length > 1) {
			liElement
				.getElementsByTagName("i")[0]
				.setAttribute("style", "display: inline");
		}*/
	};
	const handleMouserOver = e => {
		const liElement = e.target; //.getElementsByTagName("i")[0];
		const elementClass = liElement.className;
		if (
			elementClass !== "fa fa-trash" &&
			liElement.innerText !== "Add Task"
		) {
			liElement
				.getElementsByTagName("i")[0]
				.setAttribute("style", "display: inline");
		}
		console.log(liElement);
	};
	const handleMouserOut = e => {
		const liElement = e.target; //.getElementsByTagName("i")[0];
		const elementClass = liElement.className;
		if (elementClass !== "fa fa-trash") {
			liElement
				.getElementsByTagName("i")[0]
				.setAttribute("style", "display: none");
		}
		console.log(liElement);
	};

	return (
		<div id="container">
			<h1 className="todo-header">To do List</h1>
			<input
				id="addToDo"
				type="text"
				placeholder="Add to do here"
				onKeyDown={e => {
					if (e.keyCode === 13 && e.target.value != "") {
						console.log(e.target.value);
						setList([...todoList, e.target.value]);
						e.target.value = "";
					}
				}}
			/>
			<ul className="list-group">
				{todoList.map((item, index) => {
					return (
						<li
							key={index}
							data-index={index}
							className="list-group-item"
							//style={{ display: "inline" }}
							style={
								todoList.length > 1 && index == 0
									? { display: "none" }
									: { display: "inline" }
							}
							onMouseOver={handleMouserOver}
							onMouseOut={handleMouserOut}>
							<i
								className="fa fa-trash"
								style={{ display: "none" }}
								onClick={handleRemoveItem}></i>
							{item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}
