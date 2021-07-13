import React, { Component } from 'react';
import {avialableColors, capitalize} from './../filters/colors';
import {StatusFilters} from './../filters/filtersSlice';

import RemainingTodos from './RemainingTodos';
import StatusFilter from './../filters/StatusFilter';
import ColorFilters from './../filters/ColorFilters';

const Footer = () => {
	const colors = [];
	const status = StatusFilters.All;
	const todosRemaining = 1;

	const onColorChange = (color, changeType) => {
		console.log('Color change: ', {color, changeType});
	}

	const onStatusChange = status => console.log('Status Changed: ', status);

	return (
		<footer className="footer">
			<div className="actions">
				<h5>Actions</h5>
				<button className="button">Mark All Completed</button>
				<button className="button">Clear Completed</button>
			</div>

		<RemainingTodos count={todosRemaining}/>
		<StatusFilter value={status} onChange={onStatusChange} />
		<ColorFilters value={colors} onChange={onColorChange} />
		</footer>
	)
}

export default Footer;