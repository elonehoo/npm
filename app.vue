<script setup lang="ts">
useHead({
  title: 'npm',
  link: [
    {
      rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <NuxtLayout>
    <main font-sans text=" gray-700 dark:gray-200">
      <NavBar />
      <Search />
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<style>
html, body , #__nuxt{
  height: 100vh;
  margin: 0;
  padding: 0;
}

html.dark {
  background: #222222;
  color: #ffffff;
}
</style>
