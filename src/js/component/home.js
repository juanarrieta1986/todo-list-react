import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


export function Home() {
    
    const [todoList, setList] = useState([]);
    
    /*function addTask () {
        //setList[[...todoList,]]
        let vartest;
    }*/
	return (
		<div id="container">
			<h1 className="todo-header">To do List</h1>
			<input
				id="addToDo"
				type="text"
				placeholder="Add to do here"
				onKeyDown={e => {
					if (e.keyCode === 13 && e.target.value != "") {
						//checks whether the pressed key is "Enter"
                        setList[[...todoList,e.target.value]]
						/*var list = document.querySelector("ul");
						var newLiElem = document.createElement("LI");
						newLiElem.innerHTML =
							"<span><i className='fa fa-trash'></i></span> " +
							e.target.value;
						document.querySelector("UL").appendChild(newLiElem);*/
					}
				}}
			/>
			<ul>
				<li>
					<span>
						<i className="fa fa-trash"></i>
					</span>{" "}
					Eat
				</li>
				<li>
					<span>
						<i className="fa fa-trash"></i>
					</span>{" "}
					Drink
				</li>
				<li>
					<span>
						<i className="fa fa-trash"></i>
					</span>{" "}
					Sleep
				</li>
			</ul>
		</div>
	);
}
