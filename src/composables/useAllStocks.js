import { ref } from 'vue'
import { getAllStocksData, STOCKS } from '@/services/stockService'

export function useAllStocks() {
    const stocks = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function fetchAllStocks(sheet) {
        loading.value = true
        error.value = null
        try {
            stocks.value = await getAllStocksData()
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