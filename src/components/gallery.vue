<script setup>
import getAllData from "@/api.js";
import card from "@/components/cards.vue";
import topmenu from '@/components/topmenu.vue';
import expanded from "@/components/expandedcard.vue";
</script>

<template>
    <div>
        <topmenu @sort="sortCards" @select="selectCards" @randomEvent="randomCards" @search="searchCards"/>
    </div>
    <div class="gallery">
        <card
        v-for="cards in characters"
        :key="cards.id"
        :name="cards.name"
        :status="cards.status"
        :url="cards.image"
        :species="cards.species"
        @click="toggleCardExpansion(cards.id)"
        :class="{ expanded: cards.id === expandedCardId }"/>
    </div>
      <expanded
        v-if="selectedCard"
        :key="selectedCard.key"
        :name="selectedCard.name"
        :status="selectedCard.status"
        :url="selectedCard.url"
        :species="selectedCard.species"
        @click="toggleCardDecrease(selectedCard.id)"
        :class="{ expanded: selectedCard.id === expandedCardId }"
        />
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
.card {
  transition: transform 0.3s ease;
}

.expanded {

}

</style>

<script>
export default {
name: 'gallery',
components: {
    card,
    topmenu,
    expanded,
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
        filteredCharacters: [], // les personnages filtrés par statut et recherche
        expandedCardId: null,
        selectedCard: null,
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
        this.sortCards(this.actualOrder);
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
      //console.log('cc');
      this.sortCards(this.actualOrder);
    },

    filterAll() {
    const query = this.searchQuery;
    const type = this.status;

    // Filtrer les personnages en fonction du statut
    let filteredCharacters = this.originalCharacters;
    if (this.isRandom) {
        filteredCharacters = this.randomCharacters.filter(character => character.status === type || type === 'all');
    } else {
        filteredCharacters = this.originalCharacters.filter(character => character.status === type || type === 'all');
    }

    // Filtrer les personnages en fonction de la recherche
    if (query) {
        filteredCharacters = filteredCharacters.filter(character =>
            character.name.toLowerCase().includes(query)
        );
    }

    // Appliquer l'ordre
    if (this.actualOrder === 'asc') {
        this.characters = filteredCharacters.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else {
        this.characters = filteredCharacters.slice().sort((a, b) => b.name.localeCompare(a.name));
    }
    },
    toggleCardExpansion(cardId) {
        console.log('clic');
      // if (this.expandedCardId === cardId) {
      //   this.expandedCardId = null;
      //   this.selectedCard = null;}
        this.expandedCardId = cardId;
        this.selectedCard = this.characters.find(card => card.id === cardId);
        console.log(this.selectedCard.url);
      
    },
    toggleCardDecrease(id){
      console.log('clic');
      this.expandedCardId = null;
      this.selectedCard = null;
    }
    },
}
</script>