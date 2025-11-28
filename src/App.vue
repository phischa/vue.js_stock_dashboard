<template>
  <BaseCard>
    <div v-if="loading">Lädt alle Aktien...</div>
    <div v-else-if="error">Fehler: {{ error }}</div>
    <div v-else>
      <h2>Geladene Aktien:</h2>
      <p v-for="stock in STOCKS" :key="stock">
        {{ stock }}: {{ stocks[stock]?.length }} Einträge
      </p>
    </div>
  </BaseCard>
</template>

<script setup>
import { onMounted } from 'vue'
import BaseCard from './components/BaseCard.vue'
import { useAllStocks } from '@/composables/useAllStocks'

const { stocks, loading, error, fetchAllStocks, STOCKS } = useAllStocks()

onMounted(async () => {
  await fetchAllStocks()
  console.log('Alle Aktien geladen!', stocks.value)
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
