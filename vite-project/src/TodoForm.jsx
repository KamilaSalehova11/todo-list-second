//import { useState } from "react";
import { useRef } from "react";

function TodoForm({ onAddTodo }) {
	
	const inputRef = useRef(null);

	function handleSubmit(event) {
		event.preventDefault();

		const todoTitle = event.target.todoTitle.value.trim();
		if (todoTitle) {
			onAddTodo(todoTitle);
			event.target.reset();
			inputRef.current.focus();
		}
	}
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todoTitle">Todo</label>
			<input
				type="text"
				id="todoTitle"
				ref={inputRef}
				name="todoTitle"
				placeholder={"Todo text"}
				required
			/>
			<button type="submit">Add Todo</button>
		</form>
	);
}
export default TodoForm;
