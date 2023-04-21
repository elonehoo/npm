<script setup lang="ts">
const {data}:any = useFetch('/api/query?query=vite-inspector')
</script>

<template>
  <div px4>
    <div flex px-2 op50 mt6 text-lg items-center>
      <div >
        <img w-50px h-50px rounded-full :src="url(data.repository.url)" alt="npm package avatar">
      </div>
      <div text-3xl ml-5>
        {{ data.name }}
      </div >
    </div>
    <div>
      {{ data.readme }}
    </div>
  </div>
</template>
