import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');

describe('Tests on <GifGrid />', () => {
	// test('', () => {});
	const category = 'One Punch';

	test('should show the component correctly', () => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('should show the items when images are loaded by useFetchGifs', () => {
		const gifs = [
			{
				id: '123',
				url: 'http://localhost/xd/xd.jpg',
				title: 'Any',
			},
		];
		useFetchGifs.mockReturnValue({ data: gifs, loading: false });
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('p').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
