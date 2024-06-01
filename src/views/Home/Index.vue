<template>
  <div class="flex flex-col">
    <label class="flex justify-center mt-5 text-3xl font-bold">
      PokeDex
    </label>
    <div class="flex justify-center mt-5">
      <img 
        class="w-72 h-25 object-cover" 
        :src="pokemonImage" 
        alt="?"
      />
    </div>

    <div class="flex flex-row justify-center">
      <input 
        class="w-[10%] mt-7 p-2 border border-gray-300 rounded" 
        type="text" 
        placeholder="Search Pokemon.."
        v-model="inputPokemon"
        @keyup.enter="searchPokemon"
      />

      <button 
        class="w-[5%] mt-7 ml-2 p-2 bg-blue-500 text-white rounded"
        @click="searchPokemon"
      >
        Search
      </button>
    </div>
  </div>

  <List />
</template>

<script setup>
  import List from '../../components/Home/List.vue'

  import { ref, watch } from 'vue'
  import pokemonAPI from '../../api/Index'

  const inputPokemon = ref('')
  const pokemonImage = ref('/images/placeholder.png')

  const searchPokemon = async () => {
    try {
      const response = await pokemonAPI.get(`pokemon/${inputPokemon.value.toLowerCase()}`)
      pokemonImage.value = response.data.sprites.other['official-artwork'].front_default
    }
    catch (error) {
      pokemonImage.value = '/images/placeholder.png'
      console.error(error)
    }
  }
</script>