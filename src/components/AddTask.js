import React, { Component } from "react";

class AddTask extends Component {
	minDate = new Date().toISOString().slice(0, 10);
	state = {
		value: "",
		checked: false,
		date: this.minDate
	};

	handleChange = e => {
		const type = e.target.type;

		if (type === "text") {
			this.setState({
				value: e.target.value
			});
		} else if (type === "checkbox") {
			this.setState({
				checked: e.target.checked
			});
		}
	};

	handleSubmit = e => {
		e.preventDefault();
	};

	handleDate = e => {
		this.setState({
			date: e.target.value
		});
	};

	handleClick = () => {
		const { value, checked, date } = this.state;
		const add = this.props.add(value, checked, date);
		if (add) {
			this.setState({
				value: "",
				checked: false,
				date: this.minDate
			});
		}
	};

	render() {
		let maxDate = this.minDate.slice(0, 4) * 1 + 1;
		maxDate = maxDate + "-12-31";

		return (
			<div className="form">
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<input
					type="checkbox"
					checked={this.state.checked}
					onChange={this.handleChange}
				/>
				Priorytet <br />
				<span>
					Do kiedy zrobić{" "}
					<input
						type="date"
						value={this.state.date}
						min={this.minDate}
						max={maxDate}
						onChange={this.handleDate}
					/>
				</span>
				<br />
				<button onClick={this.handleClick}>Dodaj</button>
			</div>
		);
	}
}

export default AddTask;
