<template>
  <div :key="c.id" v-for="c in characters">
    <div class="card" style="width: 18rem">
      <div class="card-body">
        <img :src=c.image class="card-img-top" />
        <h5 class="card-title">{{c.name}}</h5>
        <p class="card-text">tipo: {{c.type}} edad: {{c.age}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Characters",
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    async loadCharacters() {
      const response = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );
      this.characters = response.data.results;
      console.log(this.characters)
    },
  },
  created() {
    this.loadCharacters();
  },
};
</script>
