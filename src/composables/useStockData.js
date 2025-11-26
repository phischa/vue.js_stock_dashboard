import { ref } from 'vue'
import { getStockData } from '@/services/stockService'

export function useStockData() {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function fetchStock(sheet) {
        loading.value = true
        error.value = null
        try {
            data.value = await getStockData(sheet)
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

    return { data, loading, error, fetchStock, clearData }
}