<template>
    <button @click="all">Go back to all</button>
  </template>
  
  <script>
  export default {
    name: 'all',
    data(){
        return{
            value: false,
        }
    },
    methods: {
      emitRandomEvent(value) {
        this.value = !this.value;
        this.$emit('randomEvent', this.value);
      }
    }
  }
  </script>
  