import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'b094127530f8439a8b6eb059640c4c55',
	},
});
