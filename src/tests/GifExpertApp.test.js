import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import GifExpertApp from '../GifExpertApp';

describe('Tests on GifExpertApp component', () => {
	test('should show the component correctly', () => {
		const wrapper = shallow(<GifExpertApp />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show a list of categories', () => {
		const categories = ['One Piece', 'Robin One Piece'];
		const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);

		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('GifGrid').length).toBe(categories.length);
	});
});
