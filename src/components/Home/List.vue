<template>
  <div class="flex flex-row justify-center mt-10 space-x-5">
    <template v-for="pokemon in pokemons">
      <Card 
        :pokemonImage="pokemon.image"
        :pokemonName="pokemon.name"
      />
    </template>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import Card from './Card.vue';
  import pokemonAPI from '../../api/Index';

  const pokemons = ref([]);

  const fetchPokemons = async () => {
    try {
      const response = await pokemonAPI.get('pokemon?limit=5');
      pokemons.value = response.data.results;

      pokemons.value.forEach(async (pokemon) => {
        const response = await pokemonAPI.get(`pokemon/${pokemon.name}`);
        pokemon.image = response.data.sprites.other['official-artwork'].front_default;
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  fetchPokemons();
</script>
