<template>
  <div class="card text-black" style="width: 18rem">
    <img :src="character.image" class="card-img-top" alt="..." />
    <div class="card-body">
     <router-link class="nav-link active card-title" :to="url">{{ character.name }}</router-link>
      <p class="card-text">Estado: {{ character.status }}</p>
      <p class="card-text">Especie: {{ character.species }}</p>
      <p class="card-text">Origen: {{ character.origin.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Character",
  props: {
    character: Object,
  },
  data() { 
      return {
          url: `/details/${this.character.id}`
      }
  }
};
</script>