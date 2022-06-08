export const getGifs = async (category) => {
	const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=LuIm8cwIBz8R6uoD2nn9oc31poDws68e`;
	const request = await fetch(url);

	const { data } = await request.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url,
	}));
	return gifs;
};
