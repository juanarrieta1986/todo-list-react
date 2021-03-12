import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	const [todoList, setList] = useState(["No tasks. Add one!"]);
	let listCopy = [];

	const handleRemoveItem = e => {
		const liElement = e.target;
		const index = liElement.parentElement.getAttribute("data-index");

		listCopy = todoList;
		listCopy = todoList.splice(index, 1);
		setList(todoList.filter(item => item.name !== listCopy));
	};
	const handleMouserOver = e => {
		const liElement = e.target;
		liElement.getElementsByTagName("i")[0].nextSibling.data !==
		"No tasks. Add one!"
			? liElement
					.getElementsByTagName("i")[0]
					.setAttribute("style", "display: inline")
			: false;
		//liElement.setAttribute("style", "display: none");
		//console.log(liElement.getElementsByTagName("i")[0].nextSibling.setAttribute(data));
	};
	const handleMouserOut = e => {
		const liElement = e.target;
		liElement
			.getElementsByTagName("i")[0]
			.setAttribute("style", "display: none");
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
							style={
								todoList.length > 1 &&
								todoList[index] === "No tasks. Add one!"
									? { display: "none" }
									: { display: "inline" }
							}
							onMouseEnter={handleMouserOver}
							onMouseLeave={handleMouserOut}>
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
