<template>
    <input type="text" v-model="search" placeholder="Search by name" @input="searchCharacters" >
  </template>
  
  <script>
  export default {
    name: 'Recherche',
    data() {
      return {
        search: '',
        suggestions: [],
        showSuggestions: false
      };
    },
    methods: {
      searchCharacters() {
        // Enregistrez la recherche dans le stockage local à chaque changement
        localStorage.setItem('searchQuery', this.search.toLowerCase());
        this.$emit('search', this.search.toLowerCase());
      },

    },
  };
  </script>
  
  