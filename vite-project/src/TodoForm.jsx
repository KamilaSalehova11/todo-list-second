//import { useState } from "react";
import { useRef, useState } from "react";

function TodoForm({ onAddTodo }) {
	const [workingTodoTitle, setWorkingTodoTitle] = useState("");
	const todoTitleInput = useRef(null);

	function handleSubmit(event) {
		event.preventDefault();
		onAddTodo(workingTodoTitle);
		setWorkingTodoTitle("");
		todoTitleInput.current.focus();
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="todoTitle">Todo</label>
			<input
				type="text"
				id="todoTitle"
				value={workingTodoTitle}
				onChange={(event) => setWorkingTodoTitle(event.target.value)}
				ref={todoTitleInput}
			/>
			<button
				type="submit"
				disabled={workingTodoTitle === ""}
			>
				Add Todo
			</button>
		</form>
	);
}
export default TodoForm;
