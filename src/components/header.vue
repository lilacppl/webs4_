<template>
    <header>
      <div class="logo-container">
      <img class="logo" src="@/assets/logo.png" alt="logo">
    </div>
    </header>
  </template>
  
  <script>
  export default {
    // Logique du composant Header
  };
  </script>
  
  <style scoped>
  /* Styles spécifiques au header */
  header {
    color: #e3e3e3;
    padding: 10px;
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    z-index: 1000;
    /* box-shadow: -5px 5px 4px #283618; */
    font-family: Arial, Helvetica, sans-serif;
    display: flex; /* Utilisation de flexbox pour centrer verticalement */
    align-items: center; /* Centrage vertical */
    margin-bottom: 50px;
  }

.logo{    
  width: 100%;
  z-index: 2;
  padding: 10px; 
}
.logo-container {
  width : 20%;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  align-items: center; /* Centrage vertical */
  justify-content: center; /* Centrage horizontal */
  /* background-color: #76b0e3;
  filter : blur(10);
  box-shadow: 0px 5px 50px #76b0e3 ; */
  
}
  </style>