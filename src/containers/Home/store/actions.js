import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})


export const getHomeList = () => {
  // server = 'https://www.apiopen.top'
  // client = '/'
  // https://www.apiopen.top/journalismApi
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/news.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        const list = res.data.data
        dispatch(changeList(list))
      })
  }
}
