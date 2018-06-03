import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_KEY = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=iodhfouge';

export function fetchPosts() {
    const request = axios.get(`${ROOT_KEY}/posts${API_KEY}`);

    return {
        type : FETCH_POSTS,
        payload : request
    };
}
