import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Test on <GifGridItem />', () => {
	const title = 'A title';
	const url = 'http://localhost.algo/ssk.jpg';

	let wrapper = shallow(<GifGridItem title={title} url={url} />);
	beforeEach(() => {
		wrapper = shallow(<GifGridItem title={title} url={url} />);
	});

	test('should show the component correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('should have a paragraph with the title', () => {
		const p = wrapper.find('p');
		expect(p.text().trim()).toBe(title);
	});

	test('should have an image whit the url and alt props', () => {
		const img = wrapper.find('img');
		expect(img.prop('src')).toBe(url);
		expect(img.prop('alt')).toBe(title);
	});

	test('should have a div container with the class anitame__fadeIn', () => {
		const div = wrapper.find('div');
		const className = div.prop('className');
		expect(className.includes('animate__fadeIn')).toBe(true);
	});
});
