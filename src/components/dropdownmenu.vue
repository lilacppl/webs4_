<template>
    <select v-model="selectedOption" @change="sortCards">
      <option value="asc">Trier par nom (A-Z)</option>
      <option value="desc">Trier par nom (Z-A)</option>
    </select>
  </template>
  
  <script>
  export default {
    name: 'dropdownmenu',
    data() {
      return {
        selectedOption: 'asc' // Par défaut, trie par ordre alphabétique
      }
    },
    methods: {
      sortCards() {
        if (this.selectedOption === 'asc') {
          this.$emit('sort', 'asc'); // Émet un événement pour indiquer le tri ascendant
        } else if (this.selectedOption === 'desc') {
          this.$emit('sort', 'desc'); // Émet un événement pour indiquer le tri descendant
        }
      }
    }
  }
  </script> 