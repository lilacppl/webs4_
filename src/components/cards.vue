
<template>
    <div class="card-grid">
        <div id="card" class="card" @mouseover="isHovered = true" 
            @mouseout="isHovered = false"
            :class="{ 'hovered': isHovered }">
            <h2>{{ name }}</h2>
            <img class ="img" v-bind:src="url" alt="Character Image">
            <p class="quote">{{ status }}</p>
            <p> {{ species }}</p>
        </div>
    </div>

</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap')
</style>

<style scoped>
.card{
    border-radius: 5px; /* Add rounded corners */
    padding: 40px; /* Add some padding inside the card */
    margin: 10px; /* Add margin around the card */
    width: 300px; /* Set a fixed width for each card */
    height: 400px; /* Set a fixed width for each card */
    box-shadow: 0 6px 5px rgba(255, 255, 255, 0.1); /* Add a box shadow for depth */
    border: 3px solid #7EBA57;
    transition: transform 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
    font-family: "Patrick Hand";
    color:var(--vt-c-indigo);
}

.card.hovered {
    background-color: #cbef8e;
    transform: scale(1.05);
    border-color: transparent;
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
</style>

<script>
export default {
name: 'card',
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
        data: []
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