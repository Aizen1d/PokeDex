<template>
  <div class="border border-gray-300 hover:cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2">
    <img 
      class="w-72 h-25 object-cover" 
      alt="?"
      :src="pokemonImage"
    />
    <label class="text-1xl font-bold flex justify-center capitalize">
      {{ pokemonName }}
    </label>
  </div>
</template>

<script setup>
  import { defineProps, toRefs } from 'vue';

  const props = defineProps({
    pokemonImage: String,
    pokemonName: String
  });
  
  const { pokemonImage } = toRefs(props);
</script>