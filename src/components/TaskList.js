import React from "react";
import Task from "./Task";

const TaskList = props => {
	const active = props.tasks.filter(task => task.active);
	const done = props.tasks.filter(task => task.active === false);
	done.sort((a, b) => b.finishDate - a.finishDate);
	active.sort((a, b) => {
		a = a.text.toLowerCase();
		b = b.text.toLowerCase();

		if (a < b) return -1;
		if (a > b) return 1;
		return 0;
	});

	const activeTasks = active.map(task => (
		<Task
			key={task.id}
			task={task}
			delete={props.delete}
			change={props.change}
		/>
	));
	const doneTasks = done.map(task => (
		<Task
			key={task.id}
			task={task}
			delete={props.delete}
			change={props.change}
		/>
	));
	return (
		<>
			<div className="active">
				<h1>Zadania do zrobienia</h1>
				{activeTasks.length > 0 ? activeTasks : <p>Brak zadań do wykonania</p>}
			</div>
			<hr />
			<div className="done">
				<h1>Zrobiłeś {done.length} zadań</h1>
				{done.length > 5 && <span>Ostatnie 5 zadań:</span>}
				{doneTasks.slice(0, 5)}
			</div>
		</>
	);
};

export default TaskList;
