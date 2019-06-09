import axios from 'axios'
import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})


export const getHomeList = () => {
  return (dispatch) => {
    axios.get('https://www.apiopen.top/journalismApi')
      .then((res) => {
        const list = res.data.data.toutiao
        dispatch(changeList(list))
      })
  }
}
