import { CHANGE_LIST } from './constants'

const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getTranslationList = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/translations.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        if(res.data.success) {
          const list = res.data.data
          dispatch(changeList(list))
        }else {
          const list = []
          dispatch(changeList(list))
        }
      })
  }
}
