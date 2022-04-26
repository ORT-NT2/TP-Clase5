<template>
  <div class="card text-black justify-content-center" style="width: 18rem">
    <img :src="character.image" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ character.name }}</h5>
      <p class="card-text">Estado: {{ character.status }}</p>
      <p class="card-text">Especie: {{ character.species }}</p>
      <p class="card-text">Origen: {{ character.origin.name }}</p>
      <p class="card-text">Genero: {{ character.gender }}</p>
      <p class="card-text">Ultimo paradero: {{ character.location.name }}</p>
      <p class="card-text">Primera Aparición: {{ firstEpisodeTitle }}</p>
      <p class="card-text">Ultima Aparición: {{ lastEpisodeTitle }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Details",
  data() {
    return {
      id: this.$route.params.id,
      character: Object,
      firstEpisodeTitle: String,
      lastEpisodeTitle: String,
    };
  },
  created() {
    this.loadCharacter();
  },
  methods: {
    async loadCharacter() {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/character/${this.id}`
      );
      this.character = response.data;

      const firstEpisodeResponse = await axios.get(this.character.episode[0]);
      this.firstEpisodeTitle = firstEpisodeResponse.data.name;

      const lastEpisodeResponse = await axios.get(
        this.character.episode[this.character.episode.length - 1]
      );
      this.lastEpisodeTitle = lastEpisodeResponse.data.name;
    },
  },
};
</script>