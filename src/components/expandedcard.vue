
<template>
    <div class="expanded-overlay">
        <div id="expanded" class="expanded" @mouseover="isHovered = true" 
            @mouseout="isHovered = false"
            :class="{ 'hovered': isHovered }">
            <h2>{{ name }}</h2>
            <img class ="img" v-bind:src="url" alt="Character Image">
            <p class="quote">{{ status }}</p>
            <p> {{ species }}</p>
            <p> blabla </p>
        </div>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap')
</style>

<style scoped>
.expanded{
    z-index: 2;
    position: fixed;
    top: 56%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.3);
    background-color: #cbef8e;
    border-radius: 7.5px;
    border: none;
    border-radius: 5px; /* Add rounded corners */
    padding: 30px; /* Add some padding inside the card */
    box-shadow: 0 6px 5px rgba(255, 255, 255, 0.1); 
    transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    font-family: "Patrick Hand";
    color:var(--vt-c-indigo);
}

.expanded.hovered {
    /* background-color: #cbef8e;
    transform: scale(1.05);
    border-color: transparent; */
}

.quote{
    font-style: italic;
}
.img{
    width: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 3px 5px rgba(0,0,0,0.1);
}

h2{
    text-align: center;
    position: relative;
    top: -5%;
}
.expanded-overlay{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
name: 'expanded',
props: {
    key: Int8Array,
    name: String,
    status: String,
    species: String,
    url: String
},
data() {
    return {
        isHovered: false,
        data: [],
        isExpanded: false // Ajout d'une propriété pour suivre l'état d'expansion
    }
},

methods: {
async retrieveData() {
    this.data = await getAllData()
    console.log(this.data)
}
}
}
</script>