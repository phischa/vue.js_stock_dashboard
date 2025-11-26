import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/hm3fanqlxlavs',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default apiClient