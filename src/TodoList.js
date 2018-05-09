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
		//this.subItem = this.subItem.bind(this);
	}

	addItem(e) {


		var radioB1 = document.getElementById('rad1');
		var radioB2 = document.getElementById('rad2');
		var radioB3 = document.getElementById('rad3');


		if(radioB1.checked==true){

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
		}

			e.preventDefault();
		
	}

	deleteItem(key) {


		var radioB1 = document.getElementById('rad1');
		var radioB2 = document.getElementById('rad2');
		var radioB3 = document.getElementById('rad3');


		if(radioB2.checked==true){


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

			// var filteredItems = this.state.items.filter(function (item) {
			// 	return (item.key !== key)
			// 	});

			// 	this.setState({
			// 		items:filteredItems
			// 	});
					
			// this._inputElement.value = "";





		}
		else
		{

			var filteredItems = this.state.items.filter(function (item) {
				return (item.key !== key)
				});

				this.setState({
					items:filteredItems
				});

				

		}
	}
 
	// subItem(e) {

	// 	var radioB1 = document.getElementById('rad1');
	// 	var radioB2 = document.getElementById('rad2');
	// 	var radioB3 = document.getElementById('rad3');


	// 	if(radioB1.checked==true){

	// 		if(this._inputElement.value !== "")
	// 		{

	// 			var newItem = {
	// 				text: this._inputElement.value,
	// 				key: Date.now()
	// 			};

	// 			this.setState((prevState) => {
	// 				return{
	// 					items: prevState.items.concat(newItem)
	// 				};
	// 			});
		

	// 		}

	// 		this._inputElement.value = "";

	// 		}


	// 		e.preventDefault();

	

	// }

	render() {
		return (

			<div className="todoListMain">
				<div className="header">
					Add <input type="radio" id="rad1" name="sub" value="add" checked="checked" /><br/>
						Edit<input type="radio" id="rad2" name="sub" value="edit"/><br/>
						Del<input type="radio" id="rad3" name="sub" value="delete"/>
					<form onSubmit={this.addItem}>
						<input id="inptask" ref={(a) => this._inputElement = a} placeholder="Enter Task"></input>
						<button type="submit" id="addbut">Submit</button>
					</form>
						
						
				</div>
				<TodoItems entries={this.state.items} delete={this.deleteItem}/>
			</div>


			);
	}
}

export default TodoList;