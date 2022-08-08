import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios({
  url: '',
  timeout: 50000
})

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error) => {
    console.log(error)
  }
)

axios.interceptors.response.use(
  (config: AxiosResponse) => {
    return config
  },
  (error) => {
    console.log(error)
  }
)

export default axios
