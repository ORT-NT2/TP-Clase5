<template>
  <div class="card text-black justify-content-center" style="width: 18rem">
    <img :src="character.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ character.name }}</h5>
      <p class="card-text">Estado: {{ character.status }}</p>
      <p class="card-text">Especie: {{ character.species }}</p>
      <p class="card-text">Origen: {{ character.origin.name }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Details",
  data() {
    return {
      character: {},
      id: this.$route.params.id,
    };
  },
  created() {
    this.loadCharacter()
  },
  methods: {
    async loadCharacter() {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${this.id}`)
      this.character = response.data
      }
  },
};
</script>