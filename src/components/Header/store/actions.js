import { CHANGE_LOGIN } from './constants'

export const changeLogin = (value) => ({
  type: CHANGE_LOGIN,
  value
})

export const login = () => { // async
  return (dispatch, getState, axiosInstance) => { // axiosInstance： withExtraArgument 传递的参数
    return axiosInstance
      .get('/api/login.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        dispatch(changeLogin(true))
      })
  }
}

export const logout = () => { // async
  return (dispatch, getState, axiosInstance) => { // axiosInstance： withExtraArgument 传递的参数
    return axiosInstance
      .get('/api/logout.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        dispatch(changeLogin(false))
      })
  }
}

export const getHeaderInfo = () => { // async
  return (dispatch, getState, axiosInstance) => { // axiosInstance： withExtraArgument 传递的参数
    return axiosInstance
      .get('/api/isLogin.json?secret=PP87ANTIPIRATE')
      .then((res) => {
        dispatch(changeLogin(res.data.data.login))
      })
  }
}