import axios from 'axios';

export const context = () => {
  const API_URL = 'http://localhost:3000';
  return {
    getUser: (userId) => {
      const options = {
        url: `${API_URL}/users/${userId}`
      };
      return axios(options);
    },
    getUsers: (input) => {
      const options = {
        url: `${API_URL}/users?${input}`
      };
      return axios(options);
    },
    getPost: (postId) => {
      const options = {
        url: `${API_URL}/posts/${postId}`
      };
      return axios(options);
    },
    getPosts: (input) => {
      console.log(input);
      const options = {
        url: `${API_URL}/posts?${input}`
      };
      return axios(options);
    }
  }
}
