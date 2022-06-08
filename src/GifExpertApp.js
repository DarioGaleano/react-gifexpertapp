import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = (props) => {
	const [categories, setCategories] = useState(['One Punch']);

	// const handleAdd = () => {
	// 	setCategories([...categories, 'HunterXHunter']);
	// };

	return (
		<>
			<h2>GifExpertApp</h2>
			<AddCategory setCategory={setCategories} />
			<hr />
			<ol>
				{categories.map((category) => (
					<GifGrid category={category} key={category} />
				))}
			</ol>
		</>
	);
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
