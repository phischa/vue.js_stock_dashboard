import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/hm3fanqlxlavs',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export async function getStockData(sheet) {
    const response = await apiClient.get('', { params: { sheet } })
    return response.data
}

export async function getAllStocks() {
    const response = await apiClient.get('')
    return response.data
}

export default apiClient