import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { AddCategory } from '../../components/AddCategory';
describe('Tests on <AddCategory />', () => {
	const setCategory = jest.fn();
	let wrapper = shallow(<AddCategory setCategory={setCategory} />);

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategory={setCategory} />);
	});

	test('should show correctyle ', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should change the textbox', () => {
		const input = wrapper.find('input');
		const value = 'Hola Mundo';
		input.simulate('change', { target: { value } });
	});

	test('dont should to post the info with submit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategory).not.toHaveBeenCalled();
	});

	test('should call setCategory and clean the textbox', () => {
		const value = 'Hello World';
		wrapper.find('input').simulate('change', { target: { value } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });

		expect(setCategory).toHaveBeenCalled();
		expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
