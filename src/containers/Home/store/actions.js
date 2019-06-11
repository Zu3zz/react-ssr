import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})


export const getHomeList = (server) => {
  let url = ''
  if(server) {
    url = 'https://www.apiopen.top/journalismApi'
  } else {
    url = '/api'
  }
  // https://www.apiopen.top/journalismApi
  return (dispatch) => {
    return axios.get(url)
      .then((res) => {
        const list = res.data.data.toutiao
        dispatch(changeList(list))
      })
  }
}
