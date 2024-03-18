<script setup>
import dropdownmenu from '@/components/dropdownmenu.vue';
import statusfilter from '@/components/statusfilter.vue';
import aleat from '@/components/aleat.vue';
import recherche from '@/components/searchbar.vue';
</script>

<template>
    <div>
        <recherche @search="searchCards" class="but" @mouseover="isHovered4=true"
            @mouseout="isHovered4 =false"
            :class="{'hovered':isHovered4}"/>
        <dropdownmenu @sort="sortCards" class="but" @mouseover="isHovered1 = true" 
            @mouseout="isHovered1 = false"
            :class="{ 'hovered': isHovered1 }" />
        <statusfilter @select="selectCards"  class="but" @mouseover="isHovered2 = true" 
            @mouseout="isHovered2 = false"
            :class="{ 'hovered': isHovered2 }" />
        <aleat @randomEvent="randomCards"  class="but" @mouseover="isHovered3 = true" 
            @mouseout="isHovered3 = false"
            :class="{ 'hovered': isHovered3 }" />
    </div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap')
</style>
<style scoped>
div{
    margin-top: 120px;
    margin-left: auto; 
    margin-right: auto;
    display: flex;
    justify-content: center;
}

.but{
    
    border: 3px solid #cbef8e;
    background-color: #cbef8e;
    border-radius: 5px;
    font-size: large; 
    font-family: "Patrick Hand";
    font-weight: bold;
    transition: transform 0.3s ease;
    color:var(--vt-c-indigo);
    margin-left: 2.5%;
    margin-right: 2.5%;
}

.but.hovered {
    transform: scale(1.05);
}
</style>

<script>
export default {
name: 'topmenu',
emits: ["sort","select","randomEvent","search"],
components: {
    dropdownmenu,
    statusfilter,
    aleat,
    recherche,
}, 
data() {
    return {
        isHovered1: false,
        isHovered2: false,
        isHovered3: false,
        isHovered4: false,
    }
},
methods: {
    sortCards(order) {
      this.$emit('sort', order);
    },
    selectCards(type) {
      this.$emit('select', type);
    },
    randomCards(value) {
      this.$emit('randomEvent', value);
    },
    searchCards(char) {
      this.$emit('search', char);
    }
  }
}
</script>