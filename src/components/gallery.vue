<script setup>
import getAllData from "@/api.js";
import card from "@/components/cards.vue";
import topmenu from '@/components/topmenu.vue';
</script>

<template>
    <div>
        <topmenu @sort="sortCards" @select="selectCards" @randomEvent="randomCards" @search="searchCards"/>
  </div>
    <div>
    <div class="gallery">
        <card
        v-for="cards in characters"
        :key="cards.id"
        :name="cards.name"
        :status="cards.status"
        :url="cards.image"
        :species="cards.species"/>
    </div>
</div>
</template>

<style scoped>
.gallery{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  row-gap: 10px;
  column-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  left: 3%;
  top: 100px;
  margin-bottom: 100px;
}
</style>

<script>
export default {
name: 'gallery',
components: {
    card,
    topmenu,
}, 
data() {
    return {
        characters: [], // les personnages actuellement visibles
        originalCharacters:[], // tous les personnages
        actualOrder : 'asc',
        randomCharacters: [], // 9 personnages au hasard
        randomNum: [], // et leurs index
        isRandom: false, // lié au boutton 'random ?'
        searchQuery: '',  // lié à la barre de recherche
        status: 'all', // dans le menu deroulant, par defaut tous les personnages
        statusCharacters: [], // les personnages filtrés seulement par statut choisi (par defaut, all)
        filteredCharacters: [], // les personnages filtrés seulement par la recherche (par defaut tous les personnages)
    }
},
mounted() {
            this.fetchData();
        },
computed: {

},
methods: {
    async fetchData() {
        try {
            const data = await getAllData();
            this.characters = data.filter(card => card.image !== null && card.image !== '');
            this.originalCharacters = this.characters;
            this.filteredCharacters = this.characters;
            this.sortCards('asc');
        } catch (error) {
            console.error(error);
        }
    },  
    sortCards(order) { // ordre alphabetique ou inverse
      if (order === 'asc') {
        this.characters.sort((a, b) => a.name.localeCompare(b.name));
        this.actualOrder = 'asc';
      } else if (order === 'desc') {
        this.characters.sort((a, b) => b.name.localeCompare(a.name));
        this.actualOrder = 'dsc';
      }
    },
    selectCards(type) { // Selection en fonction du statut (alive, dead, unknown)
        // si on est en personnages aléatoires
        this.status = type;
        this.filterAll();
    },
    randomCards(value) { // affiche 9 personnages au hasard
        if (value === true) {
            this.isRandom = true;
            this.randomNum = []; 
            while (this.randomNum.length < 9) {
                let num = Math.floor(Math.random() * this.originalCharacters.length); 
                if (!this.randomNum.includes(num)) { 
                    this.randomNum.push(num);
                }
            }
            this.characters = this.randomNum.map(index => this.originalCharacters[index]);
            this.randomCharacters = this.characters;
            this.filterAll();
        } 
        else {
            this.isRandom = false;
            this.characters = [...this.originalCharacters];
            this.filterAll();

        }
        // Assurez-vous de trier les personnages si nécessaire après le changement
        this.sortCards(this.actualOrder);
    },

    searchCards(char) {
      // Mettre à jour la propriété de recherche et lancer la recherche
      this.searchQuery = char;
      this.filterAll();
      console.log('cc');
    },
    filterCharacters() {
      // Filtrer les personnages en fonction de la recherche actuelle
      this.sortCards(this.actualOrder);
      //this.selectCards(this.status);
      const query = this.searchQuery.toLowerCase();
      this.characters = this.statusCharacters.filter(character =>
        character.name.toLowerCase().includes(query));
      this.sortCards(this.actualOrder);
    },
    filterAll() {
        this.characters = [...this.originalCharacters];
        this.sortCards(this.actualOrder);
        const query = this.searchQuery;
        const type = this.status;
        
        if(this.isRandom===true){
        if(type!='all'){
            this.characters = this.randomCharacters.filter(character => character.status === type);
        }
        else{
            this.characters = [...this.randomCharacters];
        }
        }
        else{
            if(type!='all'){
                this.characters = this.characters.filter(character => character.status === type);
            }
            else{
                this.characters = [...this.originalCharacters];
                // this.characters = this.characters.filter(character =>
                // character.name.toLowerCase().includes(query));
            }
        }
        this.characters = this.characters.filter(character =>
        character.name.toLowerCase().includes(query));
        this.sortCards(this.actualOrder);
    }
    },
}
</script>
