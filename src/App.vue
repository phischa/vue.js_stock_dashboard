<template>
  <BaseCard>
    <h1>Überschrift</h1>
    <p>Dies ist ein Beispieltext, der in die Card-Komponente eingefügt wird.</p>
  </BaseCard>
</template>

<script>
import BaseCard from './components/BaseCard.vue';

export default {
  name: 'App',
  components: {
    BaseCard
  }
}
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
