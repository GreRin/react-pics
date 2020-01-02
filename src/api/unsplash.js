import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID d7b4c0a13b23f41f12a3483d00394ac258b3bb4519bca2d6bb9769333e33d7e6'
	}
});