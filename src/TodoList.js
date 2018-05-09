import React, {Component} from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: []
		}

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem(e) {
		if(this._inputElement.value !== "")
		{
			var newItem = {
				text: this._inputElement.value,
				key: Date.now()
			};

			this.setState((prevState) => {
				return{
					items: prevState.items.concat(newItem)
				};
			});
		}

		this._inputElement.value = "";

		e.preventDefault();
	}

	deleteItem(key) {
		var filteredItems = this.state.items.filter(function (item) {
		return (item.key !== key)
	});

		this.setState({
			items:filteredItems
		});
	}
 
	subItem(e) {

		var editB = document.getElementById('editbut');
		var addB = document.getElementById('addbut');
		var inpT = document.getElementById('inptask');

		addB.color="#e6f811";
		inpT.value="HELLO";

		e.preventDefault();

	}


	render() {
		return (

			<div className="todoListMain">
				<div className="header">
					<form onSubmit={this.addItem}>
						<input id="inptask" ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
						<button type="submit" id="addbut">Add</button>
					</form>
						<button type="submit" id="editbut">Edit</button>
						<button type="submit" id="delbut">Del</button>
				</div>
				<TodoItems entries={this.state.items} delete={this.deleteItem}/>
			</div>


			);
	}
}

export default TodoList;