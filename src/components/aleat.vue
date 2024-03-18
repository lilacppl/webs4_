<template>
    <button class="random-button" :style="{ width: buttonWidth }" @click="emitRandomEvent">{{ value ? 'Go back to all' : 'Random ?' }}</button>
  </template>
  
  <script>
  export default {
    name: 'aleat',
    data(){
        return{
            value: false,
            buttonWidth: '110px',
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
  <style>
  .aleat{
    width: 40px;
  }

  </style>