import axios from 'axios'

/* const order = [
    'Mar 21',
    'Jun 21',
    'Sep 21',
    'Dec 21',
    'Mar 22',
    'Jun 22',
    'Sep 22',
    'Dec 22',
    'Mar 23',
    '""',
    '3 Aug 23',
    '2 Nov 23',
    '1 Feb 24',
    '2 Mai 24'
];
 */

const STOCKS = ['AAPL', 'AMZN', 'GOOG', 'META', 'MSFT', 'NVDA', 'TSLA']

const apiClient = axios.create({
    baseURL: 'https://sheetdb.io/api/v1/hm3fanqlxlavs',
    timeout: 20000,
    headers: {
        'Content-Type': 'application/json'
    }
})

export async function getStockData(sheet) {
    const response = await apiClient.get('', { params: { sheet: `$${sheet}` } })
    return response.data
}

export async function getAllStocksData() {
    const requests = STOCKS.map(stock => getStockData(stock))
    const results = await Promise.all(requests)

    // Returns an object: { AAPL: [...], AMZN: [...], ... }
    return STOCKS.reduce((acc, stock, index) => {
        acc[stock] = results[index]
        return acc
    }, {})
}

/* export async function getOrderedStockData(sheet) {
    const data = await getStockData(sheet)
    data.sort((a, b) => {
        return order.indexOf(a.Date) - order.indexOf(b.Date)
    })
} */

export { STOCKS }
export default apiClient