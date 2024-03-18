<template>
    <input type="text" v-model="search" placeholder="Search by name" @input="searchCharacters">
  </template>
  
  <script>
  export default {
    name: 'Recherche',
    data() {
      return {
        search: ''
      };
    },
    methods: {
      searchCharacters() {
        this.$emit('search', this.search.toLowerCase());
      }
    },
  };
  </script>
  
  