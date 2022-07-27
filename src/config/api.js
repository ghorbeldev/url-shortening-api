import axios from 'axios';

const base = 'https://api.shrtco.de/v2/';

export const shortLink = url => {
	return axios.get(base + `shorten?url=${url}`);
};
