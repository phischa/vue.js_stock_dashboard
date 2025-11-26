import { ref } from 'vue'
import apiClient from '@/services/stockService'

export function useStockData() {
    const data = ref([])
    const loading = ref(false)
    const error = ref(null)

    async function fetchStock(sheet) {
        loading.value = true
        error.value = null
        try {
            const response = await apiClient.get('', { params: { sheet } })
            data.value = response.data  // Axios parsed JSON automatisch
        } catch (e) {
            error.value = e.response?.data?.message || e.message
        } finally {
            loading.value = false
        }
    }

    return { data, loading, error, fetchStock }
}