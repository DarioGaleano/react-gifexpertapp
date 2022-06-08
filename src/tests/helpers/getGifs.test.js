import { getGifs } from '../../services/getGifs';

describe('test with getGifs Fetch', () => {
	test('should get 10 elements', async () => {
		const gifs = await getGifs('One Punch');
		expect(gifs.length).toBe(10);
	});

	test('should get an empty array', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
