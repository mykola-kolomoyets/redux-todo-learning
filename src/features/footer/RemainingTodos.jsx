import React, { Component } from 'react';

const RemainingTodos = ({count}) => {
	const suffix = count === 1 ? '' : 's';

	return (
		<div className="todo-count">
			<h5>remaining Todos</h5>
			<strong>{count}</strong> item{suffix} left
		</div>
	)
}

export default RemainingTodos;