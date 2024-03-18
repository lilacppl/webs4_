
<template>
  <div></div>
  <Header />
  <gallery  />
  <Footer />
</template>


<script>
  import gallery from '@/components/gallery.vue'
  import Header from "@/components/header.vue";
  import Footer from "@/components/footer.vue";
  export default{
  components: {
  gallery,
  Header,
  Footer,
  },
  data() {
    return {
    }
  },
  methods: {
    sortCards(order) {
      //this.$refs.gallery.sortCharacters(order); // Appel de la méthode sortCharacters dans le composant gallery.vue
      // this.$refs.galleryRef.sortCharacters(order);
    }
  }
};
</script>
<style>
</style>