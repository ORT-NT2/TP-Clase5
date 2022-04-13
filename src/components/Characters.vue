<template>
  <div>
    <select id="status-filter" class="form-select" @change="filterByStatus">
        <option selected>Select state</option>
        <option value="1">Alive</option>
        <option value="2">Dead</option>
        <option value="3">Unknown</option>
    </select>
    <div class="row">
      <div :key="c.id" v-for="c in characters" class="col-3 mt-4">
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <img :src="c.image" class="card-img-top" />
            <h5 class="card-title">{{ c.name }}</h5>
            <p class="card-text">{{ characterData(c) }}</p>
          </div>
        </div>
      </div>
    </div>
    <div id="buttons">
      <button id="btnPrev" class="page-item" @click="prev()">Previous</button>
      <button id="btnNext" class="page-item" @click="next()">Next</button>
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
      urls: null,
    };
  },
  methods: {
    async loadCharacters(url = "https://rickandmortyapi.com/api/character") {
      const response = await axios.get(url);
      const res = response.data;
      this.characters = res.results;
      this.urls = { prev: res.info.prev, next: res.info.next };
      document.getElementById("btnPrev").disabled = !this.urls.prev;
      document.getElementById("btnNext").disabled = !this.urls.next;
      console.log(this.characters);
    },
    async prev() {
      this.loadCharacters(this.urls.prev);
    },
    async next() {
      this.loadCharacters(this.urls.next);
    },
    characterData(c) {
      return `Origen: ${c.origin.name}
      Estado: ${c.status}
      Especie: ${c.species}`;
    },
    filterByStatus(){
    const e = document.getElementById('status-filter')
    const status = e.options[e.selectedIndex].text
    this.loadCharacters(`https://rickandmortyapi.com/api/character?status=${status}`)
    },
  },
  created() {
    this.loadCharacters();
  },
};
</script>
