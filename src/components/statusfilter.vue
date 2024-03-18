<template>
      <select v-model="selectedOption" @change="selectCards">
        <option value="all">All</option>
        <option value="Dead">Dead</option>
        <option value="Alive">Alive</option>
        <option value="unknown">Unknown</option>
    </select>
</template>

<script>
  export default {
    name: 'statusfilter',
    data() {
      return {
        selectedOption: 'all' // Par défaut, trie par ordre alphabétique
      }
    },
    methods: {
      selectCards() {
        this.$emit('select', this.selectedOption); 
    }
  }
}
  </script> 