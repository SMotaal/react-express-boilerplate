import axios_dont_work from "axios";

import packageJSON from '../package.json';

const baseURL = packageJSON.proxy ||
  `${window['location'].origin.replace(/:\d+.*?$/, '')}:8080`;

export const axios = axios_dont_work.create({ baseURL });

export const get = (...args) => Reflect.apply(axios.get, axios, args);

export default axios;
