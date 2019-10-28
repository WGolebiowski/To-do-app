import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";
import "./App.css";

class App extends Component {
	state = {
		tasks: []
	};

	counter = 0;

	deleteTask = id => {
		let tasks = [...this.state.tasks];
		tasks = tasks.filter(task => id !== task.id);
		this.setState({
			tasks
		});
	};

	changeTaskStatus = id => {
		let tasks = [...this.state.tasks];
		tasks.forEach(task => {
			if (id === task.id) {
				task.active = false;
				task.finishDate = new Date().getTime();
			}
		});
		this.setState({
			tasks
		});
	};

	addTask = (text, important, date) => {
		const task = {
			id: this.counter,
			text,
			date,
			important,
			active: true,
			finishDate: null
		};
		this.counter++;
		this.setState(prevState => ({
			tasks: [...prevState.tasks, task]
		}));

		return true;
	};

	render() {
		return (
			<div>
				<AddTask add={this.addTask} />
				<hr />
				<TaskList
					tasks={this.state.tasks}
					delete={this.deleteTask}
					change={this.changeTaskStatus}
				/>
			</div>
		);
	}
}

export default App;
