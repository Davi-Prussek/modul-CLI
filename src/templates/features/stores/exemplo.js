import { defineStore } from "pinia";
import { ref } from "vue";

export const exemploStore = defineStore('exemplo', () => {
  const exemplo = ref('Variável de exemplo');

  return {
    exemplo
  }
})