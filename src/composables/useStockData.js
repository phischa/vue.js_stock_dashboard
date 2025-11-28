import { ref } from 'vue'
import { getAllStocksData, STOCKS } from '@/services/stockService'

export function useStockData() {
    const stocks = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function fetchAllStocks(sheet) {
        loading.value = true
        error.value = null
        try {
            data.value = await getAllStocksData(sheet)
        } catch (e) {
            error.value = e.response?.data?.message || e.message
        } finally {
            loading.value = false
        }
    }

    function clearData() {
        data.value = []
        error.value = null
    }

    return { stocks, loading, error, fetchAllStocks, STOCKS }
}