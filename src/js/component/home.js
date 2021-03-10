import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	const [todoList, setList] = useState([]);
	const [todoInput, setInput] = useState("");
	let listElement;
	let listCopy = [];

	const handleRemoveItem = e => {
		const index = e.target.parentElement.getAttribute("data-index");

		listCopy = todoList;
		listCopy = todoList.splice(index, 1);
		setList(todoList.filter(item => item.name !== listCopy));
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
							className="list-group-item">
							<i
								className="fa fa-trash"
								onClick={handleRemoveItem}></i>
							{"   -   " + item}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

/*listElem.addEventListener("click", function (e) {
    console.log(e);
    let elemToDelete = e.target.parentElement.parentElement;
    elemToDelete.className = "deleteLI";
    var element = listElem.getElementsByClassName("deleteLI");
    listElem.removeChild(elemToDelete);
});*/
