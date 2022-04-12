<template>
  <div>
    <div class="row">
      <div :key="c.id" v-for="c in characters" class="col-3 mt-4">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <img :src="c.image" class="card-img-top" />
            <h5 class="card-title">{{ c.name }}</h5>
            <p class="card-text"> {{characterData(c)}}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="buttons">
      <button id="btnPrev" @click="prev()">Previous</button>
      <button id="btnNext" @click="next()">Next</button>
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
      urls: null
    };
  },
  methods: {
    async loadCharacters(url = "https://rickandmortyapi.com/api/character") {
      const response = await axios.get(url);
      const res= response.data;
      this.characters = res.results;
      this.urls = {prev: res.info.prev, next: res.info.next}
      document.getElementById("btnPrev").disabled= !this.urls.prev
      document.getElementById("btnNext").disabled= !this.urls.next
      console.log(this.characters);
    },
    async prev(){
      this.loadCharacters(urls.prev)
    },
    async next(){
      this.loadCharacters(urls.next)
    },
    characterData(c) {
      return `tipo: ${c.type} edad: ${c.age}`
    },
  },
  created() {
    this.loadCharacters();
  },
};
</script>
