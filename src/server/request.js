import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://www.apiopen.top'
})

export default instance;
