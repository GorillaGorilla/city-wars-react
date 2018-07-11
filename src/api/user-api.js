import axios from 'axios';
import url from './apiURL';

export async function login(credentials) {
  return axios.post(`${url}/authenticate`, credentials);
}

export async function register(credentials) {
  return axios.post(`${url}/signup`, credentials);
}
