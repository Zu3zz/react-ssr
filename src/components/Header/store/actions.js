import {
  CHANGE_LOGIN
} from './constants'
const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const getHeaderInfo = () => {
  return (dispatch, getState, axiosInstance) => {
    return axiosInstance.get('/api/isLogin.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        dispatch(changeLogin(res.data.data.login))
      })
  }
}