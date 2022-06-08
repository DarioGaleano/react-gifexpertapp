import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import PropTypes from 'prop-types';

const GifExpertApp = ({ defaultCategories = [] }) => {
	const [categories, setCategories] = useState(defaultCategories);
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
