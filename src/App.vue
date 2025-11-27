<template>
  <BaseCard>
    <div v-if="loading">Lädt...</div>
    <div v-else-if="error">Fehler: {{ error }}</div>
    <div v-else>
      <h1>Stock Daten</h1>
      <pre>{{ data }}</pre>
    </div>
  </BaseCard>
</template>

<script setup>
import { onMounted } from 'vue'
import BaseCard from './components/BaseCard.vue'
import { useStockData } from '@/composables/useStockData'

const { data, loading, error, fetchStock } = useStockData()

onMounted(async () => {
  await fetchStock('AAPL')
  console.log('Komponente ist geladen!', data.value)
})
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  padding: 200px;
  background: radial-gradient(71.11% 100% at 50% 0%, #020204 14.6%, #011F35 100%);
}
</style>
