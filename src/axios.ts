import axios from 'axios'

const instance: any = axios.create({
  baseUrl: 'https://api.themoviedb.org/3',
})

export default instance
