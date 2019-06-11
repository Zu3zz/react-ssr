import axios from 'axios'
import { CHANGE_LIST } from './constants'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})


export const getHomeList = (server) => {
  // server = 'https://www.apiopen.top'
  // client = '/'
  const request = server ? serverAxios : clientAxios
  // https://www.apiopen.top/journalismApi
  return (dispatch) => {
    return request.get('/journalismApi')
      .then((res) => {
        const list = res.data.data.toutiao
        dispatch(changeList(list))
      })
  }
}
