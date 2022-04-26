<template>
  <div class="bg-dark text-white">
    <div class="container">
      <div class="col-12">
        <form v-on:submit.prevent="filter">
          <div class="mb-3">
            <div class="mb-3">
              <label for="name" class="form-label">Nombre: </label>
              <input
                type="text"
                class="form-control"
                v-model="form.name"
                :disabled="form.id"
              />
            </div>
            <label for="status" class="form-label">Estado: </label>

            <select
              class="form-select"
              aria-label="Estado"
              v-model="form.status"
              :disabled="form.id"
            >
              <option value="Alive">Alive</option>
              <option value="Dead">Dead</option>
              <option value="Unknown">Unknown</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="species" class="form-label">Especie: </label>
            <select
              class="form-select"
              aria-label="Especie"
              v-model="form.species"
              :disabled="form.id"
            >
              <option value="Human">Human</option>
              <option value="Alien">Alien</option>
              <option value="Mythological Creature">
                Mythological Creature
              </option>
              <option value="Robot">Robot</option>
            </select>
          </div>

          <div class="d-grid gap-2">
            <input
              class="btn btn-info text-white"
              type="submit"
              value="Buscar"
            />
          </div>
        </form>
        <div class="row">
          <div :key="character.id" v-for="character in characters" class="col-3 mt-4">
            <Character :character="character" />
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
import Character from "./Character.vue";
export default {
  name: "Characters",
  data() {
    return {
      characters: [],
      urls: null,
      form: {
        name: null,
        status: null,
        species: null,
      },
    };
  },
  components: {
    Character
  },
  methods: {
    async loadCharacters(url = "https://rickandmortyapi.com/api/character") {
      const response = await axios.get(url);
      const res = response.data;
      this.characters = res.results;
      this.urls = { prev: res.info.prev, next: res.info.next };
      this.toggleButtons();
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
    filter() {
      let url = "https://rickandmortyapi.com/api/character?";
      url += this.form.name ? "name=" + this.form.name + "&" : "";
      url += this.form.status ? "status=" + this.form.status + "&": "";
      url += this.form.species ? "species=" + this.form.species + "&": "";
      this.loadCharacters(url);
    },
    toggleButtons() {
      document.getElementById("btnPrev").disabled = !this.urls.prev;
      document.getElementById("btnNext").disabled = !this.urls.next;
    },
  },
  created() {
    this.loadCharacters();
  },
};
</script>
